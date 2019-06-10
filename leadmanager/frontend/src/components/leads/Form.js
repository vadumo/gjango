import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { addLead } from '../../actions/leads';

export class Form extends Component {
    state = {
        name: '',
        group: ''
    };

    static propTypes = {
        addLead: PropTypes.func.isRequired
    };

    onChange = e => this.setState({ [e.target.name]:
    e.target.value });

    onSubmit = e => {
        e.preventDefault();
        const { name, group } = this.state;
        const lead = { name, group };
        this.props.addLead(lead);
    };

    render() {
        const { name, group } = this.state;
        return (
            <div className="card card-body mt-4 mb-4">
                <h2>Add Users</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input
                            className="form-control"
                            type="text"
                            name="name"
                            onChange={this.onChange}
                            value={name}
                        />
                    </div>
                    <div className="form-group">
                        <label>Id_group</label>
                        <input
                            className="form-control"
                            type="text"
                            name="group"
                            onChange={this.onChange}
                            value={group}
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