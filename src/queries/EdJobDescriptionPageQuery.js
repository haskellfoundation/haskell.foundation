import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const EdJobDescriptionPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/ed-job-description/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    content {
                      default_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/ed-job-description/ed-job-description-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No ed-job-description translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.content)
        }}
      />
    )}
  </Language.Consumer>
)

EdJobDescriptionPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default EdJobDescriptionPageQuery
