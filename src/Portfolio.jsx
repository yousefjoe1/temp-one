import React from 'react';
import pr1 from './images/pr1.jpg'
import pr2 from './images/pr2.png'
import pr3 from './images/pr3.jpg'

const Portfolio = () => {
    return (
        <React.Fragment>
            <div id='portfolio' className="port-container bg-secondary">
                <div className='lh-1'>
                    <h2 className='text-center fw-bold port-h2 text-white'>Portfolio
                    <p className='text-center txt '>Be Proud, Do Your Best. </p></h2>
                </div>
                <div className="card-group">
                    <div className="row">
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            
                        <div className="card">
                            <img src={pr1} style={{maxWidth:'80%'}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title fw-bold">Project1</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            
                        <div className="card m-2">
                            <img src={pr2} style={{maxWidth:'80%'}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title fw-bold">Project2</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12">
                            
                        <div className="card">
                            <img src={pr3} style={{maxWidth:'80%'}} className="card-img-top" alt="..."/>
                            <div className="card-body">
                            <h5 className="card-title fw-bold">Project3</h5>
                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                            </div>
                        </div>

                        </div>
                    </div>
                    {/* <div className="card">
                        <img src={pr1} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pr2} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        </div>
                    </div>
                    <div className="card">
                        <img src={pr3} className="card-img-top" alt="..."/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </React.Fragment>
    );
}
 
export default Portfolio;