import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const NewsPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/news/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    news_content {
                      news_page_title
                      news_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/news/news-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No news translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.news_content)
        }}
      />
    )}
  </Language.Consumer>
)

NewsPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default NewsPageQuery
