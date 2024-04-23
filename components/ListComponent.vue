
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
      ></v-list-item>
    </v-list>
  </div>
</template>

<script setup>

defineProps({
  data: Array,
});

</script>

<style lang="scss">
.list{
  display: flex;
  flex-direction: column;
  gap: 5px;
  background-color: aliceblue;
  .item{
    border: 1px solid black;
  }
}
</style>
