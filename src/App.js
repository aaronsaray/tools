import React, { Component } from "react";
import { Route, Link } from "react-router-dom";
import components from "./components";
import { Menu, Icon, Container } from "semantic-ui-react";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Menu as="header">
          <Container as="nav">
            {components.map(component => {
              return (
                <Menu.Item as={Link} to={component.path}>
                  <Icon name={component.icon} />
                  {component.name}
                </Menu.Item>
              );
            })}
          </Container>
        </Menu>
        <Container as="main">
          {components.map(component => {
            return (
              <Route
                path={component.path}
                exact
                component={component.component}
              />
            );
          })}
        </Container>
      </React.Fragment>
    );
  }
}

export default App;
