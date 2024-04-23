<script setup lang="ts">

</script>

<template>

    <the-header/>
    <the-aside/>
    <main>
      <slot />
    </main>
    <the-footer/>

</template>

<style scoped lang="scss">
@import "assets/css/main";

  main{
    grid-row: span 1;
    grid-column: span 1;
    @include flexbox(row,center,center);
    padding: 25px;
    background-color: aliceblue;
    border: 2px solid blue;
    border-radius: 10px;
  }

</style>