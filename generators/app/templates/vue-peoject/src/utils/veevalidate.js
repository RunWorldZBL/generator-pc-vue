import { extend, localize } from 'vee-validate'
// eslint-disable-next-line
import { required, email, min, max, length, confirmed } from 'vee-validate/dist/rules'
import zh from 'vee-validate/dist/locale/zh_CN.json'

extend('email', email)
extend('min', min)
extend('max', max)
extend('required', required)
extend('length', length)
extend('confirmed', confirmed)

localize('zh_CN', {
  // 使用扩展运算符，扩展中文包
  messages: {
    ...zh.messages,
    // 全局定义message
    required: '请输入{_field_}'
  },
  // 与validation-provider中的name对应
  // key为name, value为对应的中文field名称
  names: {
    email: '邮箱',
    password: '密码',
    name: '昵称',
    username: '账号',
    repass: '密码',
    code: '验证码'
  },
  // 针对不同的name，定义不同的message消息
  fields: {
    email: {
      email: '请输入正确的{_field_}',
      required: '请您输入{_field_}'
    },
    name: {
      min: (field, { length }) => {
        return `请在${field}输入至少${length}个字符`
      }
    },
    password: {
      min: (field, { length }) => {
        return `${field}请输入至少${length}个字符`
      },
      max: (field, { length }) => {
        return `${field}请输入最大${length}个字符`
      }
    },
    repass: {
      required: (field, { target }) => {
        return `请输入您的确认${field}！`
      },
      confirmed: (field, { target }) => {
        return `两次输入的${field}不一致！`
      },
      min: (field, { length }) => {
        return `请在${field}输入至少${length}个字符`
      }
    },
    code: {
      // eslint-disable-next-line
      length: (field, { length }) => {
        // eslint-disable-next-line
        return `${field}字符长度应该是${length}`
      }
    }
  }
})
