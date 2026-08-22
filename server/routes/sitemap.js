const router = require("express").Router();

router.get("/", async (req, res) => {
  try {

    res.status(200).json({
      success: true,
      urls: getSitemapUrls(),
    });
  } catch (error) {
    console.error("Sitemap error:", error);

    res.status(500).json({
      success: false,
      message: "Unable to generate sitemap data",
    });
  }
});

module.exports = router;
