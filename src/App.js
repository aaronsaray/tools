import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import { Menu, Icon, Container } from "semantic-ui-react";
import Home from "./Components/Home/Home";
import JSONPrettyPrint from "./Components/JSONPrettyPrint/JSONPrettyPrint";
import FontPreview from "./Components/FontPreview/FontPreview";
import CharacterEncode from "./Components/CharacterEncode/CharacterEncode";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu as="header">
          <Container as="nav">
            <Menu.Item as={Link} to="/">
              <Icon name="wrench" />
              Quick Tools
            </Menu.Item>
            <Menu.Item as={Link} to="/json-pretty-print">
              <Icon name="code file" />
              JSON Pretty Print
            </Menu.Item>
            <Menu.Item as={Link} to="/font-preview">
              <Icon name="font" />
              Font Preview
            </Menu.Item>
            <Menu.Item as={Link} to="/character-encode">
              <Icon name="hashtag" />
              Character Encode
            </Menu.Item>
            <Menu.Item as="a" href="https://github.com/aaronsaray/tools">
              <Icon name="github" />
              Source
            </Menu.Item>
          </Container>
        </Menu>
        <Container as="main">
          <Route path="/" exact component={Home} />
          <Route path="/json-pretty-print" component={JSONPrettyPrint} />
          <Route path="/font-preview" component={FontPreview} />
          <Route path="/character-encode" component={CharacterEncode} />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
