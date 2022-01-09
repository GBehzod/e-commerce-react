import './App.css';
import {HomePage} from "./pages/homepage/homepage.component";
import {Route, Routes} from "react-router-dom";
import ShopPage from "./pages/shop/shop";
import Header from "./components/header/header";

function App() {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path='/' element={<HomePage/>}/>
                <Route path='/shop' element={<ShopPage/>}/>
            </Routes>
        </div>
    );
}

export default App;
