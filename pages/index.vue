<script setup lang="ts">
interface FoundCityInterface {
  place_id: string;
  lat: string;
  lon: string;
  display_name: string;
}

let inputCityQueryTimeout: ReturnType<typeof setTimeout>

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

const findCityCoordinates = async () => {
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityQuery.value}&format=json`);

    foundCities.value = await response.json();
  }catch (e: any) {
    console.error(e.message)
  }finally {
    isLoading.value = false
  }
}

const handleInput = () => {
  console.log(cityQuery.value)
  clearTimeout(inputCityQueryTimeout);
  isLoading.value = true

  inputCityQueryTimeout = setTimeout(() => {
    findCityCoordinates()
  }, 1000);
};
</script>

<template>
<div>
  <div class="search-bar">
    <search-component v-model.trim="cityQuery" @input="handleInput"/>
    <list-component :data="foundCities"/>
  </div>
</div>
</template>

<style scoped>
.search-bar{
  width: inherit;
}
</style>