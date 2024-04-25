<template>
  <div>
    <h4 v-if="!data.length">{{isQueryDeclined ? 'По вашему запросу ничего не найдено' : 'Найдите ваш город'}}</h4>
    <v-list class="list" v-else lines="one">
      <v-list-item
          class="item"
          v-for="item in data"
          :key="item.place_id"
          :title="item.name"
          :subtitle="item.display_name"
      >

        <v-btn class="button" @click="selectCity(item)"></v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>


import {useCityStore} from "~/store/cities.js";

export default {
  props: {
    data: Array,
    isQueryDeclined: Boolean
  },
  methods: {
    selectCity(city) {
      useCityStore().setMainCity({
        id: city.place_id,
        short_name: city.name,
        full_name: city.display_name,
        lat: city.lat,
        lon: city.lon
      });

      this.$emit('city-selected', city);
    }
  }
};
</script>

<style lang="scss">
@import "assets/css/main";

.list {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: aliceblue;

  .item {
    position: relative;
    border: 1px solid black;

    .button {
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
}

h4 {
  text-align: center;
}
</style>
