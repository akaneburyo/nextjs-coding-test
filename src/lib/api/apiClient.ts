import aspidaAxios from '@aspida/axios'
import axios from 'axios'
import api from './generated/$api'

export const apiClient = api(aspidaAxios(axios, { baseURL: '/api' }))
