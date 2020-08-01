import React, { Component } from 'react'
import {Link}  from 'react-router-dom'
import parse from 'html-react-parser';
export default class ItemLession extends Component {
    render() {
        let {item,index} = this.props;
        return (
                <tr>
                        <td>{item.lessionContentSubjects}</td>
                        <td>{item.lessionContentTitle}</td>
                        <td><img width="50px" src={`http://localhost:5000/${item.lessionContentImg}`} alt="not display"></img></td>
                        {/* <i>{parse(`${item.lessionContentDetail}`)}</i> */}
                        {/* <i>{parse(`${item.lessionContentDetail}`) && item.lessionContentDetail }</i> */}
                        <td>
                        {/* <Link to={"/admin/news/edit/"+this.props.item._id}> */}
                        <Link to={`/admin/lession/edit/${item._id}`}>
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
