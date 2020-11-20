import React from 'react';
import experience from '../../../image/experience.png';
import prototype from '../../../image/prototype.png';
import illustration from '../../../image/illustration.png';
import inter from '../../../image/interface.png';
import './WeDo.css'

const WeDo = () => {
    return (
        <div className="my-5" >
            <div className="weDo-container" style={{backgroundColor:'#FAFFFD'}}>
            <div className="pt-5">
                <h1 style={{textAlign: 'center',fontFamily: 'Yeseva One'}}>What We Do</h1> 
                <p style={{textAlign: 'center',color:'#8D8D8D'}}>Our main focus is to make the User Experience very <br/> simple and easy. Simplicity is our Strength.</p>
            </div>
                <div className="container">
                    <div className="row justify-content-between pb-5">
                    <div className="col-sm-6 col-md-3 ">
                        <div className="do-content">
                            <img src={experience} alt="" />
                            <h4>Experience Design</h4>
                            <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <div className="do-content">
                            <img src={inter} alt="" />
                            <h4>Interface Design</h4>
                            <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <div className="do-content">
                            <img src={prototype} alt="" />
                            <h4>Prototyping</h4>
                            <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                    </div>
                    <div className="col-sm-6 col-md-3 ">
                        <div className="do-content">
                            <img src={illustration} alt="" />
                            <h4>Illustration</h4>
                            <p> The point of using Lorem Ipsum is that it has a more-or-less normal.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default WeDo;