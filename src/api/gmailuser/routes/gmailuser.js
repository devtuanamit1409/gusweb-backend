module.exports = {
  routes: [
    {
      method: "POST",
      path: "/send-email",
      handler: "gmailuser.submitForm",
      config: {
        policies: [],
        middlewares: [],
      },
    },
  ],
};
