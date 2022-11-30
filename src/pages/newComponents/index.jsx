import React from 'react'
import {Header, Icon, Button,Dimmer, Loader, Image, Segment, Checkbox} from 'semantic-ui-react'

export const ComponentsWithStyle = () => <div>
  <Header as='h2' icon>
    <Icon name='settings' />
    Account Settings
    <Header.Subheader>
      Manage your account settings and set e-mail preferences.
    </Header.Subheader>
  </Header>

  <Checkbox label='Make my profile visible' />
  <Button>Click Here</Button>

  <Segment>
    <Dimmer active>
      <Loader />
    </Dimmer>

    <Image src='/images/wireframe/short-paragraph.png' />
  </Segment>
  </div>
