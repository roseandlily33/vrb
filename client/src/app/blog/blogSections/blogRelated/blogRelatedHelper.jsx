export const getCategoryName = (category) => {
  if (typeof category === "string") return category;
  return category?.name || "";
};

const normalizeCategory = (category) =>
  getCategoryName(category).toLowerCase().trim();

export const getCategoryRouteSegment = (category) => {
  const normalized = normalizeCategory(category);

  if (normalized === "website redesign") return "website-redesign";
  if (normalized === "web design & strategy") return "web-design";
  if (normalized === "ux/ui & development") return "ux-ui-development";
  if (normalized === "ux & ui development") return "ux-ui-development";
  if (normalized === "seo") return "seo";
  if (normalized === "social media") return "social-media";
  if (normalized === "website maintenance") return "website-maintenance";

  if (typeof category === "object" && category?.slug) {
    return String(category.slug).toLowerCase().trim();
  }

  return "";
};

export const buildBlogPostPath = (post) => {
  const routeSegment = getCategoryRouteSegment(post?.category);
  if (!routeSegment) return `/blog/${post.slug}`;
  return `/blog/${routeSegment}/${post.slug}`;
};

export const resolveRelatedSourcePost = (postOrTitle, allPosts) => {
  if (!postOrTitle) return null;

  if (typeof postOrTitle === "object") {
    return postOrTitle;
  }

  if (typeof postOrTitle === "string") {
    return (
      allPosts.find((post) => post.title === postOrTitle) ||
      allPosts.find((post) => post.slug === postOrTitle) ||
      null
    );
  }

  return null;
};

export const getRelatedPosts = (currentPost, allPosts, limit = 4) => {
  if (!currentPost) {
    return allPosts.slice(0, limit);
  }

  const currentIndex = allPosts.findIndex(
    (post) => post.slug === currentPost.slug
  );

  const manuallyRelated = currentPost.related
    ? currentPost.related
        .map((slug) => allPosts.find((post) => post.slug === slug))
        .filter(Boolean)
    : [];

  const manualSlugs = new Set(
    manuallyRelated.map((post) => post.slug)
  );

  const sameCategory = allPosts.filter(
    (post) =>
      post.slug !== currentPost.slug &&
      normalizeCategory(post.category) ===
        normalizeCategory(currentPost.category) &&
      !manualSlugs.has(post.slug)
  );

  const nearbyPosts = [
    ...allPosts.slice(currentIndex + 1),
    ...allPosts.slice(0, currentIndex),
  ].filter(
    (post) =>
      post.slug !== currentPost.slug &&
      !manualSlugs.has(post.slug)
  );

  const fallback = [
    ...sameCategory,
    ...nearbyPosts,
  ];

  const uniqueFallback = fallback.filter(
    (post, index, array) =>
      array.findIndex((item) => item.slug === post.slug) === index
  );

  return [
    ...manuallyRelated,
    ...uniqueFallback,
  ].slice(0, limit);
};