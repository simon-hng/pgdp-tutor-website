import React from "react"
import { graphql } from "gatsby"

import kebabCase from "lodash/kebabCase"

import AniLink from "gatsby-plugin-transition-link/AniLink"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const { previous, next } = pageContext

  return (
    <Layout location={location} title={post.frontmatter.title}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <article itemScope itemType="http://schema.org/Article">
        <header className="blog-post__header">
          <ul className="blog-post__tags">
            {post.frontmatter.tags &&
              post.frontmatter.tags.map(tag => (
                <li>
                  <AniLink
                    cover
                    direction="right"
                    bg="#c2f4f4"
                    to={`/tags/${kebabCase(tag)}/`}
                  >
                    {tag}
                  </AniLink>
                </li>
              ))}
          </ul>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <footer className="blog-post__footer">
          <Bio />
        </footer>
      </article>
      <nav>
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <AniLink
                swipe
                direction="right"
                to={previous.fields.slug}
                rel="prev"
              >
                ← {previous.frontmatter.title}
              </AniLink>
            )}
          </li>
          <li>
            {next && (
              <AniLink swipe direction="left" to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </AniLink>
            )}
          </li>
        </ul>
      </nav>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        tags
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
