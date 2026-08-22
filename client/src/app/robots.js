export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: [
        "/admin/",
        "/dashboard/",
        "/invoice/",
        "/login/",
      ],
    },
    sitemap: "https://vrbwebdesignanddev.com/sitemap.xml",
  };
}