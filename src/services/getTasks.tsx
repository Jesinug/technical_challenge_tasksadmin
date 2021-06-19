import axios from "axios";

export const getTasks = () => {
    axios.get('http://localhost:3000/data')
      .then(res => {
          console.log('Response from API', res);

      }).catch(e => console.log('error', e));
}
