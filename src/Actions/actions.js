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
export async function deleteMessage(id){

    try {
        const response = await axios.delete(`https://dev.codeleap.co.uk/careers/${id}`);
        console.log(response.data,"Deletado com sucesso");
        return response
      } catch (err) {
        console.error(err); 
      }
}

export async function updateMessage(id, data){
    return axios.patch(`https://dev.codeleap.co.uk/careers/${id}`, data)
    .then((res) => res.data)
    .catch((err) => {
      console.log(err);
      return null;
    });
}