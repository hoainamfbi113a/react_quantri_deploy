import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemExam extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.examName}</td>
                        <td>{item.examCategoryNumber}</td>
                        <td>{item.examTimeMake}</td>
                        <td>{item.classId}</td>
                        <td>
                        <Link to={"/admin/exam/edit/"+this.props.item._id}>
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
