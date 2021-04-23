import React, { Component } from 'react';
import {connect} from'react-redux';
import {getFootwares} from '../action/FootwareAction';
import PropTypes from 'prop-types';

class FootwareItem extends Component {

  componentDidMount(){
    this.props.getFootwares();
  }
  
  render() {
    const {footwares} =this.props.footwares;
    return (
     <div className="projects">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <h1 className="display-4 text-center">Footwares</h1>
                    <br />
                    <br />
                    <hr />
                    {footwares.map(footware =>(
                        <FootwareItem key={footware.id} footware={footware}/>
                    ))}        
         </div>
        </div>
       </div>
     </div>
    );
  }
}

FootwareItem.propTypes = {
  footwares: PropTypes.object.isRequired,
  getFootwares: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  footwares: state.footwares
});

export default connect (mapStateToProps ,{ getFootwares })(FootwareItem);

