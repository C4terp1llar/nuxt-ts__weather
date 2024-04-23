<script setup >

</script>

<template>
<header>
  <Icon name="wi:rain" size="48px" />
  <h2>weather app</h2>
</header>
</template>

<style scoped lang="scss">
@import "assets/css/main";

header{
  grid-row: span 1;
  grid-column: span 2;
  @include flexbox(row,center,center);
  padding: 15px;
  gap: 15px;
  background-color: aliceblue;
  border: 2px solid blue;
  border-radius: 10px;
}
</style>