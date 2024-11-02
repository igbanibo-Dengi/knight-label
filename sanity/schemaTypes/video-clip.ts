// /sanity/lib/schemaTypes/video-clip.ts
import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'videoClip',
    title: 'Video Clip',
    type: 'document',
    fields: [
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
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
            name: 'releaseDate',
            title: 'Release Date',
            type: 'date',
        }),
        defineField({
            name: 'video',
            title: 'Video File',
            type: 'file',
            options: {
                accept: 'video/*',
            },
        }),
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
        }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'text',
            rows: 3,
        }),
        defineField({
            name: 'youtubeUrl',
            title: 'YouTube URL',
            type: 'url',
            description: 'If the video is hosted on YouTube',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            artist: 'artist.name',
            media: 'thumbnail',
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