import { get } from '@/api'

export const getCompanyData = (params: object): any => get('get/company/data', params)
