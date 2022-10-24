import './navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar-bg pb-8 md:pb-10">
            <button 
                className="text-black mt-10 ml-12 md:mt-14 md:ml-28 
                w-8 md:w-10
                duration-300" 
                type="button" data-bs-toggle="offcanvas" 
                data-bs-target="#staticBackdrop" 
                aria-controls="staticBackdrop"
            >
                <img
                    src={ props.burger } 
                    alt="" 
                />
            </button>

            <div className="offcanvas offcanvas-start" 
                data-bs-backdrop="static" 
                tabindex="-1" 
                id="staticBackdrop" 
                aria-labelledby="staticBackdropLabel">
                <div className="offcanvas-header border-b border-gray-100 dropshadow-md">
                    <h5 
                        className="offcanvas-title font-light tracking-wider text-2xl my-1" 
                        id="staticBackdropLabel">Marwyn</h5>
                    <button 
                        className='w-5 m-1 duration-300'
                        type="button b"  
                        data-bs-dismiss="offcanvas" 
                        aria-label="Close">
                            <img src={ props.close } alt="" />
                    </button>
                </div>
                <div class="offcanvas-body">
                    <div>
                        Hello! This is my website.

                    </div>
                    <p>Enjoy wandering!</p>
                    <div className="my-8 font-light text-blue-500 tracking-wide underline decoration-solid">
                        <p>FB: Marwyn Sebolino Sumargo</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navbar;