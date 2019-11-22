import React from "react";
import { Header, List, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import components from "../../components";

const Home = () => {
  return (
    <React.Fragment>
      <Header as="h1">Tools</Header>
      <p>
        Just some quick, sloppy tools made selfishly by{" "}
        <a href="https://aaronsaray.com">Aaron</a> for{" "}
        <a href="https://creativecommons.org/licenses/by-sa/4.0/">
          anyone to use
        </a>
        .
      </p>
      <Divider hidden />
      <List>
        {components.map(component => {
          if (component.ignoreInList) return "";

          return (
            <List.Item
              as={component.external ? "a" : Link}
              href={component.path}
              to={component.path}
              key={component.path}
            >
              <Icon name={component.icon} />
              <List.Content>
                <List.Header>{component.name}</List.Header>
                <List.Description>{component.description}</List.Description>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default Home;
