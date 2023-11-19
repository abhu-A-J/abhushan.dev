import { seoMetaDataSchema } from '@schema/seo-meta';
import { defineCollection, z } from 'astro:content';

const blogSchema = z.object({
	seoMetaData: seoMetaDataSchema,
	title: z.string(),
	publishedDate: z.date(),
	inProgress: z.boolean().optional().default(false)
});

const blogCollection = defineCollection({
	type: 'content',
	schema: blogSchema
});

export const collections = {
	blog: blogCollection
};
