import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Form,
  TextArea,
  Button
} from "semantic-ui-react";
import Papa from "papaparse";

export default class MarkdownTable extends Component {
  state = {
    value: "",
    markdown: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    let markdownArray = [];

    // todo add error handling
    const parser = Papa.parse(this.state.value);
    let data = parser.data;

    if (data[0]) {
      const header = data.shift();
      markdownArray.push(header.map(i => i.trim()).join(" | "));
      markdownArray.push(
        Array(header.length)
          .fill("---")
          .join(" | ")
      );

      data.forEach(row => {
        markdownArray.push(row.map(i => i.trim()).join(" | "));
      });
    }

    this.setState({
      markdown: markdownArray.join("\n")
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Markdown Table from CSV</Header>
              <Form onSubmit={this.handleSubmit}>
                <Form.Field>
                  <label>Enter CSV Data</label>
                  <TextArea onChange={this.handleChange} />
                </Form.Field>
                <Button type="submit">Generate Table</Button> and scroll down to
                see.
              </Form>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <pre>
                <code>{this.state.markdown}</code>
              </pre>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
