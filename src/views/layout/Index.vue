<template>
  <div class="layout">
    <nice-header></nice-header>
    <nice-menu></nice-menu>
    <div class="fluid">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import NiceHeader from '@/components/common/header/Index'
import NiceMenu from '@/components/common/menu/Index'
export default {
  data() {
    return {}
  },
  components: {
    NiceHeader,
    NiceMenu
  }
}
</script>

<style lang="stylus" scoped>
</style>
