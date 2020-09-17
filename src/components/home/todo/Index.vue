<template>
  <div class="nice-card">
    <div class="nice-card-header">
      <span class="label flex-row"> <i class="iconfont nice-icon-flag"></i> 我的技能</span>
    </div>
    <div class="nice-card-bodyer">
      <div class="todo-list">
        <div class="item">
          <p>HTML</p>
          <el-tooltip class="item" effect="dark" content="动次打次" placement="bottom">
            <el-progress :percentage="90" :stroke-width="10"></el-progress>
          </el-tooltip>
        </div>
        <div class="item">
          <p>CSS</p>
          <el-tooltip class="item" effect="dark" content="苍茫的天涯是我的爱" placement="bottom">
            <el-progress el-progress :percentage="90" :stroke-width="10" color="#000000" ></el-progress>
          </el-tooltip>
        </div>
        <div class="item">
          <p>JAVASCRIPT</p>
          <el-tooltip class="item" effect="dark" content="绵绵的青山脚下花正开" placement="bottom">
            <el-progress :percentage="70" :stroke-width="10" color="#11C26D" ></el-progress>
          </el-tooltip>
        </div>
        <div class="item">
          <p>VUE</p>
          <el-tooltip class="item" effect="dark" content="什么样的节奏是最呀最摇摆" placement="bottom">
            <el-progress :percentage="60" :stroke-width="10" color="#EB6709" ></el-progress>
          </el-tooltip>
        </div>
        <div class="item">
          <p>FLUTTER</p>
          <el-tooltip class="item" effect="dark" content="什么样的歌声才是最开怀" placement="bottom">
            <el-progress :percentage="50" :stroke-width="10" color="#909399" ></el-progress>
          </el-tooltip>
        </div>
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
    }

    .todo-list {
      .item {
        margin-bottom: 10px;
        p {
          margin-bottom: 10px;
        }
      }
    }
  }
</style>