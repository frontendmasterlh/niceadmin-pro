<template>
  <div class="dashboard-wrap">
    <el-row :gutter="10">
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="nice-card" style="position: relative;">
          <div class="nice-card-header">
            <span class="label">访问量</span>
            <span class="value">365</span>
            <i class="nice-bg-primary">年</i>
          </div>
          <div class="nice-card-bodyer">
            <ul class="count-sales">
              <li>
                <span>日同比</span>
                <div class="rise">
                  <i class="el-icon-top-right"></i>
                  <span>+7%</span>
                </div>
              </li>
              <li>
                <span>周同比</span>
                <div class="fall">
                  <i class="el-icon-bottom-right"></i>
                  <span>-4%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="nice-card-footer flex-row">
            <i class="iconfont nice-icon-dashujuhangai-icon256"></i>
            <span class="label">总访问量</span>
            <span class="value">36万</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="nice-card">
          <div class="nice-card-header">
            <span class="label">发布动态数</span>
            <span class="value">25000</span>
            <i class="nice-bg-black">月</i>
          </div>
          <div class="nice-card-bodyer">
            <ul class="count-sales">
              <li>
                <span>日同比</span>
                <div class="rise">
                  <i class="el-icon-top-right"></i>
                  <span>+7%</span>
                </div>
              </li>
              <li>
                <span>周同比</span>
                <div class="fall">
                  <i class="el-icon-bottom-right"></i>
                  <span>-4%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="nice-card-footer">
            <i class="iconfont nice-icon-duochangjingshijian-icon256"></i>
            <span class="label">总访问量</span>
            <span class="value">36万</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="nice-card">
          <div class="nice-card-header">
            <span class="label">创建歌单数</span>
            <span class="value">22229</span>
            <i class="nice-bg-success">周</i>
          </div>
          <div class="nice-card-bodyer">
            <ul class="count-sales">
              <li>
                <span>日同比</span>
                <div class="rise">
                  <i class="el-icon-top-right"></i>
                  <span>+7%</span>
                </div>
              </li>
              <li>
                <span>周同比</span>
                <div class="fall">
                  <i class="el-icon-bottom-right"></i>
                  <span>-4%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="nice-card-footer">
            <i class="iconfont nice-icon-jiandanyiyong-icon256"></i>
            <span class="label">总访问量</span>
            <span class="value">36万</span>
          </div>
        </div>
      </el-col>
      <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
        <div class="nice-card">
          <div class="nice-card-header">
            <span class="label">累计粉丝量</span>
            <span class="value">85000</span>
            <i class="nice-bg-danger">日</i>
          </div>
          <div class="nice-card-bodyer">
            <ul class="count-sales">
              <li>
                <span>日同比</span>
                <div class="rise">
                  <i class="el-icon-top-right"></i>
                  <span>+7%</span>
                </div>
              </li>
              <li>
                <span>周同比</span>
                <div class="fall">
                  <i class="el-icon-bottom-right"></i>
                  <span>-4%</span>
                </div>
              </li>
            </ul>
          </div>
          <div class="nice-card-footer">
            <i class="iconfont nice-icon-danxingtiaozheng-icon256"></i>
            <span class="label">总访问量</span>
            <span class="value">36万</span>
          </div>
        </div>
      </el-col>
    </el-row>
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
      .nice-card-header {
        height: 50px;

        .value {
          display: flex;
          align-items: center;
          font-size: 18px;
          font-weight: 700;
          margin-left: 10px;
          flex: 1;
        }

        i {
          height: 18px;
          color: #fff;
          line-height: 18px;
          font-style: normal;
          text-align: center;
          font-size: 12px;
          position: relative;
          display: inline-block;
          padding: 0 6px;
          font-size: 12px;
          text-align: center;
          color: #fff;
          border-radius: 2px;
          margin-left: 10px;
        }
      }

      .nice-card-bodyer {
        padding: 0 20px;

        .count-sales {
          display: flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          align-items: center;
          height: 50px;

          li {
            display: flex;
            align-items: center;
            flex: 1;
            color: #d5d5d5;

            .fall,
            .rise {
              margin-left: 10px;
              margin-top: 2px;
            }

            .fall {
              color: #17B3A3;
            }

            .rise {
              color: #FF4C52;
            }
          }
        }
      }

      .nice-card-footer {
        .label {
          flex: 1;
        }
        .value {
          font-size: 13px;
          margin-left: 10px;
        }
        i {
          margin-right: 10px;
          font-size: 18px;
          margin-top: 2px;
        }
      }
    }

    .calendar {
      width: 200px;
      height: 200px;
      background: #fff;
      border-radius: 10px;
      font-size: 30px;
    }

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