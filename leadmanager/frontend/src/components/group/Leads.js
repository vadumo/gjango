import React, { Component, Fragment } from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import { getLeads, deleteLead } from '../../actions/leads2';
import { Link } from "react-router-dom";


export class Leads extends Component {
    static propTypes = {
        leads: PropTypes.array.isRequired,
        getLeads: PropTypes.func.isRequired,
        deleteLead: PropTypes.func.isRequired,
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
                            <th>Id</th>
                            <th>Name</th>
                            <th>Descriptions</th>
                            <th>Actions</th>
                            <th />
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.leads.map(lead => (
                            <tr key={lead.id}>
                                <td>{lead.id}</td>
                                <td>{lead.group_name}</td>
                                <td>{lead.descriptions}</td>
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