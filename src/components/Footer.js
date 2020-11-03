import React from 'react'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import { Grid, Box, Typography } from '@material-ui/core'
import GlobalContentQuery from '../queries/GlobalContentQuery'
import { FaTwitter } from 'react-icons/fa'
import Logos from './Logos.js'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import Link from '@input-output-hk/front-end-core-components/components/Link'

const Wrap = styled(Box)`
border-top:.1rem solid #ddd;
`

export default () => (
  <GlobalContentQuery
    render={(content) => (
      <Container maxWidth='lg'>
        <Box marginTop={0} paddingTop={10} paddingBottom={2} textAlign='center'>
          <Grid container>
            <Grid item md={12}>
              <Box marginBottom={4}><Typography variant='h6'>Sponsors</Typography></Box>
              <Logos />
            </Grid>
          </Grid>
        </Box>
        <Wrap paddingTop={6} paddingBottom={8}>
          <Grid container>
            <Grid item md={1}>
              <img src='/images/haskell-logo.svg' alt='' width='40' />
            </Grid>
            <Grid item md={3}>
              2020 &copy; {content.global_main_title}
            </Grid>
            <Grid item md={7}>
              <Box textAlign='left' marginTop={-1.5}>
                <Typography variant='body2' component='div'><Markdown source={content.footer_copy} /></Typography>
              </Box>
            </Grid>
            <Grid item md={1}>
              <Box textAlign='right'>
                <Link href='https://twitter.com/haskellfound' target='_blank'><FaTwitter /></Link>
              </Box>
            </Grid>
          </Grid>
        </Wrap>
      </Container>
    )}
  />
)
