import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import parse from 'html-react-parser';
export default class ItemNews extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                    {/* <p>Xin chao</p> */}
                        <td>{item.memberForumQuestion.memberName}</td>
                        <td>{item.classForumQuestion}</td>
                        {/* <td>{item.titleForumQuestion}</td> */}
                        <td>{parse(`${item.titleForumQuestion}`)}</td>
                        <td>
                        <button  className="btn btn-social-icon btn-google" onClick = {()=>this.props.handleShowAlert(item)}>
                        <i className="fa fa-bitbucket" />
                        </button>
                        </td>
                </tr>
        )
    }
}
