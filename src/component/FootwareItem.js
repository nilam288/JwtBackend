import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {connect} from'react-redux';
import PropTypes from 'prop-types';
//import {deleteProject} from "../../action/ProjectActions";

class FootwareItem extends Component {
   
  render() {
      //  const {footware} = this.props;

        let footware={};
    if(this.props)
    {
      footware= this.props;

    }


        console.log("fooootare.........."+footware);
    return (
      <div className="container">
                        <div className="card card-body bg-light mb-3">
                            <div className="row">
                                <div className="col-2">
                                    <span className="mx-auto">{footware.id}</span>
                                    console.log("id....."+{footware.id});
                                </div>
                                <div className="col-lg-6 col-md-4 col-8">
                                     <h3>{footware.name}</h3>
                                    <p>{footware.category}</p>
                                </div>
                                </div>
                                </div>
                                </div>
                                );
  }
}

/*FootwareItem.propTypes = {
  deleteProject: PropTypes.func.isRequired
};*/
export default FootwareItem;