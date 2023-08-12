import axios from 'axios';

const API = axios.create();

export const postFormValue = async (data) => {
    const response = await API.post(
      `http://localhost:8000/api/form/save-data`,
      JSON.stringify(data.values),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return alert(response.data.message);
  };