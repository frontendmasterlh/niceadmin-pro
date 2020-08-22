<template>
  <div class="nice-menu transition" :class="isCollapse ? 'shrink': ''">
    <div class="nice-menu-scroll">
      <div class="nice-logo flex-center">
        <router-link to="/" tag="span" class="flex-center"></router-link>
      </div>
      <el-menu
        class="el-menu-wrapper"
        background-color="#30333c"
        text-color="#ffffff"
        :collapse="isCollapse"
        active-text-color="#3beee0"
      >
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span slot="title">导航一</span>
          </template>
          <el-menu-item-group>
            <span slot="title">分组一</span>
            <el-menu-item index="1-1">选项1</el-menu-item>
            <el-menu-item index="1-2">选项2</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="分组2">
            <el-menu-item index="1-3">选项3</el-menu-item>
          </el-menu-item-group>
          <el-submenu index="1-4">
            <span slot="title">选项4</span>
            <el-menu-item index="1-4-1">选项1</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="3" disabled>
          <i class="el-icon-document"></i>
          <span slot="title">导航三</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isCollapse: false,
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
      background-image: url("../../../assets/images/logo-white.png");
      background-repeat: no-repeat;
      background-size: 90%;
      span {
        font-size: 16px;
      }
    }
    .el-menu-wrapper {
      margin-top: 55px;
      &:not(.el-menu--collapse) {
        width: 221px;
      }
      &.el-menu--collapse {
        width: 61px;
      }
    }
  }
  &.shrink {
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