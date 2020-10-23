import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Container from '@material-ui/core/Container'
import Header from '../components/Header'

const StyledMain = styled.main`
  position: relative;
  z-index: 1;
  margin: 0 auto;
  width: 100%;
`

const Main = ({ children }) => (
  <Fragment>
    <Header />
    <StyledMain>
      {children}
    </StyledMain>
    <Container maxWidth='lg'>
      _
    </Container>
  </Fragment>
)

Main.propTypes = {
  children: PropTypes.node.isRequired
}

export default Main
