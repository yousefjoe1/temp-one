import React from 'react'
import Nav from './Nav'
import idea from './images/idea.jpg'
import work from './images/work.png'
import world from './images/world.jpg'
import Services from './Services'
import Portfolio from './Portfolio'
import Contact from './Contact'

 const  App =(props)=> {

    return (
        <React.Fragment>
            <Nav />
            <div className='container-fluid'>
                <div className='intro container-fluid'>
                    <div className='welcome'>
                        <h2 className='text-white bg-primary fw-bold text-center'>Hello And Welcome</h2>
                        <h4 className='text-black fw-bold'>We are Spiders - Super Creative And Minimal Agency Web Template</h4>
                    </div>
                </div>
                <div className='second-div mt-3 text-white p-2 bg-secondary bg-gradient m-2' >
                    <div className="row">
                        <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12">
                            <img className='rounded'style={{maxWidth:'30%'}} src={idea} alt="No"/>
                            <h3>Tell Us Your Idea</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.</p>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12">
                            <img className='rounded' style={{maxWidth:'30%'}} src={work} alt="No"/>
                            <h3>We Will Do All The Work</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.</p>
                        </div>
                        <div className="col-xl-4 col-md-6 col-sm-12 col-xs-12">
                            <img className='rounded' style={{maxWidth:'30%'}} src={world} alt="No"/>
                            <h3>It Will Be WorldWide</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, deleniti.</p>
                        </div>
                    </div>
                </div>
                <Services/>
                <Portfolio />
                <Contact />
            </div>
        </React.Fragment>

    )
}

export default App;