import React, { Component } from 'react';

import { Box, Heading, TextInput } from 'grommet';
import { doc, themeDoc } from 'grommet/components/TextInput/doc';

import Page from '../components/Page';
import Doc from '../components/Doc';
import Item from './Components/Item';

const desc = doc(TextInput).toJSON();

const allSuggestions = ['alan', 'bryan', 'chris', 'david', 'eric', 'tracy'];

class TextInputDoc extends Component {
  state = {
    value: '',
    suggestions: allSuggestions,
  };

  render() {
    const { suggestions, value } = this.state;
    return (
      <Page>
        <Doc
          name="TextInput"
          desc={desc}
          example={<TextInput value="Things get typed here" />}
          examples={{
            placeholder: <TextInput placeholder="abc" />,
            plain: <TextInput value="A" plain />,
            size: (
              <Box>
                <Box margin={{ bottom: 'xsmall' }} align="end">
                  <TextInput size="small" value="A" />
                </Box>
                <Box margin={{ bottom: 'xsmall' }} align="end">
                  <TextInput size="medium" value="B" />
                </Box>
                <Box margin={{ bottom: 'xsmall' }} align="end">
                  <TextInput size="large" value="C" />
                </Box>
                <Box margin={{ bottom: 'xsmall' }} align="end">
                  <TextInput size="xlarge" value="D" />
                </Box>
              </Box>
            ),
            suggestions: (
              <TextInput
                suggestions={suggestions}
                onSelect={({ suggestion }) =>
                  this.setState({ value: suggestion })
                }
                onInput={event =>
                  this.setState({
                    value: event.target.value,
                    suggestions: allSuggestions.filter(
                      suggestion => suggestion.indexOf(event.target.value) > -1,
                    ),
                  })
                }
                value={value}
              />
            ),
            value: <TextInput value="A" />,
          }}
          themeDoc={themeDoc}
        >
          <Box basis="large" pad={{ horizontal: 'large', bottom: 'xlarge' }}>
            <Heading level={2} margin={{ top: 'none' }}>
              <strong>Examples</strong>
            </Heading>
            <Box margin="small">
              <TextInput placeholder="search" type="search" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="password" type="password" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="email" type="email" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="tel" type="tel" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="url" type="url" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="number" type="number" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="date" type="date" />
            </Box>
            <Box margin="small">
              <TextInput placeholder="time" type="time" />
            </Box>
          </Box>
        </Doc>
      </Page>
    );
  }
}

export default TextInputDoc;

export const TextInputItem = props => (
  <Item {...props} center pad={{ horizontal: 'xlarge' }}>
    <TextInput placeholder="Placeholder" disabled />
  </Item>
);
