import React from 'react'

const Navbar = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <nav className="navbar navbar-light bg-light justify-content-between shadow">
                            <p className="navbar-brand ms-2">Navbar</p>
                            <form className="form-inline d-flex me-2">
                                <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                            </form>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Navbar