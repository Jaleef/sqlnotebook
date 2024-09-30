<template>
  <div class="container">
    <h1>Hello Vue 3 + TypeScript + Vite</h1>
    <CodeBox />
  </div>
</template>

<script lang="ts" setup> 
  import CodeBox from './components/CodeBox.vue'

</script>

<script lang="ts">
  export default {
    name: 'App',
    components: {
      CodeBox
    }
  }
</script>

<style scoped>
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  }
</style>