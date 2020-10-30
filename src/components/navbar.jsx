import React from "react"
import { faLinkedin, faAngellist, faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";







class Navigation extends React.Component {

render() {
    return(
            <>
        <Navbar
          sticky="top"
          className="w-100 navbar navbar-dark bg-secondary mb-1"
        >
          <Navbar.Brand className="main-title">Tandem Trivia</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <NavDropdown title="Mackenzie Young" id="basic-nav-dropdown">
                <NavDropdown.Item href="https://www.linkedin.com/in/mackenzie-young-296787189/">
                  <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
                </NavDropdown.Item>
                <NavDropdown.Item href="https://angel.co/u/mac-young-1">
                  <FontAwesomeIcon icon={faAngellist} /> AngelList
                </NavDropdown.Item>
                <NavDropdown.Item href="https://github.com/mac9330">
                  <FontAwesomeIcon icon={faGithub} /> Github
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="https://mac9330.github.io/">
                  <FontAwesomeIcon icon={faReadme} /> Portfolio-Site
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
            <Nav.Link
              href="https://github.com/mac9330/tandem-trivia"
              className=" nav text-white"
            >
              ReadMe <FontAwesomeIcon icon={faReadme} />
            </Nav.Link>
          </Navbar.Collapse>
        </Navbar>
        </>
        )
    }
}

export default Navigation;
