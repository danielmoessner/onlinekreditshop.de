const path = require('path');

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // Create the animal pages
  const result = await graphql(`
    query {
      articles: allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
      calculators: allMarkdownRemark(
        filter: { frontmatter: { collection: { eq: "calculator" } } }
      ) {
        nodes {
          frontmatter {
            slug
          }
          id
        }
      }
    }
  `);
  result.data.articles.nodes.forEach((node) => {
    createPage({
      path: `ratgeber/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/article.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
  result.data.calculators.nodes.forEach((node) => {
    createPage({
      path: `rechner/${node.frontmatter.slug}/`,
      component: path.resolve(`./src/templates/calculator.jsx`),
      context: {
        // Data passed to context is available
        // in page queries as GraphQL variables.
        slug: node.frontmatter.slug,
        id: node.id,
      },
    });
  });
};
