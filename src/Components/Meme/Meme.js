import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Image,
  Input,
  Divider,
  Button,
  Segment,
  Icon
} from "semantic-ui-react";
import PlaceholderImage from "./placeholder.png";

export default class Meme extends Component {
  state = {
    image: PlaceholderImage
  };

  componentDidMount = () => {
    window.addEventListener("paste", this.handlePaste);
  };

  componentWillUnmount = () => {
    window.removeEventListener("paste", this.handlePaste);
  };

  handleFileInput = e => {
    let reader = new FileReader();
    reader.onload = () => {
      this.setState({
        image: reader.result
      });
    };

    reader.readAsDataURL(e.target.files[0]);
  };

  handleUrlInput = e => {
    this.setState({
      image: e.target.value
    });
  };

  handlePaste = e => {
    // its a DataTransferItemList so there's no array functions available
    const items = e.clipboardData.items;

    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const image = window.URL.createObjectURL(items[i].getAsFile());
        this.setState({
          image
        });
        break;
      }
    }
  };

  // put a section that says this doens't handle errors

  render() {
    return (
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Meme Generator</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Image fluid src={this.state.image} bordered />
            </Grid.Column>
            <Grid.Column>
              <div className="ui input fluid">
                <input type="file" onChange={this.handleFileInput} />
              </div>
              <Divider hidden />
              <Input
                fluid
                placeholder="http://domain.com/image.png"
                onBlur={this.handleUrlInput}
              />
              <Divider hidden />
              <Segment textAlign="center">
                Or <Icon name="paste" /> image
              </Segment>
              <Divider />
              <Button basic fluid color="grey">
                Reset
              </Button>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
