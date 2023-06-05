export default {
  name: 'post',
  title: 'Blog post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'publishedAt',
      title: 'Published at',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    },
    {
      name: 'coverImage',
      title: 'Images',
      type: 'image',
    },
    {
      name: 'tag',
      title: 'Tag',
      type: 'reference',
      to: {type: 'tag'},
    },
  ],
}
