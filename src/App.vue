<template>
  <div>
    <router-view></router-view>
    <footerG v-show="$route.meta.isFoot"></footerG>
  </div>
</template>

<script>
import footerG from './components/footerG/footerG'

export default {
  name: 'App',
  components:{
    footerG
  }

}
</script>

<style>

</style>
