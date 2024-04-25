<script setup lang="ts">

import {useFetchCities} from "~/store/fetchData";

interface FoundCityInterface {
  place_id: string;
  lat: string;
  lon: string;
  display_name: string;
  name: string;
}

const cityQuery = ref('');
const foundCities = ref<FoundCityInterface[]>([]);

const isLoading = ref(false)
const isQueryDeclined = ref(false)

const findCityCoordinates = async (): Promise<void> => {
  try {
    if (!cityQuery.value) {
      return
    }

    isLoading.value = true

    const response = await useFetchCities().defineCityCoordinatesByName(cityQuery.value)

    if (!response.length) {
      isQueryDeclined.value = true
    }

    foundCities.value = response
  } catch (e: any) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}

const cityWasSelected = () => {
  foundCities.value = [];
  cityQuery.value = ''
}
</script>

<template>
  <h2 class="headline text-blue-darken-4 align-self-center mb-4">Найдите ваш город</h2>

  <div>
    <div class="search-bar">
      <search-component :aria-disabled="isLoading" v-model.trim="cityQuery"/>
      <v-btn size="x-large" :disabled="isLoading" @click="findCityCoordinates">
        <Icon name="solar:magnifer-linear"/>
      </v-btn>
    </div>
    <app-loader v-if="isLoading"/>
    <list-component v-else :isQueryDeclined="isQueryDeclined" :data="foundCities" @city-selected="cityWasSelected"/>
  </div>
</template>

<style scoped lang="scss">
@import "assets/css/main";

.search-bar {
  @include flexbox(row, center, center);
  gap: 15px;
}
</style>