import { Field, Form, Formik } from "formik";
import s from "./LoginForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/operations";

const LoginForm = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(loginThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={s.forma}>
      <h3 className={s.headerLogin}>Login</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.containerLogin}>
          <label>
            <span>Email:</span>
            <Field name="email"></Field>
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>
          <button className={s.button} type="submit">
            Login
          </button>
          <p>
            You do not have account?
            <Link to="/register" className={s.link}>
              Lets create one?
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
