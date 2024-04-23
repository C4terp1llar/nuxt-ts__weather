<script setup lang="ts">

</script>

<template>
<aside class="aside">
  <ul>
    <li>
      <nuxt-link to="/">home</nuxt-link>
    </li>
    <li>
      <nuxt-link to="about">about</nuxt-link>
    </li>
  </ul>
</aside>
</template>

<style scoped lang="scss">
@import "assets/css/main";

.aside {
  grid-row: span 1;
  grid-column: span 1;
  @include flexbox(row,center,center);
  padding: 25px;
  background-color: aliceblue;
  border: 2px solid blue;
  border-radius: 10px;
  ul{
    @include flexbox(column,center,center);
    gap: 15px;
    list-style-type: none;
  }
}
</style>