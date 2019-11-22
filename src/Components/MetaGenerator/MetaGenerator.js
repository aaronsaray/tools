import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Input,
  Form,
  TextArea,
  Select
} from "semantic-ui-react";

/**
 * hex/rgb math from https://stackoverflow.com/a/5624139/2030153
 */

export default class MetaGenerator extends Component {
  state = {
    title: "",
    description: "",
    keywords: "",
    url: "",
    imageUrl: "",
    siteName: "",
    type: "",
    characterCount: {
      title: 0,
      description: 0
    }
  };

  handleChange = (type, value) => {
    let newState = {};
    newState[type] = value;
    newState.characterCount = this.state.characterCount;
    newState.characterCount[type] = value.length;
    this.setState(newState);
  };

  render() {
    let titleTag = this.state.title
      ? "<title>" + this.state.title + "</title>"
      : "";

    let descriptionTag = this.state.description
      ? '<meta name="description" content="' + this.state.description + '">'
      : "";

    let keywordsTag = this.state.keywords
      ? '<meta name="keywords" content="' + this.state.keywords + '">'
      : "";

    let ogTitleTag = this.state.title
      ? '<meta property="og:title" content="' + this.state.title + '">'
      : "";

    let ogDescriptionTag = this.state.description
      ? '<meta property="og:description" content="' +
        this.state.description +
        '">'
      : "";

    let ogUrlTag = this.state.url
      ? '<meta property="og:url" content="' + this.state.url + '">'
      : "";

    let ogSiteNameTag = this.state.siteName
      ? '<meta property="og:site_name" content="' + this.state.siteName + '">'
      : "";

    let ogImageUrlTag = this.state.imageUrl
      ? '<meta property="og:image" content="' + this.state.imageUrl + '">'
      : "";

    let ogTypeTag = this.state.type
      ? '<meta property="og:type" content="' + this.state.type + '">'
      : "";

    let tags = [
      titleTag,
      descriptionTag,
      keywordsTag,
      ogTitleTag,
      ogDescriptionTag,
      ogUrlTag,
      ogSiteNameTag,
      ogImageUrlTag,
      ogTypeTag
    ]
      .filter(v => v)
      .join("\n");

    let characterCount = key => {
      return this.state.characterCount[key]
        ? "Character count: " + this.state.characterCount[key]
        : "";
    };

    let typeOptions = [
      {
        key: "article",
        value: "article",
        text: "Article"
      },
      {
        key: "object",
        value: "object",
        text: "Generic Object"
      },
      {
        key: "website",
        value: "website",
        text: "Website"
      }
    ];

    return (
      <Container>
        <Grid>
          <Grid.Row>
            <Grid.Column>
              <Header as="h1">Meta Tag Generator</Header>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h2">Configuration</Header>
              <Form>
                <Form.Field>
                  <label>
                    Title of Page
                    <span>{characterCount("title")}</span>
                  </label>
                  <Input
                    onChange={(e, { value }) =>
                      this.handleChange("title", value)
                    }
                    placeholder="Should be within 70 characters"
                  />
                </Form.Field>
                <Form.Field>
                  <label>
                    Description of Page
                    <span>{characterCount("description")}</span>
                  </label>
                  <TextArea
                    onChange={(e, { value }) =>
                      this.handleChange("description", value)
                    }
                    placeholder="Should be within 150 characters"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Keywords (comma-separated)</label>
                  <Input
                    onChange={(e, { value }) =>
                      this.handleChange("keywords", value)
                    }
                  />
                </Form.Field>
                <Form.Field>
                  <label>Url of Page</label>
                  <Input
                    onChange={(e, { value }) => this.handleChange("url", value)}
                    type="url"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Url of Image</label>
                  <Input
                    onChange={(e, { value }) =>
                      this.handleChange("imageUrl", value)
                    }
                    type="url"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Name of Site</label>
                  <Input
                    onChange={(e, { value }) =>
                      this.handleChange("siteName", value)
                    }
                    placeholder="This is not the same as the page title"
                  />
                </Form.Field>
                <Form.Field>
                  <label>Type</label>
                  <Select
                    placeholder="Select a type"
                    options={typeOptions}
                    onChange={(e, { value }) =>
                      this.handleChange("type", value)
                    }
                  />
                </Form.Field>
              </Form>
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">HTML</Header>
              <pre>
                <code>{tags}</code>
              </pre>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Container>
    );
  }
}
