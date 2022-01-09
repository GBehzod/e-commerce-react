import React, {Component} from 'react';

import './sign-in.scss'
import FormInput from "../form-input/form-input"    ;
import {signInWithGoogle} from "../../firebase/firebase.utils";
import CustomButton from "../custom-button/custom-button";

class SignIn extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();

        this.setState({email: '', password: ''})
    }

    handleChange = (event) => {
        const {value, name} = event.target;

        this.setState({[name]: value})
    }


    render() {
        return (
            <div className="sign-in">
                <h2>I have already account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        type="email"
                        name="email"
                        handleChange={this.handleChange}
                        label="Email"
                        value={this.state.email}
                        required/>
                    <FormInput
                        type="password"
                        name="password"
                        handleChange={this.handleChange}
                        label="Password"
                        value={this.state.password}
                        required/>
                    <div className="buttons">
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign in with Google</CustomButton>
                    </div>
                </form>
            </div>
        );
    }
}

export default SignIn;