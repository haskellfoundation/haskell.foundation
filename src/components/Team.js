import React from 'react'
import styled from 'styled-components'
import WhoWeArePageQuery from '../queries/WhoWeArePageQuery'
import Image from 'gatsby-image'
// import Link from '@input-output-hk/front-end-core-components/components/Link'
import { Grid, Card, CardContent, Typography } from '@material-ui/core'

const AvatarLarge = styled(Image)`
  width: 100px;
  height: 100px;
  border-radius: 99px;
  margin-left:auto;
  margin-right:auto;
  display:block;
  text-align:center;
`
const Titles = styled.div`
  @media(max-width:960px) {
    text-align:center;
  }
`

export default () => (
  <WhoWeArePageQuery
    render={(content) => (
      <Grid spacing={4} container>
        {content.team.map((member) => {
          return (
            <Grid item xs={12} key={member.name}>
              <Card variant='outlined' elevation={2}>
                <CardContent>
                  <Grid container>
                    <Grid item sm={2} xs={12}>
                      <AvatarLarge fluid={member.avatar.childImageSharp.fluid} />
                    </Grid>
                    <Grid item sm={10} xs={12}>
                      <Titles>
                        <Typography gutterBottom variant='h5' component='h2'>
                          {member.name}
                        </Typography>
                        <Typography gutterBottom variant='h5' component='span'>
                          {member.role && member.role}
                        </Typography>
                        {member.role && member.location ? ' - ' : ''}
                        <Typography gutterBottom variant='h5' component='span'>
                          {member.location && member.location}
                        </Typography>
                        <hr />
                      </Titles>
                      <Typography variant='body2' color='textSecondary' component='p'>
                        {member.description}
                      </Typography>
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Grid>
          )
        })
        }
      </Grid>
    )}
  />
)
