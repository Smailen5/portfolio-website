/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Button } from "@nextui-org/react";

const validationSchema = object({
  name: string().required("Nome richiesto"),
  email: string().email("Email non valida").required("Email richiesta"),
  message: string()
    .required("Qualcosa devi pur scrivere")
    .min(100, "Minimo 100 caratteri"),
});

const initialValues = {
  name: "",
  email: "",
  message: "",
};

const FormComponent = () => {
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting }) => {
        setSubmitting(true);
        setTimeout(() => {
          setSubmitting(false);
          alert(JSON.stringify(values));
        }, 300);
      }}
    >
      {({ errors, touched, handleSubmit, isSubmitting }) => (
        <Form
          className="flex flex-col items-start gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="name">Nome</label>
          <Field
            type="name"
            name="name"
            className="w-full rounded-md border border-gray-400 p-2 shadow"
          />
          <ErrorMessage name="name" component="p" className="text-red-500" />

          <label htmlFor="email">Email</label>
          <Field
            type="email"
            name="email"
            className="w-full rounded-md border border-gray-400 p-2 shadow"
          />
          <ErrorMessage name="email" component="p" className="text-red-500" />

          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            type="text"
            name="message"
            render={({ field, form: { touched, errors } }) => (
              <textarea
                {...field}
                rows={10}
                className="w-full resize-none rounded-md border border-gray-400 p-2 shadow"
              />
            )}
          />
          <ErrorMessage name="message" component="p" className="text-red-500" />

          <Button type="submit" color="primary" className="w-full">
            Submit
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
