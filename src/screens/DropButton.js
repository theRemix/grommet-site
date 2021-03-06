import React, { Component } from 'react';

import { Box, Button, DropButton, Text, TextInput } from 'grommet';
import { FormDown } from 'grommet-icons';
import { doc } from 'grommet/components/DropButton/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import { genericSyntaxes } from '../utils/props';
import Item from './Components/Item';

const desc = doc(DropButton).toJSON();

export default class DropButtonDoc extends Component {
  state = {};

  render() {
    const { open } = this.state;
    return (
      <Page>
        <Doc
          name="DropButton"
          desc={desc}
          syntaxes={{
            ...genericSyntaxes,
            dropAlign: [
              { top: 'top', left: 'left' },
              { bottom: 'bottom', right: 'right' },
            ],
            dropContent: '<Box>...</Box>',
            onClose: '() => {}',
            onOpen: '() => {}',
          }}
          example={
            <DropButton
              label="Fancy Selector"
              open={open}
              dropAlign={{ top: 'bottom', right: 'right' }}
              dropContent={
                <Box>
                  <TextInput placeholder="Search" />
                  {['one', 'two', 'three', 'four', 'five'].map(
                    (label, index) => (
                      <Button
                        key={label}
                        hoverIndicator
                        onClick={() => this.setState({ open: undefined })}
                      >
                        <Box
                          direction="row"
                          justify="between"
                          align="center"
                          pad={{ horizontal: 'small', vertical: 'xsmall' }}
                        >
                          <Text>{label}</Text>
                          <Text>{index + 1}</Text>
                        </Box>
                      </Button>
                    ),
                  )}
                </Box>
              }
            />
          }
        />
      </Page>
    );
  }
}

export const DropButtonItem = props => (
  <Item {...props} center>
    <Box flex={false}>
      <Button
        label="i'm a button"
        icon={<FormDown />}
        reverse
        onClick={() => {}}
      />
      <Box
        elevation="medium"
        pad={{ horizontal: 'xlarge', vertical: 'large' }}
      />
    </Box>
  </Item>
);
