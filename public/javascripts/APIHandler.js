const axios = require("axios");

class APIHandler {
  constructor(baseUrl) {
    this.BASE_URL = baseUrl;
  }

  getFullList() {
    axios
      .get(`${this.BASE_URL}/people`)
      .then(response => {
        console.log(response.data);
      })
      .catch(err => {
        console.log(err);
      });
  }

  updateOneRegister() {
    const currentId = document.getElementById("editId").value;
    const xposition = document.getElementById("name2Id").value;
    const yposition = document.getElementById("occupation2Id").value;

    axios
      .put(`${this.BASE_URL}/people/${currentId}`, {
        _user,
        xposition,
        yposition
      })
      .then(response => {
        console.log(response.data);
        this.getFullList();
      })
      .catch(err => {
        console.log(err);
      });
  }
}
