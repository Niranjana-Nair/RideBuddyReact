import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

function Login() {
  const initialValues = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const navigate = useNavigate();

  const submitHandler = (e) => {
    setIsSubmit(true);
    navigate("/register");
  }

  const submitForgotHandler = (e) => {
    setIsSubmit(true);
    navigate("/forgot");
  }

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }

  }, [formErrors]);
  const validate = (values) => {
    const errors = {};

    if (!values.email) {
      errors.email = "username is required";
    }
    if (!values.password) {
      errors.password = "password is required";
    } else if (values.password.length < 4) {
      errors.password = "password must be more than 4 charactes"
    } else if (values.password.length > 10) {
      errors.password = "password must be more than 10 charactes"
    }

    return errors;
  };

  const handleApi = () => {
    console.log(formValues);
    axios({ url: "https://localhost:7061/api/Login", method: "POST", data: { email: formValues.email, password: formValues.password } })
      .then((result) => {
        console.log(formValues)
        console.log(result)
        localStorage.setItem('token', result.data)

      })
      .catch(error => {
        console.log(error)
      });
  };
  return (

    <div className="auth-form-container"  >
      <form className="login-form" onSubmit={handleSubmit}>
        <h1>Ride Buddy</h1>
        <label htmlFor="email">Username/Email</label>
        <input type="email" id="email" name="email" placeholder="Enter Username/EmailID" value={formValues.email} onChange={handleChange} />
        <span>{formErrors.email}</span>
        <br />
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Enter Password" name="password" value={formValues.password} onChange={handleChange} />
        <span>{formErrors.password}</span>
        <br />
        <div className="center">
          <button className="login-btn" type="submit" onClick={handleApi}>Login</button></div>
        <br />
        <p>
          New User?
          <span className="link-btn" onClick={submitHandler}>
            <a href="#">Sign Up</a>
          </span>
          <span className="fp" onClick={submitForgotHandler} >
            <a href="#">Forgot Password?</a>
          </span>
        </p>
      </form>
    </div>
  )
}
export default Login;
























