import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import ResourcesPageQuery from '../queries/ResourcesPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Page from '../components/Page'

export default () => (
  <ResourcesPageQuery
    render={(content) => (
      <Layout>
        <Page title={content.resources_page_title}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Markdown source={content.resources_page_content} />
            </Grid>
          </Grid>
        </Page>
      </Layout>
    )}
  />
)
