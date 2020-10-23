import React from 'react'
import styled from 'styled-components'
import AppBar from '@material-ui/core/AppBar'
import Container from '@material-ui/core/Container'
import { Grid, Box, Typography } from '@material-ui/core'
import GlobalContentQuery from '../queries/GlobalContentQuery'
import Link from '@input-output-hk/front-end-core-components/components/Link'

const Title = styled.p`
  margin: 1rem 0;
  font-weight: bold;
  font-size: 2.4rem;
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
    &.active a {
      border-radius:0px;
      border-bottom:.2rem solid ${({ theme }) => theme.palette.primary.main};
    }
    a {
      border-radius:50px;
      display:inline-block;
      font-size:1.4rem;
      padding:.6rem 0;
      margin-left:1.4rem;
      margin-right:1.4rem;
      &.contact {
        padding-left:2rem;
        padding-right:2rem;
        color: ${({ theme }) => theme.palette.text.inverted};
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
          <Box marginTop={2} marginBottom={2}>
            <Grid container>
              <FlexGrid item xs={12} md={4}>
                <Box flex={1} display='flex' flexDirection='column' justifyContent='center'>
                  <Title>{content.global_main_title}</Title>
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
