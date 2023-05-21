import request from '@/utils/request/axios'

export const GetUserData = async (page: number, size: number) => {
  try {
    const response = await request.post('/admin/user_stats', {
      page,
      size,
    })
    return response.data
  }
  catch (error) {
    console.error(error)
    throw error
  }
}

export const UpdateRateLimit = async (email: string, rateLimit: number) => {
  try {
    const response = await request.post('/admin/rate_limit', {
      email,
      rateLimit,
    })
    return response.data
  }
  catch (error) {
    console.error(error)
    throw error
  }
}

export const updateUserFullName = async (data: any): Promise<any> => {
  try {
    const response = await request.put('/admin/users', data)
    return response.data
  }
  catch (error) {
    console.error(error)
    throw error
  }
}

export const deleteUser = async (email: string): Promise<any> => {
  try {
    const response = await request.delete(`/admin/users/${email}`)
    return response.data
  }
  catch (error) {
    console.error(error)
    throw error
  }
}
