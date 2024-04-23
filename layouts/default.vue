<script setup lang="ts">

</script>

<template>

    <the-header/>
    <the-aside/>
    <v-container class="main">
      <slot />
    </v-container>
    <the-footer/>

</template>

<style scoped lang="scss">
@import "assets/css/main";

  .main{
    @include flexbox(column, unset,unset);
    width: 100%;
    grid-row: span 1;
    grid-column: span 1;
    padding: 25px;
    background-color: aliceblue;
    border: 2px solid blue;
    border-radius: 10px;
  }
</style>