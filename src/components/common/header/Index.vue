<template>
  <div class="nice-header transition shadow" :class="menuStatu">
    <ul class="nice-nav nice-nav-tool flex-row">
      <li class="nice-nav-item">
        <a href="javascript:;" title="侧边伸缩" @click="changeCollapse">
          <i class="iconfont" :class="iconStatu"></i>
        </a>
      </li>
      <li class="nice-nav-item">
        <a href="http://nicenav.cn/desktop-music" target="_blank" title="前台">
          <i class="iconfont nice-icon-earth"></i>
        </a>
      </li>
      <li class="nice-nav-item">
        <a href="javascript:;" title="刷新">
          <i class="iconfont nice-icon-refresh font18"></i>
        </a>
      </li>
    </ul>
    <!-- <div class="nice-nav nice-nav-user"></div> -->
  </div>
</template>

<script>
  export default {
    data() {
      return {
        collapse: false
      };
    },
    components: {},
    computed: {
      menuStatu () {
        return this.collapse ? "nice-shrink" : "";
      },
      iconStatu () {
        return this.collapse ? "nice-icon-indent" : "nice-icon-outdent";
      },
    },
    watch: {},
    methods: {
      // 侧边栏菜单折叠
      changeCollapse() {
        this.collapse = !this.collapse
        this.$bus.emit('collapse', this.collapse)
      }
    },
    created() {

    },
    mounted() {

    },
  }
</script>
<style lang='stylus' scoped>
.nice-header {
  width: calc(100% - 220px);
  height: 50px;
  position: fixed;
  top: 0;
  left: 220px;
  background-color: #ffffff;
  z-index: 1000;
  border-bottom: 1px solid #f6f6f6;
  .nice-nav {
    position: relative;
    .nice-nav-item {
      height: 50px;
      line-height: 50px;
      margin: 0 20px;
      position: relative;
    }
  }
  &.nice-shrink {
    width: 100%;
    left: 60px;
  }
}
</style>