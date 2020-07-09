import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemNews extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.videoContentSubjects}</td>
                        <td>{item.videoContentTitle}</td>
                        {/* <td>{item.images}</td> */}
                        <td>{item.videoContentVideo}</td>
                        <td>{item.contents}</td>
                        <td>{item.videoContentDetail}</td>
                        <td>
                        {/* <Link to={"/admin/news/edit/"+this.props.item._id}> */}
                        <Link to={`/admin/news/edit/${item._id}`}>
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
