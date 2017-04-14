import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
export default class Userform extends React.Component{
    constructor(props){
        super(props);
        this.state = {   
            firstName : "Prabhakar", 
            lastName : "Venkatesan"        
        }
    }
    setAge(event){
        this.setState({lastName : event.target.value});
    }
    displayUser(event){
        let data = this.state.firstName + this.state.lastName;
        document.getElementById("display").innerHTML=data;
    }
    render(){
        return <div className="container-fluid">
                <div className="row"> 
                    <div className="col col-lg-6">                    
                  <div className="form-group">
                        <label for="formGroupExampleInput">First Name</label>
                        <input type="text"  className="form-control" placeholder="First Name" value={this.state.firstName}
                    onChange={event => this.setState({firstName:event.target.value})}/>                        
                    </div>
                    <div className="form-group">
                        <label for="formGroupExampleInput2">Last Name</label>
                       <input type="text" className="form-control" placeholder="Last Name" value={this.state.lastName}
                    onChange={this.setAge.bind(this)}/>
                    </div>
                    <p id="display"></p>
                    <button type="button" className="btn btn-primary" onClick={this.displayUser.bind(this)}>Save</button>
                </div>
               </div>
              </div> 
    }
}