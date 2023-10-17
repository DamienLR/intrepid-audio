/**
 * release controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::release.release",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query("api::release.release").findOne({
        where: { slug: id },
        populate: ["artists", "coverArt"],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
