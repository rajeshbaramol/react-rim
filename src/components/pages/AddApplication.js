import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class AddApplication extends Component {

    productfamilyOptions = [
        { key: 1, text: 'productfamily 1', value: 1 },
        { key: 2, text: 'productfamily 2', value: 2 },
        { key: 3, text: 'productfamily 3', value: 3 },
    ]
    componentDidMount() {

    }

    render() {
        return (
            <div className="PaneHeaders" >
                Product Family  <Dropdown placeholder='productfamily' search selection options={this.productfamilyOptions}></Dropdown>
                Products  <Dropdown placeholder='productfamily' search selection options={this.productfamilyOptions}></Dropdown>

            </div>

        );
    }
}

AddApplication.propTypes = {

};

export default AddApplication;