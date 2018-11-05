import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Input,
  Divider,
  Button,
  Segment,
  Icon,
  Message
} from "semantic-ui-react";
import PlaceholderImage from "./placeholder.png";
import "./Meme.css";

export default class Meme extends Component {
  state = {
    image: PlaceholderImage,
    topText: "",
    bottomText: ""
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

  handleTopText = e => {
    this.setState({
      topText: e.target.value
    });
  };

  handleBottomText = e => {
    this.setState({
      bottomText: e.target.value
    });
  };

  handleResetText = () => {
    this.setState({
      topText: "",
      bottomText: ""
    });
  };

  handleResetAll = () => {
    this.setState({
      image: PlaceholderImage
    });
    this.handleResetText();
  };

  render() {
    return (
      <Container>
        <Grid columns={2}>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Meme Generator</Header>
            </Grid.Column>
            <Grid.Column>
              <Message negative>
                <p>
                  This has only been tested in <Icon name="chrome" /> - and only
                  screenshots, not canvas/download
                </p>
              </Message>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <div className="ui bordered fluid image">
                <div className="meme-text top">{this.state.topText}</div>
                <div className="meme-text bottom">{this.state.bottomText}</div>
                <img src={this.state.image} alt="meme" />
              </div>
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
              <Input
                label="Top"
                fluid
                placeholder="Headline text here"
                onChange={this.handleTopText}
                value={this.state.topText}
              />
              <Divider hidden />
              <Input
                label="Bottom"
                fluid
                placeholder="Optional footer text here"
                onChange={this.handleBottomText}
                value={this.state.bottomText}
              />
              <Divider />
              <Button.Group fluid>
                <Button basic color="grey" onClick={this.handleResetText}>
                  Reset Text
                </Button>
                <Button basic color="red" onClick={this.handleResetAll}>
                  Reset All
                </Button>
              </Button.Group>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
