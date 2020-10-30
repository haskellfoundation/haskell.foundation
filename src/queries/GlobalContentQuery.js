import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const GlobalContentQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/global/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    global_content {
                      global_main_title
                      global_navigation {
                        global_navigation_item_title
                        global_navigation_item_link
                      }
                      footer_copy
                      footer_logos {
                          name
                          link
                          image {
                          childImageSharp {
                            fluid {
                              ...GatsbyImageSharpFluid
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/global/global-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No global translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.global_content)
        }}
      />
    )}
  </Language.Consumer>
)

GlobalContentQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default GlobalContentQuery
