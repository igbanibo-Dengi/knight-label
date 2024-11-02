import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET!,
    apiVersion: '2024-01-11', // use current date
    useCdn: false, // set to `false` to bypass the edge cache
})