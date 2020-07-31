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
                        {/* <td>{}</td> */}
                        <td><img width="50px" src={`http://localhost:5000/${item.questionResultA.ImgQuestionA}`} alt="not display"></img></td>
                        <td><img width="50px" src={`http://localhost:5000/${item.questionResultB.ImgQuestionB}`} alt="not display"></img></td>
                        <td><img width="50px" src={`http://localhost:5000/${item.questionResultC.ImgQuestionC}`} alt="not display"></img></td>
                        <td>
                            <button  className="btn btn-social-icon btn-google" onClick = {()=>this.props.handleShowAlert(item)}>
                            <i className="fa fa-bitbucket" />
                            </button>
                        </td>
                </tr>
        )
    }
}
