import React, { Component } from "react";
import { Container, Grid, Header, Form, Input, Table } from "semantic-ui-react";

const permutations = [
  ["firstName"],
  ["lastName"],
  ["firstName", "lastName"],
  ["firstName", "dot", "lastName"],
  ["lastName", "firstName"]
];

export default class EmailPermutator extends Component {
  state = {
    firstName: "",
    middleName: "",
    lastName: "",
    domainName: "",
    dot: ".",
    dash: "-",
    underscore: "_"
  };

  handleNameChange = (name, e) => {
    let newState = {};
    newState[name] = e.target.value;
    this.setState(newState);
  };

  render() {
    let needsAName =
      !this.state.domainName ||
      (!this.state.firstName && !this.state.middleName && !this.state.lastName);

    return (
      <Container>
        <Header as="h1">Email Permuator</Header>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Form>
                <Form.Field>
                  <label>First Name</label>
                  <Input
                    onChange={e => this.handleNameChange("firstName", e)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Middle Name</label>
                  <Input
                    onChange={e => this.handleNameChange("middleName", e)}
                  />
                </Form.Field>
                <Form.Field>
                  <label>Last Name</label>
                  <Input onChange={e => this.handleNameChange("lastName", e)} />
                </Form.Field>
                <Form.Field>
                  <label>Domain Name</label>
                  <Input
                    onChange={e => this.handleNameChange("domainName", e)}
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              {needsAName ? (
                <p>
                  Please enter a domain name and at least one demographic name.
                </p>
              ) : (
                <Table celled>
                  <Table.Header>
                    <Table.Row>
                      <Table.HeaderCell>Click to email</Table.HeaderCell>
                      <Table.HeaderCell>Search for on Google</Table.HeaderCell>
                    </Table.Row>
                  </Table.Header>
                  <Table.Body>
                    {permutations.map((items, index) => {
                      let email = "";
                      items.forEach(item => {
                        email += this.state[item];
                      });
                      email += "@" + this.state.domainName;

                      return (
                        <Table.Row key={index}>
                          <Table.Cell>
                            <a href={"mailto:" + email}>{email}</a>
                          </Table.Cell>
                          <Table.Cell>
                            <a
                              href={"https://google.com/search?q=" + email}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              Search Google
                            </a>
                          </Table.Cell>
                        </Table.Row>
                      );
                    })}
                  </Table.Body>
                </Table>
              )}
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <p>
          <br />--
        </p>
        <p>
          For more options, check out the original idea/source:{" "}
          <a href="https://docs.google.com/spreadsheets/d/1-cYxedSvQ9eD8MIEK9ksPTUZvf9ZVXWd_1HY5hQqKUM/edit#gid=0">
            from Kai Davis
          </a>
        </p>
      </Container>
    );
  }
}
