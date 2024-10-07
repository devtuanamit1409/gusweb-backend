"use strict";

/**
 * category controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::category.category",
  ({ strapi }) => ({
    async findOne(ctx) {
      ctx.query = {
        ...ctx.query,
        populate: {
          sub_categories: {
            populate: "articles",
          },
        },
      };

      const { data, meta } = await super.findOne(ctx);

      if (data.attributes && data.attributes.sub_categories) {
        data.attributes.sub_categories.data.forEach((subCategory) => {
          if (subCategory.attributes && subCategory.attributes.articles) {
            subCategory.attributes.articleCount =
              subCategory.attributes.articles.data.length;
            //xoa mang articles vi chi can lay so luong bai viet thoi
            delete subCategory.attributes.articles;
          }
        });
      }

      return { data, meta };
    },
  })
);
