import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
          isNavOpen: false
        };
      }

      toggleNav() {
        this.setState({
          isNavOpen: !this.state.isNavOpen
        });
      }

    render() {
        return(
            <div>
                <Navbar dark expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                            <NavItem>
                                <NavLink className="nav-link"  to='/home'><span className="fa fa-home fa-lg"></span> Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" to='/prevention'><span className="fa fa-info fa-lg"></span>Prevention</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link"  to='/symptoms'><span className="fa fa-info fa-lg"></span>Symptoms</NavLink>
                            </NavItem>
                            
                            <NavItem>
                                <NavLink className="nav-link" to='/statistics'><span className="fa fa-address-card fa-lg"></span> Statistics</NavLink>
                            </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>COVID_19 TRACKER</h1>
                                <h2>your one-stop site for all the information you need, to be updated on the Corona Virus pandemic</h2>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
                
            </div>
        );
    }
}


export default Header;