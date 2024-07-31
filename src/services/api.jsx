import axios from "axios";

class ApiService {
  constructor(url, endpoint) {
    this.baseURL = url;
    this.endpoint = endpoint;
  }

  // Method to get a post by ID
  getData() {
    return axios.get(`${this.baseURL}${this.endpoint}/`);
  }

  // Method to create a new post
  create(data) {
    return axios.post(`${this.baseURL}${this.endpoint}`, data);
  }

  // Method to update a post by ID
  update(id, data) {
    return axios.put(`${this.baseURL}${this.endpoint}/${id}`, data);
  }

  // Method to delete a post by ID
  delete(id) {
    return axios.delete(`${this.baseURL}${this.endpoint}/${id}`);
  }
}

export default ApiService;
