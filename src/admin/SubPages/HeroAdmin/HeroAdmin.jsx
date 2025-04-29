// src/admin/Hero/HeroAdmin.jsx
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getHeroData,
  updateHeroData,
} from "../../../redux/actions/heroActions.js";
import Spinner from "../../../components/Spinner/Spinner.jsx";
import "./HeroAdmin.css";

const HeroAdmin = () => {
  const dispatch = useDispatch();
  const {
    heroData: hero,
    loading,
    error,
    message, // success message after update
  } = useSelector((state) => state.hero);

  // ─── Flattened form state ────────────────────────────────────────
  const [intro, setIntro] = useState("");
  const [name, setName] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");

  // ─── 1) Fetch current hero on mount ─────────────────────────────
  useEffect(() => {
    dispatch(getHeroData());
  }, [dispatch]);

  // ─── 2) When hero loads, populate each piece of state ────────────
  useEffect(() => {
    if (hero.heroTitle) {
      setIntro(hero.heroTitle.intro || "");
      setName(hero.heroTitle.name || "");
    }
    if (hero.heroSubTitle) {
      setSubtitle(hero.heroSubTitle.subTitle || "");
    }
    if (hero.button) {
      setButtonText(hero.button.name || "");
      setButtonUrl(hero.button.url || "");
    }
  }, [hero]);

  // ─── 3) Submit handler assembles nested object ─────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      updateHeroData({
        heroTitle: { intro, name },
        heroSubTitle: { subTitle: subtitle },
        button: { name: buttonText, url: buttonUrl },
      })
    );
  };

  if (loading) return <Spinner />;

  return (
    <div className="hero-admin">
      <h2>Edit Hero Section</h2>

      {/* Show fetch or update errors */}
      {error && <p className="error">{error}</p>}

      {/* Show success message after update */}
      {message && <p className="success">{message}</p>}

      <form onSubmit={handleSubmit}>
        <label>
          Intro
          <input
            type="text"
            value={intro}
            onChange={(e) => setIntro(e.target.value)}
          />
        </label>

        <label>
          Name
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>

        <label>
          Subtitle
          <input
            type="text"
            value={subtitle}
            onChange={(e) => setSubtitle(e.target.value)}
          />
        </label>

        <label>
          Button Text
          <input
            type="text"
            value={buttonText}
            onChange={(e) => setButtonText(e.target.value)}
          />
        </label>

        <label>
          Button URL
          <input
            type="text"
            value={buttonUrl}
            onChange={(e) => setButtonUrl(e.target.value)}
          />
        </label>

        <button type="submit">Save Hero</button>
      </form>
    </div>
  );
};

export default HeroAdmin;
