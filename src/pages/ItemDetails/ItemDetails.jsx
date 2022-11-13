import React from 'react';
import './ItemDetails.css';
import HomeMedia from '../../components/Home-Media/Media';
import pic from './images/item.jpg';
import pic2 from './images/details.jpg';
import pic3 from './images/details2.jpg';
import pic4 from './images/details3.jpg';
import pic5 from './images/details4.jpg';
import pic6 from './images/details5.jpg';
const ItemDetails = () => {
    return (
        <>
            <section className='details'>
                <div className='img-area'>
                    <div>
                        <img src={pic} alt="" />
                    </div>
                    <div className='collect'>
                        <div>
                            <img src={pic2} alt="" />
                        </div>
                        <div>
                            <img src={pic3} alt="" />
                        </div>
                        <div>
                            <img src={pic4} alt="" />
                        </div>
                        <div>
                            <img src={pic5} alt="" />
                        </div>
                    </div>
                        <img src={pic6} alt="" />
                </div>
                <div className='info'>
                    <div className='context'>
                    <span>Ferrari</span>
                        <h3>360 Challenge Stradale</h3>
                        <h4>HK$2,880,000</h4>
                        <h4>Specification</h4>
                        <span>
                            •7 Automatic AMG SPEEDSHIFT MCT
                            <br/>
                            •6.2-liter V8
                            <br/>
                            •507 Horsepower
                            <br/>
                            •AMG BUCKET SEATS WITH ELECTRIC HEAD REST
                            <br/>
                            •ALCANTARA FLAT BOTTOM STEERING WHEEL
                            <br/>
                            •HARMAN KARDON AUDIO SYSTEM
                            <br/>
                            •RED PAINTED AMG BRAKE CALLIPERS
                            <br/>
                            •MATT BLACK Y SPOKE 19" ALLOY WHEELS
                            <br/>
                        </span>
                            <h4>Mileage</h4>
                        <span>
                            •17,000KM indicated
                            <br/>
                            •O Owner on VRD
                            <br/>
                            Availability and Prices are subject to change without notice
                        </span>
                    </div>
                </div>
            </section>
            <HomeMedia/>
        </>
    )
}

export default ItemDetails