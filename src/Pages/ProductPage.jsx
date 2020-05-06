import React from 'react';
import NavBar from '../Components/NavBar'
import SearchBar from '../Components/SearchBar'
import { Link } from 'react-router-dom';
import axios from 'axios';

const Product=({match})=>{
  const category = match.params.category; 
  console.log("Productdfghj",category)
  return (
    <div>
      <ProductPage category={category} />
    </div> 
  )
}

class ProductPage extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      products: []
    };
  }

  componentDidMount() {
    axios.get(`/api/products/${this.props.category}`)
      .then(res => {
        this.setState({ products: res.data });
        console.log(this.state.products);
      });
  }

  render(){
    console.log("hello",this.props.category);
    
    return(
      <>
      <NavBar/>
      <SearchBar/>
      <div class="container">
        <div class="panel panel-default">
          <div class="panel-heading">
            <h3 class="panel-title">
          <h1>{this.props.category}</h1>
            </h3>
          </div>
          <div class="panel-body">
            <h4><Link to="/create"><span class="glyphicon glyphicon-plus-sign" aria-hidden="true"></span> Add product</Link></h4>
            <table class="table table-stripe">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Price</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {this.state.products.map(product =>
                  <tr>
                    <td><Link to={`/show/${product.pname}`}><img src={product.image} height="50px" width="50px" ></img></Link></td>
                    
                    <td>{product.price}</td>
                    <td><a href="/cart" className="btn btn-info">Add</a></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
            </>
          );
  }
}

export default Product;

{/* <>
            <NavBar/>
            <SearchBar/>
            {this.state.products.map(products =>
            <div className="container" key={products._id}>
                      <div className="row">
                      
                      <div className="col"><h3> {products.pname} </h3></div>
                      <div className="col"><h3> {products.price} </h3></div>
                      
                      </div> </div>     )}
            </> */}