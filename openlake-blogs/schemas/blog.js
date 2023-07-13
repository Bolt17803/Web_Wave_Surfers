export default{
    name:'blog',
    type:'document',
    title:'blog',
    fields:[
        {
            name:'title',
            type:'string',
            title:'Title'
        },
        {
            title: 'Slug',
            name: 'slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 200, // will be ignored if slugify is set
              slugify: input => input
                                   .toLowerCase()
                                   .replace(/\s+/g, '-')
                                   .slice(0, 200)
            }
          },
        {
            name: 'content',
            title: 'Content',
            type: 'array',
            of: [
              {
                type: 'block'
              },
              {
                type: 'image',
                fields: [
                  {
                    type: 'text',
                    name: 'alt',
                    title: 'Alternative text',
                    description: `Some of your visitors cannot see images, 
                      be they blind, color-blind, low-sighted; 
                      alternative text is of great help for those 
                      people that can rely on it to have a good idea of 
                      what\'s on your page.`,
                    options: {
                      isHighlighted: true
                    }
                  }
                ]
              }
            ]
          },
          {
            name: 'metadesc',
            type: 'string',
            title: 'Meta Description'
        },
          {
            title: 'Blog Image',
            name: 'blogimage',
            type: 'image',
            options: {
              hotspot: true 
            },
            fields: [
              {
                name: 'caption',
                type: 'string',
                title: 'Caption',
                options: {
                  isHighlighted: true 
                }
              },
              {
                // Editing this field will be hidden behind an "Edit"-button
                name: 'attribution',
                type: 'string',
                title: 'Attribution',
              }
            ]
          },
        {
            name:'launchedAt',
            type:'datetime',
            title:'Created At'
        },
        {
            name: 'author',
            type: 'object',
            fields: [
              {
                title: 'Author',
                name: 'author',
                type: 'reference',
                to: [{type: 'author'}]
              }
            ]
        }
    ]
}