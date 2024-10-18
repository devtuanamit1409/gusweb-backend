module.exports = {
  async afterCreate(event) {
    const { result } = event;
    const { id, locale } = result;

    if (locale === "ko" && result.slug === "") {
      if (result.localizations && result.localizations.length > 0) {
        const viArticle = result.localizations.find(
          (art) => art.locale === "vi"
        );
        const englishArticle = result.localizations.find(
          (art) => art.locale === "en"
        );

        if (englishArticle || viArticle) {
          await strapi.entityService.update("api::article.article", id, {
            data: {
              slug: `${englishArticle?.slug || viArticle?.slug}-${id}`,
            },
          });
        }
      } else {
        await strapi.entityService.update("api::article.article", id, {
          data: {
            slug: `gisa-id-${id}`,
          },
        });
      }
    }
  },

  async afterUpdate(event) {
    const { result } = event;
    const { id, locale } = result;

    if (locale === "ko" && (result.slug === null || result.slug === "")) {
      if (result.localizations && result.localizations.length > 0) {
        const viArticle = result.localizations.find(
          (art) => art.locale === "vi"
        );
        const englishArticle = result.localizations.find(
          (art) => art.locale === "en"
        );

        if (englishArticle || viArticle) {
          await strapi.entityService.update("api::article.article", id, {
            data: {
              slug: `${englishArticle?.slug || viArticle?.slug}-${id}`,
            },
          });
        }
      }
    }
  },
};
