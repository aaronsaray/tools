import React, { Component } from "react";
import {
  Container,
  Form,
  Input,
  TextArea,
  Checkbox,
  List,
  Divider,
  Table,
  Button
} from "semantic-ui-react";
import "./ContractGenerator.css";

/**
 * Heavily inspired by Contract Killer
 * @see https://gist.github.com/malarkey/4031110
 */

export default class ContractGenerator extends Component {
  state = {
    customerName: "",
    totalInvoice: "",
    hourlyRate: "",
    hiredForWhat: [],
    hasChosenFlatRate: false,
    hasChosenHourlyRate: false
  };

  handleClientName = e => {
    const customerName = e.target.value;
    this.setState({ customerName });
  };

  handleTotalInvoice = e => {
    const totalInvoice = e.target.value;
    this.setState({ totalInvoice });
  };

  handleHourlyRate = e => {
    const hourlyRate = e.target.value;
    this.setState({ hourlyRate });
  };

  handleHiredForWhat = (e, data) => {
    let hiredForWhat = this.state.hiredForWhat;

    if (data.checked) {
      hiredForWhat.push(data.label);
    } else {
      hiredForWhat = hiredForWhat.filter(what => {
        return what !== data.label;
      });
    }

    this.setState({
      hiredForWhat
    });
  };

  handleChooseFlatRate = (e, data) => {
    this.setState({
      hasChosenFlatRate: data.checked
    });
  };

  handleChooseHourlyRate = (e, data) => {
    this.setState({
      hasChosenHourlyRate: data.checked
    });
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
          <h1>Contract / Statement of Work / Agreement</h1>
          <h2>
            Between More Better Faster LLC and{" "}
            <Input onChange={this.handleClientName} />
          </h2>
          <h3>Summary</h3>
          <p>
            We’ll always do our best to fulfil your needs and meet your
            expectations, but it’s important to have things written down so that
            we both know what’s what, who should do what and when, and what will
            happen if something goes wrong. In this contract you won’t find any
            complicated legal terms or long passages of unreadable text. We’ve
            no desire to trick you into signing something that you might later
            regret. What we do want is what’s best for both parties, now and in
            the future.
          </p>
          <h3>So in short;</h3>
          <p>
            You {this.state.customerName} ("You") are hiring More Better Faster
            LLC ("We or Us") to:
          </p>
          <List>
            <List.Item>
              <Checkbox
                label="Design and develop a website / web app"
                onChange={this.handleHiredForWhat}
              />
            </List.Item>
            <List.Item>
              <Checkbox
                label="Create a requirements document and wireframe"
                onChange={this.handleHiredForWhat}
              />
            </List.Item>
            <List.Item>
              <Checkbox
                label="Provide code review and consulting services"
                onChange={this.handleHiredForWhat}
              />
            </List.Item>
          </List>
          <ul className="for-print">
            {this.state.hiredForWhat.map(what => {
              return <li>{what}</li>;
            })}
          </ul>
          <Divider hidden />
          <List>
            <List.Item>
              <Checkbox
                className="no-label"
                onChange={this.handleChooseFlatRate}
              />{" "}
              For the flat rate total of{" "}
              <Input
                label={{ basic: true, content: "$" }}
                labelPosition="left"
                onChange={this.handleTotalInvoice}
              />
            </List.Item>
            <List.Item>
              <Checkbox
                className="no-label"
                onChange={this.handleChooseHourlyRate}
              />{" "}
              For the hourly rate of{" "}
              <Input
                label={{ basic: true, content: "$" }}
                labelPosition="left"
                onChange={this.handleHourlyRate}
              />
            </List.Item>
          </List>
          <ul className="for-print">
            <li hidden={!this.state.hasChosenFlatRate}>
              For the estimated total price of ${this.state.totalInvoice}
            </li>
            <li hidden={!this.state.hasChosenHourlyRate}>
              For the hourly rate of ${this.state.hourlyRate}
            </li>
          </ul>
          <Divider hidden />
          <p>
            Of course it’s a little more complicated, but we’ll get to that.
          </p>
          <h3>What do both parties agree to?</h3>
          <p>
            <strong>You:</strong> You have the authority to enter into this
            contract on behalf of yourself, your company or your organization.
            You’ll give us the assets and information we tell you we need to
            complete the project. You’ll do this when we ask and provide it in
            the formats we ask for. You’ll review our work, provide feedback and
            approval in a timely manner too. Deadlines work two ways, so you’ll
            also be bound by dates we set together. You also agree to stick to
            the payment schedule set out at the end of this contract.
          </p>
          <p>
            <strong>Us:</strong> We have the experience and ability to do
            everything we’ve agreed with you and we’ll do it all in a
            professional and timely manner. We’ll endeavour to meet every
            deadline that’s set and on top of that we'll maintain the
            confidentiality of everything you give us.
          </p>
          <h3>Many More Details</h3>
          <p>
            The following sections are standard for all works we provide. They
            may or may not be applicable for your specific project. For example,
            if we're contracting to do wireframes, the sections about providing
            code and browser testing do not apply. I think you get it.
          </p>
          <h4>Design</h4>
          <p>
            We create look-and-feel designs, and flexible layouts that adapt to
            the capabilities of many devices and screen sizes. We create designs
            iteratively and use predominantly HTML and CSS so we won’t waste
            time mocking up every template as a static visual. We may use
            visuals to indicate a creative direction (colour, texture and
            typography.)
          </p>
          <p>
            While we try our best to provide pleasing designs, we do not
            specialize in design. You may wish to contract with a different
            Designer to provide a more stylized version of your application or
            website. In this circumstance, the third party can work directly
            with us or through you. Please bear in mind that our timelines will
            be directly affected by their deliverables.
          </p>
          <p>
            You’ll have plenty of opportunities to review our work and provide
            feedback. We’ll either share a Dropbox, Google Drive folder or
            Github repository or development site with you and we’ll have
            regular contact.
          </p>
          <p>
            If, at any stage, you change your mind about what you want to be
            delivered and are not happy with the direction our work is taking
            you’ll pay us in full for the time we’ve spent working with you
            until that point and terminate this contract.
          </p>
          <h4>Graphics and photographs</h4>
          <p>
            You should supply graphic files in an editable, vector digital
            format. You should supply photographs in a high resolution digital
            format. If you choose to buy stock photographs, we can suggest stock
            libraries. If you’d like us to search for photographs for you, we
            can provide a separate estimate for that.
          </p>
          <h4>HTML, CSS and JavaScript</h4>
          <p>
            We deliver web page types developed from HTML markup, CSS
            stylesheets for styling and unobtrusive JavaScript for feature
            detection, poly-fills and behaviors.
          </p>
          <h4>Browser testing</h4>
          <p>
            Browser testing no longer means attempting to make a website look
            the same in browsers of different capabilities or on devices with
            different size screens. It does mean ensuring that a person’s
            experience of a design should be appropriate to the capabilities of
            a browser or device.
          </p>
          <p>
            We test our work in current versions of major desktop browsers
            including those made by Apple (Safari), Google (Chrome), Microsoft
            (Edge), and Mozilla Firefox. We’ll also test to ensure that people
            who use Microsoft Internet Explorer 11 for Windows get an
            appropriate experience. We won’t test in other older browsers unless
            we agreed separately. If you need an enhanced design for an older
            browser, we can provide a separate estimate for that.
          </p>
          <h4>Mobile browser testing</h4>
          <p>
            Mobile browser testing Testing using popular smaller screen devices
            is essential in ensuring that a person’s experience of a design is
            appropriate to the capabilities of the device they’re using. We test
            our designs in the latest iOS using Safari and Google Chrome, and
            Google Chrome on the latest Android version.
          </p>
          <p>
            We won’t test in Blackberry, Opera Mini/Mobile, specific Android
            devices, Windows or other mobile browsers unless we agreed
            separately. If you need us to test using these, we can provide a
            separate estimate for that.
          </p>
          <h4>Technical support</h4>
          <p>
            We’re not a website hosting company so we don’t offer support for
            website hosting, email or other services relating to hosting. You
            may already have professional hosting and you might even manage that
            hosting in-house; if you do, great. If you don’t, we can suggest a
            provider that meets your needs. We can walk you through setting up
            the account, but the account must be owned and operated by you. We
            may need specific access to your account to deliver the finished
            product. Then, the updates to, and management of that server will be
            up to you, unless we agree otherwise.
          </p>
          <h4>Tools of the Trade</h4>
          <p>
            In order to provide the best development and deployment experience
            using best practices, we may require you to purchase additional
            services to support the product. We respect your budget and won't
            suggest outrageous services.
          </p>
          <h4>Search engine optimization (SEO)</h4>
          <p>
            We don’t guarantee improvements to your website’s search engine
            ranking, but the web pages that we develop are accessible to search
            engines.
          </p>
          <h4>Changes and revisions</h4>
          <p>
            We don’t want to limit your ability to change your mind. The price
            at the beginning of this contract is based on the effort that we
            estimate we’ll need to accomplish everything you’ve told us you want
            to achieve, but we’re happy to be flexible. If you want to change
            your mind or add anything new, that won’t be a problem as we’ll
            provide a separate estimate for those additional requirements.
          </p>
          <p>
            During the process of development, we'll discuss what's included and
            what's additional work. This is called "scope" which can be
            confusing at times. We'll try our best to explain what is in scope
            and what's out of scope.
          </p>
          <h4>Legal stuff</h4>
          <p>
            We’ll carry out our work in accordance with good industry practice
            and at the standard expected from a suitably qualified person with
            relevant experience.
          </p>
          <p>
            That said, we can’t guarantee that our work will be error-free and
            so we can’t be liable to you or any third-party for damages,
            including lost profits, lost savings or other incidental,
            consequential or special damages, even if you’ve advised us of them.
          </p>
          <p>
            Your liability to us will also be limited to the amount of fees
            payable under this contract and you won’t be liable to us or any
            third-party for damages, including lost profits, lost savings or
            other incidental, consequential or special damages, even if we’ve
            advised you of them.
          </p>
          <p>
            Finally, if any provision of this contract shall be unlawful, void,
            or for any reason unenforceable, then that provision shall be deemed
            severable from this contract and shall not affect the validity and
            enforceability of any remaining provisions.
          </p>
          <h4>Intellectual property rights</h4>
          <p>
            Just to be clear, “Intellectual property rights” means all patents,
            rights to inventions, copyright (including rights in software) and
            related rights, trademarks, service marks, get up and trade names,
            internet domain names, rights to goodwill or to sue for passing off,
            rights in designs, database rights, rights in confidential
            information (including know-how) and any other intellectual property
            rights, in each case whether registered or unregistered and
            including all applications (or rights to apply) for, and renewals or
            extensions of, such rights and all similar or equivalent rights or
            forms of protection which subsist or shall subsist now or in the
            future in any part of the world.
          </p>
          <p>
            First, you guarantee that all elements of text, images or other
            artwork you provide are either owned by your good selves, or that
            you’ve permission to use them. When you provide text, images or
            other artwork to us, you agree to protect us from any claim by a
            third party that we’re using their intellectual property.
          </p>
          <p>
            We guarantee that all elements of the work we deliver to you are
            either owned by us or we’ve obtained permission to provide them to
            you. When we provide text, images or other artwork to you, we agree
            to protect you from any claim by a third party that you’re using
            their intellectual property. Provided you’ve paid for the work and
            that this contract hasn’t been terminated, we’ll assign all
            intellectual property rights to you as follows:
          </p>
          <p>
            You’ll own the website, application or deliverables we create for
            you plus the visual elements that we create for it. We’ll give you
            source files and finished files and you should keep them somewhere
            safe as we’re not required to keep a copy. You own all intellectual
            property rights of text, images, site specification and data you
            provided, unless someone else owns them.
          </p>
          <p>
            We’ll own any intellectual property rights we’ve developed prior to,
            or developed separately from this project and not paid for by you.
            We’ll own the unique combination of these elements that constitutes
            a complete design and we’ll license its use to you, exclusively and
            in perpetuity for this project only, unless we agree otherwise.
          </p>
          <p>
            Some of the work we create is based on Open Source Software. Some is
            required to be shared with the community while others are shared to
            benefit the community as a form of good will. None of the works that
            we may share will be industry or trade secrets of yours. For
            example, we'll never share your secret algorithm for suggesting the
            next best widget to purchase. We may share a way to make sites
            respond quicker on legacy phone browsers that we learned during the
            execution of your project.
          </p>
          <h4>Displaying our work</h4>
          <p>
            We love to show off our work, so we reserve the right to display any
            publicly viewable portions of our creative work, including sketches,
            work-in-progress designs and the completed project on our portfolio
            and in articles on websites, in magazine articles and in books.
            Proprietary company information will never be shared. We retain the
            right to mention that You contracted us for work.
          </p>
          <h3>Payment</h3>
          <p>
            We’re sure you understand how important it is as a small business
            that you pay the invoices that we send you promptly. As we’re also
            sure you’ll want to stay friends, you agree to stick tight to the
            following payment details schedule.
          </p>
          <h4>Details</h4>
          <TextArea
            autoHeight
            rows={1}
            placeholder={
              "Restate $" +
              this.state.totalInvoice +
              " cover down payment, and schedule here"
            }
          />
          <h4>Payment schedule</h4>
          <p>
            We issue invoices electronically. Our payment terms are 10 days from
            the date of invoice (unless specified differently on the invoice).
            These can be paid online via Credit Card or through the mail with
            Check.
          </p>
          <p>
            We reserve the right to charge interest on all overdue debts at the
            rate of 1% per month or part of a month.
          </p>
          <h3>But where’s all the horrible small print?</h3>
          <p>
            Just like a parking ticket, neither of us can transfer this contract
            to anyone else without the other’s permission.
          </p>
          <p>
            We both agree that we’ll adhere to all relevant laws and regulations
            in relation to our activities under this contract and not cause the
            other to breach any relevant laws or regulations.
          </p>
          <p>
            This contract stays in place and need not be renewed. If for some
            reason one part of this contract becomes invalid or unenforceable,
            the remaining parts of it remain in place.
          </p>
          <p>
            Although the language is simple, the intentions are serious and this
            contract is a legal document under exclusive jurisdiction of
            Wisconsin courts.
          </p>
          <h3>How do you accept this agreement?</h3>
          <p>
            Our relationship is built on trust, but it's good to set
            expectations right out of the gate. That's what this document is all
            about. To accept this contract, all you have to do is reply via
            email that you accept the contract as written, and then we'll get
            started.
          </p>
          <p>
            Sometimes, the legal departments want signatures. If that's the
            case, you can sign and date the contract and send it back to us.
            We'll reply with a signed version of it as well, and then we can get
            going.
          </p>
          <h3>Detailed Statement of Work</h3>
          <p>
            Sure, some bullet points at the top of the contract are nice, but
            what are we actually going to do? Let us spell it out for you:
          </p>
          <TextArea
            autoHeight
            rows={1}
            placeholder="Cover deliverables, process, and any time line"
          />
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
