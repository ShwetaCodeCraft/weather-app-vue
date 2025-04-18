<template>
  <div class="spinner"></div>
</template>

<script>
export default { name: 'LoadingSpinner' }
</script>

<style scoped>
.spinner {
  margin: 2rem auto;
  width: 60px;
  height: 60px;
  border: 6px solid rgba(255,255,255,0.3);
  border-top-color: #fff;
  border-radius: 50%;
  animation: spin .8s linear infinite;
}
@keyframes spin { to { transform: rotate(360deg); } }
</style>
