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
  submitting: boolean,
  handleSubmit: () => void,
}

class SignupForm extends Component<Props> {
  props: Props

  handleSubmit = data => this.props.onSubmit(data);

  render() {
    const { handleSubmit, submitting } = this.props;

    return (
      <form className={`card ${css(styles.card)}`} onSubmit={handleSubmit(this.handleSubmit)}>

        <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Create an account</h3>
        <Field name="pseudo" type="text" component={Input} placeholder="Username" className="form-control" />
        <Field name="email" type="email" component={Input} placeholder="Email" className="form-control"/>
        <Field name="password" type="password" component={Input} placeholder="Password" className="form-control"/>
        
        <button type="submit" disabled={submitting} className="btn btn-outline-primary"  style={{width: 80, margin: '1em auto'}}>
          {submitting ? 'Signin in...' : 'Signup'}
        </button>

        <hr style={{ margin: '2rem 0' }} />
        <Link to="/login" className="btn btn-outline-secondary" style={{width: 200, margin: '1em auto'}}>Login to your account</Link>
      </form>
    );
  }
}

const validate = (values) => {
  const errors = {};
  if (!values.pseudo) {
    errors.email = 'Required';
  }
  if (!values.email) {
    errors.email = 'Required';
  }
  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length < 6) {
    errors.password = 'Minimum of 6 characters';
  }
  return errors;
};

export default reduxForm({
  form: 'signup',
  validate,
})(SignupForm);