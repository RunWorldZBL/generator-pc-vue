<template>
  <div class="layui-container fly-marginTop">
    <div class="fly-panel fly-panel-user" pad20>
      <div class="layui-tab layui-tab-brief" lay-filter="user">
        <ul class="layui-tab-title">
          <li><router-link :to="{name:'login'}">登入</router-link></li>
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
                <ValidationObserver>
                  <ValidationProvider name="password" rules="confirmed:confirmation" v-slot="{ errors }">
                    <input v-model="value" type="text">
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                  <ValidationProvider name="password" v-slot="{ errors }" vid="confirmation">
                    <input v-model="confirmation" type="text">
                    <span>{{ errors[0] }}</span>
                  </ValidationProvider>
                </ValidationObserver>
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
  name: 'demo',
  data() {
    return {
      value: '',
      confirmation: ''
    }
  },
  components: {
    ValidationProvider, ValidationObserver
  },
  mounted() {
    this._getCode()
  },
  methods: {
    _getCode () {
      getCode().then((res) => {
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
