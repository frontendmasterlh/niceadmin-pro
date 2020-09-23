<template>
  <div class="from-wrap">
    <keep-alive>
      <router-view class="nice-anim nice-anim-upbit"></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  components: {},
  //监听属性 类似于data概念
  computed: {},
  //监控data中的数据变化
  watch: {},
  //方法集合
  methods: {},
  //生命周期 - 创建完成（可以访问当前this实例）
  created() {}
}
</script>
<style lang='scss' scoped>

</style>