"use client";
import React, { useState, useEffect } from "react";
import styles from "./CSSocialMediaPosts.module.css";
import Image from "next/image";

const CSSocialMediaPosts = ({ posts = [] }) => {
  const [active, setActive] = useState(null);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setActive(null);
    };

    if (active) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKey);
    }

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [active]);

  const formatMonth = (date) => {
    if (!date) return "";

    const d = new Date(date);

    if (Number.isNaN(d.getTime())) {
      return "";
    }

    return d.toLocaleString(undefined, {
      month: "short",
      year: "numeric",
    });
  };

  const openPost = (post) => {
    setActive(post);
  };

  const handleTileKeyDown = (e, post) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      openPost(post);
    }
  };

  return (
    <>
      <section
        className={styles.gallery}
        aria-label="Social media post gallery"
      >
        {posts.map((post, index) => (
          <article
            key={post.id}
            className={`${styles.post} ${styles[`post${(index % 8) + 1}`]}`}
            onClick={() => openPost(post)}
            onKeyDown={(e) => handleTileKeyDown(e, post)}
            role="button"
            tabIndex={0}
            aria-label={`View ${post.title || "social media post"}`}
          >
            {post.image && (
              <div className={styles.imageWrap}>
                <Image
                  src={post.image}
                  alt={post.title || "Social media post"}
                  loading="lazy"
                  height={300}
                  width={300}
                />
              </div>
            )}

            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
                <span className={styles.index}>
                  {String(index + 1).padStart(2, "0")}
                </span>

                <div className={styles.meta}>
                  <h3 className={styles.title}>{post.title}</h3>

                  {post.date && (
                    <time className={styles.month}>
                      {formatMonth(post.date)}
                    </time>
                  )}
                </div>
              </div>

              <span className={styles.viewLabel}>View post</span>
            </div>
          </article>
        ))}
      </section>

      {active && (
        <div
          className={styles.modalOverlay}
          role="dialog"
          aria-modal="true"
          aria-labelledby="social-post-modal-title"
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setActive(null);
            }
          }}
        >
          <div className={styles.modal}>
            <button
              type="button"
              className={styles.closeButton}
              onClick={() => setActive(null)}
              aria-label="Close post details"
            >
              <span aria-hidden="true">×</span>
            </button>

            {active.image && (
              <div className={styles.modalImage}>
                <Image
                  src={active.image}
                  alt={active.title || "Social media post"}
                  width={800}
                  height={600}
                />
              </div>
            )}

            <div className={styles.modalContent}>
              <div className={styles.modalEyebrow}>Social Media</div>

              <div className={styles.modalHeader}>
                <h2 id="social-post-modal-title" className={styles.modalTitle}>
                  {active.title}
                </h2>

                {active.date && (
                  <time className={styles.modalMonth}>
                    {formatMonth(active.date)}
                  </time>
                )}
              </div>

              {active.description && (
                <p className={styles.modalDescription}>{active.description}</p>
              )}

              {(active.objective || active.highlight) && (
                <div className={styles.modalDetails}>
                  {active.objective && (
                    <div className={styles.detailBlock}>
                      <span className={styles.detailLabel}>Objective</span>
                      <p>{active.objective}</p>
                    </div>
                  )}

                  {active.highlight && (
                    <div className={styles.detailBlock}>
                      <span className={styles.detailLabel}>Highlight</span>
                      <p>{active.highlight}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CSSocialMediaPosts;
