module.exports = {
  title: "Hello VuePress",
  description: "Just playing around",
  plugins: [
    [
      "@vuepress/register-components",
      {
        componentsDir: "src/components",
      },
    ],
  ],
};
