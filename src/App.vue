<template>
  <div class="container">
    <h1>Hello Vue 3 + TypeScript + Vite</h1>
    <div v-for="(code, index) in codeBoxList" :key="index">
      <CodeBox :addCode="addCode" :addMarkdown="addMarkdown"/>
    </div>
  </div>
</template>

<script lang="ts" setup> 
  import CodeBox from './components/CodeBox.vue'
  import { ref } from 'vue'

  let codeBoxList = ref([{}])
  function addCode() {
    console.log('add code');
    codeBoxList.value.push({});
  }

  function addMarkdown() {
    console.log('add markdown')
  }
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