import React, { Component } from 'react'
import {Link}  from 'react-router-dom';
import parse from 'html-react-parser';
export default class ItemNews extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.categoryNews==="newcategory1"? "Tin tức giáo dục": "Tin tức học sinh tiêu biểu"}</td>
                        <td>{item.title}</td>
                        {/* <td>{item.images}</td> */}
                        <td><img width="50px" src={`http://localhost:5000/${item.images}`} alt="not display"></img></td>
                        {/* <td>{item.contents}</td> */}
                        <td>{parse(`${item.contents}`)}</td>
                        {/* <td>{item.timeUpdate}</td> */}
                        <td>
                        
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
