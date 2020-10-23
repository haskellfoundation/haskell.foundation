import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const FaqPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/faq/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    faq_content {
                      faq_page_title
                      faq_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/faq/faq-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No faq translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.faq_content)
        }}
      />
    )}
  </Language.Consumer>
)

FaqPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default FaqPageQuery
