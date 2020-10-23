import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const DonationsPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/donations/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    donations_content {
                      donations_page_title
                      donations_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/donations/donations-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No donations translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.donations_content)
        }}
      />
    )}
  </Language.Consumer>
)

DonationsPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default DonationsPageQuery
