import axios from 'axios'

const tembak = axios.create({
  // baseURL: 'http://localhost:3000'
  baseURL: 'https://e-commerce-cms-viki.herokuapp.com'
})

export default tembak
