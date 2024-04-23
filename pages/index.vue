<script setup lang="ts">

import {useFetchCities} from "~/store/fetchData";

interface FoundCityInterface {
  place_id: string;
  lat: string;
  lon: string;
  display_name: string;
}

const cityQuery = ref('');
const foundCities = ref<FoundCityInterface[]>([]);

const isLoading = ref(false)

const getForecast = async (lat: string, lon: string) => {
  const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${process.env.VUE_APP_WEATHER_API}`
  )
  const data = await response.json();

  console.log(data)
}

const findCityCoordinates = async () : Promise<void> => {
  try {
    if (!cityQuery.value) {
      return
    }

    isLoading.value = true

    const response = await useFetchCities().defineCityCoordinatesByName(cityQuery.value)

    if (!response.length) {
      foundCities.value.push('По вашему запросу ничего не найдено')
    }

    foundCities.value = response
  } catch (e: any) {
    console.error(e)
  } finally {
    isLoading.value = false
  }
}
</script>

<template>
  <div>
    <div>
      <div class="search-bar">
        <search-component :aria-disabled="isLoading" v-model.trim="cityQuery"/>
        <v-btn size="x-large" :disabled="isLoading" @click="findCityCoordinates">
          <Icon name="solar:magnifer-linear"/>
        </v-btn>
      </div>
      <app-loader v-if="isLoading"/>
      <list-component v-else :data="foundCities"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/css/main";

.search-bar {
  @include flexbox(row, center,center);
  gap: 15px;
}
</style>