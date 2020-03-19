import axiosAPI from './bagsAPI';

export const getBags = (data: {currentPage: number, pageSize: number}) => axiosAPI({ method: 'GET', params: {_page: data.currentPage, _limit: data.pageSize}})
export const getBagsForFilters = () => axiosAPI({ method: 'GET'})
// export const deletePostAPI = (id: number) => axiosAPI(`${baseAPI}/${id}`, { method: 'DELETE' })
// export const editPostAPI = (data: PostI) => axiosAPI(`${baseAPI}/${data.id}`, { method: 'PATCH', data })

// export const addPostAPI = (data: PostI) => axiosAPI(`${baseAPI}`, { method: 'POST', data })