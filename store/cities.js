import {defineStore} from 'pinia'

export const useCityStore = defineStore('cityStore', {
    state: () => ({
        mainCity: null
    }),
    actions: {
        setMainCity(currentCity){
            this.mainCity = currentCity;
        }
    },
    getters: {
        getMainCity(state){
            return state.mainCity
        }
    }
})