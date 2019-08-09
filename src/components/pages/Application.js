import React, { Component } from 'react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { getApplicationList } from '../actions/service'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import ReactGrid from '../directives/ReactGrid';



class ApplicationList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            columnDefs: [{
                headerName: "Name", field: "Model", sortable: true, filter: true
            }, {
                headerName: "Make", field: "Make", sortable: true, filter: true
            }, {
                headerName: "Model Year", field: "Model_year", sortable: true, filter: true
            },],
            rowData: [],
            addClick: false
        }

    }

    componentDidMount = () => {
        getApplicationList().then(res => {
            this.setState({
                rowData: res
            })

        });
        console.log("")
    }
    addClick = () => {
        this.setState({
            addClick: true,
        })
    }
    render() {
        return (<div>
            {this.state.rowData && this.state.rowData.length > 0 &&
                <ReactGrid rowData={this.state.rowData}></ReactGrid>}
        </div>
        );
    }
}
ApplicationList.propTypes = {
    getApplicationList: PropTypes.func.isRequired
}

export default connect(getApplicationList)(ApplicationList);