export default {
  name: 'vision_page',
  label: 'vision page',
  folder: 'resources/content/vision',
  create: false,
  delete: false,
  fields: [
    {
      label: 'Title',
      name: 'title',
      widget: 'string'
    },
    {
      name: 'content',
      label: 'vision page content',
      widget: 'object',
      fields: [
        {
          name: 'default_content',
          label: 'Default content',
          widget: 'string'
        }
      ]
    }
  ]
}
