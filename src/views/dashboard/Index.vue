<template>
  <div class="dashboard-wrap" id="dashboard-wrap">
    <dashboard-top></dashboard-top>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <div class="nice-card">
          <div class="nice-card-header">
            <span class="label flex-row"> <i class="iconfont nice-icon-manage"></i> 我的项目</span>
            <el-link type="primary" :underline="false" style="font-size: 13px;">全部项目</el-link>
          </div>
          <div class="nice-card-bodyer">
            <el-row :gutter="10">
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <div class="project-card">
                  <div class="bg-cover">
                    <div class="bg-effect"
                      style="background-image: url('https://resources.ninghao.org/images/candy-shop.jpg');">
                      <span class="layer"></span>
                    </div>
                    <div class="info">
                      <h3>desktop-nicemusic</h3>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <div class="project-card">
                  <div class="bg-cover">
                    <div class="bg-effect"
                      style="background-image: url('https://resources.ninghao.org/images/childhood-in-a-picture.jpg');">
                      <span class="layer"></span>
                    </div>
                    <div class="info">
                      <h3>desktop-nicemusic</h3>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <div class="project-card">
                  <div class="bg-cover">
                    <div class="bg-effect"
                      style="background-image: url('https://resources.ninghao.org/images/contained.jpg');">
                      <span class="layer"></span>
                    </div>
                    <div class="info">
                      <h3>desktop-nicemusic</h3>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <div class="project-card">
                  <div class="bg-cover">
                    <div class="bg-effect"
                      style="background-image: url('https://resources.ninghao.org/images/dragon.jpg');">
                      <span class="layer"></span>
                    </div>
                    <div class="info">
                      <h3>desktop-nicemusic</h3>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <div class="project-card">
                  <div class="bg-cover">
                    <div class="bg-effect"
                      style="background-image: url('https://resources.ninghao.org/images/free_hugs.jpg');">
                      <span class="layer"></span>
                    </div>
                    <div class="info">
                      <h3>desktop-nicemusic</h3>
                    </div>
                  </div>
                </div>
              </el-col>
              <el-col :xs="12" :sm="12" :md="12" :lg="12" :xl="8">
                <div class="project-card">
                  <div class="bg-cover">
                    <div class="bg-effect"
                      style="background-image: url('https://resources.ninghao.org/images/gravity-falls.png');">
                      <span class="layer"></span>
                    </div>
                    <div class="info">
                      <h3>desktop-nicemusic</h3>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <div class="nice-card">
          <div class="nice-card-header">
            <span class="label">听歌量</span>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import DashboardTop from '@/components/home/top/Index'
  export default {
    data() {
      return {};
    },
    components: {
      DashboardTop
    },
    computed: {},
    watch: {},
    methods: {},
    created() {},
    mounted() {

    },
  }
</script>
<style lang='scss' scoped>
  .el-col {
    border-radius: 4px;
  }

  .bg-purple-dark {
    background: #99a9bf;
  }

  .bg-purple {
    background: #d3dce6;
  }

  .bg-purple-light {
    background: #e5e9f2;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }

  .dashboard-wrap {

    .calendar {
      width: 200px;
      height: 200px;
      background: #fff;
      border-radius: 10px;
      font-size: 30px;
    }

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
      }

      .project-card {
        border-radius: 4px;
        margin-bottom: 10px;
        transition: all 0.4s;

        .bg-cover {
          width: 100%;
          height: 100px;
          border-radius: 2px;
          position: relative;
          overflow: hidden;

          .bg-effect {
            width: 100%;
            height: 100px;
            border-radius: 2px;
            background-size: cover;
            background-repeat: no-repeat;
            position: absolute;
            transition: all 0.4s;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            overflow: hidden;
            
            .layer {
              width: 100%;
              height: 100%;
              background-color: rgba(0, 0, 0, .3);
              position: absolute;
              opacity: 1;
              top: 0;
              left: 0;
              transition: opacity .3s ease-in-out;

              &::before {
                width: 100%;
                height: 100%;
                content: "";
                background: #8a2387;
                background: linear-gradient(270deg, #f27121, #e94057, #8a2387);
                opacity: .3;
                display: block;
                position: absolute;
                top: 0;
                left: 0;
              }
            }
          }

          .info {
            padding: 10px;
            color: #ffffff;
            position: relative;
            z-index: 10;
          }
        }

        &:hover {
          .bg-cover {
            .bg-effect {
              filter: blur(3px);
              background-position: 50%;
            }
          }

        }
      }

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
      padding: 10px;

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