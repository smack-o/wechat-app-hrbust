
import { banner, news } from '@/services/common'
import { Dispatch } from 'redux'
import { cError } from '@/utils'

export const GET_HOME_BANNER = 'user/GET_HOME_BANNER'
export const GET_NEWS = 'use/GET_NEWS'

export const getBanner = (): any => async (dispatch: Dispatch) => {
  const [error, res] = await cError(banner())
  console.log(res)
  if (!error) {
    dispatch({
      type: GET_HOME_BANNER,
      data: res.data
    })
  }
}

export const getNews = (data: Parameters<typeof news>[0]): any => async (dispatch: Dispatch) => {
  const [err, res] = await cError(news(data))
  if (!err) {
    dispatch({
      type: GET_NEWS,
      data: res.data,
      page: data.page
    })
  }
  return res
}
