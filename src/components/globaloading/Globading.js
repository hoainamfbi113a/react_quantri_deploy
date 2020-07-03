import React, { Component } from 'react';
import './style.css'
import imgLoading from "../../assets/imgloading.gif";
import * as uiAction from "../../actions/ui"
import {bindActionCreators} from 'redux';
import {connect} from "react-redux"
class Globading extends Component {
    render() {
        const {showLoading} = this.props;
        let htmlLoading = null;
        if(showLoading){
            htmlLoading = (
                <div className="GlobalLoading">
                     <img src ={imgLoading} alt="img loading" className="icon"></img> 
                </div>
            )
        }
        return htmlLoading;
    }
}
const mapStateToProps = (state) =>{
    return {
        showLoading: state.ui.showLoading // combine is ui -> reducer
    }
}
const mapDispathToProps = (dispath) =>{
    return {
        uiAction:bindActionCreators(uiAction,dispath )
    }
}
export default connect(mapStateToProps, mapDispathToProps)(Globading)

