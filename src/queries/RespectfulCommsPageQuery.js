import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const RespectfulCommsPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/guidelines-for-respectful-communication/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    about_content {
                      about_page_title
                      about_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/guidelines-for-respectful-communication/guidelines-for-respectful-communication-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No guidelines-for-respectful-communication found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.about_content)
        }}
      />
    )}
  </Language.Consumer>
)

RespectfulCommsPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default RespectfulCommsPageQuery
