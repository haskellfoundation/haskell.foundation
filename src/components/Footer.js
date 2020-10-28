import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { Grid, Box, Typography } from '@material-ui/core'
import GlobalContentQuery from '../queries/GlobalContentQuery'
import Link from '@input-output-hk/front-end-core-components/components/Link'
import { FaTwitter } from 'react-icons/fa'

const Wrap = styled(Box)`
border-top:.1rem solid #ddd;
`

export default () => (
  <GlobalContentQuery
    render={(content) => (
      <Container maxWidth='lg'>
        <Box marginTop={0} paddingTop={10} paddingBottom={8} textAlign='center'>
          <Grid container>
            <Grid item md={12}>
              <Typography variant='h6'>Sponsors</Typography>
              <Typography variant='body2'>Github Iohk Tweag Obsidian Well Typed SkillsMatter Kadena</Typography>
            </Grid>
          </Grid>
        </Box>
        <Wrap paddingTop={6} paddingBottom={8}>
          <Grid container>
            <Grid item md={6}>
              <Typography variant='body2'>If you are interested in learning more about the haskell foundation, volunteering, or donating please contact us by email at contact@haskell.foundation</Typography>
            </Grid>
            <Grid item md={6}>
              <Box textAlign='right'>
                <FaTwitter />
              </Box>
            </Grid>
          </Grid>
        </Wrap>
      </Container>
    )}
  />
)
