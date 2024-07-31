import axios from "axios";

class ApiService {
  constructor(url, endpoint) {
    this.baseURL = url;
    this.endpoint = endpoint;
  }

  // Method to get a post by ID
  getData() {
    return axios
      .get(`${this.baseURL}${this.endpoint}/`)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("error fetching the data", err);
        throw err;
      });
  }

  // Method to create a new post
  create(data) {
    return axios
      .post(`${this.baseURL}${this.endpoint}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("error creating the data", err);
        throw err;
      });
  }

  // Method to update a post by ID
  update(id, data) {
    return axios
      .put(`${this.baseURL}${this.endpoint}/${id}`, data)
      .then((response) => {
        return response.data;
      })
      .catch((err) => {
        console.log("error updating the data", err);
        throw err;
      });
  }

  // Method to delete a post by ID
  delete(id) {
    return axios
      .delete(`${this.baseURL}${this.endpoint}/${id}`)
      .then(() => {
        return;
      })
      .catch((err) => {
        console.log("error deleting the data", err);
        throw err;
      });
  }
}

export default ApiService;
