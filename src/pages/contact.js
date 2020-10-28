import React from 'react'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import ContactPageQuery from '../queries/ContactPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Page from '../components/Page'

export default () => (
  <ContactPageQuery
    render={(content) => (
      <Layout>
        <Page title={content.contact_page_title}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Markdown source={content.contact_page_content} />
            </Grid>
          </Grid>
        </Page>
      </Layout>
    )}
  />
)
