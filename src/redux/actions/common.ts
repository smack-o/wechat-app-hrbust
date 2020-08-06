
import { banner } from '@/services/common'
import { Dispatch } from 'redux'
import { cError } from '@/utils'

export const GET_HOME_BANNER = 'user/GET_HOME_BANNER'

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