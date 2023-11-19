import { z } from 'astro:content';

export const seoMetaDataSchema = z.object({
	title: z.string(),
	description: z.string(),
	ogImage: z.string(),
	ogImageAlt: z.string(),
	robots: z.enum(['index, follow', 'noindex, follow', 'noindex, nofollow']).optional()
});

export type SeoMetaData = z.infer<typeof seoMetaDataSchema>;
