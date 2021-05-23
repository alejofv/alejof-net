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

    const { data } = await axios.get(`${process.env.NOTES_API_URL}?format=json&${process.env.NOTES_API_KEY}`)

    for (const item of data) {
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
  })

  api.createPages(({ createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
  })
}
