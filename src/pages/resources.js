import React from 'react'
import Layout from '../components/Layout'
import ResourcesPageQuery from '../queries/ResourcesPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Page from '../components/Page'

export default () => (
  <ResourcesPageQuery
    render={(content) => (
      <Layout>
        <Page title={content.resources_page_title}>
          <Markdown source={content.resources_page_content} />
        </Page>
      </Layout>
    )}
  />
)
