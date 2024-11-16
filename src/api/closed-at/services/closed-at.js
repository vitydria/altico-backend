'use strict';

/**
 * closed-at service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::closed-at.closed-at');
