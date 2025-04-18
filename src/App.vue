<template>
  <div class="container">
    <h1>🌐 Frosted Weather</h1>

    <CitySearch :loading="loading" @search-city="onSearch" />
    <ErrorAlert :msg="error" />
    <LoadingSpinner v-if="loading" />

    <transition name="fade">
      <LocationCard v-if="weatherData" :location="weatherData.location" />
    </transition>

    <transition name="fade">
      <WeatherCard v-if="weatherData" :data="weatherData" />
    </transition>
  </div>
</template>

<script>
import { fetchCurrentWeather } from './services/weatherService'
import CitySearch        from './components/CitySearch.vue'
import ErrorAlert        from './components/ErrorAlert.vue'
import LoadingSpinner    from './components/LoadingSpinner.vue'
import LocationCard      from './components/LocationCard.vue'
import WeatherCard       from './components/WeatherCard.vue'

export default {
  name: 'App',
  components: { CitySearch, ErrorAlert, LoadingSpinner, LocationCard, WeatherCard },
  data: () => ({
    weatherData: null,
    loading: false,
    error: ''
  }),
  methods: {
    async onSearch(city) {
      this.error = ''
      this.weatherData = null
      this.loading = true
      try {
        this.weatherData = await fetchCurrentWeather(city)
      } catch (e) {
        this.error =
          e.response?.data?.error?.message ||
          'Network error—please check your connection.'
      } finally {
        this.loading = false
      }
    }
  }
}
</script>

<style>
@import './styles.css';

/* fade transition */
.fade-enter-active, .fade-leave-active { transition: opacity .4s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
