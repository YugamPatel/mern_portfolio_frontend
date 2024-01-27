import { useState, useEffect } from "react";

const useSwipe = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [touchStart, setTouchStart] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    setSidebarVisible(windowWidth >= 635);
  }, [windowWidth]);

  const closeSidebar = () => {
    if (windowWidth < 635) {
      setSidebarVisible(false);
    }
  };

  const handleSwipeRight = (e) => {
    if (windowWidth < 635) {
      if (e.changedTouches[0].clientX < 50) {
        setSidebarVisible(true);
      }
    }
  };

  const toggleSidebar = (e) => {
    // If sidebar is not visible and the click event is not inside the sidebar, make it visible
    if (!sidebarVisible) {
      setSidebarVisible(true);
    }
  };

  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e) => {
    // e.preventDefault();
  };

  const handleTouchEnd = (e) => {
    const touchEnd = e.changedTouches[0].clientX;
    if (windowWidth < 635) {
      if (touchStart < 50 && touchEnd > touchStart + 30) {
        setSidebarVisible(true);
      } else if (touchEnd < touchStart - 30) {
        setSidebarVisible(false);
      }
    }
  };

  useEffect(() => {
    const sidebarElement = document.querySelector(".sideBar");
    sidebarElement.addEventListener("touchend", handleSwipeRight);

    document.body.addEventListener("touchend", (e) => {
      if (!sidebarElement.contains(e.target)) {
        closeSidebar();
      }
    });

    return () => {
      sidebarElement.removeEventListener("touchend", handleSwipeRight);
      document.body.removeEventListener("touchend", closeSidebar);
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
