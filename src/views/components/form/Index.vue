<template>
  <div class="from-wrap">
    <keep-alive :include="tagsList">
      <router-view class="nice-anim nice-anim-upbit"></router-view>
    </keep-alive>
  </div>
</template>

<script>

export default {
  data() {
    return {
      tagsList: []
      };
    },
    components: {},
    //监听属性 类似于data概念
    computed: {},
    //监控data中的数据变化
    watch: {},
    //方法集合
    methods: {
      // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
      getTagList() {
        this.$bus.on('tags', msg => {
          let tagsList = [];
          for (let i = 0, len = msg.length; i < len; i++) {
            msg[i].name && arr.push(msg[i].name);
          }
          console.log(tagsList)
          this.tagsList = tagsList;
        });
      }
    },
    //生命周期 - 创建完成（可以访问当前this实例）
    created() {

    },
    //生命周期 - 挂载完成（可以访问DOM元素）
    mounted() {
      this.getTagList()
    },
  }
</script>
<style lang='scss' scoped>

</style>