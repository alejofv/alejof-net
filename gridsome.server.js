const axios = require('axios')

// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  api.loadSource(async ({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
    const collection = addCollection('Note')

    if ('NOTES_API_URL' in process.env) {
      console.log('Importing Notes content from API: ' + process.env.NOTES_API_URL)
      const { data } = await axios.get(`${process.env.NOTES_API_URL}?format=json&${process.env.NOTES_API_KEY}`)
      
      console.log(`Notes content: ${data.length} items`)

      for (const item of data) {
        console.log(`Content from API: ${item.slug}`)
        const content = await axios.get(item.url).then(res => res.data)

        collection.addNode({
          id: item.slug,
          title: item.title,
          date: item.date,
          type: item.data.type || 'text',
          source: item.data.source || '',
          content: content,
        })
      }
    } else {
      collection.addNode({
        id: 'test',
        title: 'test',
        date: '2021-01-01',
        type: 'text',
        source: '',
        content: 'test'
      })
    }
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
