import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const ResourcesPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/resources/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    resources_content {
                      resources_page_title
                      resources_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/resources/resources-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No resources translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.resources_content)
        }}
      />
    )}
  </Language.Consumer>
)

ResourcesPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default ResourcesPageQuery
