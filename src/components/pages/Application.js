import React, { Component } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import { getApplicationList } from '../actions/service'
import { connect } from 'react-redux';
import { PropTypes } from 'prop-types';
import Pane from '../shell/Pane';


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
        return (<div className="PaneHeaders" >
            <button onClick={this.addClick}>addClick</button>
            <div className="ag-theme-balham"
                style={{
                    height: "95%",
                    width: '100%'
                }
                } >
                <AgGridReact
                    columnDefs={this.state.columnDefs}
                    rowData={this.state.rowData}
                />

            </div>
            {this.state.addClick && <Pane></Pane>

            }
        </div>
        );
    }
}
ApplicationList.propTypes = {
    getApplicationList: PropTypes.func.isRequired
}

export default connect(getApplicationList)(ApplicationList);