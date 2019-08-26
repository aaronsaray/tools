import React, { Component } from "react";
import {
  Container,
  Form,
  Input,
  Divider,
  Table,
  Button
} from "semantic-ui-react";
import "./NDA.css";

/**
 * Heavily inspired by Plain Text NDA
 * @see https://stuffandnonsense.co.uk/projects/three-wise-monkeys
 */

export default class NDA extends Component {
  state = {
    customerName: ""
  };

  handleClientName = e => {
    const customerName = e.target.value;
    this.setState({ customerName });
  };

  handlePrint = () => {
    window.print();
  };

  render() {
    return (
      <Container>
        <Form>
          <Button
            floated="right"
            primary
            content="Print"
            onClick={this.handlePrint}
          />
          <h1>Non Disclosure Agreement</h1>
          <h2>
            Between More Better Faster LLC and{" "}
            <Input onChange={this.handleClientName} />
          </h2>
          <h3>Summary</h3>
          <p>
            In short; neither of us will share any confidential information
            about each other, by any means, with anyone else.
          </p>
          <h3>What’s confidential information?</h3>
          <p>
            It’s anything we write or say to each other in a phone call, chat
            window, email or by any other method including smoke signals and
            telepathy. It might relate to a project, be about our businesses or
            something technical like a password. Nothing’s excluded. If we share
            it, it’s covered.
          </p>
          <p>
            We’ll both keep shared information to ourselves and we won’t use it
            except for the reason it was shared. We’ll take every step to make
            sure it stays confidential too. We’ll keep confidential information
            safe and secure. This includes keeping files, access to online
            systems and any user names and passwords in such a way that they
            can’t fall into the wrong hands.
          </p>
          <p>
            If we think that there’s even a possibility that any confidential
            information might have been compromised, we agree to tell each-other
            us right away so we can take all necessary steps to protect
            ourselves. We also agree to help each-other to resolve any problems
            that might arise if confidential information is compromised.
          </p>
          <p>
            When this agreement ends, we’ll return any materials, physical or
            digital and delete any copies that we may have.
          </p>
          <h3>So what can we say?</h3>
          <p>
            This agreement doesn’t apply to any information that’s already in
            the public domain or might become public by any other means.
            Although we hope that it will never happen, it also does not cover a
            situation where the police coming knocking at our doors and we’re
            required by law to disclose it.
          </p>
          <p>
            From time to time, we may share anonymous technical solutions that
            are unrelated to your business domain and intellectual property. For
            example, if you hired us to create a special lock for a door, we may
            share a technique we developed to sand the edges of a door jam as
            not to get splinters.
          </p>
          <h3>How long does this agreement last?</h3>
          <p>
            Unless we’ve agreed otherwise — for example within a separate
            contract — this agreement lasts for <strong>one year</strong> from
            the last signature date down below. On or before that termination
            date, either of us can then specify items of confidential
            information that must never be disclosed. These might include a
            password or information about a project or our business.
          </p>
          <h3>Many More Details</h3>
          <p>
            We both agree to enter this agreement in good faith, executing the
            requirements to the best of our ability. If things happen outside of
            our control that expose data, you agree not to hold us liable for
            it. We agree to take all possible actions to secure your
            information, just in case. For example, if our office is pillaged
            during a riot and all of our equipment stolen, you won't hold us
            liable for any information that was obtained. (But rest assured, the
            harddrives of all laptops are encrypted anyway.)
          </p>
          <p>
            Just like a parking ticket, we can’t transfer this contract to
            anyone else without permission. If, for some reason, one part of
            this contract becomes invalid or unenforceable, the remaining parts
            of it remain in place. Although the language is simple, the
            intentions are serious and this contract is a legal document under
            exclusive jurisdiction of Wisconsin courts.
          </p>
          <Divider />
          <h3>Signatures</h3>
          <p>
            If you need to sign this document, you can do so here. Otherwise,
            email response as an "electronic signature" is fine with us.
          </p>
          <Divider hidden />
          <Table basic="very" columns={4}>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <span className="signature-line" />
                </Table.Cell>
                <Table.Cell>
                  <span className="signature-line" />
                </Table.Cell>
                <Table.Cell>
                  <span className="signature-line" />
                </Table.Cell>
                <Table.Cell>
                  <span className="signature-line" />
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.Cell>{this.state.customerName}</Table.Cell>
                <Table.Cell>Date</Table.Cell>
                <Table.Cell>More Better Faster LLC</Table.Cell>
                <Table.Cell>Date</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </Form>
      </Container>
    );
  }
}
