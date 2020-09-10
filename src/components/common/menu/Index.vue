<template>
  <div class="nice-menu transition" :class="collapse ? 'nice-shrink': ''">
    <div class="nice-menu-scroll">
      <div class="nice-logo flex-center">
        <router-link to="/" tag="span" class="flex-center"></router-link>
      </div>
      <div class="nice-menu-tree">
        <el-menu class="el-menu-wrapper" router background-color="#30333c" text-color="rgba(255, 255, 255)"
          :collapse="collapse" active-text-color="#3beee0" :collapse-transition="collapseTransition">
          <template v-for="(item, index) of menu">
            <el-submenu :index="index" :key="item.name">
              <template slot="title">
                <i class="iconfont iconfont-menu" :class="item.icon"></i>
                <span>{{item.name}}</span>
              </template>
              <!-- 二级菜单 -->
              <el-menu-item-group v-if="menuStatu(item.children)">
                <el-menu-item v-for="subItem of item.children" :key="subItem.name" :index="subItem.path">
                  {{subItem.name}}
                </el-menu-item>
              </el-menu-item-group>
              <!-- 三级 -->
              <template v-if="!menuStatu(item.children)">
                <el-submenu v-for="(subItem, index) of item.children" :key="subItem.name" :index="index">
                  <template slot="title">{{subItem.name}}</template>
                  <el-menu-item v-for="threeItem of subItem.children" :key="threeItem.name" :index="threeItem.path">
                    {{threeItem.name}}</el-menu-item>
                </el-submenu>
              </template>
            </el-submenu>
          </template>

        </el-menu>
      </div>
    </div>
  </div>
</template>

<script>
  import menu from '@/menu/index'
  export default {
    data() {
      return {
        collapse: false,
        collapseTransition: false,
        menu: menu
      };
    },
    components: {},
    computed: {
      menuStatu() {
        return function (child) {
          for (let key in child) {
            return !child[key].children
          }
        }
      }
    },
    watch: {},
    methods: {
      // 接收bus传递控制菜单折叠
      changeCollapse() {
        this.$bus.on('collapse', msg => {
          this.collapse = msg
          this.$bus.emit('collapse-content', msg)
          console.log(msg)
        })
      }
    },
    created() {
      this.changeCollapse()
    },
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
  .nice-menu {
    width: 255px;
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    z-index: 1001;
    overflow-x: hidden;
    color: #ffffff;
    background: #30333C;
    box-shadow: 2px 0 6px rgba(0,21,41,.35);
    .nice-menu-scroll {
      position: relative;
      width: 255px;
      height: 100%;
      overflow-x: hidden;

      .nice-logo {
        position: fixed;
        left: 0;
        top: 0;
        z-index: 1002;
        width: 255px;
        text-align: center;
        height: 59px;
        padding: 0 15px;
        box-sizing: border-box;
        overflow: hidden;
        font-weight: 300;
        background-repeat: no-repeat;
        background-position: center center;
        line-height: 60px;
        transition: all .15s;
        box-shadow: 0 1px 2px 0 rgba(0, 0, 0, .15);
        color: #ffffff;
        background-color: #30333C;
        cursor: pointer;
        background-image: url("../../../assets/images/logo-white.png");
        background-repeat: no-repeat;
        background-size: 85%;

        span {
          font-size: 16px;
        }
      }

      .nice-menu-tree {
        position: relative;
        padding: 0;
        color: #fff;
        border-radius: 2px;
        font-size: 0;
        box-sizing: border-box;
        width: 255px;
        margin-top: 60px;
        background: 0 0;

        .el-menu-wrapper {
          margin-top: 60px;
          border-right: 0;

          .el-submenu__title {
            span {
              font-size: 12px;
            }
          }

          .iconfont-menu {
            vertical-align: middle;
            margin-right: 10px;
            width: 24px;
            text-align: center;
            font-size: 17px;

            &.nice-icon-dot-circle {
              font-size: 14px;
            }
          }

          .nice-icon-block {
            margin-right: 10px;
          }

          &.el-menu--collapse {
            .el-icon-arrow-right {
              display: none;
            }
          }

          &:not(.el-menu--collapse) {
            width: 257px;
          }

          &.el-menu--collapse {
            width: 61px;
          }
        }
      }

    }

    &.nice-shrink {
      width: 60px;

      .nice-menu-scroll {
        width: 60px;

        .nice-logo {
          width: 60px;
          background-image: url("../../../assets/images/logo-small.png");
          background-repeat: no-repeat;
          background-size: 55%;
        }
      }
    }
  }
</style>