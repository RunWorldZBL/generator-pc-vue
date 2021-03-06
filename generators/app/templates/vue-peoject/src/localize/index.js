import { Validator } from 'vee-validate'

const dictionary = {
  'zh-CN': {
    messages: {
      required: field => '请输入' + field,
      email: () => '请输入正确的邮箱格式',
      min: () => '不符合最小长度要求',
      length: (field, val) => {
        return field + '长度要求' + val
      }
    },
    attributes: {
      name: '账号',
      email: '邮箱',
      password: '密码',
      code: '验证码'
    }
  }
}
Validator.localize(dictionary)
