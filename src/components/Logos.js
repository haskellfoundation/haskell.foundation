import React from 'react'
import styled from 'styled-components'
import GlobalContentQuery from '../queries/GlobalContentQuery'
import Image from 'gatsby-image'
import Link from '@input-output-hk/front-end-core-components/components/Link'

const LogoContainer = styled.div`
  padding: 0;
  margin: 0;
  list-style: none;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
`
const LogoItem = styled.div`
  max-width: 150px;
  min-width: 150px;
  height: 80px;
  margin-top: 10px;
  text-align: center;
  justify-content: center;
  align-items: center;
  transition: 0.33s;
  &:hover {
    opacity: 0.8;
    transition: 0.33s;
  }
  @media screen and (max-width: 970px) {
    width: 140px;
    height: 80px;
    margin: 10px;
    text-align: center;
  }
`

export default () => (
  <GlobalContentQuery
    render={(content) => (
      <LogoContainer>
        {
          content.footer_logos.map((logo) => {
            return (
              <LogoItem key={logo.name}>
                <Link href={logo.link} title={logo.name}>
                  <Image fluid={logo.image.childImageSharp.fluid} alt={logo.name} />
                </Link>
              </LogoItem>
            )
          })
        }
      </LogoContainer>
    )}
  />
)
