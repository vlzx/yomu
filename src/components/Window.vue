<script setup lang="ts">
const props = defineProps<{
  text: string
}>()
</script>

<template>
  <div id="app">
    <h1>Mock Window</h1>
    <p>selectionText: {{ props.text }}</p>
  </div>
</template>

<style scoped>
#app {
  min-height: 60px;
  background: pink;
}
</style>
