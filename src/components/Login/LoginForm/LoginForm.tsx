import { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  loginSchema,
  type LoginFormValues,
} from "../../../utils/validationSchemas";
import { logIn } from "../../../redux/auth/authOperations";
import type { AppDispatch } from "../../../redux/store";
import { Icon } from "../../../shared/Icon";
import css from "../../../styles/shared/Form.module.css";

const initialValues: LoginFormValues = {
  email: "",
  password: "",
};

const LoginForm = () => {
  const [showPasswordLogin, setShowPasswordLogin] = useState(false);

  const dispatch = useDispatch<AppDispatch>();

  const handleShowPasswordLogin = () => setShowPasswordLogin((prev) => !prev);

  const submitLogin = (dataForm: LoginFormValues) => {
    const { email, password } = dataForm;

    dispatch(logIn({ email, password }));
  };

  return (
    <div className={css.formContainer}>
      <div className={css.formTitleBox}>
        <h1 className={css.title}>Log in</h1>
        <p className={css.subtitle}>
          Welcome! Please, enter your credentials to login to the platform:
        </p>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={loginSchema}
        onSubmit={submitLogin}
      >
        {({ errors, touched }) => (
          <Form className={css.form}>
            <div className={css.label}>
              <Field
                className={`${css.field} ${
                  errors.email && touched.email
                    ? css.fieldError
                    : !errors.email && touched.email
                      ? css.fieldSuccess
                      : ""
                }`}
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                required
                aria-label="Input for typing your email"
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

            <div className={css.label}>
              <Field
                className={`${css.field} ${
                  errors.password && touched.password
                    ? css.fieldError
                    : !errors.password && touched.password
                      ? css.fieldSuccess
                      : ""
                }`}
                type={showPasswordLogin ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Password"
                required
                aria-label="Input for typing your password"
              />
              <button
                type="button"
                className={css.showPasswordBtn}
                onClick={handleShowPasswordLogin}
              >
                <Icon
                  id={showPasswordLogin ? "icon-eye" : "icon-eye-off"}
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

            <button type="submit" className={css.submitBtn}>
              Log In
            </button>
            <p className={css.textHaveAccount}>
              Don't have an account? <Link to="/register">Register</Link>
            </p>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default LoginForm;
