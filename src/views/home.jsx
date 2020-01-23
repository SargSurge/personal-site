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
import DemoFooter from "components/Footers/DemoFooter.jsx";
import homeHeader from "../components/Headers/homeHeader";
import {
  Button,
  Col,
  Container,
  Nav,
  Navbar,
  NavbarBrand,
  NavItem,
  NavLink,
  Row,
  UncontrolledCollapse
} from "reactstrap";



class landing extends React.Component {

  render() {
    return (
        <>
          <div className="header header-4">
            <div className="header-wrapper">
              <Navbar className="navbar-transparent" expand="lg">
                <Container>
                  <div className="navbar-translate">
                    <button className="navbar-toggler" id="example-header-4">
                      <span className="navbar-toggler-bar bar1"/>
                      <span className="navbar-toggler-bar bar2"/>
                      <span className="navbar-toggler-bar bar3"/>
                    </button>
                    <NavbarBrand
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                      Creative Tim
                    </NavbarBrand>
                  </div>
                  <UncontrolledCollapse navbar toggler="#example-header-4">
                    <div className="navbar-collapse-header">
                      <Row>
                        <Col className="collapse-brand" xs="6">
                          <a href="#pablo" onClick={e => e.preventDefault()}>
                            BLK• <span>PRO React</span>
                          </a>
                        </Col>
                        <Col className="collapse-close text-right" xs="6">
                          <button
                              className="navbar-toggler"
                              id="example-header-4"
                          >
                            <i className="tim-icons icon-simple-remove"/>
                          </button>
                        </Col>
                      </Row>
                    </div>
                    <Nav className="mx-auto" navbar>
                      <NavItem className="active">
                        <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          Home
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          About Us
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          Products
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                        >
                          Contact Us
                        </NavLink>
                      </NavItem>
                    </Nav>
                    <Nav className="nav navbar-right" navbar>
                      <NavItem>
                        <NavLink
                            href="https://twitter.com/CreativeTim"
                            target="_blank"
                        >
                          <i className="fab fa-twitter"/>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            href="https://www.facebook.com/CreativeTim"
                            target="_blank"
                        >
                          <i className="fab fa-facebook-square"/>
                        </NavLink>
                      </NavItem>
                      <NavItem>
                        <NavLink
                            href="https://www.instagram.com/CreativeTimOfficial"
                            target="_blank"
                        >
                          <i className="fab fa-instagram"/>
                        </NavLink>
                      </NavItem>
                    </Nav>
                  </UncontrolledCollapse>
                </Container>
              </Navbar>
              <div className="page-header header-video header-filter">
                <div className="overlay"/>
                <video
                    autoPlay="autoplay"
                    loop="loop"
                    muted="muted"
                    playsinline="playsinline"
                >
                  <source
                      src="https://storage.googleapis.com/coverr-main/mp4/Mt_Baker.mp4"
                      type="video/mp4"
                  />
                </video>
                <Container className="text-center">
                  <div className="video-text">
                    <h2 className="description">Make it</h2>
                    <h1 className="title">Stand out</h1>
                    <br/>
                    <Button
                        className="btn-simple btn-neutral"
                        color="default"
                        href="#pablo"
                        onClick={e => e.preventDefault()}
                    >
                      Dare for more
                    </Button>
                  </div>
                </Container>
              </div>
            </div>
          </div>
        </>
    );
  }
}

export default landing;
