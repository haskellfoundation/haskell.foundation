import React from 'react'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import Layout from '../components/Layout'
import IndexPageQuery from '../queries/IndexPageQuery'
import Markdown from '@input-output-hk/front-end-core-components/components/Markdown'
import styled from 'styled-components'
import { FaHeart, FaLockOpen, FaUserFriends, FaCubes, FaUser } from 'react-icons/fa'

const icons = {
  heart: <FaHeart />,
  lock: <FaLockOpen />,
  users: <FaUserFriends />,
  cubes: <FaCubes />,
  user: <FaUser />
}

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

const GoalsBlock = styled(Box)`
background: url(/images/side-blue.svg) right no-repeat;
background-size:200%;
background-position:70vw 0;
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
              <Grid container spacing={4}>
                <Grid item md={5}>
                  <iframe width='100%' height='315' src='https://www.youtube.com/embed/re96UgMk6GQ' allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture' />
                </Grid>
                <Grid item md={5}>
                  <Typography variant='body2' component='span'><Markdown source={content.home_intro} /></Typography>
                </Grid>
              </Grid>
            </Container>
          </Box>
        </IntroBlock>
        <br />
        <ClaimBar marginTop={0}>
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
        <GoalsBlock>
          <Container maxWidth='lg'>
            <Box marginTop={4} marginBottom={3}>
              <Grid container spacing={2}>
                <Grid item xs={7}>
                  <Typography variant='h5' component='h3'><Markdown source={content.home_goals.home_goals_title} /></Typography>
                  {content.home_goals.home_goals_items.map((item, index) => (
                    <GoalItem display='flex' key={index}>
                      <Icon>{icons[item.home_goals_item_icon]}</Icon>
                      <Typography variant='body2' component='span'><Markdown source={item.home_goals_item_body} /></Typography>
                    </GoalItem>
                  ))}
                </Grid>
              </Grid>
            </Box>
          </Container>
        </GoalsBlock>
        <Container maxWidth='lg'>
          <Box marginTop={0} marginBottom={10}>
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
