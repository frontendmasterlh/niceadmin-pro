<template>
  <div id="app">
    <nice-header></nice-header>
    <nice-menu></nice-menu>
    <router-view />
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

<style lang="stylus"></style>
