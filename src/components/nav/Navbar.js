import { useState } from 'react';
import './navbar.css';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas'; 
import Image from 'react-bootstrap/Image';

import Menu from './nav-utils/burger.png';
import Cancel from './nav-utils/cancel.png'

const Navbar = () => {
    const [Show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div className="navbar-bg pb-8 md:pb-10">
            <Button 
                variant='none'
                className="mt-10 ml-10 md:mt-14 md:ml-28 
                w-12 md:w-12 duration-300 border-none bg-none
                hover:bg-none"
                onClick={ handleShow }
            >
                <Image src={ Menu } alt="..." />
            </Button>

            <Offcanvas show={ Show } onHide={ handleClose }>
                <Offcanvas.Header
                    className='border-b'
                >
                    <Offcanvas.Title>
                        <h5>Marwyn</h5>
                    </Offcanvas.Title>
                    <Button
                        variant='none'
                        className="border-none bg-none
                        w-10 md:w-10 duration-300
                        hover:bg-none"
                        onClick={ handleClose }
                    >
                        <Image src={ Cancel } alt="..." />
                    </Button>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        Hello! This is my website.
                    </div>
                    <p>Enjoy wandering!</p>
                    <div className="my-8 font-light text-blue-500 tracking-wide underline decoration-solid">
                        <p>FB: Marwyn Sebolino Sumargo</p>
                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    )
}

export default Navbar;