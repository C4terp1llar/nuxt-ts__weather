<script setup>
import {useCityStore} from "~/store/cities.js";

const currentCity = computed(() => useCityStore().getMainCity ? useCityStore().getMainCity.short_name : 'Выберите город');
</script>

<template>
  <header>
    <div class="logo">
      <Icon name="wi:rain" size="48px"/>
      <h2>weather app</h2>
    </div>

    <div class="city">
      <nuxt-link
          :to="{name: 'index'}"
          :class="{ 'active-link': $route.name === 'index', 'link': true }"
      >
        {{currentCity}}
      </nuxt-link>
    </div>
  </header>
</template>

<style scoped lang="scss">
@import "assets/css/main";

header {
  grid-row: span 1;
  grid-column: span 2;
  @include flexbox(row, space-between, center);
  padding: 15px;
  gap: 15px;
  background-color: aliceblue;
  border: 2px solid blue;
  border-radius: 10px;

  .logo {
    @include flexbox(row, center, center);
    gap: 5px;
  }
}
</style>