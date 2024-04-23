<script setup >
defineProps({
  h: {
    type: Number,
    default: 25
  },
  w: {
    type: Number,
    default: 25
  },
});
</script>

<template>
  <div class="loader">
    <v-progress-circular
        :style="{ width: w + 'px', height: h + 'px' }"
        color="blue"
        indeterminate
    ></v-progress-circular>
  </div>
</template>

<style scoped lang="scss">
@import "assets/css/main";

.loader{
  @include flexbox(row, center, center);
  width: 100%;
  padding: 15px;
}
</style>