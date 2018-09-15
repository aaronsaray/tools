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
        <List.Item as={Link} to={ROUTES["json pretty print"].path}>
          <Icon name="file code" />
          <List.Content>
            <List.Header>{ROUTES["json pretty print"].name}</List.Header>
            <List.Description>
              Takes JSON and formats it in a readable way
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as={Link} to={ROUTES["font preview"].path}>
          <Icon name="font" />
          <List.Content>
            <List.Header>{ROUTES["font preview"].name}</List.Header>
            <List.Description>
              Compare fonts and sizes in real time
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as={Link} to={ROUTES["character encode"].path}>
          <Icon name="hashtag" />
          <List.Content>
            <List.Header>{ROUTES["character encode"].name}</List.Header>
            <List.Description>
              Convert content to character encoding
            </List.Description>
          </List.Content>
        </List.Item>
      </List>
    </React.Fragment>
  );
};

export default Home;
