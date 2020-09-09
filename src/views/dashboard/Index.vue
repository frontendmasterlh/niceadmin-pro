<template>
  <div class="dashboard-wrap" id="dashboard-wrap">
    <dashboard-top></dashboard-top>
    <el-row :gutter="10">
      <dashboard-project></dashboard-project>
      <dashboard-todo></dashboard-todo>
    </el-row>
  </div>
</template>

<script>
  import DashboardTop from '@/components/home/top/Index'
  import DashboardProject from '@/components/home/project/Index'
  import DashboardTodo from '@/components/home/todo/Index'
  export default {
    data() {
      return {
      };
    },
    components: {
      DashboardTop,
      DashboardProject,
      DashboardTodo,
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

</style>