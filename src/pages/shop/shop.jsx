import React, {Component} from 'react';
import {SHOP_DATE} from "./shop.data";
import './shop.scss'
import CollectionPreview from "../../components/collection-preview/collection-preview";

class ShopPage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATE,
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    collections.map(({id, ...collection}) =>
                        <CollectionPreview
                            key={id}
                            {...collection} />
                    )
                }
            </div>
        );
    }
}

export default ShopPage;