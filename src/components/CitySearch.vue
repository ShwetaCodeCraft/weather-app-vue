<template>
    <div class="search-group">
      <input
        v-model="q"
        @keyup.enter="onSearch"
        type="text"
        placeholder="Search city…"
        class="search-input"
      />
      <button
        :disabled="!q.trim() || loading"
        @click="onSearch"
        class="search-btn"
      >
        {{ loading ? 'Searching…' : 'Search' }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CitySearch',
    props: { loading: Boolean },
    data: () => ({ q: '' }),
    methods: {
      onSearch() {
        if (this.q.trim()) this.$emit('search-city', this.q.trim())
      }
    }
  }
  </script>
  
  <style scoped>
  .search-group {
    display: flex;
    margin-bottom: 2rem;
  }
  .search-input {
    flex: 1;
    padding: .75rem 1rem;
    border: none;
    border-radius: 8px 0 0 8px;
    font-size: 1rem;
    background: rgba(255,255,255,0.4);
    color: #fff;
    backdrop-filter: blur(6px);
  }
  .search-input::placeholder {
    color: rgba(255,255,255,0.7);
  }
  .search-btn {
    padding: .75rem 1.5rem;
    border: none;
    background: rgba(255,255,255,0.6);
    color: #333;
    font-weight: 600;
    border-radius: 0 8px 8px 0;
    cursor: pointer;
    transition: background .2s;
  }
  .search-btn:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  .search-btn:not(:disabled):hover {
    background: rgba(255,255,255,0.8);
  }
  </style>
  