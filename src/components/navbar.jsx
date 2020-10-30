import React from "react"
import { faLinkedin, faAngellist, faGithub, faReadme } from "@fortawesome/free-brands-svg-icons";
import {Navbar, Nav, NavDropdown} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navigation extends React.Component {

render() {
    return(
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                <Nav.Link href="#home">Home</Nav.Link>
                <Nav.Link href="#link">Link</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
        )
    }
}

export default Navigation;


        //    <>
        // <Navbar
        //   sticky="top"
        //   className="w-100 navbar navbar-dark bg-primary mb-1"
        // >
        //   <Navbar.Brand className="main-title">Kanban</Navbar.Brand>
        //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
        //   <Navbar.Collapse id="basic-navbar-nav">
        //     <Nav className="mr-auto">
        //       <NavDropdown title="Mackenzie Young" id="basic-nav-dropdown">
        //         <NavDropdown.Item href="https://www.linkedin.com/in/mackenzie-young-296787189/">
        //           <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
        //         </NavDropdown.Item>
        //         <NavDropdown.Item href="https://angel.co/u/mac-young-1">
        //           <FontAwesomeIcon icon={faAngellist} /> AngelList
        //         </NavDropdown.Item>
        //         <NavDropdown.Item href="https://github.com/mac9330">
        //           <FontAwesomeIcon icon={faGithub} /> Github
        //         </NavDropdown.Item>
        //         <NavDropdown.Divider />
        //         <NavDropdown.Item href="https://mac9330.github.io/">
        //           <FontAwesomeIcon icon={faReadme} /> Portfolio-Site
        //         </NavDropdown.Item>
        //       </NavDropdown>
        //     </Nav>
        //     <Nav.Link
        //       href="https://github.com/mac9330/Kantan"
        //       className=" nav text-white"
        //     >
        //       ReadMe <FontAwesomeIcon icon={faReadme} />
        //     </Nav.Link>
        //   </Navbar.Collapse>
        // </Navbar>
        // </>