import React from 'react';
import { connect } from "react-redux";
import   { Route, Redirect } from 'react-router-dom';
  import PropTypes from "prop-types";

const ProtectRoute = ({ component: Component, isAuthenticated, ...rest }) => (
    <Route
      {...rest}
      render={props =>
        isAuthenticated === true ? (
          <Component {...props} />
        ) : (
          <Redirect to={{
            pathname:"/login",
            state: {from: props.location}
          }} />
        )
      }
    />
  );

    ProtectRoute.propTypes = {
      isAuthenticated: PropTypes.bool.isRequired
    }

    const mapStateToProps = state => ({
      isAuthenticated: state.Authenticate.isAuthenticated
    });
      
    export default connect(mapStateToProps)(ProtectRoute);    
