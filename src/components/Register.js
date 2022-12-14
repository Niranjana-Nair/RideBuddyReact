// import React, { useState } from "react";
// import './Register.css';
// export const Register = (props) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [name, setName] = useState('');
//   //me
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [empId, setEmpId] = useState('')
//   const [dept, setDept] = useState('')
//   const [dl, setDl] = useState('')
//   const [gender, setGender] = useState('');
//   // States for checking the errors
//   const [submitted, setSubmitted] = useState(false);
//   const [error, setError] = useState(false);
//   // Showing success message
//   const successMessage = () => {
//     return (
//       <div
//         className="success"
//         style={{
//           display: submitted ? '' : 'none',
//         }}>
//         <h4>User {name} successfully registered!!</h4>
//       </div>
//     );
//   };
//   // Showing error message if error is true
//   const errorMessage = () => {
//     return (
//       <div
//         className="error"
//         style={{
//           display: error ? '' : 'none',
//         }}>
//         <h5>Please enter all the fields!</h5>
//       </div>
//     );
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//      if (name === '' || email === '' || password === '') {
//       setError(true);
//      } else {
//        setSubmitted(true);
//        setError(false);
//      }
//     console.log(email);
//   };
//   return (
//     <div className="auth-form-container">
//       <h1>Ride Buddy</h1>
//       <div className="messages">
//         {errorMessage()}
//         {successMessage()}
//       </div>
//       <form className="register-form" onSubmit={handleSubmit}>
//         <div className="block-1">
//           <label htmlFor="name">Name</label>
//           <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" placeholder="Enter Your Name" />
//         </div>
//         <div className="block-2">
//           <label htmlFor="gender">Gender</label>
//           <div>
//             <input onChange={(e) => setGender(e.target.value)} type="radio" value="male" checked={gender === 'male'} name="gender" id="gender" />Male
//             <input onChange={(e) => setGender(e.target.value)} type="radio" value="female" checked={gender === 'female'} name="gender" id="gender" />Female
//           </div>
//         </div>
//         <div className="block-1">
//           <label htmlFor="email">Email</label>
//           <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
//         </div>
//         <div className="block-1">
//           <label htmlFor="phone">Mobile/Phone</label>
//           <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder="Enter Contact Number" />
//         </div>
//         <div className="block-1">
//           <label htmlFor="password">Password</label>
//           <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
//         </div>
//         <div className="block-1">
//           <label htmlFor="confirm-password">Confirm Password</label>
//           <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="confirm-password" name="confirm-password" />
//         </div>
//         <div className="block-1">
//           <label htmlFor="dept">Department</label>
//           <input value={dept} onChange={(e) => setDept(e.target.value)} type="dept" name="dept" id="dept" placeholder="Enter Department Name" />
//         </div>
//         <div className="block-1">
//           <label htmlFor="empId">Employee ID</label>
//           <input value={empId} onChange={(e) => setEmpId(e.target.value)} type="empId" name="empId" id="empId" placeholder="Enter Employee ID" />
//         </div>
//         <div className="block-1">
//           <label htmlFor="dl">Upload Driver's License</label>
//           <input value={dl} onChange={(e) => setDl(e.target.value)} type="dl" name="dl" id="dl" placeholder="Upload Image" />
//         </div>
//         <button type="submit">Register</button>
//         <p>
//           Already Registered?
//           <span className="link-btn" onClick={() => props.onFormSwitch('login')}>
//             <a href="#">Sign In</a>
//           </span>
//         </p>
//       </form>
//     </div>
//   )
// }
// export default Register;





// import React, { useState } from "react";
// import { Alert, Form } from "react-bootstrap";
// import Login from "./Login";
// import './Register.css';


// export const Register = (props) => {
//   const [email, setEmail] = useState('');
//   const [pass, setPass] = useState('');
//   const [name, setName] = useState('');
//   //me
//   const [password, setPassword] = useState('');
//   const [phone, setPhone] = useState('');
//   const [empId, setEmpId] = useState('');
//   const [dept, setDept] = useState('');
//   const [dl, setDl] = useState('');
//   const [role,setRole]=useState('');
//   const[pp,setPp]=useState('');
//   const [gender, setGender] = useState('');
//   const [flag, setFlag] = useState(false);
//   const [login, setLogin] = useState(true);
//   const handleFormSubmit = (e) => {
//     e.preventDefault();

//     if (!name || !email || !pass || !phone || !empId || !dept || !dl || !gender|| !role || !pp) {
//       setFlag(true);
//     } else {
//       setFlag(false);
//       localStorage.setItem("aEmail", JSON.stringify(email));
//       localStorage.setItem(
//         "aPassword",
//         JSON.stringify(password)
//       );
//       console.log("Saved in Local Storage");

//       setLogin(!login);
//     }
//   }
//   // function handleClick() {
//   //   setLogin(!login);
//   // }
//   return (
//     <>
//       <div>
//         {" "}
//         {login ? (
//           <div className="auth-form-container">
//             <h1>Ride Buddy</h1>
//             {/* <div className="messages">
//                    {errorMessage()}
//                     {successMessage()}
//                   </div> */}
//             <form className="register-form" onSubmit={handleFormSubmit}>
//               <div className="block-1">
//                 <label htmlFor="name">Name</label>
//                 <input value={name} onChange={(e) => setName(e.target.value)} type="name" name="name" id="name" placeholder="Enter Your Name" />
//               </div>
//               <div className="block-2">
//                 <label htmlFor="gender">Gender</label>
//                 <div>
//                   <input onChange={(e) => setGender(e.target.value)} type="radio" value="male" checked={gender === 'male'} name="gender" id="gender" />Male
//                   <input onChange={(e) => setGender(e.target.value)} type="radio" value="female" checked={gender === 'female'} name="gender" id="gender" />Female
//                 </div>
//               </div>
//               <div className="block-1">
//                 <label htmlFor="email">Email</label>
//                 <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email" name="email" />
//               </div>
//               <div className="block-1">
//                 <label htmlFor="phone">Mobile/Phone</label>
//                 <input value={phone} onChange={(e) => setPhone(e.target.value)} type="phone" name="phone" id="phone" placeholder="Enter Contact Number" />
//               </div>
//               <div className="block-1">
//                 <label htmlFor="password">Password</label>
//                 <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Password" id="password" name="password" />
//               </div>
//               <div className="block-1">
//                 <label htmlFor="confirm-password">Confirm Password</label>
//                 <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="confirm-password" name="confirm-password" />
//               </div>
//               {/* <div className="block-1">
//                 <label htmlFor="dept">Department</label>
//                 <input value={dept} onChange={(e) => setDept(e.target.value)} type="dept" name="dept" id="dept" placeholder="Enter Department Name" />
//               </div> */}
//               <div className="block-1">
//                 <label htmlFor="dept">Department</label>
//                 <Form.Control as="select" value={dept} onChange={(e) => setDept(e.target.value)} type="dept" name="dept" id="dept">
//                   <option>Select</option>
//                   <option>Delivery</option>
//                   <option>HR</option>
//                   <option>Administration</option>
//                   <option>IT</option>
//                 </Form.Control>
//               </div>
//               <div className="block-1">
//                 <label htmlFor="empId">Employee ID</label>
//                 <input value={empId} onChange={(e) => setEmpId(e.target.value)} type="empId" name="empId" id="empId" placeholder="Enter Employee ID" />
//               </div>
//               <div className="block-1">
//                 <label htmlFor="dl">Upload Driver's License</label>
//                 <input value={dl} onChange={(e) => setDl(e.target.value)} type="dl" name="dl" id="dl" placeholder="Upload Image" />
//               </div>

//               <div className="block-1">
//                 <label htmlFor="role">Role</label>
//                 <input value={role} onChange={(e) => setRole(e.target.value)} type="role" name="role" id="role" placeholder="Enter Your Role" />
//               </div>
//               <div className="block-1">
//                 <label htmlFor="pp">Upload Your Image</label>
//                 <input value={pp} onChange={(e) => setPp(e.target.value)} type="pp" name="pp" id="pp" placeholder="Upload Your Image" />
//               </div>

//               <button type="submit">Register</button>
//               <p>
//                 Already Registered?
//                 <span className="link-btn" onClick={() => props.onFormSwitch('login')}>
//                   <a href="#">Sign In</a>
//                 </span>
//               </p>
//               {flag && (
//                 <div className="alert">
//                   <Alert color="primary" variant="danger">
//                     I got it you are in a hurry! But every Field is important!
//                   </Alert>
//                 </div>
//               )}
//             </form>
//           </div>
//         ) : (
//           <Login />
//         )}
//       </div>
//     </>
//   );
// }







import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
//import { register_url } from "../../Constants";


import { Form } from "react-bootstrap";

function Register() {
  const initialValues = { username: "", Gender: "", Email: "", Contact: "", password: "", ConfirmPassword: "", Department: "", EmployeeID: "", Role: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [response, setResponse] = useState(false);
  const navigate = useNavigate();
  const submitHandler = (e) => {
    setIsSubmit(true);
    navigate("/");
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
    const userregex = /^\S*$/;
    const emailregex = /^[^\s@]+(@gmail+\.com)$/;
    const phonepattern = /^[0-9]{10}$/i;
    const passwordregex = /^(?=.*\S*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,20}$/i;
    if (!values.username) {
      errors.username = "Username is required";
    }
    else if (!userregex.test(values.Username)) {
      errors.username = "Please enter valid username.";
    }
    else if (values.username.length < 8) {

      errors.username = "Username must atleast have 8 characters.";
    }
    else if (values.username.length > 16) {

      errors.username = "Username must not exceed 16 characters.";
    }
    if (!values.Email) {
      errors.Email = "Email is required";
    }
    else if (!emailregex.test(values.Email)) {
      errors.Email = "Invalid email format!";
    }
    if (!values.Contact) {
      errors.Contact = "Phone number is required";
    }
    else if (!phonepattern.test(values.Contact)) {
      errors.Contact = "Please  Enter valid contact number";

    }

    if (!values.password) {
      errors.password = "Password is required";
    }
    else if (!passwordregex.test(values.password)) {
      errors.password = "The password must contain atleast 1 Capital letter,1 Small letter,1 Number,1 special character and must not have whitespace.";
    }
    if (!values.ConfirmPassword) {
      errors.ConfirmPassword = "Password is required";
    }
    else if (values.ConfirmPassword !== formValues.password) {
      errors.ConfirmPassword = "Passwords don't match"
    }
    return errors;
  };
  const handleApi = () => {
    console.log(formValues);
    axios.post("https://localhost:7061/api/Signup", formValues)
      .then(async result => {
        await console.log(result)
        if (result.data.isSuccess === false) {
          // setCheck(true);
          setResponse(result.data.messageBody, true);
        }
        else if (result.data.isSuccess === true) {
          setResponse("Registered succesfully", true);
        }
      })
      .catch(error => {
        console.log(error)
      })
  }
  return (
    <div className="auth-form-container">
      <form className="register-form" onSubmit={handleSubmit} >
        <h1>Ride Buddy</h1>
        <label htmlFor="username">Full Name</label><br />
        <input type="text" id="username" name="username" placeholder="Enter Your Full Name" value={formValues.username} onChange={handleChange} />
        <span>{formErrors.username} </span>
        <br />
        <label htmlFor="Gender">Gender</label><br />
        <Form.Control as="select" value={formValues.Gender} onChange={handleChange} type="gender" name="gender" id="gender">
          <option>Select</option>
          <option>Male</option>
          <option>Female</option>
          <option>Other</option>
        </Form.Control>
        <br />
        <label htmlFor="Email">Email </label><br />
        <input type="Email" id="Email" name="Email" placeholder="Enter Your Email" value={formValues.Email} onChange={handleChange} />
        <span> {formErrors.Email}</span>
        <br />
        <label htmlFor="Contact">Contact Number</label><br />
        <input type="text" id="Contact" name="Contact" placeholder="Enter Your Contact Number" value={formValues.Contact} onChange={handleChange} />
        <span> {formErrors.Contact}</span>
        <br />
        <label htmlFor="password">Password </label><br />
        <input type="password" id="password" name="password" placeholder="Enter Password" value={formValues.password} onChange={handleChange} />
        <span> {formErrors.password}</span>
        <br />
        <label htmlFor="ConfirmPassword">Confirm Password </label><br />
        <input type="password" id="ConfirmPassword" name="ConfirmPassword" placeholder="Re-Enter Password" value={formValues.ConfirmPassword} onChange={handleChange} />
        <span> {formErrors.ConfirmPassword}</span>
        <br />
        <label htmlFor="Department">Department</label><br />
        <Form.Control as="select" value={formValues.Department} onChange={handleChange} type="dept" name="dept" id="dept">
          <option>Select</option>
          <option>Delivery</option>
          <option>HR</option>
          <option>Administration</option>
          <option>IT</option>
        </Form.Control>
        <br />
        <label htmlFor="EmployeeID">Employee ID</label><br />
        <input type="text" id="EmployeeID" name="EmployeeID" placeholder="Enter Employee ID" value={formValues.EmployeeID} onChange={handleChange} />
        {/* <span> {formErrors.EmpID}</span> */}
        <br />

        <label htmlFor="Role">Role</label><br />
        {/* <div class="dropdown"> */}
        {/* <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
    Role
  </button>
  <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a class="dropdown-item" href="#">Action</a></li>
    <li><a class="dropdown-item" href="#">Another action</a></li>
    <li><a class="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div> */}
        <Form.Control as="select" value={formValues.Role} onChange={handleChange} type="Role" name="Role" id="Role">
          <option>Select</option>
          <option>Admin</option>
          <option>User</option>
        </Form.Control>
        <br />
        {/* <label htmlFor="UploadImage">Upload Your Image</label>
        <input value={formValues.UploadImage} onChange={handleChange} type="text" name="uploadimage" id="uploadimage" placeholder="Upload Your Image" />
        <br/>
        <label htmlFor="uploaddl">Upload Driver's License</label>
        <input value={formValues.UploadDL} onChange={handleChange} type="text" name="uploaddl" id="uploaddl" placeholder="Upload Image" />
        <br/> */}
        <div className="center">
          <button className="login-btn" type="submit" onClick={handleApi} >Register</button></div>
        <span> {response}</span>
        <br />
        {/* <button className="link-btn" onClick={submitHandler}>Sign in </button>  */}
        <p>
          Already Registered?
          <span className="link-btn" onClick={submitHandler}>
            <a href="#">Sign In</a>
          </span>
        </p>
      </form>
    </div>
  )
}
export default Register;

