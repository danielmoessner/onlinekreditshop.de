import React from 'react';
import { Link, graphql } from 'gatsby';
import PropTypes from 'prop-types';
import Layout from '../components/Layout';
import Header from '../components/Header';
import Seo from '../components/Seo';

function Page({ data }) {
  const articles = data.allMarkdownRemark.nodes.map((node) => node.frontmatter);
  const page = data.pagesYaml;

  return (
    <Layout>
      <Seo
        title={page.meta.title}
        description={page.meta.description}
        image={page.meta.image.childImageSharp.resize.src}
      />
      <Header title={page.header.title} text={page.header.text} />
      <section>
        <div className="bg-white pt-16 pb-16 lg:pt-24 lg:pb-24">
          <div className="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
              {articles.map((article) => (
                <div key={article.slug}>
                  <Link to={article.slug} className="mt-2 block">
                    <h2 className="text-xl font-semibold text-gray-900">{article.title}</h2>
                    <p className="mt-3 text-base text-gray-500">{article.shortDescription}</p>
                  </Link>
                  <div className="mt-3">
                    <Link
                      to={article.slug}
                      className="text-base font-semibold text-blue-800 hover:text-blue-700"
                    >
                      {page.articles.button}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}

Page.propTypes = {
  // eslint-disable-next-line
  data: PropTypes.object.isRequired,
};

export default Page;

export const query = graphql`
  {
    allMarkdownRemark(filter: { frontmatter: { collection: { eq: "article" } } }) {
      nodes {
        frontmatter {
          category
          slug
          title
          shortDescription
        }
      }
    }
    pagesYaml(slug: { eq: "articles" }) {
      meta {
        title
        description
        image {
          childImageSharp {
            resize(width: 1200) {
              src
            }
          }
        }
      }
      header {
        text
        title
      }
      articles {
        button
      }
    }
  }
`;
