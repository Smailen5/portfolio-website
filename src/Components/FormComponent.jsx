import { ErrorMessage, Field, Form, Formik } from "formik";
import { object, string } from "yup";
import { Button } from "@nextui-org/react";

const validationSchema = object({
  email: string().required(),
  message: string().required(),
});

const initialValues = {
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
          className="flex flex-col items-center gap-4"
          onSubmit={handleSubmit}
          noValidate
        >
          <label htmlFor="email">Email</label>
          <Field type="email" name="email" placeholder="Email" />
          <ErrorMessage name="email" component="p" />

          <label htmlFor="message">Message</label>
          <Field
            as="textarea"
            type="text"
            name="message"
            placeholder="Message"
            render={({ field, form: { touched, errors } }) => (
              <textarea {...field} placeholder="message" cols={30} rows={10} />
            )}
          />
          <ErrorMessage name="message" component="p" />

          <Button type="submit">Submit</Button>
        </Form>
      )}
    </Formik>
  );
};

export default FormComponent;
