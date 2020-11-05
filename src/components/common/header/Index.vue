<template>
  <div class="nice-header flex-between transition" :class="menuStatu">
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
      <breadcrumb />
    </ul>
    <div class="nice-nav nice-nav-user flex-row">
      <div class="avatar-box flex-center">
        <div class="avatar">
          <img class="avatar" src="../../../assets/images/default-avatar.png" alt="">
        </div>
        <div class="user-dropdown">
          <ul>
            <li>
              <a href="###" class="flex-row">
                <img src="../../../assets/images/svg/user.svg" alt="个人主页" />
                个人主页
              </a>
            </li>
            <li>
              <a href="###" class="flex-row">
                <img src="../../../assets/images/svg/award.svg" alt="我的等级" />
                我的等级
              </a>
            </li>
            <li>
              <a href="###" class="flex-row">
                <img src="../../../assets/images/svg/settings.svg" alt="个人设置" />
                个人设置
              </a>
            </li>
            <li>
              <a href="###" class="flex-row" @click="logOut">
                <img src="../../../assets/images/svg/power.svg" alt="退出登录" />
                退出登录
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import breadcrumb from '@/components/common/breadcrumb/Index'
  export default {
    data() {
      return {
        // collapse: false
      };
    },
    props: {
      collapse: {
        type: Boolean,
        default: false
      }
    },
    components: {
      breadcrumb
    },
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
        this.$emit('changeCollapse', this.collapse)
      },
      // 退出登录
      logOut() {
        localStorage.removeItem('login_name');
        this.$router.push('/login');
      }
    },
    created() {

    },
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
.nice-header {
  width: calc(100% - 255px);
  height: 60px;
  position: fixed;
  top: 0;
  left: 255px;
  background-color: #fff;
  z-index: 1000;
  border-bottom: 1px solid #f6f6f6;
  .nice-nav {
    position: relative;
    .nice-nav-item {
      height: 60px;
      line-height: 60px;
      margin: 0 20px;
      position: relative;
    }
  }
  .nice-nav-tool {
    flex: 1;
  }
  .nice-nav-user {
    padding-right: 20px;
    .avatar-box {
      height: 100%;
      position: relative;
      &::after {
        display: inline-block;
        margin-left: 0.3em;
        vertical-align: 0.1em;
        content: "";
        border-top: 0.4em solid;
        border-right: 0.4em solid transparent;
        border-bottom: 0;
        border-left: 0.4em solid transparent;
        -webkit-transition: all 0.3s ease-in-out;
        transition: all 0.3s ease-in-out;
      }
      .avatar {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-right: 8px;
      }
      .user-dropdown {
        position: absolute;
        background-color: #313435;
        width: 110px;
        right: 0;
        top: 60px;
        opacity: 0;
        visibility: hidden;
        z-index: 99999;
        border-radius: 2px;
        transition: all 0.3s ease-in-out;
        box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        transform: translateY(20px);
        ul {
          font-size: 0.75rem;
          padding: 0.5rem;
          li {
            padding: 0.5rem;
            transition: all 0.3s ease-in-out;
            a {
              color: rgba(255,255,255,0.8);
              img {
                width: 14px;
                margin-right: 8px;
              }
            }
          }
        }
      }
    }
    &:hover {
      .avatar-box {
        &::after {
          transform:rotate(180deg);
        }
      }      
      .user-dropdown {
        visibility: visible;
        opacity: 1;
        transform: translateY(0px);
        display: initial;
      }
    }
  }
  &.nice-shrink {
    width: 100%;
    left: 60px;
  }
}
</style>