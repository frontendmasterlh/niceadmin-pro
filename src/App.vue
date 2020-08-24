<template>
  <div id="app">
    <nice-header></nice-header>
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
    return {}
  },
  components: {
    NiceHeader,
    NiceMenu,
    NiceTab
  }
}
</script>

<style lang="stylus"></style>
