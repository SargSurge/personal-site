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
import React from "react";

// reactstrap components
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

class homeHeader extends React.Component {
  componentDidMount() {
    document.body.classList.add("index-page");
  }
  componentWillUnmount() {
    document.body.classList.remove("index-page");
  }
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

export default homeHeader;
