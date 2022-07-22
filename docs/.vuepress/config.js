module.exports = {
  base: "/element-ui-wrapper/",
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
