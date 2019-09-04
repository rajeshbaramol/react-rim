import React, { Component } from 'react';
import { Table, Icon } from 'semantic-ui-react';

class ReactGrid extends Component {
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
            rowData: props.rowData
        }
    }
    sortcolumn = (e) => {
        let sortkey = e.target.attributes.headername.value;
        e.target.attributes.sortCase = e.target.attributes.sortCase === "desc" ? "asc" : "desc";
        this.setState({
            rowData: e.target.attributes.sortCase === "asc" ? this.state.rowData.sort((a, b) => b[sortkey].toString().localeCompare(a[sortkey].toString())) : this.state.rowData.sort((a, b) => a[sortkey].toString().localeCompare(b[sortkey].toString()))
        })
    }

    componentDidMount() {
        this.setState({
            rowData: this.props.rowData
        })

    }
    componentWillReceiveProps() {
        console.log(this.props)
    }

    render() {
        return (
            <div className="container">
                <Table>
                    <Table.Header>
                        <Table.Row>
                            {
                                this.state.columnDefs &&
                                this.state.columnDefs.map(header =>
                                    <Table.HeaderCell headerName={header.field} onClick={this.sortcolumn} sortCase="none">{header.field} <Icon className="sort"></Icon></Table.HeaderCell>)
                            }

                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {

                            this.state.rowData.map(row =>
                                <Table.Row>{
                                    this.state.columnDefs.map(col => row[col.field] &&

                                        <Table.Cell>{row[col.field]}</Table.Cell>
                                    )}
                                </Table.Row>
                            )
                        }


                    </Table.Body>
                </Table >
            </div >
        );
    }
}

export default ReactGrid;