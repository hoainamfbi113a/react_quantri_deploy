import React, { Component } from 'react'
import axios from 'axios';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as gameAction  from "../../../../actions/gameAction";
import { toastError, toastSuccess } from '../../../../helpers/toastHelper';
class AdminAddItemgame extends Component {
    constructor(props) {//khởi tạo giá trị
        super(props)
        this.state = {
          _id:'',
          categoryvocabulary:'con người',
          vocabularygame: '',
          spellingvocabulary:'',
          meaningA : '',
          meaningB : '',
          meaningC : '',
          errors: {}
        }
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
      }
      onChange = (e) => {
        switch (e.target.name) {
          case 'imgQuestionA':
            this.setState({ imgQuestionA: e.target.files[0] });
            break;
          case 'imgQuestionB':
            this.setState({ imgQuestionB: e.target.files[0] });
            break;
          case 'imgQuestionC':
            this.setState({ imgQuestionC: e.target.files[0] });
            break;
          default:
            this.setState({ [e.target.name]: e.target.value });
        }
      }
      onSubmit(e) {
        var r = this;
        e.preventDefault();
        const { meaningA, meaningB, imgQuestionA, imgQuestionB,imgQuestionC, meaningC,questionResultRight,categoryvocabulary,vocabularygame,spellingvocabulary } = this.state;
        const formData = new FormData()
        formData.append('imgQuestionA', imgQuestionA);
        formData.append('imgQuestionB', imgQuestionB);
        formData.append('imgQuestionC', imgQuestionC);
        formData.append('meaningA', meaningA);
        formData.append('meaningB', meaningB);
        formData.append('meaningC', meaningC);
        formData.append('categoryvocabulary', categoryvocabulary);
        formData.append('questionResultRight', questionResultRight);
        formData.append('vocabularygame', vocabularygame);
        formData.append('spellingvocabulary', spellingvocabulary);
        const { gameActionsCreators } = this.props;
        const { addgame } = gameActionsCreators;
        addgame(formData);
        // toastSuccess('Thêm item game thành công');
        setTimeout(()=>{
          r.props.history.push('/admin/game');
        },300)
        
      }
    render() {
        return (
            <div>
             <section className="content">
                 <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Thêm item game</h3>
        </div>
        {/* /.box-header */}
        {/* form start */}
        <form className="form-horizontal" noValidate onSubmit={this.onSubmit}>
          <div className="box-body">
          <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Loại câu hỏi </label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <select className="form-control"  onChange={this.onChange}  name="categoryvocabulary">
                  <option value="con người">Con người</option>
                  <option value="thiên nhiên">Thiên nhiên</option>
                  <option value="hoa quả">Hoa quả</option>
              </select>
                {/* <input type="text" className="form-control"  placeholder="Số câu trung bình" onChange={this.onChange} name="examMediumNumber" value={this.state.examMediumNumber}/> */}
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Từ vựng</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}} >
                <input type="hidden" className="form-control"  placeholder="text" onChange={this.onChange} name="_id" value={this.state._id}/>
                <input type="email" className="form-control"  placeholder="vocabularygame" onChange={this.onChange} name="vocabularygame" value={this.state.vocabularygame}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Phiên âm</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="spellingvocabulary" onChange={this.onChange} name="spellingvocabulary" value={this.state.spellingvocabulary}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Ảnh 1</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <input
                  type="file"
                  name="imgQuestionA"
                  onChange={this.onChange}
                />
               </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Nghĩa từ ảnh 1</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="meaningA" onChange={this.onChange} name="meaningA" value={this.state.meaningA}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Ảnh 2</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <input
                  type="file"
                  name="imgQuestionB"
                  onChange={this.onChange}
                />
               </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Nghĩa từ ảnh 2</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="meaningB" onChange={this.onChange} name="meaningB" value={this.state.meaningB}/>
              </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Ảnh 3</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
              <input
                  type="file"
                  name="imgQuestionC"
                  onChange={this.onChange}
                />
               </div>
            </div>
            <div className="form-group">
              <label style={{textAlign: 'left'}} htmlFor="inputEmail3" className="col-sm-2 control-label">Nghĩa từ ảnh 3</label>
              <div className="col-sm-10" style={{marginLeft: '-5%'}}>
           
                <input type="text" className="form-control"  placeholder="meaningC" onChange={this.onChange} name="meaningC" value={this.state.meaningC}/>
              </div>
            </div>
          </div>
          <div className="box-footer" style={{paddingRight: '69px'}}>
            
            <button type="submit" className="btn btn-info pull-right">Thêm</button>
          </div>

        </form>
      </div>
      </section>
            </div>
        )
    }
}
const mapStateToProps = state =>{
  return {}
}

const mapDispatchToProps = dispatch =>{
  return {
    gameActionsCreators:bindActionCreators(gameAction, dispatch)
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AdminAddItemgame)
