import { defineStore } from 'pinia';

export const useFetchCities = defineStore('fetchCities', {
    actions: {
        async defineCityCoordinatesByName(cityQuery) {
            try {
                const response = await fetch(`https://nominatim.openstreetmap.org/search?q=${cityQuery}&format=json`);
                return await response.json();
            } catch (e) {
                throw e;
            }
        },
        async getWeatherForecast({lat, lon}){
            try {
                const response = await fetch(
                    `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=71273a257e5b7f92a30395ebf0ddcffb`
                )
                return await response.json();
            }catch (e) {
                console.error(e.message)
            }
        }
    }
});