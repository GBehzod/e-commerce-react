import React, {Component} from 'react';
import Header from "./components/header/header";
import {Route, Routes} from "react-router-dom";
import {HomePage} from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop";
import AuthPage from "./pages/auth/auth";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";
import {onSnapshot} from "firebase/firestore";

import './App.css'

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null
        }
    }

    unsubscribeFromAuth = null;

    componentDidMount() {
        this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
            if (userAuth) {
                const userRef = await createUserProfileDocument(userAuth);

                onSnapshot(userRef, snapshot => {
                    this.setState({
                        currentUser: {
                            id: snapshot.id,
                            ...snapshot.data()
                        }
                    }, () => console.log(this.state));
                })
            }

            this.setState({currentUser: userAuth})
        })
    }

    componentWillUnmount() {
        this.unsubscribeFromAuth();
    }

    render() {
        return (
            <div>
                <Header currentUser={this.state.currentUser}/>
                <Routes>
                    <Route path='/' element={<HomePage/>}/>
                    <Route path='/shop' element={<ShopPage/>}/>
                    <Route path='/auth' element={<AuthPage/>}/>
                </Routes>
            </div>
        );
    }
}

export default App;