import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemMember extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.memberLogin}</td>
                        <td>{item.memberName}</td>
                        <td>{item.memberSex}</td>
                        <td>{item.memberDate}</td>
                        <td><img width="50px" src={`http://localhost:5000/${item.avatarContentImg}`} alt="not display"></img></td>
                        <td>
                        <Link to={"/admin/member/edit/"+this.props.item._id}>
                        <button type="button" className="btn btn-social-icon btn-bitbucket" >
                        <i className="fa fa-edit" />
                        </button>
                        </Link>
                        </td>
                        <td>
                            <button className="btn btn-social-icon btn-google" onClick = {()=>this.props.handleShowAlert(item)}>
                            <i className="fa fa-bitbucket" />
                            </button>
                        </td>
                </tr>
        )
    }
}
