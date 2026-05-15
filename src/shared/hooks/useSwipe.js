/*
 * useSwipe — Sidebar Visibility Hook
 *
 * Tracks whether the sidebar should be visible and handles all
 * touch/swipe gestures for showing and hiding it on mobile.
 *
 * Behaviour:
 *   - On screens ≥ 635 px the sidebar is always visible.
 *   - On smaller screens it is hidden by default; swipe right from
 *     the left edge (x < 50 px) to reveal it, swipe left to hide it.
 *   - Tapping anywhere outside the sidebar also closes it.
 *
 * Swipe threshold: 30 px of horizontal travel to register a swipe.
 */

import { useState, useEffect } from "react";

const SIDEBAR_BREAKPOINT = 635;
const SWIPE_THRESHOLD = 30;
const EDGE_ZONE = 50;

const useSwipe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  /* Keep windowWidth in sync with the browser viewport */
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  /* Auto-show/hide based on breakpoint when viewport changes */
  useEffect(() => {
    setSidebarVisible(windowWidth >= SIDEBAR_BREAKPOINT);
  }, [windowWidth]);

  const isMobile = () => windowWidth < SIDEBAR_BREAKPOINT;

  const closeSidebar = () => {
    if (isMobile()) setSidebarVisible(false);
  };

  /* Swipe-right from left edge to open */
  const handleSwipeRight = (e) => {
    if (isMobile() && e.changedTouches[0].clientX < EDGE_ZONE) {
      setSidebarVisible(true);
    }
  };

  /* Clicking the sidebar tab area when hidden will reveal it */
  const toggleSidebar = () => {
    if (!sidebarVisible) setSidebarVisible(true);
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = () => {
    /* Reserved for future scroll-lock behaviour */
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (!isMobile()) return;

    if (touchStart < EDGE_ZONE && touchEnd > touchStart + SWIPE_THRESHOLD) {
      setSidebarVisible(true);
    } else if (touchEnd < touchStart - SWIPE_THRESHOLD) {
      setSidebarVisible(false);
    }
  };

  /* Attach document-level listeners so tapping outside closes the sidebar */
  useEffect(() => {
    const sidebarElement = document.querySelector(".sideBar");
    if (!sidebarElement) return;

    sidebarElement.addEventListener("touchend", handleSwipeRight);

    const handleBodyTouch = (e) => {
      if (!sidebarElement.contains(e.target)) closeSidebar();
    };
    document.body.addEventListener("touchend", handleBodyTouch);

    return () => {
      sidebarElement.removeEventListener("touchend", handleSwipeRight);
      document.body.removeEventListener("touchend", handleBodyTouch);
    };
  }, [windowWidth]);

  return {
    sidebarVisible,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
    toggleSidebar,
  };
};

export default useSwipe;
