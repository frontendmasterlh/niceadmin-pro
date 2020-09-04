<template>
  <div class="dashboard-wrap">
    <el-row type="flex" :gutter="25">
      <el-col :span="24">
        <div class="userinfo">
          <h2 class="title">工作台</h2>
          <div class="top flex-row">
            <div class="avatar flex-center">
              <img src="http://p1.music.126.net/CPOCNGKwvMJ7Njt17Lu-Tg==/109951164836393307.jpg" alt="">
            </div>
          </div>
        </div>
      </el-col>
    </el-row>

    <!-- <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="24">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <el-row>
              <div class="userinfo flex-row">
                <div class="avatar flex-center">
                  <img src="../../assets/images/logo-small.png" alt="">
                </div>
                <p class="name">niceadmin Pro</p>
                <p class="nickname">lxhcool丶</p>
                <p class="description">在这个充斥着各种联络通讯方式的年代，有时候刻意去寻找的东西却已找不到了。</p>
                <ul class="contact">
                  <li>
                    <el-tooltip class="item" effect="dark" content="1138659665@qq.com" placement="top">
                      <a href="http://mail.qq.com/cgi-bin/qm_share?t=qm_mailme&amp;email=1138659665@qq.com"
                        target="_blank">
                        <img src="../../assets/images/contact/mail.png">
                      </a>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="dark" content="1138659665" placement="top">
                      <a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1138659665&amp;site=qq&amp;menu=yes" target="_blank">
                        <img src="../../assets/images/contact/qq.png">
                      </a>
                    </el-tooltip>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="dark" content="18668161482" placement="top">
                      <a href="javascript:;">
                        <img src="../../assets/images/contact/wexin.png">
                      </a>
                    </el-tooltip>
                  </li>
                  <li>
                    <a href="https://gitee.com/lxhcool" target="_blank">
                      <img src="../../assets/images/contact/github.png">
                    </a>
                  </li>
                  <li>
                    <el-tooltip class="item" effect="dark" content="lxhcool丶" placement="top">
                      <a href="https://music.163.com/#/user/home?id=119832090" target="_blank">
                        <img src="../../assets/images/contact/music.png">
                      </a>
                    </el-tooltip>
                  </li>
                </ul>
                <el-button type="primary" class="px40">follow</el-button>
              </div>
            </el-row>
          </el-card>
        </div>
      </el-col>
    </el-row>
    <div class="nice-layout-fuild nice-anim nice-anim-up">
    </div> -->
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
  .dashboard-wrap {
    .nice-card {
      position: relative;

      .icon {
        width: 30px;
        margin-bottom: 10px;
      }

      h2 {
        font-size: 28px;
        font-weight: 700;
      }

      .desc {
        color: #808695;
        font-size: 12px;
        margin-bottom: 10px;
      }
    }

    .userinfo {
      width: 100%;
      background-color: #ffffff;
      padding: 20px;
      margin: -20px;
      box-sizing: content-box;
      .title {
        margin-bottom: 15px;
      }

      .avatar {
        width: 64px;
        height: 64px;
        border-radius: 50%;

        img {
          width: 100%;
          border-radius: 50%;
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
        min-height: 80px;
      }

      .contact {
        margin-bottom: 35px;
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

      .follow-btn {
        padding: 0 40px;
        height: 36px;
        border-radius: .215rem;
        color: #ffffff;
        font-size: 1rem;
        background: #17B3A3;
      }
    }
  }
</style>