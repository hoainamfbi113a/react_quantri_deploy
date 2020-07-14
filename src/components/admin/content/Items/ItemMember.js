import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemMember extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td style={{width: '10%', overflow: 'scroll'}}>{item.memberLogin}</td>
                        <td style={{width: '10%'}}>
                        <div style={{overflow: 'scroll', width: '100%'}}>{item.memberPass}</div></td>
                        <td style={{width: '10%', overflow: 'scroll'}}>{item.memberName}</td>
                        <td style={{width: '10%', overflow: 'scroll'}}>{item.memberSex}</td>
                        <td style={{width: '10%', overflow: 'scroll'}}><img width="50px" src={`http://localhost:5000/${item.avatarContentImg}`} alt="not display"></img></td>
                        <td style={{width: '10%', overflow: 'scroll'}}>
                        <Link to={"/admin/member/edit/"+this.props.item._id}>
                        <button type="button" className="btn btn-social-icon btn-bitbucket" >
                        <i className="fa fa-edit" />
                        </button>
                        </Link>
                        </td>
                        <td style={{width: '40%', overflow: 'scroll'}}>
                            <button className="btn btn-social-icon btn-google" onClick = {()=>this.props.handleShowAlert(item)}>
                            <i className="fa fa-bitbucket" />
                            </button>
                        </td>
                </tr>
        )
    }
}
