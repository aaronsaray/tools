import React from "react";
import { Header, List, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";
import ROUTES from "../../Routes";

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
        {ROUTES.map(route => {
          if (route.ignoreInList) return;

          return (
            <List.Item as={Link} to={route.path}>
              <Icon name={route.icon} />
              <List.Content>
                <List.Header>{route.name}</List.Header>
                <List.Description>{route.description}</List.Description>
              </List.Content>
            </List.Item>
          );
        })}
      </List>
    </React.Fragment>
  );
};

export default Home;
