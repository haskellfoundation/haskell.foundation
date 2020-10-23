import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Language from '@input-output-hk/front-end-core-components/components/Language'

const ContactPageQuery = ({ render }) => (
  <Language.Consumer>
    {({ key: lang }) => (
      <StaticQuery
        query={graphql`
          query {
            allFile(filter:{relativePath:{glob:"content/pages/contact/*.md"}}) {
              nodes{
                relativePath,
                childMarkdownRemark{
                  frontmatter {
                    contact_content {
                      contact_page_title
                      contact_page_content
                    }
                  }
                }
              }
            }
          }
        `}
        render={({ allFile }) => {
          const content = allFile.nodes.filter(node => node.relativePath === `content/pages/contact/contact-${lang}.md`).shift()
          if (!content || !content.childMarkdownRemark) throw new Error(`No contact translations found for language ${lang}`)
          return render(content.childMarkdownRemark.frontmatter.contact_content)
        }}
      />
    )}
  </Language.Consumer>
)

ContactPageQuery.propTypes = {
  render: PropTypes.func.isRequired
}

export default ContactPageQuery
