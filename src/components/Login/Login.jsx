import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm } from "redux-form";
import { maxLengthCreator, required } from "../../utils/validators/validators";
import { createField, Input } from "../common/FormsControl/FormsControl";
import { Navigate } from "react-router-dom";
import { login, logout } from "./../../redux/auth-reducer";
import styles from "./../common/FormsControl/FormsControl.module.css";

const maxLength50 = maxLengthCreator(50);

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
      {createField("email", "email", [required, maxLength50], Input, "text")}
      {createField(
        "password",
        "password",
        [required, maxLength50],
        "input",
        "password"
      )}
      <div>
        <Field component={"input"} name={"rememberMe"} type="checkbox" />
        remember me
      </div>
      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  // a unique name for the form
  form: "login",
})(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
    // console.log("sdfsd")
    props.login(formData.email, formData.password, formData.rememberMe);
  };

  if (!props.isAuth) {
    return (
      <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit} />
      </div>
    );
  } else {
    return <Navigate to={"../profile"} />;
  }
};

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login, logout })(Login);
// export default Login;
