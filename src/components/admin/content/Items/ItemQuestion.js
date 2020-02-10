import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemQuestion extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.questionCategoryId}</td>
                        <td>{item.questionName}</td>
                        <td>{item.questionResultA}</td>
                        <td>{item.questionResultB}</td>
                        <td>{item.questionResultC}</td>
                        <td>{item.questionResultD}</td>
                        <td>{item.questionResultRight}</td>
                        <td>
                        <Link to={"/admin/question/edit/"+this.props.item._id} >
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
