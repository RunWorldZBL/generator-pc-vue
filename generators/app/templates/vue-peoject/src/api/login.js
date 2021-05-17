import axios from '@/utils/request'

/**
 * 获取验证码接口
 * @param {*} sid 唯一标识
 */
const getCode = async (sid) => {
  return axios.get('/public/getCaptcha', {
    params: {
      sid: sid
    }
  })
}
/**
 * 找回密码接口
 * @param {*} option 用户信息（邮箱，验证码）
 */
const forget = option => {
  return axios.post('/login/forget', {
    ...option
  })
}
/**
 * 登录接口
 * @param {*} loginInfo 用户登录信息（用户名，密码，验证码，sid）
 */
const login = (loginInfo) => {
  return axios.post('/login/login', {
    ...loginInfo
  })
}

export {
  getCode,
  forget,
  login
}
