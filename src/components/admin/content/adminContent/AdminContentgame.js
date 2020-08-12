import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Swal from 'sweetalert-react';
import 'sweetalert/dist/sweetalert.css';
import axios from 'axios';
import * as gameActions from '../../../../actions/gameAction';
import Itemgame from '../Items/Itemgame';

class AdminContentgame extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showAlert: false,
      game: [],
      deleteItem: "",
      idAlert:"",
      currentPage: 1,
      newsPerPage: 7
    }
  }
  handleShowAlert = (item) => {
    this.setState({
      showAlert: true,
      titleAlert: item.name,
      idAlert: item._id,
      deleteItem: item.title

    })
  }
  handleDeleteItem = async() => {
    let { idAlert, game } = this.state;
    const { gameActionCreators } = this.props;
    const { deletegame } = gameActionCreators;
    deletegame(idAlert);
    this.setState({
      showAlert:false
    });
  }
  componentDidMount = () => {
    const { gameActionCreators } = this.props;
    const { fetchListgame } = gameActionCreators;
    fetchListgame();
  }
  handleGenerate = ()=>{
    axios.get('https://cititechnodejs.herokuapp.com/admin/game/generate/')
    .then(response => {
        // this.setState({listquestionGame: response.data});
        console.log(response.data);
    })
    .catch(function (error) {
      
    })
  }
  chosePage = (event) => {
    this.setState({
      currentPage: Number(event.target.id)
    });
  }
  select = (event) => {
    this.setState({
      newsPerPage: event.target.value
    })
  }
  render() {
    let { game } = this.props;
    const currentPage = this.state.currentPage;
    const newsPerPage = this.state.newsPerPage;
    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentTodos = game.slice(indexOfFirstNews, indexOfLastNews);
    const renderTodos = currentTodos.map((todo, index) => {
      return <Itemgame stt={index + 1 + (currentPage - 1)*newsPerPage} key={index} item={todo} handleShowAlert={this.handleShowAlert} />;
    });
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(game.length / newsPerPage); i++) {
      pageNumbers.push(i);
    }
    return (
      <div>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <Link to="game/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm cau hoi tro choi</button></Link>
                  {/* <Link to="game/generate"> */}
                    {/* <button onClick={()=>{
                      this.handleGenerate()
                    }} className="btn btn-primary"><i className="fa fa-fw fa-home" />Generate câu hỏi trò chơi</button> */}
                    {/* </Link> */}
                    <div className="news-per-page" style={{marginTop: '10px'}}>
                    <select defaultValue="0" onChange={this.select} >
                      <option value="0" disabled>Get by</option>
                      <option value="5">5</option>
                      <option value="10">10</option>
                      <option value="20">20</option>
                    </select>
                  </div>
                </div>
                {/* /.box-header */}
                <div className="box-body">
                  <table id="example2" className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>categoryvocabulary </th>
                        <th>vocabularygame</th>
                        <th>spellingvocabulary</th>
                        <th>questionResultA</th>
                        <th>questionResultB</th>
                        <th>questionResultC</th>
                        <th>Xoá</th>

                      </tr>
                    </thead>
                    <tbody>
                      {renderTodos}
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>categoryvocabulary </th>
                      <th>vocabularygame</th>
                      <th>spellingvocabulary</th>
                      <th>questionResultA</th>
                      <th>questionResultB</th>
                      <th>questionResultC</th>
                      <th>Xoá</th>
                    </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="pagination-custom">
                  <ul id="page-numbers">
                    {
                      pageNumbers.map(number => {
                        if (this.state.currentPage === number) {
                          return (
                            <li key={number} id={number} className="active">
                              {number}
                            </li>
                          )
                        }
                        else {
                          return (
                            <li key={number} id={number} onClick={this.chosePage} >
                              {number}
                            </li>
                          )
                        }
                      })
                    }
                  </ul>
                </div>
              </div>

            </div>

          </div>
           <Swal
                                 show={this.state.showAlert}
                                 title="Delete Item"
                                 text={this.state.deleteItem}
                                 showCancelButton
                                 onOutsideClick={()  => this.setState({ showAlert: false })}
                                 onEscapeKey={()     => this.setState({ showAlert: false })}
                                 onCancel={()        => this.setState({ showAlert: false })}
                                 onConfirm={() => this.handleDeleteItem()}
                /> 
        </section>

      </div>


    );
  }
}
const mapStateToProps = state => {
  return {
    game: state.gameReducer.listgame,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    gameActionCreators: bindActionCreators(gameActions, dispatch),
    // modalActionCreators: bindActionCreators( dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AdminContentgame);