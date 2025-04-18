<template>
    <div class="location-card">
      <h2>{{ loc.name }}, {{ loc.region }}</h2>
      <p>{{ loc.country }}</p>
      <div class="loc-grid">
        <div>
          <strong>Lat / Lon:</strong>
          <p>{{ loc.lat }}, {{ loc.lon }}</p>
        </div>
        <div>
          <strong>Local Time:</strong>
          <p>{{ loc.localtime }}</p>
        </div>
        <div>
          <strong>Time Zone:</strong>
          <p>{{ loc.tz_id }}</p>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LocationCard',
    props: { location: Object },
    computed: { loc() { return this.location } }
  }
  </script>
  
  <style scoped>
  .location-card {
    background: rgba(255,255,255,0.2);
    backdrop-filter: saturate(180%) blur(10px);
    padding: 1.5rem;
    border-radius: 12px;
    margin-bottom: 1.5rem;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    color: #fff;
  }
  .location-card h2 {
    font-size: 1.75rem;
    margin-bottom: .25rem;
  }
  .location-card p {
    margin: .25rem 0;
  }
  .loc-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
    gap: 1rem;
    margin-top: 1rem;
  }
  .loc-grid strong {
    display: block;
    font-size: .9rem;
    opacity: .8;
  }
  .loc-grid p {
    font-size: .95rem;
  }
  </style>
  