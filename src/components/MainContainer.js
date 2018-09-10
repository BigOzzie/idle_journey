import React from 'react';
import {observer} from "mobx-react";
import {Button} from "react-bootstrap";

@observer
class MainContainer extends React.Component {
    render = () => {
        const data = this.props.dataStore.dataFiltered;

        return (
            <div className="row justify-content-center">
                <div className="col-4">
                    {data.weapons[1].display_name}
                </div>
            </div>
        );
    };
}

export default MainContainer;