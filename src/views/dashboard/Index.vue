<template>
  <div class="dashboard-wrap" id="dashboard-wrap">
    <dashboard-top></dashboard-top>
    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16">
        <dashboard-project></dashboard-project>
        <dashboard-dynamics></dashboard-dynamics>
      </el-col>
      <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8">
        <dashboard-notice></dashboard-notice>
        <dashboard-edition></dashboard-edition>
        <dashboard-todo></dashboard-todo>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import DashboardTop from '@/components/home/top/Index'
  import DashboardProject from '@/components/home/project/Index'
  import DashboardDynamics from '@/components/home/dynamics/Index'
  import DashboardTodo from '@/components/home/todo/Index'
  import DashboardEdition from '@/components/home/edition/Index'
  import DashboardNotice from '@/components/home/notice/Index'
  export default {
    data() {
      return {
      };
    },
    components: {
      DashboardTop,
      DashboardProject,
      DashboardDynamics,
      DashboardTodo,
      DashboardEdition,
      DashboardNotice,
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