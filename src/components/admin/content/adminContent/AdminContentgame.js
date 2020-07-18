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
      idAlert:""
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
    axios.get('http://localhost:5000/admin/game/generate/')
    .then(response => {
        this.setState({listquestionGame: response.data});
    })
    .catch(function (error) {
      
    })
  }
  renderItem = () => {
    let { game } = this.props;
    return (
      game.map((item, index) => {
        return (
          <Itemgame key={item._id} item={item} index={index} handleShowAlert={this.handleShowAlert}></Itemgame>
        )
      })
    )
  }
  render() {
    return (
      <div>
        <section className="content">
          <div className="row">
            <div className="col-xs-12">
              <div className="box">
                <div className="box-header">
                  <Link to="game/add"><button type="submit" className="btn btn-primary"><i className="fa fa-fw fa-home" />Thêm cau hoi tro choi</button></Link>
                  {/* <Link to="game/generate"> */}
                    <button onClick={()=>{
                      this.handleGenerate()
                    }} className="btn btn-primary"><i className="fa fa-fw fa-home" />Generate câu hỏi trò chơi</button>
                    {/* </Link> */}
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

                      </tr>
                    </thead>
                    <tbody>
                      {this.renderItem()}
                    </tbody>
                    <tfoot>
                    <tr>
                      <th>categoryvocabulary </th>
                      <th>vocabularygame</th>
                      <th>spellingvocabulary</th>
                      <th>questionResultA</th>
                      <th>questionResultB</th>
                      <th>questionResultC</th>
                    </tr>
                    </tfoot>
                  </table>
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