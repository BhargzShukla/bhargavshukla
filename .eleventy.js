const cleanCss = require("clean-css");
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
  // Enable data deep merging (for global tags)
  eleventyConfig.setDataDeepMerge(true);

  // Watch targets
  eleventyConfig.addWatchTarget("css/");

  // Add a latest posts collection
  eleventyConfig.addCollection("latestPosts", function (collectionApi) {
    return collectionApi
      .getFilteredByTag("post")
      .slice(2)
      .sort(function (itemA, itemB) {
        return itemA.date - itemB.date;
      });
  });

  eleventyConfig.addPassthroughCopy("css");

  eleventyConfig.addPlugin(eleventyNavigationPlugin);
};
