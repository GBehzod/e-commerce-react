import React from 'react';

import './auth.scss'
import SignIn from "../../components/sign-in/sign-in";
import SignUp from "../../components/sign-up/sign-up";

const AuthPage = () => (
    <div className="auth">
        <SignIn/>
        <SignUp/>
    </div>
)

export default AuthPage;
