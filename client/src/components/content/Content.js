/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import "./Content.css";

const Content = () => {
  const initialValues = { url_link: "", keyword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    console.log(formErrors);
    setIsSubmit(true);
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, formErrors);

  const validate = (values) => {

    const errors = {};
    if (!values.url_link) {
      errors.url_link = "Url link is required";
    }
    if (!values.keyword) {
      errors.keyword = "Keyword is required";
    } else if (values.keyword.length < 5) {
      errors.keyword = "Password must be more than 5 characters";
    }
    return errors;

  };

  return (
    <>
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
                value={formValues.url_link}
                onChange={handleChange}
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
                value={formValues.keyword}
                onChange={handleChange}
              />
            </div>
            <p>{formErrors.keyword}</p>
            <button className="btn_submit">Submit</button>
          </div>
        </form>
      </div>
      <div className="container_results">
        <div className="results">
          <h1>g1</h1>
        </div>
      </div>
    </>
  );
};

export default Content;
