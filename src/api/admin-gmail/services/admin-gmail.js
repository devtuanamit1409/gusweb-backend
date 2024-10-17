'use strict';

/**
 * admin-gmail service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::admin-gmail.admin-gmail');
