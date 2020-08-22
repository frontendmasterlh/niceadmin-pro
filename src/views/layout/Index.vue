<template>
  <div class="nice-layout" :class="menuStatu">    
    <div class="nice-layout-body">
      <div class="nice-layout-fuild">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      collapse: false
    }
  },
  computed: {
    menuStatu () {
      return this.collapse ? "nice-shrink" : "";
    }
  },
  methods: {
    // 接收bus传递控制菜单折叠
    changeCollapse() {
      this.$bus.on('collapse-content', msg => {
        this.collapse = msg
      })
    }
  },
  created () {
    this.changeCollapse()
  }
}
</script>

<style lang="stylus" scoped>
  .nice-layout {
    position: fixed;
    left: 220px;
    right: 0;
    top: 55px;
    bottom: 0;
    z-index: 998;
    width: auto;
    overflow: hidden;
    overflow-y: auto;
    box-sizing: border-box;
    transition: all .3s;
    -webkit-transition: all .3s;
    .nice-layout-body {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      overflow: hidden;
      overflow-y: auto;
      .nice-layout-fuild {
        padding: 15px;
      }
    }
    &.nice-shrink {
      left: 60px;
    }
  }
</style>
