import React, { Component } from 'react';
import { Modal } from 'react-bootstrap';
import { reduxForm, Field } from 'redux-form';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { validate } from '../utils/validates';
import { renderField } from '../utils/fields';
import { closeLoginDialog } from '../../actions/auth';

class Login extends Component{

  constructor(props){
    super(props)
    this.onClickToOpen = this.onClickToOpen.bind(this)
    this.onClickToClose = this.onClickToClose.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  reset(){
    this.props.initialize({accountId: null, password: null})
  }

  onClickToClose(){
    this.props.closeLoginDialog()
    this.reset()
  }

  onClickToOpen(){
    this.props.openPassResetDialog()
  }

  async onSubmit(values){
    await this.props.login(values)
    if(!this.props.error) this.reset()
    this.props.history.push('/')
  }

  render(){
    const { handleSubmit, invalid, submitting, error } = this.props
    return(
      <React.Fragment>
        <Modal show={this.props.isShowLoginDialog} onHide={this.onClickToClose}>
          <Modal.Header className="cinnamon-modal" closeButton>
          </Modal.Header>
          <Modal.Body>
            <form onSubmit={handleSubmit(this.onSubmit)}>
              <Field name="accountId" type="text" label="アカウントID" component={renderField} />
              <Field name="password" type="password" label="パスワード" component={renderField} />
              {error && <span className="invalid-input">{error}</span>}
              <input id="submit_login" className="cinnamon-btn" type="submit" value="ログイン" disabled={ invalid || submitting } />
            </form>
            <input type="button" className="like-link-btn" value="パスワードをお忘れの方はこちら" onClick={() => this.onClickToOpen()} />
          </Modal.Body>
        </Modal>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => ({
  isShowLoginDialog: state.auth.isShowLoginDialog
})

const mapDispatchToProps = ({ closeLoginDialog })

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(
  reduxForm({validate, form:"loginForm", destroyOnUnmount: false })(Login)
))
