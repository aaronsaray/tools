import React, { Component } from "react";
import { Container, Grid, Header, Input, Form } from "semantic-ui-react";

/**
 * hex/rgb math from https://stackoverflow.com/a/5624139/2030153
 */

export default class RGBHex extends Component {
  state = {
    goodValue: false,
    hex: "",
    r: "",
    g: "",
    b: ""
  };

  handleHexChange = e => {
    const value = e.target.value;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

    if (result) {
      this.setState({
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        goodValue: true
      });
    } else {
      this.setState({
        r: "",
        g: "",
        b: "",
        goodValue: false
      });
    }
  };

  rgbDisplay = () => {
    return this.state.goodValue
      ? "rgb(" + this.state.r + "," + this.state.g + "," + this.state.b + ")"
      : "";
  };

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">RGB ↔ Hex</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>RGB</label>
                  <Grid>
                    <Grid.Row columns={3}>
                      <Grid.Column>
                        <Input value={this.state.r} />
                      </Grid.Column>
                      <Grid.Column>
                        <Input value={this.state.g} />
                      </Grid.Column>
                      <Grid.Column>
                        <Input value={this.state.b} />
                      </Grid.Column>
                    </Grid.Row>
                  </Grid>
                </Form.Field>
              </Form>
              {this.rgbDisplay()}
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Hex</label>
                  <Input onChange={this.handleHexChange} />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
