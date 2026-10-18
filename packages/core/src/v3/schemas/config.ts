import { z } from "zod/v4";

export const ConfigManifest = z.object({
  project: z.string(),
  dirs: z.string().array(),
  /** Path of the extra CA file inside the image, used for NODE_EXTRA_CA_CERTS */
  extraCACerts: z.string().optional(),
});

export type ConfigManifest = z.infer<typeof ConfigManifest>;
