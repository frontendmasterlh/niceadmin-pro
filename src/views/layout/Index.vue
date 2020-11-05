<template>
  <div class="nice-layout" :class="menuStatu">
    <nice-header :collapse="collapse" @changeCollapse="changeCollapse"></nice-header>
    <div class="nice-layout-body">
      <div class="nice-layout-fuild">
        <keep-alive :include="tagsList">
          <router-view class="nice-anim nice-anim-upbit"></router-view>
        </keep-alive>
      </div>
      <nice-menu></nice-menu>
      <nice-tab></nice-tab>
      <nice-footer></nice-footer>
    </div>
  </div>
</template>

<script>
  import NiceHeader from '@/components/common/header/Index'
  import niceFooter from '@/components/common/footer/Index'
  import NiceMenu from '@/components/common/menu/Index'
  import NiceTab from '@/components/common/tab/Index'
  export default {
    data() {
      return {
        tagsList: [],
        collapse: false,
        screenWidth: document.body.clientWidth
      }
    },
    components: {
      NiceHeader,
      niceFooter,
      NiceMenu,
      NiceTab
    },
    computed: {
      menuStatu() {
        return this.collapse ? "nice-shrink" : "";
      },
      isCollapse: {
        get () {
          return this.screenWidth < 768
        },
        set () {
        }
      }
    },
    watch: {
      screenWidth (val) {
        if(val < 768) {
          this.collapse = true
          this.$bus.emit('collapse', this.collapse)
        } else {
          this.collapse = false
          this.$bus.emit('collapse', this.collapse)
        }
      }
    },
    methods: {
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      getTagList() {
        this.$bus.on('tags', msg => {
          console.log(msg)
          let tagsList = [];
          for (let i = 0, len = msg.length; i < len; i++) {
            msg[i].name && tagsList.push(msg[i].name);
          }
          this.tagsList = tagsList;
        });
      },
      changeCollapse(collapse) {
        this.collapse = !this.collapse
        this.$bus.emit('collapse', this.collapse)
      }
    },
    created() {
      this.getTagList()
    },
    mounted () {
      // 监听窗口大小
      const that = this
      window.addEventListener('resize', function() {
        that.screenWidth = document.body.clientWidth
      })
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
        min-height: calc(100vh - 195px);
        padding: 10px;
      }
    }

    &.nice-shrink {
      left: 60px;
    }
  }
</style>