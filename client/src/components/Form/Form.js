import React, { useState, useEffect } from "react";
import './Form.css';
import { postFormValue, getDataFromBE } from "../../services/axiosInstance";
import axios from 'axios';

const Form = () => {

  const initialValues = { url_link: "", keyword: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [ valueSearch, setValueSearch ] = useState([]);

  useEffect(() => {
    fetchData();
  },[])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(formValues);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      try {
        postFormValue({...formValues})
      } catch (error) {
        console.error(error);
      }
    }
  };

  //fetch data

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8000/api/getDataSearch`);
      setValueSearch(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(valueSearch);
  
  const validate = (values) => {
    const errors = {};
    const regex = /https?:\/\/.+/;
    if (!values.url_link) {
      errors.url_link = "Url link is required";
    } else if (!regex.test(values.url_link)) {
      errors.url_link = "This is not a valid url format!";
    }
    if (!values.keyword) {
      errors.keyword = "Keyword is required";
    } else if (values.keyword.length < 5) {
      errors.keyword = "Password must be more than 5 characters";
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
  );
};

export default Form;
