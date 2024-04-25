<script setup lang="ts">
import {useFetchCities} from "~/store/fetchData";
import {useCityStore} from "~/store/cities";

interface ForecastInterface {
  list: [any],
  dt: string,
  main: object,
  wind: object,
  clouds: object,
  pop: string
}

const isLoading = ref(false)

const forecastData = ref<ForecastInterface>([])

onMounted(async () => {
  try {
    isLoading.value = true;

    forecastData.value = await useFetchCities().getWeatherForecast(useCityStore().getMainCity)

  } catch (e) {
    console.error(e)
  } finally {
    isLoading.value = false;
  }
})
</script>

<template>
  <h2 class="headline text-blue-darken-4 align-self-center">Прогноз погоды</h2>


  <div v-if="!useCityStore().getMainCity" class="d-flex text-blue-darken-4 align-self-center">
    <h3>Чтобы увидеть прогноз, пожалуйста, </h3>
    <nuxt-link
        :to="{name: 'index'}"
        :class="{ 'active-link': $route.name === 'index', 'link': true}"
    >
      <h3>выберите город</h3>
    </nuxt-link>
  </div>


  <v-container class="d-flex flex-md-column">
    <v-row v-if="isLoading">
      <v-col v-for="n in 6" :key="n" cols="12" md="4">
        <v-skeleton-loader :elevation="2" type="card"/>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col v-for="forecast in forecastData.list" :key="forecast.dt" cols="12" md="4">
        <v-card class="pa-4" outlined>
          <div class="weather-header d-flex align-center text-blue-darken-4">
            {{ new Date(forecast.dt * 1000).toLocaleString() }}
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:thermometer" size="24"/>

            <div>
              {{ Math.round(forecast.main.temp - 273.15) }}

              °C
            </div>

            <div>
              ( {{ Math.floor(forecast.main.temp_min - 273.15) }}
              <Icon name="carbon:arrows-horizontal" size="18"/>
              {{ Math.ceil(forecast.main.temp_max - 273.15) }} )
            </div>

          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:alien" size="24"/>

            {{ Math.round(forecast.main.feels_like - 273.15) }}

            °C
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:barometer" size="24"/>

            {{ forecast.main.pressure }}

            гПа
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:humidity" size="24"/>

            {{ forecast.main.humidity }}

            %
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:strong-wind" size="24"/>

            {{ forecast.wind.speed }}

            м/с
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:wind-deg" size="24"/>

            {{ forecast.wind.deg }}

            °
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:cloudy" size="24"/>

            {{ forecast.clouds.all }}

            %
          </div>
          <div class="d-flex align-center ga-2">
            <Icon name="wi:raindrops" size="24"/>

            {{ forecast.pop }}

            %
          </div>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped lang="scss">

.weather-header {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  justify-content: center;
}
</style>