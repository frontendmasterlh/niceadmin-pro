<template>
  <div class="nice-layout" :class="menuStatu">
    <div class="nice-layout-body">
      <div class="nice-layout-fuild nice-anim nice-anim-up">
        <keep-alive :include="tagList">
          <router-view></router-view>
        </keep-alive>
      </div>
      <nice-footer></nice-footer>
    </div>
  </div>
</template>

<script>
  import niceFooter from '@/components/common/footer/Index'
  export default {
    data() {
      return {
        tagList: [],
        collapse: false
      }
    },
    components: {
      niceFooter
    },
    computed: {
      menuStatu() {
        return this.collapse ? "nice-shrink" : "";
      }
    },
    methods: {
      // 接收bus传递控制菜单折叠
      changeCollapse() {
        this.$bus.on('collapse-content', msg => {
          this.collapse = msg
        })
      },
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      getTagList() {
        this.$bus.on('tags', msg => {
          let tagsList = [];
          for (let i = 0, len = msg.length; i < len; i++) {
            msg[i].name && arr.push(msg[i].name);
          }
          this.tagsList = tagsList;
        });
      }
    },
    created() {
      this.changeCollapse()
      this.getTagList()
    }
  }
</script>

<style lang="scss" scoped>
  .nice-layout {
    position: fixed;
    left: 255px;
    right: 0;
    top: 105px;
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
        padding: 10px;
      }
    }

    &.nice-shrink {
      left: 60px;
    }
  }
</style>