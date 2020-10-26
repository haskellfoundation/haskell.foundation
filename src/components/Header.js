import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { Grid, Box, Typography } from '@material-ui/core'
import GlobalContentQuery from '../queries/GlobalContentQuery'
import Link from '@input-output-hk/front-end-core-components/components/Link'

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

export default () => (
  <GlobalContentQuery
    render={(content) => (
      <AppBar position='static'>
        <Container maxWidth='lg'>
          <Box>
            <Grid container>
              <FlexGrid item xs={12} md={4}>
                <Box flex={1} display='flex'>
                  <Logo href='/'>
                    <img src='/images/haskell-logo-white.svg' alt='' width='60' />
                    <Title>{content.global_main_title}</Title>
                  </Logo>
                </Box>
              </FlexGrid>
              <FlexGrid item xs={12} md={8}>
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
          </Box>
        </Container>
      </AppBar>
    )}
  />
)
