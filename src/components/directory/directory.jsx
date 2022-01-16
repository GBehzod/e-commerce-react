import React from 'react';

import './directory.scss'
import MenuItem from "../menu-item/menu-item";
import {createStructuredSelector} from "reselect";
import {selectDirectorySections} from "../../redux/directory/directory.selectors";
import {connect} from "react-redux";

const Directory = ({sections}) => (
    <div className="directory-menu">
        {sections.map(({id, ...section}) => (
            <MenuItem key={id} {...section} />
        ))}
    </div>
)

const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);