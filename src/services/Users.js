
import axios from "axios";

const API_URL = 'https://restcountries.com/v3.1';
const getCountry = (countryName) =>{
    return axios.get(`${API_URL}/name/${countryName}`)
}

const getAllCountries = () => {
  return axios.get(`${API_URL}/all`);
};

const getCountriesByRegion = (region) => {
  return axios.get(`${API_URL}/region/${region}`);
};

export default {
  getAllCountries,
  getCountriesByRegion,
  getCountry,
};
