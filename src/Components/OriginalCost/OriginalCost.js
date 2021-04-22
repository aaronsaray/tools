import React, { Component } from "react";
import { Container, Grid, Header, Input, Form } from "semantic-ui-react";

const cents = value => (Math.round(value * 100) / 100).toFixed(2);

export default class OriginalCost extends Component {
  state = {
    original: 10,
    percentage: 20,
    discounted: 8
  };

  setNewDiscountedValue = () => {
    let discount = this.state.original * (this.state.percentage / 100);
    this.setState({
      discounted: cents(this.state.original - discount)
    })
  }

  handleOriginalChange = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const floatValue = parseFloat(value);
      if (isNaN(floatValue)) {
        this.setState({
          original: ""
        })
      } else {
        this.setState({
          original: value
        }, this.setNewDiscountedValue)
      }
    }
  }

  handlePercentageChange = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const floatValue = parseFloat(value);
      if (isNaN(floatValue)) {
        this.setState({
          percentage: ""
        })
      } else {
        if (floatValue >= 0 && value <= 100) {
          this.setState({
            percentage: value
          }, this.setNewDiscountedValue)
        }
      }
    }
  }

  handleDiscountedChange = e => {
    const value = e.target.value;
    if (!isNaN(value)) {
      const floatValue = parseFloat(value);
      if (isNaN(floatValue)) {
        this.setState({
          discounted: ""
        })
      } else {
        this.setState({
          discounted: value
        }, () => {
          let op = this.state.discounted / (1 - this.state.percentage / 100);
          this.setState({
            original: cents(op)
          })
        })
      }
    }
  }

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Original Cost</Header>
              <p>Calculates from left to right.</p>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={3}>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Original Cost
                    </label>
                  <Input
                    onChange={this.handleOriginalChange}
                    value={this.state.original}
                    label="$"
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Percent Off</label>
                  <Input
                    onChange={this.handlePercentageChange}
                    value={this.state.percentage}
                    label="%"
                    labelPosition='right'
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>Discounted Cost</label>
                  <Input
                    onChange={this.handleDiscountedChange}
                    value={this.state.discounted}
                    label="$"
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
