import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class Items extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>Other browsers</td>
                        <td>All others</td>
                        <td>{item.fullname}</td>
                        <td>-</td>
                        <td>U</td>
                        <td><Link to={"/admin/edit/"+this.props.item._id} onClick = {()=>this.props.handleEditItem(index,item)}><i className="fa fa-fw fa-home" />
                        <button type="button" className="Fix" aria-label="Fix">
                        <span aria-hidden="true">&times;</span>
                        </button>
                        </Link>
                        </td>
                        <td><button type="button" className="close" aria-label="Close" onClick = {()=>this.props.handleShowAlert(item)}>
                            <span aria-hidden="true">&times;</span>
                            </button>
                        </td>
                </tr>
        )
    }
}
