import React from 'react';
import house1 from './Assets/mainPageImages/house1.jpg';
import house2 from './Assets/mainPageImages/house2.png';
import house3 from './Assets/mainPageImages/house3.jpeg';
import house4 from './Assets/mainPageImages/house4.jpg';
import './CSS/mainpage.css';


function MainPage() {
    return ( 
        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-12 col-sm-8 col-md-8 col-lg-8">

            
            {/* CONTAINER AROUND PROPERTIES */}
             <div className="container p-3 my-4 border rounded-2xl">

        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* IN DEMAND PROPERTY */}
        {/* ----------------------------------------------------------------------------------------------------------------- */}
        {/* ----------------------------------------------------------------------------------------------------------------- */}
              
        <div className="mt-5 text-left ms-4 text-navBarTextColor font-semibold fs-5">In demand Property</div> 

              <div className="row">

            {/* PROPERTY A */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="card ms-5 mt-4 rounded-2xl property">
                    <img src={house1} alt="property A images" className="propertyimage rounded-2xl"/>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder fs-5 mt-4 text-left">Property A</h2>
                            <p className="card-text text-left">Talk about executive living x1000?? With <br />
                            glorious views, this 4 bedroom modern <br />
                            apartments. Strategically located along Dennis < br />
                            Pritt is this lovely apartment with a spacious < br />
                            bright lounge, open plan..
                            </p>
                            <button className="propertybutton  text-contentBodyBlueColor py-2 px-5 mt-4 rounded">
                                View Property
                            </button>
                        </div>
                    </div>
                </div>
        
        {/* PROPERTY B */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="property card me-5 mt-4 rounded-2xl">
                    <img src={house2} alt="property B images" className="propertyimage rounded-2xl"/>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder fs-5 mt-4 text-left">Property B</h2>
                            <p className="card-text text-left">Talk about executive living x1000?? With <br />
                            glorious views, this 4 bedroom modern <br />
                            apartments. Strategically located along Dennis < br />
                            Pritt is this lovely apartment with a spacious < br />
                            bright lounge, open plan..
                            </p>
                            <button className="propertybutton  text-contentBodyBlueColor py-2 px-5 mt-4 rounded">
                                View Property
                            </button>
                        </div>
                    </div>
                </div>
              </div>

     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
     {/* NEW PROPERTY ROW */}
     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
     {/* ---------------------------------------------------------------------------------------------------------------------------------- */}
          
     <div className="mt-5 text-left ms-4 text-navBarTextColor font-semibold fs-5">New Property</div> 

     <div className="row">

        {/* PROPERTY C */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="property card ms-5 mt-4 rounded-2xl">
                    <img src={house3} alt="property C images" className="propertyimage rounded-2xl"/>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder fs-5 mt-4 text-left">Property C</h2>
                            <p className="card-text text-left">Talk about executive living x1000?? With <br />
                            glorious views, this 4 bedroom modern <br />
                            apartments. Strategically located along Dennis < br />
                            Pritt is this lovely apartment with a spacious < br />
                            bright lounge, open plan..
                            </p>
                            <button className="propertybutton text-contentBodyBlueColor py-2 px-5 mt-4 rounded">
                                View Property
                            </button>
                        </div>
                    </div>
                </div>
    

    {/* PROPERTY D */}
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
                    <div className="property card me-5 mt-4 rounded-2xl">
                    <img src={house4} alt="property D images" className="propertyimage rounded-2xl"/>
                        <div className="card-body">
                            <h2 className="card-title fw-bolder fs-5 mt-4 text-left">Property D</h2>
                            <p className="card-text text-left">Talk about executive living x1000?? With <br />
                            glorious views, this 4 bedroom modern <br />
                            apartments. Strategically located along Dennis < br />
                            Pritt is this lovely apartment with a spacious < br />
                            bright lounge, open plan..
                            </p>
                            <button className="propertybutton  text-contentBodyBlueColor py-2 px-5 mt-4 rounded">
                                View Property
                            </button>
                        </div>
                    </div>
                </div>
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
                        <div className="card-body py-5">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor text-left">TENANTS</h4>
                            <p className="card-text text-left">To register as a tenant kindly capture your <br />
                            personal information, landlord information <br />
                            and property information
                            </p>
                            <button className="tenantAndLandlordButton py-2 px-4 mt-4 rounded">
                                Register as a Tenant
                            </button>
                        </div>
                    </div>


                    {/* REGISTERING LANDLORD */}
                    <div className="card mt-4 rounded-2xl">
                        <div className="card-body py-5">
                            <h4 className="card-title fs-5 text-contentBodyBlueColor text-left">LANDLORD</h4>
                            <p className="card-text text-left">To register as a landlord kindly capture <br />
                            your personal information, and property <br />
                            information
                            </p>
                            <button className="tenantAndLandlordButton px-3 py-2 mt-4 rounded">
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