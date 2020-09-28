<template>
  <div class="error-wrap flex-column">
    <div class="content-error transition" :class="menuStatu">
      <img src="../../assets/images/svg/404.svg" />
      <!-- <h1>404</h1> -->
      <h4>抱歉，你访问的页面不存在。</h4>
    </div>
  </div>
</template>

<script>
export default {
  name: 'error',
  data() {
    return {
      collapse: false
    }
  },
  components: {},
  computed: {
    menuStatu () {
      return this.collapse ? "nice-shrink" : "";
    }
  },
  watch: {},
  methods: {
    // 接收bus传递控制菜单折叠
    changeCollapse() {
      this.$bus.on('collapse-content', msg => {
        console.log(msg)
        this.collapse = msg
      })
    },
  },
  created () {
    this.changeCollapse()
  },
  mounted() {}
}
</script>
<style lang="scss" scoped>
.error-wrap {
  width: 100%;
  height: 100%;
  padding-top: 140px;
  justify-content: center;
  .content-error {
    display: flex;
    -webkit-box-orient: vertical;
    flex-direction: column;
    flex: 1 1 auto;
    justify-content: center;
    align-items: center;
    // margin-left: 220px;
    &.nice-shrink {
      margin-left: 60px;
    }
    img {
      width: 50%;
      margin-bottom: 1.5rem;
    }
    h1 {
      font-size: 6rem;
      font-weight: 300;
      line-height: 1.2;
    }
    h4 {
      font-size: 1.5rem;
    }
  }
}
</style>
