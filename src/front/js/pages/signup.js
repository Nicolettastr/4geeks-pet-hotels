import React, { useContext, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";

export const Signup = () => {
  const { store, actions } = useContext(Context);
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [first_name, setFirst_name] = useState("");
  // const [last_name, setLast_name] = useState("");
  // const [country, setCountry] = useState("");
  // const [zip_code, setZip_code] = useState("");
  // const [phone_number, setPhone_number] = useState("");

  const [formData, setFormData] = useState({})

  const [errors, setErrors] = useState({})

  const handleValidateForm = () => {
    let newErrors = {};
 
    if (!formData.first_name) {
      newErrors.first_name = "First name is required";
    }
    if (!formData.last_name) {
      newErrors.last_name = "Last name is required";
    }
 
    if (!formData.email) {
      newErrors.email = "Email is required";
    }
    // } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    //   newErrors.email = "Email is not valid";
    // }
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,32})/
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (!passwordRegex.test(formData.password)) {
      newErrors.password = "Password is not valid";
    }


    if (!formData.confirm_password) {
      newErrors.confirm_password = "Please, confirm your password";
    } else if (formData.confirm_password !== formData.password) {
      newErrors.confirm_password = "Fields 'Password' and 'Confirm password' do not match";
    }

    if (!formData.country) {
      newErrors.country = "Country is required";
    }

    const zipCodeRegex = /^\d{3,10}$/
    if (!formData.zip_code) {
      newErrors.zip_code = "Zip code is required";
    } else if (!zipCodeRegex.test(formData.zip_code)) {
      newErrors.zip_code = "Zip code is not valid";
    }
    const phoneNumberRegex = /^(\+\d{1,3}[- ]?)?\d{10,12}$/
    if (!formData.phone_number) {
      newErrors.phone_number = "Phone number is required";
    } else if (!phoneNumberRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Phone number is not valid";
    }
 
    setErrors(newErrors);

    handleSignupClick()
    console.log(formData)
    return Object.keys(newErrors).length === 0;
    
 };
 

  const handleChange = (ev) => {
    setFormData({...formData, [ev.target.id]: ev.target.value})
  }

  const handleSignupClick = () => {
    fetch("https://3001-marcelrm11-4geekspethot-tyge9jtrbzz.ws-eu85.gitpod.io/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: formData.email,
        password: formData.password,
        confirm_password: formData.confirm_password,
        first_name: formData.first_name,
        last_name: formData.last_name,
        country: formData.country,
        zip_code: formData.zip_code,
        phone_number: formData.phone_number,
      }),
      mode: "no-cors",
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => {
        "There was an error: ", error;
      });
  };

  return (
    <div className="text-center mt-5">
      <h1>Sign up</h1>
      <div className="forms">
        <input
          type="text"
          placeholder="First name"
          id="first_name"
          // value={first_name}
          onChange={handleChange}
          required
        />
        {errors.first_name && <p>{errors.first_name}</p>}
        <input
          type="text"
          placeholder="Last name"
          id="last_name"
          // value={last_name}
          onChange={handleChange}
          required
        />
        {errors.last_name && <p>{errors.last_name}</p>}
        <input
          type="text"
          placeholder="Email"
          id="email"
          // value={email}
          onChange={handleChange}
          required
        />
        {errors.email && <p>{errors.email}</p>}
        <input
          type="password"
          placeholder="Password"
          id="password"
          // value={password}
          onChange={handleChange}
          required
        />
        {errors.password && <p>{errors.password}</p>}
        <input
          type="password"
          placeholder="Confirm password"
          id="confirm_password"
          // value={password}
          onChange={handleChange}
          required
        />
        {errors.confirm_password && <p>{errors.confirm_password}</p>}
        <input
          type="text"
          placeholder="Country"
          id="country"
          // value={country}
          onChange={handleChange}
          required
        />
        {errors.country && <p>{errors.country}</p>}
        <input
          type="text"
          placeholder="Zip code"
          id="zip_code"
          // value={zip_code}
          onChange={handleChange}
          required
        />
        {errors.zip_code && <p>{errors.zip_code}</p>}
        <input
          type="number"
          placeholder="Phone number"
          id="phone_number"
          // value={phone_number}
          onChange={handleChange}
          required
        />
        {errors.phone_number && <p>{errors.phone_number}</p>}
        <button onClick={handleValidateForm}>Sign up</button>
      </div>
    </div>
  );
};
