<template>
  <div class="nice-tabs transition" :class="menuStatu">
    <!-- 左侧按钮 -->
    <div class="nice-tabs-control left flex-center">
      <i class="el-icon-d-arrow-left"></i>
    </div>
    <!-- 左侧按钮 -->
    <div class="nice-tabs-control right flex-center">
      <i class="el-icon-d-arrow-right"></i>
    </div>
    <!-- 下拉工具 -->
    <div class="nice-tabs-control down flex-center">
      <i class="el-icon-caret-bottom"></i>
    </div>
    <!-- tab -->
    <ul class="list">
      <li class="flex-center">
        <i class="iconfont nice-icon-homepage_fill"></i>
      </li>
      <li class="flex-center" v-for="(item,index) in tagsList" :class="{'active': isActive(item.path)}" :key="index">
        <router-link :to="item.path" class="tags-li-title">
          {{item.title}}
        </router-link>
        <span class="tags-li-icon" @click="closeTags(index)"><i class="el-icon-close"></i></span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        collapse: false,
        tagsList: []
      };
    },
    components: {},
    computed: {
      menuStatu() {
        return this.collapse ? "nice-shrink" : "";
      },
      showTags() {
        return this.tagsList.length > 0;
      }
    },
    watch: {
      $route(newValue, oldValue) {
        this.setTags(newValue);
      }
    },
    methods: {
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
      // 设置标签
      setTags(route) {
        const isExist = this.tagsList.some(item => {
          return item.path === route.fullPath;
        })
        console.log(isExist)
        if (!isExist) {
          if(!route.meta.title) {
            return
          }
          this.tagsList.push({
            title: route.meta.title,
            path: route.fullPath
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
<style lang='stylus' scoped>
  .nice-tabs {
    width: calc(100% - 220px);
    height: 40px;
    position: fixed;
    top: 50px;
    left: 220px;
    background: #ffffff;
    z-index: 1000;
    height: 40px;
    line-height: 40px;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .1);

    .nice-tabs-control {
      position: absolute;
      top: 0;
      width: 55px;
      height: 100%;
      text-align: center;
      cursor: pointer;
      transition: all .3s;
      -webkit-transition: all .3s;
      box-sizing: border-box;
      border-right: 1px solid #f6f6f6;

      &.left {
        left: 0px;
      }

      &.right {
        right: 40px;
        border-left: 1px solid #f6f6f6;
      }

      &.down {
        width: 40px;
        right: 0;
        border-left: 1px solid #f6f6f6;
      }

      i {
        font-size: 17px;
      }
    }

    .list {
      position: absolute;
      top: 0;
      left: 55px;
      display: flex;

      li {
        min-width: 0;
        line-height: 39px;
        max-width: 160px;
        text-overflow: ellipsis;
        padding: 0 15px;
        overflow: hidden;
        position: relative;
        cursor: pointer;
        border-right: 1px solid #f6f6f6;

        .nice-icon-homepage_fill {
          font-size: 19px;
          margin-top: 1px;
        }

        &::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 0;
          height: 2px;
          border-radius: 0;
          background-color: #30333c;
          transition: all .3s;
        }

        &.active {
          background: #f6f6f6;

          &::after {
            width: 100%;
            border: none;
            height: 2px;
            background-color: #30333c;
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