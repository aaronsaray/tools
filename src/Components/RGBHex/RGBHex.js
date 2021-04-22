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

  /** these def could be handled better -just hurrying */
  handleRChange = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      this.setState(
        {
          r: value
        },
        this.processRGBChange
      );
    }
  };

  handleGChange = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      this.setState(
        {
          g: value
        },
        this.processRGBChange
      );
    }
  };

  handleBChange = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      this.setState(
        {
          b: value
        },
        this.processRGBChange
      );
    }
  };

  componentToHex = c => {
    const hex = c.toString(16);
    console.log(c, hex);
    return hex.length === 1 ? "0" + hex : hex;
  };

  processRGBChange = () => {
    if (this.state.r && this.state.g && this.state.b) {
      const rgb = this.state.b | (this.state.g << 8) | (this.state.r << 16);
      const hex = (0x1000000 + rgb).toString(16).slice(1);

      this.setState({
        hex,
        goodValue: true
      });
    } else {
      this.setState({
        goodValue: false,
        hex: ""
      });
    }
  };

  handleHexChange = e => {
    const value = e.target.value;
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(value);

    if (result) {
      this.setState({
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
        hex: value,
        goodValue: true
      });
    } else {
      this.setState({
        r: "",
        g: "",
        b: "",
        hex: value,
        goodValue: false
      });
    }
  };

  rgbDisplay = () => {
    return this.state.goodValue
      ? "rgb(" + this.state.r + "," + this.state.g + "," + this.state.b + ")"
      : "";
  };

  hexDisplay = () => {
    return this.state.goodValue ? "#" + this.state.hex : "";
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
                        <Input
                          value={this.state.r}
                          onChange={this.handleRChange}
                          maxLength={3}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          value={this.state.g}
                          onChange={this.handleGChange}
                          maxLength={3}
                        />
                      </Grid.Column>
                      <Grid.Column>
                        <Input
                          value={this.state.b}
                          onChange={this.handleBChange}
                          maxLength={3}
                        />
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
                  <Input
                    onChange={this.handleHexChange}
                    value={this.state.hex}
                  />
                </Form.Field>
              </Form>
              {this.hexDisplay()}
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
