<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{ name: 'login' }">登入</router-link></li>
          <li class="layui-this">注册</li>
        </ul>
        <div
          class="layui-form layui-tab-content"
          id="LAY_ucm"
          style="padding: 20px 0"
        >
          <div class="layui-tab-item layui-show">
            <div class="layui-form layui-form-pane">
              <form method="post">
                <div class="layui-form-item">
                  <label for="L_email" class="layui-form-label">邮箱</label>
                  <validation-provider
                    rules="required|email"
                    name="email"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="email"
                        v-model="email"
                        placeholder="请输入您的邮箱"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-form-mid layui-word-aux">
                      将会成为您唯一的登入名
                    </div>
                    <div class="layui-input-inline error">
                      {{ errors[0] }}
                    </div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <label for="L_username" class="layui-form-label">昵称</label>
                  <validation-provider
                    rules="required"
                    name="username"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="username"
                        v-model="username"
                        placeholder="请输入您的昵称"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div class="layui-input-inline error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <ValidationObserver>
                  <div class="layui-form-item">
                    <label for="L_pass" class="layui-form-label">密码</label>
                    <ValidationProvider
                      rules="required|min:6|max:16"
                      name="password"
                      v-slot="{ errors }"
                      vid="password"
                    >
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          name="password"
                          v-model="password"
                          placeholder="请设置您的密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-form-mid layui-word-aux">
                        6到16个字符
                      </div>
                      <div class="layui-input-inline error">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                  </div>
                  <div class="layui-form-item">
                    <label for="L_repass" class="layui-form-label"
                      >确认密码</label
                    >
                    <ValidationProvider
                      rules="required|confirmed:password"
                      name="repass"
                      v-slot="{ errors }"
                    >
                      <div class="layui-input-inline">
                        <input
                          type="password"
                          name="repass"
                          v-model="repass"
                          placeholder="请确认您的密码"
                          autocomplete="off"
                          class="layui-input"
                        />
                      </div>
                      <div class="layui-input-inline error">
                        {{ errors[0] }}
                      </div>
                    </ValidationProvider>
                  </div>
                </ValidationObserver>
                <div class="layui-form-item">
                  <label for="L_vercode" class="layui-form-label">验证码</label>
                  <validation-provider
                    rules="required|length:4"
                    name="code"
                    v-slot="{ errors }"
                  >
                    <div class="layui-input-inline">
                      <input
                        type="text"
                        name="code"
                        v-model="code"
                        placeholder="请输入验证码"
                        autocomplete="off"
                        class="layui-input"
                      />
                    </div>
                    <div v-html="svg" @click="_getCode()"></div>
                    <div class="layui-input-inline error">{{ errors[0] }}</div>
                  </validation-provider>
                </div>
                <div class="layui-form-item">
                  <button class="layui-btn">立即注册</button>
                </div>
                <div class="layui-form-item fly-form-app">
                  <span>或者直接使用社交账号快捷注册</span>
                  <a
                    href=""
                    onclick="layer.msg('正在通过QQ登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-qq"
                    title="QQ登入"
                  ></a>
                  <a
                    href=""
                    onclick="layer.msg('正在通过微博登入', {icon:16, shade: 0.1, time:0})"
                    class="iconfont icon-weibo"
                    title="微博登入"
                  ></a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getCode } from '@/api/login'
import { ValidationObserver, ValidationProvider } from 'vee-validate'

export default {
  name: 'reg',
  data() {
    return {
      email: '',
      username: '',
      password: '',
      repass: '',
      code: '',
      svg: ''
    }
  },
  components: {
    ValidationProvider,
    ValidationObserver
  },
  mounted() {
    this._getCode()
  },
  methods: {
    _getCode() {
      const sid = this.$store.state.sid
      getCode(sid).then((res) => {
        console.log(res)
        if (res.code === 200) {
          this.svg = res.data
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.error {
  color: rgb(204, 0, 0);
  clear: both;
}
</style>
