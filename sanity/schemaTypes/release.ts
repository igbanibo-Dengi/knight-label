// /sanity/lib/schemaTypes/release.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'release',
    title: 'Release',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'artist',
            title: 'Artist',
            type: 'reference',
            to: [{ type: 'artist' }],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'coverArt',
            title: 'Cover Art',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                }),
            ],
        }),
        defineField({
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'type',
            title: 'Release Type',
            type: 'string',
            options: {
                list: [
                    { title: 'Single', value: 'single' },
                    { title: 'EP', value: 'ep' },
                    { title: 'Album', value: 'album' },
                ],
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'tracks',
            title: 'Tracks',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'title',
                            title: 'Track Title',
                            type: 'string',
                        }),
                        defineField({
                            name: 'duration',
                            title: 'Duration',
                            type: 'string',
                            description: 'Format: MM:SS',
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'title',
            artist: 'artist.name',
            media: 'coverArt',
        },
        prepare({ title, artist, media }) {
            return {
                title,
                subtitle: artist,
                media,
            }
        },
    },
})