import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
export default class ItemNews extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.categoryvocabulary}</td>
                        <td>{item.vocabularygame}</td>
                        <td>{item.spellingvocabulary}</td>
                        <td>{item.questionResultA.ImgQuestionA}</td>
                        <td>{item.questionResultB.ImgQuestionB}</td>
                        <td>{item.questionResultC.ImgQuestionC}</td>
                        <td>
                            <Link to={`/admin/classsubject/edit/${item._id}`}>
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
