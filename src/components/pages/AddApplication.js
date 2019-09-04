import React, { Component } from 'react';
import { Dropdown } from 'semantic-ui-react';

class AddApplication extends Component {

    productfamilyOptions = [
        { key: 1, text: 'Jmeter', value: 1 }
    ]
    componentDidMount() {

    }

    render() {
        return (
            <div className="PaneHeaders" >
                <div>
                    Product Family  <Dropdown placeholder='productfamily' search selection options={this.productfamilyOptions}></Dropdown>
                Products  <Dropdown placeholder='productfamily' search selection options={this.productfamilyOptions}></Dropdown>
                </div>
            </div>

        );
    }
}

AddApplication.propTypes = {

};

export default AddApplication;