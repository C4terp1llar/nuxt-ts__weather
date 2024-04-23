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
        }
    }
});