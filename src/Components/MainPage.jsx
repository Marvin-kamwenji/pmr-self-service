import React from 'react';
import Cards from './Common/Cards';
import TenantRegistration from './Registration/TenantRegistration';
import TenantTrial from './Tenant/TenantTrial';
import house1 from './Assets/mainPageImages/house1.jpg';
import house2 from './Assets/mainPageImages/house2.png';
import house3 from './Assets/mainPageImages/house3.jpeg';
import house4 from './Assets/mainPageImages/house4.jpg';
import './CSS/mainpage.css';
import { Link } from 'react-router-dom';


function MainPage() {
    return (
        <div className="container-fluid bg-all">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">


                    {/* CONTAINER AROUND PROPERTIES */}
                    <div className="container overalll p-3 my-4 border rounded-2xl">

                        {/* ----------------------------------------------------------------------------------------------------------------- */}
                        {/* ----------------------------------------------------------------------------------------------------------------- */}
                        {/* IN DEMAND PROPERTY */}
                        {/* ----------------------------------------------------------------------------------------------------------------- */}
                        {/* ----------------------------------------------------------------------------------------------------------------- */}

                        <div className="mt-2 text-left ms-4 text-navBarTextColor font-semibold fs-5">In demand Property</div>


                        {/* PROPERTY A */}
                        <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-bs-interval="30000">
                                    <div className="d-flex justify-content-center">

                                        <Cards img={house1} propertyTitle={'Property A'}  className="w-100"/>
                                        {/* PROPERTY B */}

                                        <Cards img={house2} propertyTitle={'Property B'} className="w-100"/>





                                    </div>


                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">

                                        <Cards img={house2} propertyTitle={'Property B'} />
                                        <Cards img={house2} propertyTitle={'Property B'} />
                                    </div>
                                </div>


                            </div>
                            <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>



                        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                        {/* NEW PROPERTY ROW */}
                        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
                        {/* ---------------------------------------------------------------------------------------------------------------------------------- */}

                        <div className="mt-5 text-left ms-4 text-navBarTextColor font-semibold fs-5">New Property</div>


                        <div id="carouselExampleIndicators1" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-indicators">
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleIndicators1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <div className="carousel-inner">
                                <div className="carousel-item active " data-bs-interval="30000">
                                    <div className="d-flex justify-content-center">


                                        {/* PROPERTY C */}

                                        <Cards img={house3} propertyTitle={'Property C'} />


                                        {/* PROPERTY D */}
                                        <Cards img={house4} propertyTitle={'Property D'} />




                                    </div>


                                </div>
                                <div className="carousel-item">
                                    <div className="d-flex justify-content-center">


                                        {/* PROPERTY C */}

                                        <Cards img={house1} propertyTitle={'Property A'} />


                                        {/* PROPERTY D */}
                                        <Cards img={house2} propertyTitle={'Property B'} />
                                    </div>
                                </div>


                            </div>
                            <a className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators1" role="button" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators1" role="button" data-bs-slide="next">
                                <span className="carousel-control-next-icon text-dark" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
                        </div>





                        {/* CLOSING FIRST ROW AND COLUMN DIVS */}
                    </div>
                </div>

                {/* ------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------- */}
                {/* COLUMN ON RIGHT */}
                {/* ------------------------------------------------------------------------------------------------------------- */}
                {/* ------------------------------------------------------------------------------------------------------------- */}

                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 my-4">

                    {/* REGISTERING TENANT */}
                    <div className="card rounded-2xl">
                        <div className="card-body overalll py-5 rounded-2xl">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor text-left px-4">TENANTS</h4>
                            <p className="card-text text-left px-4 my-4">To register as a tenant kindly capture your <br />
                                personal information, landlord information <br />
                                and property information
                            </p>
                            <Link to='/tenantTrial'>
                                <button className="tenantAndLandlordButton py-2 px-4 ml-5 mt-4 rounded">
                                    Register as a Tenant
                                </button>
                            </Link>
                        </div>
                    </div>


                    {/* REGISTERING LANDLORD */}
                    <div className="card mt-4 rounded-2xl">
                        <div className="card-body overalll py-5 rounded-2xl">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor text-left px-4">LANDLORD</h4>
                            <p className="card-text text-left px-4 my-4">To register as a landlord kindly capture <br />
                                your personal information, and property <br />
                                information
                            </p>
                            <Link to='/landlordRegistration'>
                                <button className="tenantAndLandlordButton ml-5 py-2 px-4 mt-4 rounded">
                                    Register as a Landlord
                                </button>
                            </Link>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    );
}

export default MainPage;