import React, { Component } from 'react';
import { Button } from 'antd';
import {connect} from'react-redux';
import {getMens} from '../action/MenAction';
import PropTypes from 'prop-types';


class MenAdd extends React.Component {

    componentDidMount(){
        this.props.getMens();
      }
      

    render(){
        return(
            <div>
                Hello
  
            </div>
        );
}
}

MenAdd.propTypes = {
    Mens: PropTypes.object.isRequired,
    getMens: PropTypes.func.isRequired
  };
  const mapStateToProps = state => ({
    Mens: state.Men
  });
  
export default connect (mapStateToProps ,{ getMens })(MenAdd);