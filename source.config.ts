import { defineDocs, defineConfig, frontmatterSchema, metaSchema } from 'fumadocs-mdx/config';

export const docs = defineDocs({
    dir: 'content/docs',
    docs: {
        schema: frontmatterSchema,
        postprocess: {
            includeProcessedMarkdown: true,
        },
    },
    meta: {
        schema: metaSchema,
    }
});

export default defineConfig();