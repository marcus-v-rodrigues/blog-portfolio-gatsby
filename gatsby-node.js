const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require("path")

// Para adicionar o campo slug para cada node
exports.onCreateNode = ({ node, getNode, actions }) => {
    const { createNodeField } = actions

    // Criação de nodes para arquivos Markdown
    if (node.internal.type === "MarkdownRemark") {

      //Helper fuction para facilitar
      const slug = createFilePath({
        // O node que você gostaria de transformar em path
        // Por exemplo, de um Markdown
        node,
        // Método usado para pegar um node
        // O parâmetro do `onCreateNode` deve ser passado aqui
        getNode,
        // O base path dos arquivos.
        // É relativo às configurações em `options.path` em `gatsby-source-filesystem` no `gatsby-config.js`.
        // Padrão é `src/pages', mas está sendo usado 'posts'
        basePath: "posts",
      })
  
      // Cria uma novo campo de query com o nome de 'slug'
      createNodeField({
        node,
        name: "slug",
        value: `/blog/posts/${slug.slice(12)}`,
      })
    }
  }

// Para criar as páginas dos posts
exports.createPages = ({ graphql, actions }) => {
    const { createPage } = actions
    return graphql(`
      {
        allMarkdownRemark(sort: { fields: frontmatter___date, order: DESC }) {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                background
                category
                date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
                description
                title
              }
              timeToRead
            }
          }
        }
      }
    `).then(result => {
      const posts = result.data.allMarkdownRemark.edges

      //Serve para criar as páginas de cada post
      posts.forEach(({ node }) => { 
        createPage({
          path: node.fields.slug,
          component: path.resolve(`./src/templates/blog-post.js`),
          context: {
            // O dado passado como contexto fica disponível em page queries como variáveis de GraphQL
            slug: node.fields.slug,
          },
        })
      })

      const postsPerPage = 5 //Número de posts que aparecem por página
      const numPages = Math.ceil(posts.length / postsPerPage) //Número de páginas totais

      //Serve para criar as páginas com a lista dos posts existentes
      Array.from({ length: numPages }).forEach((_, index) => { 
        createPage({
          path: index === 0 ? `/blog/` : `/blog/page/${index + 1}`, //O caminho das páginas da lista de posts
          component: path.resolve(`./src/templates/blog-list.js`),
          context: { // O dado passado como contexto fica disponível em page queries como variáveis de GraphQL
            limit: postsPerPage,
            skip: index * postsPerPage,
            numPages,
            currentPage: index + 1,
          },
      })
    })
  })
}