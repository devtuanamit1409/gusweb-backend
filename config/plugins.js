module.exports = ({ env }) => ({
  slugify: {
    enabled: true,
    config: {
      contentTypes: {
        article: {
          field: "slug",
          references: "title",
        },
        "sub-category": {
          field: "slug",
          references: "title",
        },
      },
    },
  },
});
