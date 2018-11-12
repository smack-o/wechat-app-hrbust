import wepy from 'wepy'
import { request } from 'utils'

export default class courseMixin extends wepy.mixin {
  async createNewTerm (term) {
    if (term === undefined) return

    const [err, res] = await this.to(request({
      url: '/api/hrbust/updateCourse',
      data: { term }
    }))
    if (err) {
      wepy.showToast({
        title: '抓取课表失败',
        image: '../assets/icon/error_icon.png',
        duration: 1000
      })
      return Promise.reject('抓取课表失败')
    }

    if (res.data.status === 404) {
      wepy.showToast({
        title: '课表为空',
        image: '../assets/icon/icon_info.png',
        duration: 1000
      })
      return Promise.reject('课表为空')
    }

    return Promise.resolve()
  }

  to (promise) {
    return promise.then(data => {
      return [null, data]
    })
    .catch(error => [error])
  }
}
