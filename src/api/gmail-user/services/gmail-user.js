'use strict';

/**
 * gmail-user service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::gmail-user.gmail-user');
