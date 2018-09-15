import React from "react";
import { Header, List, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

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
        <List.Item as={Link} to="/json-pretty-print">
          <Icon name="file code" />
          <List.Content>
            <List.Header>JSON Pretty Print</List.Header>
            <List.Description>
              Takes JSON and formats it in a readable way
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as={Link} to="/font-preview">
          <Icon name="font" />
          <List.Content>
            <List.Header>Font Preview</List.Header>
            <List.Description>
              Compare fonts and sizes in real time
            </List.Description>
          </List.Content>
        </List.Item>
        <List.Item as={Link} to="/character-encode">
          <Icon name="hashtag" />
          <List.Content>
            <List.Header>Character Encode</List.Header>
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
