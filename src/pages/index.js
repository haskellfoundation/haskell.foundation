import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import IndexPageQuery from '../queries/IndexPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import styled from 'styled-components'
import { FaHeart, FaLockOpen } from 'react-icons/fa'

const IntroBlock = styled(Box)`
background: ${({ theme }) => theme.palette.primary.main} url(/images/pattern.png) center;
background-size:cover;
color:white;
.inner {
  background: url(/images/side.svg) right no-repeat;
  background-position:80vw 0;
}
`

const ClaimBar = styled(Box)`
background: #eee;
.inner {
  background: url(/images/side.svg) right no-repeat;
  background-position:80vw 0;
  background-size:200%;
}
`

const GoalItem = styled(Box)`
margin:0 0 1rem;
p {
  margin:0;
}
`

const Icon = styled.div`
margin:0 1rem 0 0;
font-size:90%;
color: ${({ theme }) => theme.palette.primary.main};
`

export default () => (
  <IndexPageQuery
    render={(content) => (
      <Layout>
        <IntroBlock>
          <Box paddingTop={10} paddingBottom={0} className='inner'>
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
          </Box>
        </IntroBlock>
        <ClaimBar>
          <Box marginTop={0} paddingTop={4} paddingBottom={4} className='inner'>
            <Container maxWidth='lg'>
              <Grid container spacing={2}>
                <Grid item xs={10}>
                  <Markdown source={content.home_claim} />
                </Grid>
              </Grid>
            </Container>
          </Box>
        </ClaimBar>
        <Container maxWidth='lg'>
          <Box marginTop={6} marginBottom={10}>
            <Grid container spacing={2}>
              <Grid item xs={7}>
                <Typography variant='h5' component='h3'><Markdown source={content.home_goals.home_goals_title} /></Typography>
                {content.home_goals.home_goals_items.map((item, index) => (
                  <GoalItem display='flex' key={index}>
                    <Icon><FaHeart /></Icon>
                    <Typography variant='body2' component='span'><Markdown source={item.home_goals_item_body} /></Typography>
                  </GoalItem>
                ))}
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
