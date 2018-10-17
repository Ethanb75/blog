import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'

export default class IndexPage extends React.Component {
  render() {
    const { data } = this.props
    const { edges: posts } = data.allMarkdownRemark

    console.log(posts);

    return (
      <section className="section">
        <div className="container">
          <div className="indexHeader">
            <h1>Latest Posts</h1>
          </div>
          {posts
            .map(({ node: post }, i) => (
              <div
                className="contentBox"
                style={{ border: '1px solid #eaecee' }}
                key={post.id}
              >
                <div className="listDate" style={{ backgroundImage: `url(https://picsum.photos/300/?image=${Math.round(Math.random() * 1000)})` }}>
                  {post.frontmatter.date}
                </div>
                <div className="listContent">
                  <p>
                    <Link className="listContent__title" to={post.fields.slug}>
                      {post.frontmatter.title}
                    </Link>
                  </p>
                  <p>
                    {post.excerpt}
                  </p>
                  <div className="listContent__button">
                    <Link to={post.fields.slug}>
                      Keep Reading →
                    </Link>
                  </div>
                </div>

              </div>
            ))}
        </div>
      </section>
    )
  }
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.array,
    }),
  }),
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] },
      filter: { frontmatter: { templateKey: { eq: "blog-post" } }}
    ) {
      edges {
        node {
          excerpt(pruneLength: 400)
          id
          fields {
            slug
          }
          frontmatter {
            title
            templateKey
            date(formatString: "MMMM DD, YYYY")
          }
        }
      }
    }
  }
`
