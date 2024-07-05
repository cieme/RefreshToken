import axios from "./node_modules/axios/dist/esm/axios.js";
axios
  .get("./text.json1")
  .catch((res) => {
    return new Promise((resolve, reject) => {
      const url = res.config.url;
      res.config.url = url.replace("1", "");
      resolve(axios(res.config));
    });
  })
  .then((res) => {
    console.log(res.data);
  });
