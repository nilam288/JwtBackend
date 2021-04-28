import React, { Component } from 'react';
import {connect} from'react-redux';
import {getFootwares} from '../action/FootwareAction';
import PropTypes from 'prop-types';
import FootwareItem from './FootwareItem';

class Footware extends Component {

  componentDidMount(){
    this.props.getFootwares();
    console.log("did............................");
  }

  UNSAFE_componentWillReceiveProps(nextProps){
   debugger 
    console.log("logs......."+JSON.stringify(nextProps));
    console.log("Hello");
  }

  componentWillReceiveProps(nextProps){
    console.log("willlll......."+JSON.stringify(nextProps));
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log("logs......."+JSON.stringify(nextProps));
    /*if(nextProps.someValue!==prevState.someValue){
      return { someState: nextProps.someValue};
      
   }
   else return null;*/
 }
  
  render() {
    let footwares=[];
    if(this.props.footwares)
    {
      footwares =this.props.footwares;
    }
     
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

Footware.propTypes = {
  footwares: PropTypes.object.isRequired,
  getFootwares: PropTypes.func.isRequired
};
const mapStateToProps = state => ({
  footwares: state.footwares
});

export default connect (mapStateToProps ,{ getFootwares })(FootwareItem);

