import React, { Component } from "react";
import {
  Container,
  Grid,
  Header,
  Dropdown,
  Input,
  Segment,
  Divider
} from "semantic-ui-react";
import { Slider } from "react-semantic-ui-range";

class FontPreview extends Component {
  sizeSettings = {
    start: 12,
    min: 1,
    max: 40,
    step: 1,
    onChange: value => {
      this.setState({
        size: value
      });
    }
  };

  state = {
    size: this.sizeSettings.start,
    font: "Helvetica"
  };

  render() {
    const dropDownOptions = [
      {
        key: "Helvetica",
        value: "Helvetica",
        text: "Helvetica"
      },
      {
        key: "Arial",
        value: "Arial",
        text: "Arial"
      }
    ];

    return (
      <Container>
        <Header as="h1">Font Preview</Header>
        <Grid>
          <Grid.Row columns={2}>
            <Grid.Column>
              <Header as="h2">Font</Header>
              <Dropdown
                options={dropDownOptions}
                defaultValue={dropDownOptions[0].value}
              />
            </Grid.Column>
            <Grid.Column>
              <Header as="h2">Size</Header>
              <Grid>
                <Grid.Row>
                  <Grid.Column width={4}>
                    <Input
                      fluid
                      value={this.state.size}
                      label={{ basic: true, content: "px" }}
                      labelPosition="right"
                      disabled
                    />
                  </Grid.Column>
                  <Grid.Column width={12}>
                    <Slider
                      color="black"
                      inverted={false}
                      settings={this.sizeSettings}
                    />
                  </Grid.Column>
                </Grid.Row>
              </Grid>
            </Grid.Column>
          </Grid.Row>
        </Grid>
        <Divider hidden />
        <Segment style={{ font: this.state.font, fontSize: this.state.size }}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut a sem
            vitae orci eleifend interdum sed non odio. Donec tempor mollis
            ultrices. Integer venenatis mollis ipsum malesuada egestas. Mauris
            eu est in lectus facilisis dignissim in vel quam. Praesent mattis
            semper accumsan. Vivamus congue enim ut neque congue, non iaculis
            risus finibus. Vestibulum ante ipsum primis in faucibus orci luctus
            et ultrices posuere cubilia Curae; Nunc sagittis ullamcorper
            vulputate. Nulla dapibus nisl at luctus condimentum. Morbi mi arcu,
            luctus ut velit sed, vehicula lacinia augue.
          </p>

          <p>
            Sed dignissim, risus et vehicula posuere, diam sem volutpat turpis,
            ac convallis urna ex id lectus. Praesent sollicitudin dictum eros,
            vitae laoreet neque iaculis et. Integer finibus neque quis consequat
            efficitur. Cras et mollis justo. Phasellus enim tellus, cursus vitae
            erat in, faucibus gravida neque. Fusce ornare tristique tellus.
            Quisque eget libero ut neque gravida facilisis a id dui. Aliquam eu
            efficitur lorem. Ut justo quam, fermentum quis lacus sed, pharetra
            egestas eros. Curabitur quis neque nec eros commodo rutrum. Interdum
            et malesuada fames ac ante ipsum primis in faucibus. Integer nec
            purus quis eros sodales auctor ut sit amet est. Nullam pellentesque
            lacus quis mattis volutpat. Maecenas non mi suscipit sapien rutrum
            egestas eu eget sapien.
          </p>

          <p>
            Donec eu accumsan sem. Donec vitae lacus nunc. Vestibulum eu quam
            vel tellus varius dictum eget eu eros. Morbi ut vulputate nunc. Sed
            non arcu sit amet quam euismod fringilla. Vestibulum ultrices et
            lorem vel consectetur. Cras ac ultricies magna, sit amet finibus
            nibh. Suspendisse potenti. In blandit enim ut justo finibus, eget
            luctus lectus porttitor. Aenean facilisis facilisis pretium. Aenean
            posuere velit quis lectus molestie, ut vehicula ipsum ornare.
            Maecenas ut erat nisl. Curabitur tincidunt ante vulputate, iaculis
            purus eget, interdum magna.
          </p>
        </Segment>
      </Container>
    );
  }
}

export default FontPreview;
