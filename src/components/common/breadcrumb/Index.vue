<template>
  <el-breadcrumb separator="/" class="nice-breadcrumb">
    <el-breadcrumb-item :to="{ path: '/' }" v-if="isHome">主页</el-breadcrumb-item>
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="item in navList" :key="item.path">
        {{item.meta.title}}
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  data() {
    return {
      list: []
    }
  },
  computed: {
    isHome() {
      return this.$route.name === 'dashboard' ? false : true
    },
    navList() {
      return this.list.filter(item => {
        return item.meta.title
      })
    }
  },
  created() {
    this.getList()
  },
  watch: {
    $route() {
      this.getList()
    }
  },
  methods: {
    getList() {
      let matched = this.$route.matched.filter(item => {
        return item.meta.title
      })
      this.list = matched
    }
  }
}
</script>

<style lang="scss">
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.5s;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-move {
  transition: all 0.5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>