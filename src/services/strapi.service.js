import axios from 'axios';

const API_ENDPOINT = process.env.REACT_APP_STRAPI_URL;

const strapi = {
  async find({ endpoint = API_ENDPOINT, service, query }) {
    const { data } = await axios.get(`${endpoint}/${service}${query}`);
    return data;
  },

  async get({ endpoint = API_ENDPOINT, service, id }) {
    const response = await axios.get(`${endpoint}/${service}/${id}`);
    return response.data;
  },

  async create({ endpoint = API_ENDPOINT, service, data }) {
    const response = await axios.post(`${endpoint}/${service}`, data);
    return response.data;
  },

  async patch({
    endpoint = API_ENDPOINT, service, data, id,
  }) {
    const response = await axios.patch(`${endpoint}/${service}/${id}`, data);
    return response.data;
  },

  async remove({ endpoint = API_ENDPOINT, service, id }) {
    const { data } = await axios.delete(`${endpoint}/${service}/${id}`);
    return data;
  },
};

export default strapi;
