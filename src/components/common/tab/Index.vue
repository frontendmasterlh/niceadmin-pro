<template>
  <div class="nice-tabs transition" :class="menuStatu">
    <!-- 左侧按钮 -->
    <div class="nice-tabs-control shadow left flex-center">
      <i class="el-icon-d-arrow-left"></i>
    </div>
    <!-- 左侧按钮 -->
    <div class="nice-tabs-control shadow right flex-center">
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <!-- 下拉工具 -->
    <div class="nice-tabs-control shadow down flex-center" :class="dropStatu" @click="openTool">
      <i class="el-icon-caret-bottom"></i>
      <div class="nice-dropdown">
        <ul>
          <li @click.stop="closeLeft">
            <span class="flex-row">
              <i class="el-icon-back"></i>
              关闭左侧
            </span>
          </li>
          <li @click.stop="closeRight">
            <span class="flex-row">
              <i class="el-icon-right"></i>
              关闭右侧
            </span>
          </li>
          <li @click.stop="closeOther">
            <span class="flex-row">
              <i class="el-icon-close"></i>
              关闭其它
            </span>
          </li>
          <li @click.stop="closeAll">
            <span class="flex-row">
              <i class="el-icon-error"></i>
              关闭所有
            </span>
          </li>
        </ul>
      </div>
    </div>
    <!-- tab -->
    <div class="nice-tabs-scroll">
      <ul class="list">
        <router-link to="/dashboard" tag="li" class="flex-center home" :class="{'active': isActive('/dashboard')}">
          <i class="iconfont nice-icon-homepage_fill"></i>
        </router-link>
        <!-- <li class="flex-center" v-for="(item, index) of 20" :key=index>
          <router-link to="/dashboard" class="tags-li-title">
            测试
          </router-link>
          <span class="close-btn flex-center transition" @click="closeTags(index)"><i class="el-icon-close"></i></span>
        </li> -->
        <li class="flex-center" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
          <router-link :to="item.path" class="tags-li-title">
            {{item.title}}
          </router-link>
          <span class="close-btn flex-center transition" @click="closeTags(index)"><i class="el-icon-close"></i></span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        collapse: false,
        isOpen: false,
        tagsList: []
      };
    },
    components: {},
    computed: {
      menuStatu() {
        return this.collapse ? 'nice-shrink' : '';
      },
      showTags() {
        return this.tagsList.length > 0;
      },
      dropStatu() {
        return this.isOpen ? 'open' : ''
      }
    },
    watch: {
      $route(newValue, oldValue) {
        this.setTags(newValue);
      }
    },
    methods: {
      // 展开标签下拉
      openTool() {
        this.isOpen = !this.isOpen
      },
      isActive(path) {
        return path === this.$route.fullPath;
      },
      // 关闭单个标签
      closeTags(index) {
        const delItem = this.tagsList.splice(index, 1)[0];
        const item = this.tagsList[index] ? this.tagsList[index] : this.tagsList[index - 1];
        if (item) {
          delItem.path === this.$route.fullPath && this.$router.push(item.path);
        } else {
          this.$router.push('/');
        }
      },
      // 关闭左侧
      closeLeft() {
        let currentIndex = null;
        this.tagsList.filter((item, index) => {
          if(item.path == this.$route.fullPath) {
            currentIndex = index
          }
        })
        this.tagsList = this.tagsList.filter((item, index) => {
          return Number(index) >= Number(currentIndex)
        })
        this.isOpen = false;
      },
      // 关闭右侧
      closeRight() {
        let currentIndex = null;
        this.tagsList.filter((item, index) => {
          if(item.path == this.$route.fullPath) {
            currentIndex = index
          }
        })
        this.tagsList = this.tagsList.filter((item, index) => {
          return Number(index) <= Number(currentIndex)
        })
        this.isOpen = false;
      },
      // 关闭其它
      closeOther() {
        const curItem = this.tagsList.filter(item => {
          return item.path === this.$route.fullPath;
        })
        this.tagsList = curItem;
        this.isOpen = false;
      },
      // 关闭所有
      closeAll() {
        this.tagsList = [];
        this.$router.push('/');
        this.isOpen = false;
      },
      // 设置标签
      setTags(route) {
        const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath;
        })
        if (!isExist) {
          if (!route.meta.title || route.fullPath === '/dashboard') {
            return
          }
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath,
            name: route.matched[1].components.default.name
          })
        }
        this.$bus.emit('tags', this.tagsList);
      },
      // 接收bus传递控制菜单折叠
      changeCollapse() {
        this.$bus.on('collapse', msg => {
          this.collapse = msg
          this.$bus.emit('collapse-content', msg)
        })
      },
      // 监听关闭当前页面的标签页
      watchClosetag() {
        this.$bus.on('close_current_tags', () => {
          for (let i = 0, len = this.tagsList.length; i < len; i++) {
            const item = this.tagsList[i];
            if (item.path === this.$route.fullPath) {
              if (i < len - 1) {
                this.$router.push(this.tagsList[i + 1].path);
              } else if (i > 0) {
                this.$router.push(this.tagsList[i - 1].path);
              } else {
                this.$router.push('/');
              }
              this.tagsList.splice(i, 1);
              break;
            }
          }
        })
      }
    },
    created() {
      this.setTags(this.$route);
      this.changeCollapse()
      this.watchClosetag()
    },
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
  .nice-tabs {
    width: calc(100% - 255px);
    height: 34px;
    position: fixed;
    top: 70px;
    left: 255px;
    z-index: 1000;
    padding: 10px 0px 2px;
    box-sizing: content-box;
    background: #f7f7f7;


    .nice-tabs-control {
      position: absolute;
      top: 0;
      width: 36px;
      height: 34px;
      line-height: 34px;
      border-radius: 2px;
      cursor: pointer;
      text-align: center;
      transition: all .3s;
      -webkit-transition: all .3s;
      box-sizing: border-box;
      background: #ffffff;

      &.left {
        left: 10px;
      }

      &.right {
        right: 55px;
      }

      &.down {
        width: 36px;
        right: 10px;

        &.open {
          .nice-dropdown {
            visibility: visible;
            opacity: 1;
            transform: translateY(0px);
            display: initial;
          }
        }
      }

      i {
        font-size: 17px;
      }
    }
    .nice-tabs-scroll {
      position: absolute;
      top: 0;
      left: 55px;
      right: 102px;
      display: flex;
      overflow: hidden;
      white-space: nowrap;
    }
    .list {
      display: flex;
      transform: translateX(0px);
      li {
        min-width: 0;
        line-height: 34px;
        max-width: 160px;
        text-overflow: ellipsis;
        padding: 0 15px;
        overflow: hidden;
        position: relative;
        padding-right: 40px;
        cursor: pointer;
        background: #ffffff;
        margin-right: 10px;
        box-shadow: 0 1px 5px 0 rgba(0,0,0,.05);
        a {
          color: #999999;
        }

        &.home {
          padding-right: 15px;
          width: 40px;
        }

        .nice-icon-homepage_fill {
          font-size: 19px;
          margin-top: 1px;
        }

        .close-btn {
          position: absolute;
          right: 8px;
          top: 50%;
          margin: -7px 0 0;
          width: 16px;
          height: 16px;
          line-height: 16px;
          border-radius: 50%;
          font-size: 12px;

          &:hover {
            background: #17B3A3;
            color: #fff;
          }
        }
        &.active {
          a {
            color: #2f3447;
          }
        }
      }
    }

    &.nice-shrink {
      width: calc(100% - 60px);
      left: 60px;
    }
  }
</style>