import React from 'react'
import ProductPage from '../Pages/ProductPage'

const Categories=()=>{
    
    return (
    <>
    <div className="container">
        <div className="row">
            <div className="card-deck">
                <div className="card text-center">
                    <div className="card-body">
                        <img className="card-img-top" src="HealthAndMedicine.JPG" height="auto" width="auto" alt="HealthAndMedicine"/>
                        <h5 className="card-title">Health and Medicine</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/health-and-medicine" className="btn btn-info">Button</a>
                         
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                        <img className="card-img-top" src="PersonalCare.JPG" height="auto" width="auto" alt="PersonalCare"/>  
                        <h5 className="card-title">Personal Care</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/personal-care" className="btn btn-info">Button</a>
                    </div>
                </div>
                <div className="card text-center">
                    <div className="card-body">
                        <img className="card-img-top" src="Beauty.JPG" height="auto" width="auto" alt="Beauty"/>  
                        <h5 className="card-title">Beauty</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/beauty" className="btn btn-info">Button</a>
                    </div>
                </div>
               
            </div>
        </div>

        <br/>

        <div className="row">
            <div className="card-deck">
                <div className="card text-center">
                    <div className="card-body">
                    <img className="card-img-top" src="Vitamins.JPG" height="auto" width="auto" alt="Vitamins"/>  
                        <h5 className="card-title">Vitamins</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/vitamins" className="btn btn-info">Button</a>
                    </div>
                </div>

                <div className="card text-center">
                    <div className="card-body">
                        <img className="card-img-top" src="HomeHealthCare.JPG" height="auto" width="auto" alt="HomeHealthCare"/>
                        <h5 className="card-title">HomeHealthCare</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 13 mins ago</small></p>
                        <a href="/productpage/home-health-care" className="btn btn-info">Button</a>
                    </div>
                </div>
                
               
                <div className="card text-center">
                    <div className="card-body">
                    <img className="card-img-top" src="BabyCare.JPG" height="auto" width="auto" alt="BabyCare"/>
                        <h5 className="card-title">BabyCare</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/baby-care" className="btn btn-info" >Button</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <br/>
    </>

    );
}

export default Categories;