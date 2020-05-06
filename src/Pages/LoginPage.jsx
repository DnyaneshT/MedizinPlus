import React from 'react';
import '../Login.css';



class LoginPage extends React.Component {
    constructor(props){
      super(props);
      this.state={
      inputEmail:'',
      password:''
      }
     }

    handleClick(event){
        var username = this.state.inputEmail
        console.log({username})
    }

    render() {
        return(
<>
    <h1>MedizinPlus</h1>
        <div class="container">
            <div class="row">
            <div class="col-sm-9 col-md-7 col-lg-5 mx-auto">
                <div class="card card-signin my-5">
                <div class="card-body">
                    <h5 class="card-title text-center">Sign In</h5>
                    <form class="form-signin">
                    <div class="form-label-group">
                        <input type="email" id="inputEmail" class="form-control" placeholder="Email address" onChange = {(event,newValue) => this.setState({inputEmail:newValue})} required autofocus />
                        <label for="inputEmail">Email address</label>
                    </div>

                    <div class="form-label-group">
                        <input type="password" id="inputPassword" class="form-control" placeholder="Password" onChange = {(event,newValue) => this.setState({password:newValue})} required />
                        <label for="inputPassword">Password</label>
                    </div>

                    <div class="custom-control custom-checkbox mb-3">
                        <input type="checkbox" class="custom-control-input" id="customCheck1" />
                        <label class="custom-control-label" for="customCheck1">Remember password</label>
                    </div>
                    <button class="btn btn-lg btn-primary btn-block text-uppercase" type="submit" onClick={this.handleClick()}>Sign in</button>
                    <button class="btn btn-lg btn-warning btn-block text-uppercase" type="submit">New Member?</button>
                    <hr class="my-4"/>
                    
                    </form>
                </div>
                </div>
            </div>
            
            </div>
        </div>
    </>
        )
    }
}
    

export default LoginPage;