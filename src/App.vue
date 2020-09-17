<template>
  <div id="app">
    <nice-header
      :collapse="collapse"
      @changeCollapse="changeCollapse"
    ></nice-header>
    <nice-menu></nice-menu>
    <nice-tab></nice-tab>
    <router-view />
  </div>
</template>

<script>
import NiceHeader from '@/components/common/header/Index'
import NiceMenu from '@/components/common/menu/Index'
import NiceTab from '@/components/common/tab/Index'
export default {
  data() {
    return {
      screenWidth: document.body.clientWidth,
      collapse: false
    }
  },
  computed: { 
    isCollapse: {
      get () {
        return this.screenWidth < 768
      },
      set () {
      }
    }
  },
  watch: {
    screenWidth (val) {
      if(val < 768) {
        this.collapse = true
        this.$bus.emit('collapse', this.collapse)
      } else {
        this.collapse = false
        this.$bus.emit('collapse', this.collapse)
      }
    }
  },
  methods: {
    changeCollapse(collapse) {
      this.collapse = !this.collapse
      this.$bus.emit('collapse', this.collapse)
    }
  },
  components: {
    NiceHeader,
    NiceMenu,
    NiceTab
  },
  mounted () {
    // 监听窗口大小
    const that = this
    window.addEventListener('resize', function() {
      that.screenWidth = document.body.clientWidth
    })
  }
}
</script>

<style lang="scss"></style>
