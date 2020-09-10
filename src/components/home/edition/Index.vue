<template>
  <div class="nice-card">
    <div class="nice-card-header">
      <span class="label flex-row"> <i class="iconfont nice-icon-prompt"></i> 版本信息</span>
    </div>
    <div class="nice-card-bodyer">
      <table class="nice-table">
        <colgroup>
          <col width="100">
          <col>
        </colgroup>
        <tbody>
          <tr>
            <td>当前版本</td>
            <td> 
              niceadmin Pro V1.0.0
            </td>
          </tr>
          <tr>
            <td>基于框架</td>
            <td>
              Vue + Element ui
            </td>
          </tr>
          <tr>
            <td>主要特色</td>
            <td>免费 / 响应式 / 清爽 / 极简</td>
          </tr>
          <tr>
            <td>获取渠道</td>
            <td>
              <el-button type="primary" size="small">github</el-button>
              <el-button type="danger" size="small">gitee</el-button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
  import github from '@/utils/api.js'
  export default {
    data() {
      return {
        github
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
    }

    .nice-table {
      width: 100%;
      background-color: #fff;
      color: #666;
      margin: 5px 0;
      tr {
        transition: all .3s;
        td {
          position: relative;
          padding: 9px 15px;
          min-height: 20px;
          line-height: 20px;
          font-size: 14px;
          border-width: 1px;
          border-style: solid;
          border-color: #e6e6e6;
        }
      }
    }
  }
</style>