/**
 * artist controller
 */

import { factories } from "@strapi/strapi";

export default factories.createCoreController(
  "api::artist.artist",
  ({ strapi }) => ({
    async findOne(ctx) {
      const { id } = ctx.params;
      const entity = await strapi.db.query("api::artist.artist").findOne({
        where: { slug: id },
        populate: ["releases", "portrait"],
      });
      const sanitizedEntity = await this.sanitizeOutput(entity, ctx);

      return this.transformResponse(sanitizedEntity);
    },
  })
);
