import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import ROUTES from "./Routes";
import { Menu, Icon, Container } from "semantic-ui-react";
import Home from "./Components/Home/Home";
import JSONPrettyPrint from "./Components/JSONPrettyPrint/JSONPrettyPrint";
import FontPreview from "./Components/FontPreview/FontPreview";
import CharacterEncode from "./Components/CharacterEncode/CharacterEncode";
import MarkdownTable from "./Components/MarkdownTable/MarkdownTable";
import ContractGenerator from "./Components/ContractGenerator/ContractGenerator";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu as="header">
          <Container as="nav">
            <Menu.Item as={Link} to={ROUTES["home"].path}>
              <Icon name="wrench" />
              {ROUTES["home"].name}
            </Menu.Item>
            <Menu.Item as={Link} to={ROUTES["json pretty print"].path}>
              <Icon name="code file" />
              {ROUTES["json pretty print"].name}
            </Menu.Item>
            <Menu.Item as={Link} to={ROUTES["font preview"].path}>
              <Icon name="font" />
              {ROUTES["font preview"].name}
            </Menu.Item>
            <Menu.Item as={Link} to={ROUTES["character encode"].path}>
              <Icon name="hashtag" />
              {ROUTES["character encode"].name}
            </Menu.Item>
            <Menu.Item as={Link} to={ROUTES["markdown table"].path}>
              <Icon name="table" />
              {ROUTES["markdown table"].name}
            </Menu.Item>
            <Menu.Item as={Link} to={ROUTES["contract generator"].path}>
              <Icon name="file alternate" />
              {ROUTES["contract generator"].name}
            </Menu.Item>
            <Menu.Item as="a" href="https://github.com/aaronsaray/tools">
              <Icon name="github" />
              Source
            </Menu.Item>
          </Container>
        </Menu>
        <Container as="main">
          <Route path={ROUTES["home"].path} exact component={Home} />
          <Route
            path={ROUTES["json pretty print"].path}
            component={JSONPrettyPrint}
          />
          <Route path={ROUTES["font preview"].path} component={FontPreview} />
          <Route
            path={ROUTES["character encode"].path}
            component={CharacterEncode}
          />
          <Route
            path={ROUTES["markdown table"].path}
            component={MarkdownTable}
          />
          <Route
            path={ROUTES["contract generator"].path}
            component={ContractGenerator}
          />
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
