import React, { Component } from "react";
import { Container, Grid, Header, Form, TextArea } from "semantic-ui-react";

export default class CharacterEncode extends Component {
  state = {
    value: "",
    encoded: ""
  };

  convert = content => {
    return content.replace(/./g, function(c) {
      return "&#" + c.charCodeAt(0) + ";";
    });
  };

  handleChange = e => {
    const value = e.target.value;
    const encoded = this.convert(value);
    this.setState({ value, encoded });
  };

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Character Encode</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Enter any text</label>
                  <TextArea onChange={this.handleChange} />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Header as="h2">Encoded</Header>
              <pre>
                <code>{this.state.encoded}</code>
              </pre>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
