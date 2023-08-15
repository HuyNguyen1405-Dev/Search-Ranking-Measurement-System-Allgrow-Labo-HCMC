import React, { useEffect, useState } from "react";
import "./Form.css";
import { postFormValue } from "../../services/axiosInstance";

const Form = () => {
  
  const [formErrors, setFormErrors] = useState({});
  const [formErrorsArray, setFormErrorsArray] = useState({});
  const [inputText, setInputText] = useState("");
  const [inputArray, setInputArray] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleArrayInputChange = (e) => {
    const inputValue = e.target.value;
    const newArray = inputValue.split("\n").map((item) => item.trim());
    setInputArray(newArray);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validateInput(inputText));
    setFormErrorsArray(validateArray(inputArray));
    setIsSubmit(true);

    if (
      Object.keys(formErrors).length === 0 &&
      Object.keys(formErrorsArray).length === 0 &&
      isSubmit
    ) {
      const data = {
        url_link: inputText,
        keyword: inputArray,
      };
      postFormValue(data);
    }
  };

  // useEffect(() => {
  //   setTimeout(() =>{
  //     setInputText("");
  //     setInputArray([]);
  //   }, 5000)
  // },[isSubmit])

  const validateInput = (values) => {
    const errors = {};
    const regex = /https?:\/\/.+/;
    if (!values) {
      errors.url_link = "Url link is required";
    } else if (!regex.test(values)) {
      errors.url_link = "This is not a valid url format!";
    }
    return errors;
  };

  const validateArray = (values) => {
    const errors = {};
    if (values.length === 0) {
      errors.keyword = "Url link is required";
    } else if (values.length > 5) {
      errors.keyword = "Length must be less than 5";
    }
    return errors;
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <h1 className="title_form">Search Ranking</h1>
        <div className="ui divider"></div>
        <div className="ui form">
          <div className="url-link">
            <label className="title_url">URL Link:</label>
            <input
              className="input_url"
              type="text"
              name="url_link"
              placeholder="Url link"
              value={inputText}
              onChange={handleInputChange}
            />
          </div>
          <p className="errors">{formErrors.url_link}</p>
          <div className="keyword">
            <label className="title_keyword">Keyword:</label>
            <textarea
              className="input_keyword"
              type="text"
              name="keyword"
              placeholder="Keyword"
              value={inputArray.join("\n")}
              onChange={handleArrayInputChange}
            />
          </div>
          <p>{formErrorsArray.keyword}</p>
          <br />
          <button className="btn_submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Form;
