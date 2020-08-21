<template>
  <div class="nice-menu transition">
    <div class="nice-menu-scroll">
      <div class="nice-logo flex-center">
        <router-link to="/" tag="span" class="flex-center">
          <img src="../../../assets/images/logo-white.png" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      };
    },
    components: {},
    computed: {},
    watch: {},
    methods: {

    },
    created() {

    },
    mounted() {

    },
  }
</script>
<style lang='stylus' scoped>
.nice-menu {
  width: 220px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 1001;
  overflow-x: hidden;
  color: #ffffff;
  background: #30333C;
  .nice-menu-scroll {
    position: relative;
    width: 220px;
    height: 100%;
    overflow-x: hidden;
    .nice-logo {
      position: fixed;
      left: 0;
      top: 0;
      z-index: 1002;
      width: 220px;
      text-align: center;
      height: 54px;
      padding: 0 15px;
      box-sizing: border-box;
      overflow: hidden;
      font-weight: 300;
      background-repeat: no-repeat;
      background-position: center center;
      line-height: 50px;
      transition: all .3s;
      box-shadow: 0 1px 2px 0 rgba(0,0,0,.15);
      color: rgba(255,255,255,.8);
      background-color: #30333C;
      cursor: pointer;
      span {
        font-size: 16px;
      }
    }
  }
}
</style>