import axios from 'axios';

const API = axios.create();

export const postFormValue = async (data) => {
    const response = await API.post(
      `http://localhost:8000/api/form/save-data`,
      JSON.stringify(data),
      {
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );
    return alert(response.data.message);
};

export const getDataFromBE = async () => {
  const response = await API.get(`http://localhost:8000/api/getDataSearch`);
  return response.data.data;
};