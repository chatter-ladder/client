import React, { Component } from 'react';
import * as actions from '../../../store/actions/index';

class Logout extends Component {
    componentDidMount() {
        this.props.onLogout();
    }

    render() {
        return ();
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onLogout: () => dispatch(actions.logout())
    }
}

export default Logout;