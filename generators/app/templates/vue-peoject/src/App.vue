<template>
  <div id="app">
    <imooc-header></imooc-header>
    <router-view class="animated fadeIn"></router-view>
    <imooc-footer></imooc-footer>
  </div>
</template>
<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
export default {
  name: 'app',
  components: {
    'imooc-header': Header,
    'imooc-footer': Footer
  }
}
</script>
<style lang="scss">
@import '~@/assets/layui/css/layui.css';
@import '~@/assets/css/global.css';
@import '~@/assets/layui/css/modules/layer/default/layer.css';
@import 'https://cdn.bootcdn.net/ajax/libs/animate.css/4.1.1/animate.compat.min.css';
svg {
  cursor: pointer;
  display: block;
}
</style>
