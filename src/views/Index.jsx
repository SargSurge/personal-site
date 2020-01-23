/*!

=========================================================
* BLK Design System PRO React - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/blk-design-system-pro-react
* Copyright 2019 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
/* eslint-disable import/first */

import React from "react";

// Sections for this page
// (we've divided this page into multiple react components to make it a bit more readable)
import Basic from "./IndexSections/Basic.jsx";
import Navbars from "./IndexSections/Navbars.jsx";
import Tabs from "./IndexSections/Tabs.jsx";
import Pills from "./IndexSections/Pills.jsx";
import Pagination from "./IndexSections/Pagination.jsx";
import Notifications from "./IndexSections/Notifications.jsx";
import PreFooter from "./IndexSections/PreFooter.jsx";
import Footers from "./IndexSections/Footers.jsx";
import Typography from "./IndexSections/Typography.jsx";
import ContentAreas from "./IndexSections/ContentAreas.jsx";
import Cards from "./IndexSections/Cards.jsx";
import PlainCards from "./IndexSections/PlainCards.jsx";
import JavaScript from "./IndexSections/JavaScript.jsx";
import NucleoIcons from "./IndexSections/NucleoIcons.jsx";

// core components
import ColorNavbar from "components/Navbars/ColorNavbar.jsx";
import IndexHeader from "components/Headers/IndexHeader.jsx";
import ScrollNavbar from "../components/Navbars/ScrollNavbar";
import DemoFooter from "components/Footers/DemoFooter.jsx";
import {
  Badge,
  Button, CardBody,
  Col,
  Container, Form, FormGroup, Input, InputGroup, InputGroupAddon, InputGroupText,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
  UncontrolledCollapse
} from "reactstrap";
import classnames from "classnames"
import Slick from "react-slick";



class Index extends React.Component {
  state = {};
  componentDidMount() {
    document.body.classList.add("index-page");
    document.documentElement.scrollTop = 0;
    document.scrollingElement.scrollTop = 0;

  };
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  };

  render() {
    return (
      <>
        <ColorNavbar/>
        <IndexHeader/>
        <div className='main'>
          <div id='about'>
            <Row><div style={{height:'50px'}}></div></Row>
            <Row>
              <Col sm='12' md='12'>
                <Container className='text-center'>
                  <h1 className='title'>About Me</h1>
                </Container>
              </Col>
            </Row>
            <Row>
              <div className='content-center brand' style={{ paddingTop:'3em', margin:'auto'}}>
                <img src={require("../assets/img/aboutmeimg.jpg")} style={{height:500, padding:'3em', margin:'auto', display: 'block'}} className="rounded float-xl-left float-lg-none img-fluid" alt="A photograph of Sergio Perez"></img>
                <p className='description' style={{padding:'3em', maxWidth:1300, color:'white', lineHeight:'1.6em'}}>I am currently a candidate for a Bachelors of Science in Computer Science at MIT. I was born and raised in Charlotte, NC, but I moved to Lakeland, FL, for high school. During high school, I founded the math club and the spanish club at my school, and I held officer positions in student government and the Phi Theta Kappa Honors Society. The most meaningful project I worked on in high school was a volunteering event for spanish club. I organized a weekly event where our members would go and spend time with the kids at the RCMA Childcare Center, a center that takes care of the children of illegal immigrant workers. Because of the project, I got to hear many unique perspectives on life from parents of the kids and employees of the childcare center. Here at MIT, I’m interested in software engineering and how to develop applications personalized to the user. I want to be a part of this field because I believe there can be biases against minorities and those of low socioeconomic status when there's a lack of diversity in engineering teams working on projects that can accidentally discriminate against the lower class.
                  I have experience working with JavaScript and React, but I have a stronger background in Python. I have also done front-end web development using jQuery, HTML5, CSS3, and content management systems such as Drupal and Wordpress. In addition, I have used Wordpress to develop ecommerce sites. Most recently, I am on the MIT Robotics Team developing motion planning algorithms for our submission to the RoboCup Soccer competition next summer.
                </p>
              <Button className='btn-simple' color='primary' style={{margin:'3em'}}>Download Resume</Button>
              </div>
            </Row>
          </div>

          <Row><div style={{height:'50px'}}></div></Row>
            <div className="page-header-image" style={{backgroundImage: "url(" + require("assets/img/andre-benz.jpg") + ")"}}>
          <Container>
            <Row>
              <Col className="text-center brand" md="12">
                <h1 className="title" style={{color: 'white'}}>Got a question?</h1>
                <h3 style={{color:'white'}}>I'd be glad to talk more about what you need</h3>
              </Col>
            </Row>
          </Container>
            </div>
          <Container fluid id='contact'>

            <Row className="infos mb-5">
              <Col lg='3'></Col>
              <Col lg="3" >
                <div className="info info-hover">
                  <div className="icon icon-info">
                    <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/info.png")}
                    />
                    <i className="tim-icons icon-email-85" />
                  </div>
                  <h4 className="info-title">Email</h4>
                  <p className="description">saperez@mit.edu</p>
                </div>
              </Col>
              <Col lg="3">
                <div className="info info-hover">
                  <div className="icon icon-warning">
                    <img
                        alt="..."
                        className="bg-blob"
                        src={require("assets/img/feature-blob/warning.png")}
                    />
                    <i className="tim-icons icon-mobile" />
                  </div>
                  <h4 className="info-title">Phone Number</h4>
                  <p className="description">+1(863) 512 2911</p>
                </div>
              </Col>
              <Col lg="3"></Col>
            </Row>

          </Container>

        </div>
        <DemoFooter/>

      </>
    );
  }
}

export default Index;
