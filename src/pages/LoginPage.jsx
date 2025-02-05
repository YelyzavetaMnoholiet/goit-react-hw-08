import { Field, Form, Formik } from "formik";
import s from "./LoginPages.module.css";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const initialValues = {
    password: "",
    email: "",
  };
  const handleSubmit = (values, options) => {
    console.log(values);
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
          <button type="submit">Login</button>
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

export default LoginPage;
