import { defineField, defineType } from 'sanity'

export default defineType({
    name: 'artist',
    title: 'Artist',
    type: 'document',
    fields: [
        defineField({
            name: 'name',
            title: 'Name',
            type: 'string',
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'name',
                maxLength: 96,
            },
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'image',
            title: 'Artist Image',
            type: 'image',
            options: {
                hotspot: true,
            },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alternative Text',
                    validation: (Rule) => Rule.required(), // Required for accessibility
                }),
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'bio',
            title: 'Biography',
            type: 'array',
            of: [
                {
                    type: 'block',
                    styles: [
                        { title: 'Normal', value: 'normal' },
                        { title: 'H2', value: 'h2' },
                        { title: 'H3', value: 'h3' },
                    ],
                    marks: {
                        decorators: [
                            { title: 'Strong', value: 'strong' },
                            { title: 'Emphasis', value: 'em' },
                        ],
                    },
                },
            ],
            validation: (Rule) => Rule.required(),
        }),
        defineField({
            name: 'socialLinks',
            title: 'Social Links',
            type: 'array',
            of: [
                {
                    type: 'object',
                    fields: [
                        defineField({
                            name: 'platform',
                            type: 'string',
                            title: 'Platform Name',
                            validation: (Rule) => Rule.required(),
                        }),
                        defineField({
                            name: 'url',
                            type: 'url',
                            title: 'Platform URL',
                            validation: (Rule) => Rule.required(),
                        }),
                    ],
                },
            ],
        }),
    ],
    preview: {
        select: {
            title: 'name',
            media: 'image',
        },
    },
})
