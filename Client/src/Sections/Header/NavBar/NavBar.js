// import React from 'react';
// import './navbar.css';
// import logo from '../../../images/Frame.svg';
// import svg from '../../../images/Frame 45.svg';
// import arrow from '../../../images/Vector.svg';
// // import {Button} from 'react-bootstrap';
// import Btn from '../../../Components/Button/Button';

// function NavBar(){
//     return(
//         <nav className='row'>
//             <div className='col-2'>
//                 <img src={logo} alt='logo'/>
//             </div>
//             <ul className='col-4'>
//                 <li><a href='./'>Home</a></li>
//                 <li><a href='./'>Category</a></li>
//                 <li><a href='./'>About</a></li>
//                 <li><a href='./'>Contact</a></li>
//             </ul>
//             <form className='col-6'>
//                 <div className="input-box">
//                     <i className="fa fa-search"></i>                    
//                     <input type="text" className="form-control" placeholder='Search something here!'/>
//                     <Btn className='Btn' text="Join the community"></Btn>
//                     <div className='CountryDropdown'>
//                         <img src={svg} alt='Svg'/>
//                         <p>VND</p>
//                         <img className='arrow' src={arrow} alt="arrow"/>
//                     </div>
//                 </div>
//             </form>
//         </nav>
//     );
// }


// export default NavBar;


// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

import logo from '../../../images/Frame.svg';
import svg from '../../../images/Frame 45.svg';
import arrow from '../../../images/Vector.svg';
import Btn from '../../../Components/Button/Button';
import './navbar.css';
import React from 'react';
// import {useEffect} from "react";
// import '../Header_Child/HeaderChild';

function NavScrollExample() {
  
  // useEffect(() => {
  //   const collapseShow = document.querySelector('#navbarScroll').className;
  //   console.log(collapseShow);
  //   });


  return (
    <Navbar  expand="lg">
      
        <Navbar.Brand className='col-3 col-lg-2 text-center' href="#"><img src={logo} alt='logo'/></Navbar.Brand>
        <i className='fa fa-search col-1 d-lg-none text-center' style={{fontSize:"25px"}}></i>
        <Navbar.Toggle  aria-controls="navbarScroll" className='order-first order-lg-last border-0' />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ textAlign:"center" }}
            navbarScroll
          >
            <Nav.Link id='navlink' href="#action1">Home</Nav.Link>
            <Nav.Link id='navlink' href="#action2">Category</Nav.Link>
            <Nav.Link id='navlink' href="#action2">About</Nav.Link>
            <Nav.Link id='navlink' href="#action2">Contact</Nav.Link>
            
            

          </Nav>
          <div className="input-box d-lg-inline-flex text-center">
                 <i className="fa fa-search d-none d-lg-inline"></i>                    
                 <input type="text" className="form-control d-none d-lg-inline" placeholder='Search something here!'/>
                 <Btn id="btn-size-text" className='Btn m-auto' text="Join the community"></Btn>
                 <div className='CountryDropdown d-lg-inline-flex d-none d-lg-inline'>
                     <img src={svg} alt='Svg'/>
                     <p>VND</p>
                     <img className='arrow' src={arrow} alt="arrow"/>
                 </div>
             </div>
        </Navbar.Collapse>
      
    </Navbar>
  );


}

export default NavScrollExample;