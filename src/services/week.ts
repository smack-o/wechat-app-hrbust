import { cError } from '@/utils'
import request from '@/utils/request'
import { store } from '@/redux/store'
import { setCurrentTerm } from '@/redux/actions/course'

// 获取周、学期
export const getWeekAndTerm = async (defaultTerm?: number) => {
  const [err, res] = await cError(request({ url: '/api/hrbust/week' }))

  if (err) {
    return Promise.reject('获取周数错误')
  }

  const { week: onlineWeek,term: onlineTerm } = res.data

  // 设置当前周数，如果教务在线获取的周数超过25周，当前周数设置为25
  const MAX_WEEK_NUM = 25
  const isExceed = onlineWeek > MAX_WEEK_NUM
  const term = defaultTerm || onlineTerm

  const thisWeek = isExceed ? MAX_WEEK_NUM : onlineWeek
  await store.dispatch(setCurrentTerm(term))
  return Promise.resolve({
    term,
    week: thisWeek,
  })
}
