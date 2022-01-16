import React from 'react';

import './collections-overview.scss'
import CollectionPreview from "../collection-preview/collection-preview";
import {createStructuredSelector} from "reselect";
import {selectCollectionsForPreview} from "../../redux/shop/shop.selectors";
import {connect} from "react-redux";

const CollectionsOverview = ({collections}) => (
    <div className="collections-overview">
        {
            collections.map(({id, ...collection}) =>
                <CollectionPreview
                    key={id}
                    {...collection} />
            )
        }
    </div>
);

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview,
})

export default connect(mapStateToProps)(CollectionsOverview);
