import axios from 'axios'
import aspida from '@aspida/axios'
import api from './aspidaOutput/$api'

export const apiClient = api(aspida(axios))
