<template>
    <div class="weather-card">
      <div class="icon-wrap">
        <img :src="fullIconUrl" :alt="cond.text" />
        <p class="cond-text">{{ cond.text }}</p>
      </div>
      <div class="weather-grid">
        <div class="temp-block">
          <p class="temp">{{ curr.temp_c }}°C</p>
          <p class="feels">Feels like {{ curr.feelslike_c }}°C</p>
        </div>
        <div><strong>Humidity:</strong> {{ curr.humidity }}%</div>
        <div><strong>Cloud Cover:</strong> {{ curr.cloud }}%</div>
        <div><strong>Wind:</strong> {{ curr.wind_kph }} kph {{ curr.wind_dir }}</div>
        <div><strong>Pressure:</strong> {{ curr.pressure_mb }} mb</div>
        <div><strong>Visibilty:</strong> {{ curr.vis_km }} km</div>
        <div><strong>UV Index:</strong> {{ curr.uv }}</div>
        <div><strong>Last Updated:</strong> {{ curr.last_updated }}</div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'WeatherCard',
    props: { data: Object },
    computed: {
      curr() { return this.data.current },
      cond() { return this.curr.condition },
      fullIconUrl() {
        const i = this.cond.icon
        return i.startsWith('//') ? `https:${i}` : i
      }
    }
  }
  </script>
  
  <style scoped>
  .weather-card {
    display: grid;
    grid-template-columns: 1fr;
    gap: 1.5rem;
    background: rgba(255,255,255,0.2);
    backdrop-filter: saturate(180%) blur(10px);
    padding: 1.5rem;
    border-radius: 12px;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    color: #fff;
  }
  .icon-wrap {
    text-align: center;
  }
  .icon-wrap img {
    width: 96px;
    height: 96px;
  }
  .cond-text {
    margin-top: .5rem;
    font-size: 1.1rem;
    text-transform: capitalize;
  }
  .weather-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
    gap: 1rem 2rem;
  }
  .temp-block {
    grid-column: span 2;
    text-align: center;
  }
  .temp {
    font-size: 3rem;
    font-weight: 700;
    margin: 0;
  }
  .feels {
    font-size: 1rem;
    opacity: .8;
  }
  .weather-grid div {
    font-size: .95rem;
  }
  @media (max-width: 480px) {
    .weather-card { grid-template-columns: 1fr; }
    .weather-grid { grid-template-columns: 1fr; }
    .temp-block { grid-column: span 1; }
  }
  </style>
  