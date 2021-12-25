import React from 'react';
import grdesign from './images/desinger.jpg'
import webdes from './images/webdesign.png'
import uiux from './images/uiux.jpg'
import webdev from './images/webdevelop.jpg'
import extr from './images/extr.png'


const Services = () => {
    return (
        <React.Fragment>
            <div id='services' className="services p-2">
                <div className="first">
                    <h2 className='serv-h2 fw-bold '>Services</h2>
                    <p className='text-center fs-4'>Be Productvie, Be samrt.</p>
                </div>

                <div className="row">
                            {/* row */}
                    <div className="col-xl-8 col-lg-8 col-md-12 ">

                    <div>
                        {/* div */}

                        <div className="row">
                            {/* inner row */}
                            {/* col begin */}
                            <div className="col-xl-3 col-lg-3 col-md-6 ">
                                <img className='img-thumbnail' src={grdesign} alt="" />
                                <h3>Graphic design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a voluptate ut accusamus repellendus debitis ullam eligendi, fugiat ea repellat.</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <img className='img-thumbnail' src={webdes} alt="" />
                                <h3>web design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a voluptate ut accusamus repellendus debitis ullam eligendi, fugiat ea repellat.</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <img className='img-thumbnail' src={uiux} alt="" />
                                <h3>ux ui design</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a voluptate ut accusamus repellendus debitis ullam eligendi, fugiat ea repellat.</p>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-6">
                                <img className='img-thumbnail' src={webdev} alt="" />
                                <h3>web development </h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore a voluptate ut accusamus repellendus debitis ullam eligendi, fugiat ea repellat.</p>
                            </div>
                            {/* col end */}

                        </div>
                        {/* end inner row */}

                        {/* div */}
                    </div>
                    {/* container col */}
                </div>
                <div className="col-xl-4 col-lg-4 d-flex justify-content-around d-none d-lg-block d-xl-block">
                    <img src={extr}  className='rounded' style={{maxWidth:'70%',display:'inline-block'}} alt="something" />
                    <div style={{display:'inline-block'}} className="somecolor rounded">
                    </div>
                </div>

            </div>

            {/* container (services) */}
            </div>
        </React.Fragment>

    );
}
 
export default Services;