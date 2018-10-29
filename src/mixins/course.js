import wepy from 'wepy'
import { request } from 'utils'

export default class courseMixin extends wepy.mixin {
  createNewTerm (term) {
    if (term === undefined) return
    return request({
      url: '/api/hrbust/updateCourse',
      data: { term }
    })
    .then((res) => {
      if (res.data.status === 404) {
        throw new Error('课表为空')
      }
    })
    .catch((error) => {
      if (error.message === '课表为空') {
        wepy.showToast({
          title: '课表为空',
          image: '../assets/icon/icon_info.png',
          duration: 1000
        })
      } else {
        wepy.showToast({
          title: '抓取课表失败',
          image: '../assets/icon/error_icon.png',
          duration: 1000
        })
      }
      return Promise.reject('抓取课表失败')
    })
  }
}
