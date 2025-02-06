import { Field, Form, Formik } from "formik";
import s from "./RegastationForm.module.css";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/auth/operations";

const RegistrationForm = () => {
  const initialValues = {
    password: "",
    email: "",
    name: "",
  };
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = (values, options) => {
    console.log(values);
    dispatch(registerThunk(values))
      .unwrap()
      .then(() => navigate("/"));
    options.resetForm();
  };
  return (
    <div className={s.forma}>
      <h3 className={s.headerRegister}>Register</h3>
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
        <Form className={s.containerRegister}>
          <label>
            <span>Name:</span>
            <Field name="name" type="text"></Field>
          </label>
          <label>
            <span>Email:</span>
            <Field name="email"></Field>
          </label>
          <label>
            <span>Password:</span>
            <Field name="password" type="password"></Field>
          </label>
          <button className={s.button} type="submit">
            Register
          </button>
          <p>
            You already have account?{" "}
            <Link to="/Login" className={s.link}>
              Login!
            </Link>
          </p>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
