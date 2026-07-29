import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../redux/store";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  registrationSchema,
  type RegistrationFormValues,
} from "../../../utils/validationSchemas";
import { register } from "../../../redux/auth/authOperations";
import { Icon } from "../../../shared/Icon";
import css from "../../../styles/shared/Form.module.css";

const initialValues: RegistrationFormValues = {
  name: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const RegistrationForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleShowPassword = () => setShowPassword((prev) => !prev);

  const handleShowConfirmPassword = () =>
    setShowConfirmPassword((prev) => !prev);

  const submitRegistration = (dataForm: RegistrationFormValues) => {
    const { name, email, password } = dataForm;

    dispatch(register({ name, email, password }));
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formTitleBox}>
        <h1 className={css.title}>Registration</h1>
        <p className={css.subtitle}>
          Thank you for your interest in our platform.
        </p>
      </div>

      <Formik
        initialValues={initialValues}
        validationSchema={registrationSchema}
        onSubmit={submitRegistration}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            {/* NAME FIELD */}
            <div className={css.label}>
              <Field
                type="text"
                name="name"
                id="name"
                placeholder="Name"
                required
                aria-label="Input for typing your name"
                className={`${css.field} ${
                  errors.name && touched.name
                    ? css.fieldError
                    : !errors.name && touched.name
                      ? css.fieldSuccess
                      : ""
                }`}
              />
              {errors.name && touched.name && (
                <span className={css.iconCheck}>
                  <Icon id="icon-x-red" width={18} height={18} />
                </span>
              )}
              {!errors.name && touched.name && (
                <span className={css.iconCheck}>
                  <Icon id="icon-check" width={18} height={18} />
                </span>
              )}
              <ErrorMessage
                name="name"
                component="span"
                className={css.errorMessage}
              />
            </div>

            {/* EMAIL FIELD */}
            <div className={css.label}>
              <Field
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                aria-label="Input for typing your email"
                className={`${css.field} ${
                  errors.email && touched.email
                    ? css.fieldError
                    : !errors.email && touched.email
                      ? css.fieldSuccess
                      : ""
                }`}
              />
              {errors.email && touched.email && (
                <span className={css.iconCheck}>
                  <Icon id="icon-x-red" width={18} height={18} />
                </span>
              )}
              {!errors.email && touched.email && (
                <span className={css.iconCheck}>
                  <Icon id="icon-check" width={18} height={18} />
                </span>
              )}
              <ErrorMessage
                name="email"
                component="span"
                className={css.errorMessage}
              />
            </div>

            {/* PASSWORD FIELD */}
            <div className={css.label}>
              <Field
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
                aria-label="Input for typing your password"
                className={`${css.field} ${
                  errors.password && touched.password
                    ? css.fieldError
                    : !errors.password && touched.password
                      ? css.fieldSuccess
                      : ""
                }`}
              />
              <button
                type="button"
                className={css.showPasswordBtn}
                onClick={handleShowPassword}
              >
                <Icon
                  id={showPassword ? "icon-eye" : "icon-eye-off"}
                  width={18}
                  height={18}
                />
              </button>

              {errors.password && touched.password && (
                <span className={css.iconCheckPassword}>
                  <Icon id="icon-x-red" width={18} height={18} />
                </span>
              )}
              {!errors.password && touched.password && (
                <span className={css.iconCheckPassword}>
                  <Icon id="icon-check" width={18} height={18} />
                </span>
              )}
              <ErrorMessage
                name="password"
                component="span"
                className={css.errorMessage}
              />
              {!errors.password && touched.password && (
                <p className={css.passwordSecure}>Password is secure</p>
              )}
            </div>

            {/* CONFIRM PASSWORD FIELD */}
            <div className={css.label}>
              <Field
                type={showConfirmPassword ? "text" : "password"}
                name="confirmPassword"
                id="confirmPassword"
                placeholder="Confirm password"
                required
                aria-label="Input for confirm your password"
                className={`${css.field} ${
                  errors.confirmPassword && touched.confirmPassword
                    ? css.fieldError
                    : !errors.confirmPassword && touched.confirmPassword
                      ? css.fieldSuccess
                      : ""
                }`}
              />
              <button
                type="button"
                className={css.showPasswordBtn}
                onClick={handleShowConfirmPassword}
              >
                <Icon
                  id={showConfirmPassword ? "icon-eye" : "icon-eye-off"}
                  width={18}
                  height={18}
                />
              </button>

              {errors.confirmPassword && touched.confirmPassword && (
                <span className={css.iconCheckPassword}>
                  <Icon id="icon-x-red" width={18} height={18} />
                </span>
              )}
              {!errors.confirmPassword && touched.confirmPassword && (
                <span className={css.iconCheckPassword}>
                  <Icon id="icon-check" width={18} height={18} />
                </span>
              )}
              <ErrorMessage
                name="confirmPassword"
                component="span"
                className={css.errorMessage}
              />
            </div>

            <button type="submit" className={css.submitBtn}>
              Registration
            </button>
            <p className={css.textHaveAccount}>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default RegistrationForm;
