<template>
  <el-row :gutter="10">
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
      <div class="nice-card" style="position: relative;">
        <div class="nice-card-header">
          <span class="label">访问量</span>
          <span class="value">88</span>
          <i class="nice-bg-primary">日</i>
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
              <span>年同比</span>
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
          <span class="value">12万</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
      <div class="nice-card">
        <div class="nice-card-header">
          <span class="label">听歌量</span>
          <span class="value">30</span>
          <i class="nice-bg-black">周</i>
        </div>
        <div class="nice-card-bodyer" style="padding: 0;">
          <div id="listening" style="width: 100%; height: 50px;"></div>
        </div>
        <div class="nice-card-footer">
          <i class="iconfont nice-icon-duochangjingshijian-icon256"></i>
          <span class="label">总听歌量</span>
          <span class="value">22229首</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
      <div class="nice-card">
        <div class="nice-card-header">
          <span class="label">歌单数</span>
          <span class="value">1</span>
          <i class="nice-bg-success">月</i>
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
          <span class="label">总歌单数</span>
          <span class="value">28个</span>
        </div>
      </div>
    </el-col>
    <el-col :xs="24" :sm="12" :md="12" :lg="12" :xl="6">
      <div class="nice-card">
        <div class="nice-card-header">
          <span class="label">粉丝量</span>
          <span class="value">0</span>
          <i class="nice-bg-danger">年</i>
        </div>
        <div class="nice-card-bodyer">
          <div class="progress-module">
            <div class="item">
              <el-tooltip class="item" effect="dark" content="男性占比60%" placement="bottom">
                <el-progress :percentage="60" :stroke-width="9" :show-text="false"></el-progress>
              </el-tooltip>
            </div>
            <div class="item">
              <el-tooltip class="item" effect="dark"  content="女性占比40%" placement="bottom">
                <el-progress :percentage="30" :stroke-width="9" color="#FF4C52" :show-text="false"></el-progress>
              </el-tooltip>
            </div>
          </div>
        </div>
        <div class="nice-card-footer">
          <i class="iconfont nice-icon-danxingtiaozheng-icon256"></i>
          <span class="label">总粉丝量</span>
          <span class="value">27</span>
        </div>
      </div>
    </el-col>
  </el-row>
</template>

<script>
  let elementResizeDetectorMaker = require("element-resize-detector");
  export default {
    data() {
      return {

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
      this.$chart.line('listening')
      window.onresize = () => {
        return (() => {
          this.$chart.line('listening')
        })()
      }
      let erd = elementResizeDetectorMaker();
      erd.listenTo(document.getElementById("listening"), element => {
        this.$nextTick(() => {
          this.$chart.line('listening')
        })
      })
    },
  }
</script>
<style lang='scss' scoped>
  .nice-card {
    .nice-card-header {
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

      .progress-module {
        height: 50px;
        .item {
          height: 50%;
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
</style>