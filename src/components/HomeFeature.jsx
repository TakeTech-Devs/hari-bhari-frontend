import React from 'react';
import ellipse10 from '../images/ellipse10.png';
import ellipseHalf from '../images/ellipseHalf.png';
import qrcode from '../images/smartphone-call.png';

const HomeFeature = () => {
    return (
        <section className='home__features my-4 position-relative'>

            <div className="container">
                <div className="row">
                    <div className="col  my-3">
                        <h2 className='text-center'>Welcome to Hari Bhari</h2>
                        <h4>We might be new in this market but it has a strong committed team along with bigger determination to uplift the customer trust.</h4>


                    </div>

                </div>
                <div className="row ">
                    <div className="col-md-6 home__feature-img ">
                        <img src={qrcode} alt="" />
                        
                    </div>
                    <div className="col-md-6">
                        <p>Quality is a word synonymous with Hari Bhari that takes pride in our stringent quality standards. We go to great lengths and take the utmost care and precaution to ensure that each day our customers get nothing but the very best across all our products, services & interactions. Here are a few quality standards that we practice at Hari Bhari.

                        </p>
                        <p>When you get into a Hari Bhari online store you can be sure that you will get the best quality level of fresh produce and spice products in your region. Our teams take great pains to locate and source only the finest available produce in every fruit and vegetable. Our spice products too are chosen especially as per our stringiest standards.

                        </p>
                    </div>

                </div>
            </div>
                    <img src={ellipseHalf} alt="" className='position-absolute half-ellif'/>
                    <img src={ellipse10} alt="" className='position-absolute half-ellif-ten'/>
        </section>
    )
}

export default HomeFeature