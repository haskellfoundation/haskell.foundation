import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'

const Wrap = styled.div`

`

const Page = ({ children, title }) => {
  return (
    <Wrap>
      <Container maxWidth='lg'>
        <Box marginTop={8} marginBottom={0}>
          <Grid container spacing={4}>
            <Grid item lg={3}>
              <Box marginTop={0} marginBottom={0}>
                <Typography variant='h1' color='primary'>{title}</Typography>
              </Box>
            </Grid>
            <Grid item lg={9}>
              <Box marginTop={1} marginBottom={0}>
              {children}
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Wrap>
  )
}

Page.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string
}

export default Page
