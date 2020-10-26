import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const IndexPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/index/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    home_content {
                      home_intro
                      home_claim
                      home_goals {
                        home_goals_title
                        home_goals_items {
                          home_goals_item_body
                          home_goals_item_icon
                        }
                      }
                      home_body
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/index/index-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No index translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.home_content)
        }}
      />
    )}
  </Language.Consumer>
)

IndexPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default IndexPageQuery
