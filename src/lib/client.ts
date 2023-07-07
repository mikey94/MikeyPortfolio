import { createClient } from '@sanity/client';

export const client = createClient({
    projectId: 'f7v9c7hs',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2023-05-03'
})

