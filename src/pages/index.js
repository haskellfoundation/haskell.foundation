import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import IndexPageQuery from '../queries/IndexPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import styled from 'styled-components'

const IntroBlock = styled(Box)`
background: ${({ theme }) => theme.palette.primary.main} url(/images/pattern.png) center;
background-size:cover;
color:white;
`

export default () => (
  <IndexPageQuery
    render={(content) => (
      <Layout>
        <IntroBlock paddingTop={4} paddingBottom={10}>
          <Container maxWidth='lg'>
            <Grid container spacing={2}>
              <Grid item md={5}>
                <img src='https://via.placeholder.com/450x300' />
              </Grid>
              <Grid item md={5}>
                <Typography variant='body2' component='span'><Markdown source={content.home_intro} /></Typography>
              </Grid>
            </Grid>
          </Container>
        </IntroBlock>
        <Container maxWidth='lg'>
          <Box marginTop={6} marginBottom={10}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Markdown source={content.home_claim} />
              </Grid>
            </Grid>
          </Box>
          <Box marginTop={6} marginBottom={10}>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Typography variant='h5' component='h3'><Markdown source={content.home_goals.home_goals_title} /></Typography>
                <ul>
                  {content.home_goals.home_goals_items.map((item, index) => (
                    <li key={index}>
                      <Typography variant='body2' component='span'><Markdown source={item.home_goals_item_body} /></Typography>
                    </li>
                  ))}
                </ul>
              </Grid>
            </Grid>
          </Box>
          <Box marginTop={6} marginBottom={10}>
            <Grid container spacing={2}>
              <Grid item xs={8}>
                <Markdown source={content.home_body} />
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Layout>
    )}
  />
)
