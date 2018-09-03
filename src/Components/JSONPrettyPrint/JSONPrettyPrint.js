import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Form,
  TextArea,
  Button,
  Modal,
  Icon
} from "semantic-ui-react";

class JSONPrettyPrint extends Component {
  state = {
    errorModal: false,
    value: "",
    pretty: ""
  };

  handleSubmit = e => {
    e.preventDefault();

    let parsed;

    try {
      parsed = JSON.parse(this.state.value);
    } catch (e) {
      this.setState({ errorModal: true });
      return false;
    }

    this.setState({
      pretty: JSON.stringify(parsed, null, "\t")
    });
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
  };

  handleCloseModal = () => {
    this.setState({ errorModal: false });
  };

  render() {
    return (
      <React.Fragment>
        <Container>
          <Grid>
            <Grid.Row>
              <Grid.Column>
                <Header as="h1">JSON Pretty Print</Header>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Field>
                    <label>Enter any format JSON</label>
                    <TextArea onChange={this.handleChange} />
                  </Form.Field>
                  <Button type="submit">Prettify</Button> and scroll down to
                  see.
                </Form>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row>
              <Grid.Column>
                <pre>
                  <code>{this.state.pretty}</code>
                </pre>
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
        <Modal basic size="small" open={this.state.errorModal}>
          <Header icon="thumbs down" content="Invalid JSON" />
          <Modal.Content>
            <p>Can not prettify invalid JSON.</p>
          </Modal.Content>
          <Modal.Actions>
            <Button color="green" inverted onClick={this.handleCloseModal}>
              <Icon name="checkmark" /> Ok
            </Button>
          </Modal.Actions>
        </Modal>
      </React.Fragment>
    );
  }
}

export default JSONPrettyPrint;
