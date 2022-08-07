import React from 'react';

function MainPage() {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">


             <div className="container p-3 my-5 border">
              <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="card ms-5 mt-5">
                        <div className="card-body">
                            <h2 className="card-title fw-bolder fs-5">Property A</h2>
                            <p className="card-text">Talk about executive living x1000?? With <br />
                            glorious views, this 4 bedroom modern <br />
                            apartments. Strategically located along Dennis < br />
                            Pritt is this lovely apartment with a spacious < br />
                            bright lounge, open plan..
                            </p>
                            <button className="bg-transparent hover:bg-contentBodyBlueColor
                             text-contentBodyBlueColor hover:text-white border border-contentBodyBlueColor hover:border-transparent
                             py-2 px-4 mt-4 rounded">
                                View Property
                            </button>
                        </div>
                    </div>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="card me-5 mt-5">
                        <div className="card-body">
                            <h2 className="card-title fw-bolder fs-5">Property B</h2>
                            <p className="card-text">Talk about executive living x1000?? With <br />
                            glorious views, this 4 bedroom modern <br />
                            apartments. Strategically located along Dennis < br />
                            Pritt is this lovely apartment with a spacious < br />
                            bright lounge, open plan..
                            </p>
                            <button className="bg-transparent hover:bg-contentBodyBlueColor
                             text-contentBodyBlueColor hover:text-white border border-contentBodyBlueColor hover:border-transparent
                             hover:border-transparent py-2 px-4 mt-4 rounded">
                                View Property
                            </button>
                        </div>
                    </div>
                </div>
              </div>
            </div>
        </div>

                <div className="col-xs-12 col-sm-4 col-md-4 col-lg-4 my-5">
                    <div className="card">
                        <div className="card-body py-5">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor">TENANTS</h4>
                            <p className="card-text">To register as a tenant kindly capture your <br />
                            personal information, landlord information <br />
                            and property information
                            </p>
                            <button className="bg-contentBodyBlueColor hover:bg-white text-white hover-text-contentBodyBlueColor
                            border-gray px-4 py-2 rounded mt-3">
                                Register as a Tenant
                            </button>
                        </div>
                    </div>

                    <div className="card mt-4">
                        <div className="card-body py-5">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor">LANDLORD</h4>
                            <p className="card-text">To register as a landlord kindly capture <br />
                            your personal information, and property <br />
                            information
                            </p>
                            <button className="bg-contentBodyBlueColor hover:bg-white text-white hover-text-contentBodyBlueColor
                            border-gray px-3 py-2 rounded mt-3">
                                Register as a Landlord
                            </button>
                        </div>
                    </div>


                </div>
            </div>
        </div>
     );
}

export default MainPage;