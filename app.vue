<template>
  <div id="app">
    <nuxt-layout>
      <nuxt-page />
    </nuxt-layout>
  </div>
</template>

<script setup lang="ts">

</script>

<style lang="scss">

#app{
  height: inherit;
  width: inherit;
  display: grid;
  grid-template-columns: 3fr 7fr;
  grid-template-rows: 1fr 8fr 1fr;
  gap: 15px;
}
</style>