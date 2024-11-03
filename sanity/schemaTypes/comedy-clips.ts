import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'comedyClip',
    title: 'Comedy Clip',
    type: 'document',
    fields: [
        // Title of the comedy clip
        defineField({
            name: 'title',
            title: 'Title',
            type: 'string',
            validation: Rule => Rule.required().min(5).max(100),
        }),

        // Video file upload
        defineField({
            name: 'videoFile',
            title: 'Video File',
            type: 'file',
            options: {
                accept: 'video/*',
            },
            validation: Rule => Rule.required().error('Video file is required'),
            description: 'Upload the actual video file for the comedy clip',
        }),

        // Thumbnail image
        defineField({
            name: 'thumbnail',
            title: 'Thumbnail',
            type: 'image',
            options: {
                hotspot: true,
            },
            validation: Rule => Rule.required().error('Thumbnail image is required'),
            description: 'Thumbnail image representing the comedy clip',
        }),

        // Social media URLs where the clip is posted (e.g., Instagram, YouTube)
        defineField({
            name: 'socialMediaUrls',
            title: 'Social Media URLs',
            type: 'array',
            of: [
                defineField({
                    name: 'socialMediaUrl',
                    type: 'object',
                    title: 'Social Media URL',
                    fields: [
                        {
                            name: 'platform',
                            title: 'Platform',
                            type: 'string',
                            options: {
                                list: [
                                    { title: 'Instagram', value: 'instagram' },
                                    { title: 'YouTube', value: 'youtube' },
                                    { title: 'Twitter', value: 'twitter' },
                                    { title: 'Facebook', value: 'facebook' },
                                    { title: 'TikTok', value: 'tiktok' },
                                    { title: 'Other', value: 'other' },
                                ],
                            },
                            validation: Rule => Rule.required(),
                        },
                        {
                            name: 'url',
                            title: 'URL',
                            type: 'url',
                            validation: Rule => Rule.required().uri({ allowRelative: false, scheme: ['http', 'https'] }),
                        },
                    ],
                }),
            ],
            validation: Rule => Rule.min(1).error('At least one social media URL is required'),
            description: 'Links to where the clip is posted on different social media platforms',
        }),

        // Timestamp or date of release or posting
        defineField({
            name: 'releaseDate',
            title: 'Release Date',
            type: 'datetime',
            validation: Rule => Rule.required(),
            description: 'Date and time when the clip was first posted or released',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            media: 'thumbnail',
        },
    },
})
