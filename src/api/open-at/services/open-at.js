'use strict';

/**
 * open-at service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::open-at.open-at');
