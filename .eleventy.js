// docs: https://www.11ty.io/docs/config/

module.exports = function(eleventyConfig) {
    eleventyConfig.addPassthroughCopy('src/css');
    eleventyConfig.addPassthroughCopy('src/js');
    eleventyConfig.addPassthroughCopy('src/assets');

    return {
        dir: {
            input: "src",
            output: "dist",
            passthroughFileCopy: true
        }
    };
};