import React, { Component } from 'react';
import { userLogin } from "../actions/appinessaction";
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password:"",
            isValidEmail:false,
            isLogin:false
        }
    }
  isValidEmailAddress =(emailAddress) =>{
        var pattern = new RegExp(/^[+a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i);
        return pattern.test(emailAddress);
    }
    handleEmail = (e) => {
        this.setState({ email: e.target.value })
        let validEmail=this.isValidEmailAddress(e.target.value)
        if(validEmail){
            this.setState({isValidEmail: true})
        }else{
            this.setState({isValidEmail: false})
        }
    }
    handlePassword = (e) => {
        this.setState({ password: e.target.value })
    }

    handleLogin = () => {
        let userData = {
            email: this.state.email,
            password: this.state.password
        }
        this.setState({isLogin: true})

        if (this.state.email !== "" && this.state.password !== "" && this.state.isValidEmail) {
            this.props.userLogin(userData, this.props.history)
        }
    }

    render() {
        return (
            <div className=" container text-center w-50 login-container">
                    <h1 className="h3 mb-3 font-weight-normal"> <strong>Please Login</strong></h1>
                    <label for="username" className="sr-only">Username</label>
                    <input type="username" className="form-control" placeholder="Username" onChange={(e) => this.handleEmail(e)}></input>
                    {this.state.email !=="" && !this.state.isValidEmail?
                    (<div className="text-danger">Please enter valid email</div>):""}
                     {this.state.email ==="" && this.state.isLogin ?
                    (<div className="text-danger">Please enter email</div>):""}
                    <label for="inputpassword" className="sr-only">Password</label>
                    <input type="password" className="form-control mt-3" placeholder="password" onChange={(e) => this.handlePassword(e)}></input>
                    {this.state.isLogin && this.state.password ===""?(<div className="text-danger">Please enter password</div>):"" }
                        
                    <button className="btn btn-lg btn-primary btn-block mt-3" onClick={this.handleLogin}>Login</button>

                    {this.props.isLogin === false ?
                    (<div className="text-danger mt-3"><strong>Please enter correct email and password</strong></div>):""}

            </div>
        )
    }
}

const mapStateToProps = state => ({
    isLogin: state.isLogin
});

export default connect(mapStateToProps, { userLogin })(Login);