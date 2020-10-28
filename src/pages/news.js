import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import NewsPageQuery from '../queries/NewsPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Page from '../components/Page'

export default () => (
  <NewsPageQuery
    render={(content) => (
      <Layout>
        <Page title={content.news_page_title}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Markdown source={content.news_page_content} />
            </Grid>
          </Grid>
        </Page>
      </Layout>
    )}
  />
)
