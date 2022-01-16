import React, {Component} from 'react';
import Header from "./components/header/header";
import {Navigate, Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop";
import AuthPage from "./pages/auth/auth";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {onSnapshot} from "firebase/firestore";

import './App.css'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";
import {selectCurrentUser} from "./redux/user/user.selectors";
import {createStructuredSelector} from "reselect";
import CheckoutPage from "./pages/checkout/checkout";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        const {setCurrentUser} = this.props;
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                onSnapshot(userRef, snapshot => {
                    setCurrentUser({
                        id: snapshot.id,
                        ...snapshot.data()
                    });
                })
            }

            setCurrentUser(userAuth)
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/shop/*'  element={<ShopPage/>}/>
                    <Route path='/auth' element={this.props.currentUser ? <Navigate to="/"/> : <AuthPage/>}/>
                    <Route path='/shop/checkout' element={<CheckoutPage />} />
                </Routes>
            </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);