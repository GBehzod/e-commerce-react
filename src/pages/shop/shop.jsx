import React from 'react';
import './shop.scss'
import CollectionsOverview from "../../components/collections-overview/collections-overview";
import {Routes, Route} from "react-router";
import CollectionPage from "../collection/collection";

const ShopPage = () => {
    return (
        <div className="shop-page">
            <Routes>
                <Route path="/" element={<CollectionsOverview/>}/>
                <Route path="/:collectionId" element={<CollectionPage/>}/>
            </Routes>
        </div>)
}
export default ShopPage;