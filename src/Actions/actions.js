import axios from 'axios';

export function postMessage(data) {
  return axios.post("https://dev.codeleap.co.uk/careers/", data);
}

export async function getMessages() {
    try {
      const response = await axios.get("https://dev.codeleap.co.uk/careers/");
      return response.data;
    } catch (error) {
      console.log(error);
      return null;
    }
  }