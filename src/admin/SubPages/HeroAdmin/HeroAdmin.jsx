// src/admin/SubPages/HeroAdmin/HeroAdmin.jsx
import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import client from "../../../api/apiClient";
import {
  getHeroData,
  updateHeroData,
} from "../../../redux/actions/heroActions";
import Spinner from "../../../components/Spinner/Spinner";
import ProfileImage from "../../../components/ProfileImage/ProfileImage";
import "./HeroAdmin.css";
const HeroAdmin = () => {
  const dispatch = useDispatch();
  const { heroData, loading, error, message } = useSelector((s) => s.hero);

  // ─── Flattened state for each piece ─────────────────────────────
  const [intro, setIntro] = useState("");
  const [name, setName] = useState("");
  const [subTitle, setSubTitle] = useState("");

  const [socialLinks, setSocialLinks] = useState([]); // array of { name, url, iconClass }

  const [profileImgUrl, setProfileImgUrl] = useState("");
  const [profileImgId, setProfileImgId] = useState("");
  const [profileTransform, setProfileTransform] = useState("");
  const [profileObjectPosition, setProfileObjectPosition] = useState("");
  const [profileTransformPreview, setProfileTransformPreview] = useState("");
  const [profileObjectPositionPreview, setProfileObjectPositionPreview] =
    useState("");

  const fileInputRef = useRef();

  const [heroIsRandom, setHeroIsRandom] = useState(true);
  const [heroImg, setHeroImg] = useState("");

  const [typewriter, setTypewriter] = useState([]); // array of strings

  const [buttonText, setButtonText] = useState("");
  const [buttonUrl, setButtonUrl] = useState("");

  const previewStyle = {
    transform: profileTransformPreview,
    objectPosition: profileObjectPositionPreview,
  };

  // ─── Load existing data on mount ────────────────────────────────
  useEffect(() => {
    dispatch(getHeroData());
  }, [dispatch]);

  // ─── When heroData updates, seed each piece of state ───────────
  useEffect(() => {
    if (!heroData) return;

    // Hero Title
    setIntro(heroData.heroTitle?.intro || "");
    setName(heroData.heroTitle?.name || "");

    // Subtitle
    setSubTitle(heroData.heroSubTitle?.subTitle || "");

    // Social Links
    setSocialLinks(heroData.socialLinks || []);

    // Profile Image & Style
    setProfileImgUrl(heroData.profileImage?.img?.url || "");
    setProfileImgId(heroData.profileImage?.img?.public_id || "");
    setProfileTransform(heroData.profileImage?.style?.transform || "");
    setProfileObjectPosition(
      heroData.profileImage?.style?.objectPosition || ""
    );
    setProfileTransformPreview(profileTransform);
    setProfileObjectPositionPreview(profileObjectPosition);

    // Hero Background
    setHeroIsRandom(heroData.heroImage?.isRandom ?? true);
    setHeroImg(heroData.heroImage?.img || "");

    // Typewriter
    setTypewriter(heroData.typewriter || []);

    // Button
    setButtonText(heroData.button?.name || "");
    setButtonUrl(heroData.button?.url || "");
  }, [heroData]);

  // ─── Social Links handlers ───────────────────────────────────────
  const addSocial = () =>
    setSocialLinks((prev) => [...prev, { name: "", url: "", iconClass: "" }]);

  const updateSocial = (idx, field, val) => {
    setSocialLinks((prev) => {
      const copy = [...prev];
      copy[idx] = { ...copy[idx], [field]: val };
      return copy;
    });
  };

  const removeSocial = (idx) =>
    setSocialLinks((prev) => prev.filter((_, i) => i !== idx));

  // ─── Typewriter handlers ────────────────────────────────────────
  const addType = () => setTypewriter((prev) => [...prev, ""]);

  const updateType = (idx, val) => {
    setTypewriter((prev) => {
      const copy = [...prev];
      copy[idx] = val;
      return copy;
    });
  };

  const removeType = (idx) =>
    setTypewriter((prev) => prev.filter((_, i) => i !== idx));

  // ─── File upload handlers ───────────────────────────────────────
  const openFileDialog = () => fileInputRef.current?.click();

  const handleProfileImageSelect = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const fd = new FormData();
    fd.append("image", file);
    console.log(
      "🚀 Uploading to:",
      client.defaults.baseURL + "/api/upload/profile"
    );
    try {
      const { data } = await client.post("api/upload/profile", fd, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (data.success) {
        setProfileImgUrl(data.output.url);
        setProfileImgId(data.output.public_id);
      } else {
        console.error("Upload error:", data.message);
      }
    } catch (err) {
      // log everything about the Axios error
      console.error("Upload failed message:", err.message);
      if (err.response) {
        console.error("Upload failed status:", err.response.status);
        console.error("Upload failed response data:", err.response.data);
      } else if (err.request) {
        console.error("No response received, request was:", err.request);
      } else {
        console.error("Axios config error:", err.config);
      }
    }
  };

  // ─── On submit, assemble nested form object ─────────────────────
  const handleSubmit = (e) => {
    e.preventDefault();
    const payload = {
      heroTitle: { intro, name },
      heroSubTitle: { subTitle },
      socialLinks,
      profileImage: {
        img: {
          public_id: profileImgId,
          url: profileImgUrl,
        },
        style: {
          transform: profileTransform,
          objectPosition: profileObjectPosition,
        },
      },
      heroImage: { isRandom: heroIsRandom, img: heroImg },
      typewriter,
      button: { name: buttonText, url: buttonUrl },
    };
    dispatch(updateHeroData(payload));
  };

  if (loading) return <Spinner />;

  return (
    <div className="hero-admin">
      <h2 className="hero-admin-title">Update Hero Section</h2>
      {error && <p className="error">{error}</p>}
      {message && <p className="success">{message}</p>}
      <div className="hero-admin-container">
        <form onSubmit={handleSubmit}>
          {/* Hero Title */}

          <div className="hero-admin-flex">
            <div className="flex-left-column">
              <section className="section-hero-title">
                <label>
                  <span>Intro</span>
                  <input
                    value={intro}
                    onChange={(e) => setIntro(e.target.value)}
                  />
                </label>
                <label>
                  <span>Name</span>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </label>
              </section>

              {/* Hero SubTitle & Social Links */}
              <section className="section-hero-subtitle">
                <label>
                  <span>SubTitle</span>
                  <input
                    value={subTitle}
                    onChange={(e) => setSubTitle(e.target.value)}
                  />
                </label>
                <div className="social-links">
                  <div className="social-links-span">Social Links</div>
                  {socialLinks.map((link, i) => (
                    <div key={i} className="social-inputs">
                      {link.iconClass ? (
                        <i className={link.iconClass}></i>
                      ) : (
                        <i className="fa-solid fa-link"></i>
                      )}
                      <input
                        placeholder="Name"
                        value={link.name}
                        onChange={(e) =>
                          updateSocial(i, "name", e.target.value)
                        }
                      />
                      <input
                        placeholder="URL"
                        value={link.url}
                        onChange={(e) => updateSocial(i, "url", e.target.value)}
                      />
                      <input
                        placeholder="Icon Class"
                        value={link.iconClass}
                        onChange={(e) =>
                          updateSocial(i, "iconClass", e.target.value)
                        }
                      />
                      <button
                        type="button"
                        onClick={() => removeSocial(i)}
                        className="delete-btn"
                      >
                        Delete
                      </button>
                    </div>
                  ))}
                  <button type="button" onClick={addSocial} className="add-btn">
                    + Add Social
                  </button>
                </div>
              </section>

              {/* Typewriter Lines */}
              <section className="section-typewriter">
                <span>Typewriter Text</span>
                {typewriter.map((line, i) => (
                  <div key={i} className="typewriter-row">
                    <input
                      key={i}
                      value={line}
                      onChange={(e) => updateType(i, e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={() => removeType(i)}
                      className="delete-btn"
                    >
                      Delete
                    </button>
                  </div>
                ))}
                <button type="button" onClick={addType} className="add-btn">
                  + Add Line
                </button>
              </section>

              {/* Call-to-Action Button */}
              <section className="section-button">
                <label>
                  <span>Button Text</span>
                  <input
                    value={buttonText}
                    onChange={(e) => setButtonText(e.target.value)}
                  />
                </label>
                <label>
                  <span>Button URL</span>
                  <input
                    value={buttonUrl}
                    onChange={(e) => setButtonUrl(e.target.value)}
                  />
                </label>
              </section>
            </div>

            <div className="flex-right-column">
              {/* Profile Image & Style */}
              <section className="section-profile-image">
                <span>Profile Image</span>
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef}
                  style={{ display: "none" }}
                  onChange={handleProfileImageSelect}
                />
                <div className="profile-preview-container">
                  <div className="profile-preview-left">
                    <div className="profile-preview">
                      <ProfileImage
                        src={profileImgUrl}
                        styleOverrides={previewStyle}
                      ></ProfileImage>
                    </div>
                    {/* profile-preview */}
                  </div>
                  {/* profile-preview-left */}
                  <div className="profile-preview-right">
                    <label>
                      Transform
                      <input
                        value={profileTransform}
                        onChange={(e) => {
                          setProfileTransform(e.target.value);
                          setProfileTransformPreview(e.target.value);
                        }}
                      />
                    </label>
                    <label>
                      Object Position
                      <input
                        value={profileObjectPosition}
                        onChange={(e) => {
                          setProfileObjectPosition(e.target.value);
                          setProfileObjectPositionPreview(e.target.value);
                        }}
                      />
                    </label>
                    <button
                      type="button"
                      className="edit-photo-btn"
                      onClick={openFileDialog}
                    >
                      Edit Photo
                    </button>
                  </div>
                  {/* profile-preview-right */}
                </div>
                {/* profile-preview-container */}
              </section>

              {/* Hero Background Image */}
              <section className="section-hero-image">
                <div className="hero-checkbox">
                  <label className="checkbox-label">
                    <input
                      type="checkbox"
                      className="hero-checkbox-input"
                      checked={heroIsRandom}
                      onChange={(e) => setHeroIsRandom(e.target.checked)}
                    />
                    <span>Use Random Image</span>
                  </label>
                </div>

                {!heroIsRandom && (
                  <div className="hero-image-edit">
                    <div className="hero-image">
                      <img
                        src={heroImg}
                        alt="Hero bg"
                        className="hero-preview"
                      />
                    </div>
                    <div className="hero-image-edit">
                      <button type="button" className="edit-photo-btn">
                        <span>Edit Photo</span>
                      </button>
                      <label>
                        <span>URL</span>
                        <input
                          value={heroImg}
                          onChange={(e) => setHeroImg(e.target.value)}
                        />
                      </label>
                    </div>
                  </div>
                )}
              </section>
            </div>
          </div>
          {/*hero-admin-flex */}
          <button type="submit" className="save-btn">
            Save Changes
          </button>
        </form>
      </div>
      {/* hero-admin-container */}
    </div> /* hero-admin */
  );
};

export default HeroAdmin;
