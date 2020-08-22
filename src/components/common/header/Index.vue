<template>
  <div class="nice-header shadow" :class="menuStatu">
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
        return this.collapse ? "nice-icon-pic-right" : "nice-icon-pic-left";
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
  width: 100%;
  height: 55px;
  position: fixed;
  top: 0;
  left: 0;
  background-color: #ffffff;
  z-index: 1000;
  .nice-nav {
    position: relative;
    &.nice-nav-tool {
      left: 220px;
    }
    .nice-nav-item {
      height: 55px;
      line-height: 55px;
      margin: 0 20px;
      position: relative;
    }
  }
  &.nice-shrink {
    .nice-nav {
      &.nice-nav-tool {
        left: 60px;
      }
    }
  }
}
</style>