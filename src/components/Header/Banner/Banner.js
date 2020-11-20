import React from 'react';
import './Banner.css'

const Banner = () => {
    const bannerButton = {
        height: '50px',
        width: '150px',
        lineHeight: '30x',
        border: 'none',
        color: '#fff',
        borderBottomRightRadius: '25px',
        borderTopLeftRadius: '25px',
        backgroundImage: 'linear-gradient(to left top, #134fc5, #0083f1, #00ade9, #00d0b6, #12eb72)'
   }
    return (
        <div className="container py-5">
            <div className="row justify-content-between align-items-center">
                <div className="col-md-4 banner-left">
                    <div>
                        <h1 style={{fontFamily:'Yeseva One',fontSize:'70px'}}>Florence <br/> agency</h1>
                        <p className="py-4" style={{fontFamily:'Montserrat-Regular',color:'#8D8D8D'}}>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        <button style={bannerButton}>See Pricing</button>
                    </div>
                </div>
                <div className="col-md-7">
                    <div className="banner-right">

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;