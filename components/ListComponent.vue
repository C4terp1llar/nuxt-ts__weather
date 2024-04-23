
<template>
  <div>
    <h4 v-if="!data.length">Search your city</h4>
    <v-list class="list" v-else lines="one">
      <v-list-item
          class="item"
          v-for="item in data"
          :key="item.place_id"
          :title="item.name"
          :subtitle="item.display_name"
      >
        <v-btn class="button" @click="useCityStore().setMainCity({
        id: item.place_id,
        short_name: item.name,
        full_name: item.display_name,
        lat: item.lat,
        lon: item.lon
        })"></v-btn>
      </v-list-item>
    </v-list>
  </div>
</template>

<script setup>

import {useCityStore} from "~/store/cities.js";

defineProps({
  data: Array,
});



</script>

<style lang="scss">
@import "assets/css/main";

.list{
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: aliceblue;
  .item{
    position: relative;
    border: 1px solid black;
    .button{
      position: absolute;
      width: 100%;
      height: 100%;
      left: 0;
      top: 0;
      opacity: 0;
    }
  }
}

h4{
  text-align: center;
}
</style>
