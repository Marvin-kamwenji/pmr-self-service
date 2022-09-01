import React from 'react';
import house1 from '../Assets/mainPageImages/house1.jpg';


function Cards(props) {
    return(
        

        <div className="">
        <div className="card card caroues ms-5 mt-4 rounded-2xl property">
        <img src={props.img} alt="property images" className="propertyimage rounded-2xl"/>
            <div className="card-body">
                <h2 className="card-title fw-bolder fs-5 mt-4 text-left">{props.propertyTitle}</h2>
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
    );
}
export default Cards;