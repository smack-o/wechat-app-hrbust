import wepy from 'wepy'
import { request } from 'utils'
import { store } from '../store/index'
import { setLoading } from '../store/actions'
export default class courseMixin extends wepy.mixin {
  async createNewTerm(term, captcha) {
    if (term === undefined) return
    const reqData = { term }
    if (captcha) {
      reqData.captcha = captcha
    }
    const [err, res] = await this.to(request({
      url: '/api/hrbust/updateCourse',
      data: reqData
    }))

    const { status } = res.data

    store.dispatch(setLoading(false))

    if (err) {
      wepy.showToast({
        title: '抓取课表失败',
        image: '../assets/icon/error_icon.png',
        duration: 1000
      })
      return Promise.reject('抓取课表失败')
    }

    if (status === 404) {
      wepy.showToast({
        title: '课表为空',
        image: '../assets/icon/icon_info.png',
        duration: 1000
      })
      return Promise.reject('课表为空')
    }

    // 用户名密码错误需要重新登录
    if (status === 400006) {
      wx.showModal({
        title: '账号密码错误',
        content: '可能是您近期更改教务在线密码了，是否重新登录？',
        success(res) {
          if (res.confirm) {
            wepy.reLaunch({
              url: './login'
            })
            // console.log('用户点击确定')
          } else if (res.cancel) {
            // console.log('用户点击取消')
            wepy.switchTab({
              url: './index'
            })
          }
        }
      })
      return Promise.reject('账号密码错误')
    }

    if (status === 400005 || status === 400001) {
      if (status === 400001) {
        this.errormsg = '您输入的验证码错误'
      }

      this.captchaImage = res.data.data.captcha
      this.popDialog = true
      this.$apply()
      return Promise.reject('您输入的验证码错误')
    }
    return Promise.resolve(res)
  }

  to (promise) {
    return promise.then(data => {
      return [null, data]
    })
    .catch(error => [error])
  }
}
