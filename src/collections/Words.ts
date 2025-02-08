import type { CollectionConfig } from 'payload'

export const Words: CollectionConfig = {
  slug: 'words',
  admin: {
    useAsTitle: 'title',
  },
  access: {
    read: () => true,
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'slug',
      type: 'text',
      hooks: {
        beforeValidate: [
          ({ data }) => {
            if (data?.title) {
              return data.title.toLowerCase().replace(/\s+/g, '-')
            }
            return ''
          },
        ],
      },
      required: true,
      unique: true,
    },
    {
      name: 'music',
      type: 'group',
      fields: [
        {
          name: 'title',
          type: 'text',
          required: true,
        },
        {
          name: 'audio',
          type: 'upload',
          relationTo: 'media',
          required: true,
          filterOptions: {
            mimeType: { contains: 'audio' },
          },
        },
        {
          name: 'image',
          type: 'upload',
          relationTo: 'media',
          required: true,
          filterOptions: {
            mimeType: { contains: 'image' },
          },
        },
      ],
    },
    {
      name: 'pages',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'front',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              filterOptions: {
                mimeType: { contains: 'image' },
              },
            },
            {
              name: 'content',
              type: 'text',
            },
            {
              name: 'textColor',
              type: 'text',
              required: true,
              defaultValue: '#000000',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              required: true,
              defaultValue: '#FFFFFF',
            },
            {
              name: 'decorations',
              type: 'array',
              fields: [
                {
                  name: 'image',
                  type: 'upload',
                  relationTo: 'media',
                  required: true,
                  filterOptions: {
                    mimeType: { contains: 'image' },
                  },
                },
                {
                  name: 'style',
                  type: 'group',
                  fields: [
                    {
                      name: 'top',
                      type: 'text',
                    },
                    {
                      name: 'bottom',
                      type: 'text',
                    },
                    {
                      name: 'left',
                      type: 'text',
                    },
                    {
                      name: 'right',
                      type: 'text',
                    },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: 'back',
          type: 'group',
          fields: [
            {
              name: 'title',
              type: 'text',
            },
            {
              name: 'image',
              type: 'upload',
              relationTo: 'media',
              filterOptions: {
                mimeType: { contains: 'image' },
              },
            },
            {
              name: 'content',
              type: 'text',
            },
            {
              name: 'textColor',
              type: 'text',
              required: true,
              defaultValue: '#000000',
            },
            {
              name: 'backgroundColor',
              type: 'text',
              required: true,
              defaultValue: '#FFFFFF',
            },
          ],
        },
      ],
    },
  ],
}
