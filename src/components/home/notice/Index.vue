<template>
  <div class="nice-card">
    <div class="nice-card-header">
      <span class="label flex-row"> <i class="iconfont nice-icon-user"></i> 作者信息</span>
    </div>
    <div class="nice-card-bodyer">
      <div class="userinfo con">
        <div class="avatar">
          <img src="../../../assets/images/default-avatar.png" alt="">
        </div>
        <p class="nickname">lxhcool丶</p>
        <p class="description">我见证过无数的奇迹与灾祸！时空的诞生与崩塌！” “我走的道路，孤注一掷，不！” “我只想继续走下去......” “这个我......是最完美的一个。”
          “......但你们永远不会记得</p>
        <ul class="contact">
          <li>
            <el-tooltip class="item" effect="dark" content="1138659665@qq.com" placement="top">
              <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=1138659665@qq.com" target="_blank">
                <img src="../../../assets/images/contact/mail.png">
              </a>
            </el-tooltip>
          </li>
          <li>
            <el-tooltip class="item" effect="dark" content="1138659665" placement="top">
              <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1138659665&amp;site=qq&amp;menu=yes" target="_blank">
                <img src="../../../assets/images/contact/qq.png">
              </a>
            </el-tooltip>
          </li>
          <li>
            <el-tooltip class="item" effect="dark" content="18668161482" placement="top">
              <a href="javascript:;">
                <img src="../../../assets/images/contact/wexin.png">
              </a>
            </el-tooltip>
          </li>
          <li>
            <a href="https://gitee.com/lxhcool" target="_blank">
              <img src="../../../assets/images/contact/github.png">
            </a>
          </li>
          <li>
            <a href="https://music.163.com/#/user/home?id=119832090" target="_blank">
              <img src="../../../assets/images/contact/music.png">
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
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
<style lang='scss' scoped>
  .nice-card {
    position: relative;

    .nice-card-header {
      .label {
        flex: 1;

        i {
          font-size: 20px;
          margin-right: 5px;
        }
      }
    }

    .nice-card-bodyer {
      padding-top: 0;

      .userinfo {
        text-align: center;
        padding: 20px 20px 0;

        .avatar {
          width: 75px;
          margin: 0 auto 15px;

          img {
            width: 100%;
          }
        }

        .name {
          font-size: 20px;
          color: #37474f;
          margin-bottom: 20px;
        }

        .nickname {
          color: #a3afb7;
          margin-bottom: 20px;
        }

        .description {
          margin-bottom: 25px;
        }

        .contact {
          text-align: center;

          li {
            display: inline-block;
            margin-right: 15px;
            margin-bottom: 10px;

            a {
              display: inline-block;

              img {
                border: 1px solid #888;
                border-radius: 100%;
              }
            }
          }
        }
      }
    }

  }
</style>