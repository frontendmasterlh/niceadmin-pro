<template>
  <div class="nice-footer">
    <!-- <div class="links flex-center">
      <el-link href="https://element.eleme.io" :underline="false" target="_blank">官网</el-link>
      <el-link href="https://element.eleme.io" :underline="false" target="_blank">音乐</el-link>
      <el-link href="https://element.eleme.io" :underline="false" target="_blank">导航</el-link>
    </div> -->
    <p>
      <span class="mr5">Copyright © 2012-2020</span>
      <a href="https://www.lxhcool.cn">niceadmin 演示站</a>
      <span>. Designed by</span>
      <a href="https://www.lxhcool.cn" target="_blank">至一科技</a>. 
    </p>
  </div>
</template>

<script>
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

    },
  }
</script>
<style lang='scss' scoped>
  .nice-footer {
    width: 100%;
    margin: 28px 0 24px 0;
    padding: 0 16px;
    text-align: center;
    .links {
      margin-bottom: 20px;
      .el-link {
        margin: 0 20px;
      }
    }
    p {
      font-size: 13px;
      a {
        color: #6d7685;
        &:hover {
          color: #17B3A3;
        }
      }
    }
  }
</style>