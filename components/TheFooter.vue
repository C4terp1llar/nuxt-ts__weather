<script setup lang="ts">

</script>

<template>
<footer class="footer">
  <h2>footer</h2>
</footer>
</template>

<style scoped lang="scss">
@import "assets/css/main";

.footer{
  @include flexbox(row,center,center);
  grid-row: span 1;
  grid-column: span 2;
  padding: 15px;
  background-color: aliceblue;
  border: 2px solid blue;
  border-radius: 10px;
}
</style>