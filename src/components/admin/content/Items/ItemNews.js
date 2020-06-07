import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemNews extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.title}</td>
                        <td>{item.images}</td>
                        <td>{item.contents}</td>
                        <td>{item.timeUpdate}</td>
                        <td>
                        <Link to={"/news/edit/"+this.props.item._id} onClick = {()=>this.props.handleEditItem(index,item)}>
                        <button type="button" className="btn btn-social-icon btn-bitbucket" >
                        <i className="fa fa-edit" />
                        </button>
                        </Link>
                        </td>
                        <td>
                            <button  className="btn btn-social-icon btn-google" onClick = {()=>this.props.handleShowAlert(item)}>
                            <i className="fa fa-bitbucket" />
                            </button>
                        </td>
                </tr>
        )
    }
}
