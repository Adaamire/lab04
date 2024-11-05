import axios from 'axios'

const apiClient = axios.create({
  baseURL: '[your mock server url]',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: number, page: number) {
       return apiClient.get('/events?_limit=' + perPage + '&_page=' + page)  
},
  getEvent(id: string) {
    return apiClient.get('/events/' + id)
  }
}