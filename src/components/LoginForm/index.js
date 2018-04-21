// @flow
import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import Input from '../Input';
import {css, StyleSheet} from 'aphrodite';

const styles = StyleSheet.create({
  card: {
    maxWidth: '700px',
    padding: '3rem 4rem',
    margin: '2rem auto',
    'align-content': 'center',
  },
});

type Props = {
  onSubmit: () => void,
  handleSubmit: () => void,
  submitting: boolean,
}

class LoginForm extends Component<Props> {
  props: Props

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleSubmit)} className={`card ${css(styles.card)}`}>

        <h3 >Login to MyChat</h3>
        <Field name="email" type="text" component={Input} placeholder="Email" className="form-control input-center"/>
        <Field name="password" type="password" component={Input} placeholder="Password"  className="form-control  input-center"/>
        
        <button type="submit" disabled={submitting} className="btn btn-outline-primary"  style={{width: 80, margin: '1em auto'}}>
          {submitting ? 'Logging in...' : 'Login'}
        </button>
        
        <hr  />
        <Link to="/signup" className="btn btn-outline-secondary" style={{width: 200,  margin: '1em auto'}}>Create a new account</Link>
      
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
};

export default reduxForm({
  form: 'login',
  validate,
})(LoginForm);