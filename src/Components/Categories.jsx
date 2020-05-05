import React from 'react'
import ProductPage from '../Pages/ProductPage'
const Categories=()=>{
    
    return (
    <>
    <div class="container">
        <div class="row">
            <div class="card-deck">
                <div class="card text-center">
                    <div class="card-body">
                        <img class="card-img-top" src="HealthAndMedicine.JPG" height="auto" width="auto" alt="HealthAndMedicine"/>
                        <h5 class="card-title">Health and Medicine</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/health-and-medicine" class="btn btn-info">Button</a>
                         
                    </div>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <img class="card-img-top" src="PersonalCare.JPG" height="auto" width="auto" alt="PersonalCare"/>  
                        <h5 class="card-title">Personal Care</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/personal-care" class="btn btn-info">Button</a>
                    </div>
                </div>
                <div class="card text-center">
                    <div class="card-body">
                        <img class="card-img-top" src="Beauty.JPG" height="auto" width="auto" alt="Beauty"/>  
                        <h5 class="card-title">Beauty</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/beauty" class="btn btn-info">Button</a>
                    </div>
                </div>
               
            </div>
        </div>

        <br/>

        <div class="row">
            <div class="card-deck">
                <div class="card text-center">
                    <div class="card-body">
                    <img class="card-img-top" src="Vitamins.JPG" height="auto" width="auto" alt="Vitamins"/>  
                        <h5 class="card-title">Vitamins</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/vitamins" class="btn btn-info">Button</a>
                    </div>
                </div>

                <div class="card text-center">
                    <div class="card-body">
                        <img class="card-img-top" src="HomeHealthCare.JPG" height="auto" width="auto" alt="HomeHealthCare"/>
                        <h5 class="card-title">HomeHealthCare</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 13 mins ago</small></p>
                        <a href="/productpage/home-health-care" class="btn btn-info">Button</a>
                    </div>
                </div>
                
               
                <div class="card text-center">
                    <div class="card-body">
                    <img class="card-img-top" src="BabyCare.JPG" height="auto" width="auto" alt="BabyCare"/>
                        <h5 class="card-title">BabyCare</h5>
                        <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                        <a href="/productpage/baby-care" class="btn btn-info" >Button</a>
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