import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead, getLeads, deleteLead } from '../../actions/leads2';
import { Link } from "react-router-dom";

export class Form extends Component {
    state = {
        group_name: '',
        descriptions: '',
    };

    static propTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]:
    e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { group_name, descriptions } = this.state;
        const lead = { group_name, descriptions };
        this.props.addLead(lead);
    };

    render() {
        const { group_name, descriptions } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Group</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="group_name"
                            onChange={this.onChange}
                            value={group_name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Descriptions</label>
                        <input
                            className="form-control"
                            type="text"
                            name="descriptions"
                            onChange={this.onChange}
                            value={descriptions}
                        />
                    </div>
                    <div className="form-group">
                        <button type="submit" class="btn btn-primary">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default connect(null, { addLead })(Form);