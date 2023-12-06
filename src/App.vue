<template>
  <router-view/>
</template>

<script setup>
import { provide, ref } from 'vue'

const globalTitleKeywordsDescription = ref({})
provide('globalTitleKeywordsDescription', globalTitleKeywordsDescription)
provide('setTitleKeywordsDescription', (val) => {
  globalTitleKeywordsDescription.value = val
  globalThis.globalTitleKeywordsDescription = val
})


</script>