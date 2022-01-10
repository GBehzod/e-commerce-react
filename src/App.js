import React, {Component} from 'react';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop";
import AuthPage from "./pages/auth/auth";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {onSnapshot} from "firebase/firestore";

import './App.css'
import {connect} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

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
                    <Route path='/shop' element={<ShopPage/>}/>
                    <Route path='/auth' element={<AuthPage/>}/>
                </Routes>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: (user) => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(App);