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
      </List>
    </React.Fragment>
  );
};

export default Home;