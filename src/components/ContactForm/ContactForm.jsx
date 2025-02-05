import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import s from "./ContactForm.module.css";
import { useDispatch } from "react-redux";
import { nanoid } from "nanoid";
import { addContact } from "../../redux/contactsOps";

export default function ContactForm() {
  const dispatch = useDispatch();

  const addNewContact = (values, options) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    options.resetForm();
    dispatch(addContact(newContact));
  };

  const contactSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "Назва має складатися не менше ніж з 3 символів!")
      .max(50, "Має бути 50 символів або менше!")
      .required("Обов'язкове поле"),
    number: Yup.string()
      .min(5, "Номер має бути не менше 5 символів!")
      .max(15, "Номер має бути менше 15 символів!")
      .required("Обов'язкове поле"),
  });
  return (
    <Formik
      onSubmit={addNewContact}
      initialValues={{
        name: "",
        number: "",
      }}
      validationSchema={contactSchema}
    >
      <Form className={s.contactForm}>
        <label htmlFor="name">ФІО:</label>
        <Field id="name" type="text" name="name"></Field>
        <ErrorMessage name="name" component="span" className={s.error} />

        <label htmlFor="number">Номер:</label>
        <Field id="number" name="number" type="tel"></Field>
        <ErrorMessage name="number" component="span" className={s.error} />

        <button type="submit">Додати новий контакт</button>
      </Form>
    </Formik>
  );
}
