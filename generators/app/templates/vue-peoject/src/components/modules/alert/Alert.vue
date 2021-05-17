<template>
  <div v-show="isShow">
    <div class="alert">
      <div class="flex">{{ msg }}</div>
      <div v-if="type === 'alert'">
        <div class="btnCommon success" @click="close()">确定</div>
      </div>
      <div v-else class="space-round">
        <div class="btnCommon cancel" @click="cancelEvent()">取消</div>
        <div class="btnCommon success" @click="successEvent()">确定</div>
      </div>
    </div>
    <div class="mask" @click="closeMask()"></div>
  </div>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'alert'
    },
    msg: {
      type: String,
      default: ''
    },
    isShow: {
      type: Boolean,
      default: false
    },
    success: {
      type: Function,
      default: () => {
        console.log('点击了success')
      }
    },
    cancel: {
      type: Function,
      default: () => console.log('点击了cancel')
    }
  },
  methods: {
    close() {
      // 通过原型链改变 isShow，将其隐藏
      window.vue.$alert('', false)
    },
    closeMask() {
      if (this.type === 'alert') {
        this.close()
      }
    },
    cancelEvent() {
      this.cancel()
      this.close()
    },
    successEvent() {
      this.success()
      this.close()
    }
  },
  mounted() {
    window.vue = this
  }
}
</script>

<style lang="scss" scoped>
$btn-main: #009688;
$btn-dark: darken($btn-main, 5%);
.alert {
  width: 300px;
  height: 150px;
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 300;
  border-radius: 6px;
  background-color: #fff;
  transform: translate(-50%, -50%);
  padding: 20px 10px;
  box-shadow: 0 5px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
}
.flex {
  flex: 1;
  display: flex;
  align-items: center;
}
.space-round {
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 10px;
}
.btnCommon {
  width: 105px;
  height: 32px;
  text-align: center;
  line-height: 32px;
  border-radius: 6px;
  cursor: pointer;
  &.success {
    color: #fff;
    background-color: $btn-main;
    &:hover {
      transition: 0.2s;
      background-color: $btn-dark;
    }
  }
  &.cancel {
    color: #333;
    background-color: #ededed;
  }
}
.mask {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 299;
  background-color: rgba(0, 0, 0, 0.4);
  overflow: hidden;
}
</style>
