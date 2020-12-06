import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Layout from '../components/Layout'
import EdJobDescriptionPageQuery from '../queries/EdJobDescriptionPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'

export default () => (
  <EdJobDescriptionPageQuery
    render={(content) => (
      <Layout>
        <Container maxWidth='lg'>
          <Box marginTop={6} marginBottom={10}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Markdown source={content.default_content} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    )}
  />
)
