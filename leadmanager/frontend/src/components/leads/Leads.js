import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads';


export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired
    };

    componentDidMount() {
        this.props.getLeads();
    }

    render() {
        return (
            <Fragment>
                <h2>Leads List</h2>
                <table className="table table-striped" >
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Date create</th>
                            <th>Group</th>
                            <th>Actions</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.name}</td>
                                <td>{lead.created_at}</td>
                                <td></td>
                                <td>
                                    <button
                                        onClick= {this.props.deleteLead.bind
                                        (this, lead.id)}
                                        className="btn btn-outline-danger"
                                    >
                                        {" "}
                                        Delete
                                    </button>
                                </td>
                                <td>
                                    <button className="btn btn-outline-warning">
                                    Edit</button>
                                </td>
                            </tr>
                        )) }
                    </tbody>
                 </table>
            </Fragment>
         );
    }
}

const mapStateToProps = state => ({
    leads: state.leads.leads
});

export default connect(
    mapStateToProps,
    { getLeads, deleteLead }
)(Leads);