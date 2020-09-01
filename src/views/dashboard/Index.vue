<template>
  <div class="dashboard-wrap">
    <el-row :gutter="20">
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card class="nice-card">
          <div class="flex-column-center">
            <img src="../../assets/images/icon1.png" class="icon" alt="">            
            <span class="desc">累计听歌数</span>
            <h2>22164</h2>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card class="nice-card">
          <div class="flex-column-center">
            <img src="../../assets/images/icon2.png" class="icon" alt="">
            <span class="desc">创建歌单</span>
            <h2>70</h2>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card class="nice-card">
          <div class="flex-column-center">
            <img src="../../assets/images/icon3.png" class="icon" alt="">
            <span class="desc">收藏歌单</span>
            <h2>42</h2>
          </div>
        </el-card>
      </el-col>
      <el-col :xs="24" :sm="24" :md="12" :lg="6" :xl="6">
        <el-card class="nice-card">
          <div class="flex-column-center">
            <img src="../../assets/images/icon4.png" class="icon" alt="">
            <span class="desc">粉丝数量</span>
            <h2>2666</h2>
          </div>
        </el-card>
      </el-col>
    </el-row>
    <!-- <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="9" :xl="5">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <el-row>
              <div class="userinfo con">
                <div class="avatar">
                  <img src="../../assets/images/logo-small.png" alt="">
                </div>
                <p class="name">niceadmin Pro</p>
                <p class="nickname">lxhcool丶</p>
                <p class="description">从前慢，车、马、邮件都慢，一生只够爱一人……”能真正打动人的总是朴实无华，没有张扬，默不作声。 在这个充斥着各种联络通讯方式的年代，有时候刻意去寻找的东西却已找不到了。</p>
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
              </div>
            </el-row>
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="15" :xl="14">
        <div class="grid-content bg-purple">
          <el-card class="nice-card">
            <panel />
          </el-card>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="24" :xl="5">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row> -->
  </div>
</template>

<script>
  // import panel from '@/components/home/chart/Index'
  export default {
    data() {
      return {

      };
    },
    components: {
      // panel
    },
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
      height: 400px;
      text-align: center;
      padding: 20px 20px 0;

      .avatar {
        width: 100px;
        margin: 0 auto 20px;

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
        margin-bottom: 35px;
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
    }
  }
</style>