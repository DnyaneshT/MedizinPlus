import React from 'react'
//col-lg-8
class SearchBar extends React.Component {
    constructor(props) {
      super(props);
      //this.handleSubmit = this.handleSubmit.bind(this);
      this.input = React.createRef();
    }

render(){
    return(
    <>
    <div className="row justify-content-left">
            <div className="col-6 col-md-10 col-lg-6">
                <form className="card card-sm">
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                            <i className="fas fa-search-plus"></i>
                        </div>
                        
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="search" 
                            placeholder="Search topics or keywords" name="searchby" ref={this.input} />
                        </div>
                        
                        <div className="col-auto">
                            <a className="btn btn-lg btn-info" type="button"  href='/productpage/products/`{input}`' >Search By Name</a>
                        </div>
                    </div>
                </form>
            </div>

            <div className="col-6 col-md-10 col-lg-6">
                <form className="card card-sm">
                    <div className="card-body row no-gutters align-items-center">
                        <div className="col-auto">
                            <i className="fas fa-search h4 text-body"></i>
                            <i className="fas fa-search-plus"></i>
                        </div>
                        
                        <div className="col">
                            <input className="form-control form-control-lg form-control-borderless" type="dropdown" placeholder="Search topics or keywords"/>
                        </div>
                        
                        <div className="col-auto">
                            <button className="btn btn-lg btn-info" type="submit">Filter</button>
                        </div>
                    </div>
                </form>
            </div>
            
        </div>
        <br/>
    </>
)
    }
    }

export default SearchBar;