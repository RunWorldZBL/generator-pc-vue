import AlertComponent from './Alert.vue'

const Alert = {}

Alert.install = Vue => {
  // 创建一个具有 alert.vue 的 Vue构造器
  const AlertConstructor = Vue.extend(AlertComponent)
  const instance = new AlertConstructor()
  // 将实例挂载到一个新创建的 div 上
  instance.$mount(document.createElement('div'))
  // 插入到body的最下面
  document.body.appendChild(instance.$el)

  // 添加实例方法
  Vue.prototype.$alert = (msg, bol) => {
    instance.type = 'alert'
    instance.msg = msg
    instance.isShow = bol === undefined ? true : bol
  }

  Vue.prototype.$confirm = (msg, success, cancel, bol) => {
    instance.type = 'confirm'
    instance.msg = msg
    instance.isShow = bol === undefined ? true : bol
    if (typeof success !== 'undefined') {
      instance.success = success
    }
    if (typeof cancel !== 'undefined') {
      instance.cancel = cancel
    }
  }
}
export default Alert
