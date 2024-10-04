<template>
  <div class="container">
    <h1>Hello Vue 3 + TypeScript + Vite</h1>
    <CodeBox v-for="(elem, index) in codeBoxList" :key="index" :editorId="elem.no" :addCode="addCode" :addMarkdown="addMarkdown"/>
  </div>
</template>

<script lang="ts" setup> 
  import CodeBox from './components/CodeBox.vue'
  import { ref } from 'vue'

  let codeBoxList = ref([{
    no: 'editor'
  }])
  function addCode() {
    console.log('add code');

    let now: string = String.fromCharCode((new Date()).getTime());
    
    codeBoxList.value.push({
      no: now,
    });
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