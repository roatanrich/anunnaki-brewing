import { object, string, TypeOf } from "zod"

/**
 * @openapi
 * components:
 *   schema:
 *     Hop:
 *       type: object
 *       required:
 *        - name
 *        - use
 *        - origin
 *        - substitutes
 *        - aromas
 *       properties:
 *         name:
 *           type: string
 *         use:
 *           type: string
 *         origin:
 *           type: string
 *         substitutes:
 *           type: string
 *         aromas:
 *           type: string
 */
export const createHopSchema = object({
  body: object({
    name: string({
      required_error: "Name is required",
    }),
    use: string({
      required_error: "Use is required",
    }),
    origin: string({
      required_error: "Origin is required",
    }),
    substitutes: string({
      required_error: "Substitutes is required",
    }),
    aromas: string({
      required_error: "Aromas is required",
    }),
  })
});

export type CreateHopInput = Omit<
  TypeOf<typeof createHopSchema>,
  "body.passwordConfirmation"
>;