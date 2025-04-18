<template>
    <div v-if="msg" class="error-box">
      <p>{{ msg }}</p>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ErrorAlert',
    props: { msg: String }
  }
  </script>
  
  <style scoped>
  .error-box {
    background: rgba(220,38,38,0.15);
    color: #fee2e2;
    padding: .75rem 1rem;
    border-left: 4px solid #dc2626;
    border-radius: 6px;
    margin-bottom: 1.5rem;
    font-size: .95rem;
  }
  </style>
  