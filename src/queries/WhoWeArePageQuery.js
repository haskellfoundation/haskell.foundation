import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const WhoWeArePageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/who-we-are/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    about_content {
                      about_page_title
                      team {
                      name
                      location
                      avatar {
                        childImageSharp {
                          fluid {
                            ...GatsbyImageSharpFluid
                          }
                        }
                      }
                      description
                      role
                    }
                      about_page_content_above
                      about_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/who-we-are/who-we-are-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No who-we-are translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.about_content)
        }}
      />
    )}
  </Language.Consumer>
)

WhoWeArePageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default WhoWeArePageQuery
