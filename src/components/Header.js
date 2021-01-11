import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import Drawer from '@material-ui/core/Drawer'
import Button from '@material-ui/core/Button'
import GlobalContentQuery from '../queries/GlobalContentQuery'
import Link from '@input-output-hk/front-end-core-components/components/Link'
import { FaBars } from 'react-icons/fa'
import { makeStyles } from '@material-ui/core/styles'

const Logo = styled(Link)`
  color:white;
  img {
    vertical-align:top;
    margin:1.35rem 0;
  }
`

const Title = styled.div`
  margin: 1.3rem 1rem;
  font-weight: bold;
  display:inline-block;
  font-size: 2.6rem;
`

const FlexGrid = styled(Grid)`
  display: flex;
`

const Nav = styled.nav`
display:inline-block;
width: 100%;
ul {
  list-style: none;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align:right;
  li {
    padding:1.5rem 0;
    text-transform: none;
    display:inline-block;

    a {
      border-radius:50px;
      display:inline-block;
      font-size:1.4rem;
      padding:.6rem 0;
      margin-left:1.4rem;
      margin-right:1.4rem;
      color:white;
      &.active {
        color:cyan;
      }
    }
    &:last-of-type {
      padding-right: 0;
    }

    &:first-of-type {
      padding-left: 0;
    }
  }
}

`

const MenuLink = styled(Link)`
  color: ${({ theme }) => theme.palette.text.primary};
`

const MobilePane = styled.div`
padding:5px 0 0 0;
ul {
  padding:0;
  list-style-type:none;
  li {
    a {
      display:block;
      padding:1rem 3rem;
      color:white;
    }
  }
  li+li {
    border-top:.1rem solid rgba(255,255,255,0.1);
  }
}
`

const MobilePaneToggle = styled(Button)`
padding:.8rem 0;
width:4rem;
height:2rem;
min-width:2rem;
text-align:right;
font-size:2.4rem;
display:inline-block;
right:0;
color:white;
position:relative;
`

const useStyles = makeStyles({
  root: {
    '& .MuiPaper-root': {
      background: 'rgba(124,98,178,0.9)'
    }
  },
  list: {
    width: 250
  },
  fullList: {
    width: 'auto'
  }
})

export default () => {
  const classes = useStyles()
  const [ headerMinimised, setHeaderMinimised ] = useState(false)
  const [ state, setState ] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  })

  const onScroll = () => {
    if (window.scrollY >= 120 && !headerMinimised) setHeaderMinimised(true)
    if (window.scrollY < 120 && headerMinimised) setHeaderMinimised(false)
  }

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    window.addEventListener('touchmove', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('touchmove', onScroll)
    }
  }, [ headerMinimised ])

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return
    }
    setState({ ...state, [side]: open })
  }

  return (
    <GlobalContentQuery
      render={(content) => (
        <AppBar position='static'>
          <Container maxWidth='false'>
            <Hidden lgUp>
              <Grid container>
                <FlexGrid item xs={11}>
                  <Box flex={1} display='flex'>
                    <Logo href='/'>
                      <img src='/images/haskell-logo-white.svg' alt='' width='60' />
                      <Title>{content.global_main_title}</Title>
                    </Logo>
                  </Box>
                </FlexGrid>
                <FlexGrid item xs={1}>
                  <Box textAlign='right'><MobilePaneToggle onClick={toggleDrawer('left', true)}><FaBars /></MobilePaneToggle></Box>
                  <Drawer anchor='left' className={classes.root} open={state.left} onClose={toggleDrawer('left', false)}>
                    <MobilePane
                      className={classes.list}
                      role='presentation'
                      onClick={toggleDrawer('left', false)}
                      onKeyDown={toggleDrawer('left', false)}
                    >
                      <Box paddingTop={1} paddingLeft={3}>
                        <img src='/images/haskell-logo-white.svg' alt='' width='60' />
                      </Box>
                      <ul>
                        {content.global_navigation.map((item, index) => (
                          <li key={index}>
                            <MenuLink
                              href={item.global_navigation_item_link}
                              activeClassName='active'
                            >
                              <Typography variant='body2' component='span'>{item.global_navigation_item_title}</Typography>
                            </MenuLink>
                          </li>
                        ))}
                      </ul>
                    </MobilePane>
                  </Drawer>
                </FlexGrid>
              </Grid>
            </Hidden>
            <Hidden mdDown>
              <Grid container>
                <FlexGrid item xs={6} md={5}>
                  <Box flex={1} display='flex'>
                    <Logo href='/'>
                      <img src='/images/haskell-logo-white.svg' alt='' width='60' />
                      <Title>{content.global_main_title}</Title>
                    </Logo>
                  </Box>
                </FlexGrid>
                <FlexGrid item xs={6} md={7}>
                  <Nav>
                    <ul>
                      {content.global_navigation.map((item, index) => (
                        <li key={index}>
                          <MenuLink
                            href={item.global_navigation_item_link}
                            activeClassName='active'
                          >
                            <Typography variant='body2' component='span'>{item.global_navigation_item_title}</Typography>
                          </MenuLink>
                        </li>
                      ))}
                    </ul>
                  </Nav>
                </FlexGrid>
              </Grid>
            </Hidden>
          </Container>
        </AppBar>
      )}
    />
  )
}
