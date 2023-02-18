<template>
  <!-- <w-button color="green" round plain size="large">button</w-button>
  <w-button color="black" round size="medium">button</w-button>
  <w-button color="yellow" size="small">button</w-button> -->
  <w-waterfall :gap="gap" :column="column" :images="images"></w-waterfall>
  <button style="position: fixed; z-index: 100" @click="change">改变column</button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
const images = [
  {
    url: 'http://127.0.0.1:8080/(1).png'
  },
  {
    url: 'http://127.0.0.1:8080/(2).png'
  },
  {
    url: 'http://127.0.0.1:8080/(3).png'
  },
  {
    url: 'http://127.0.0.1:8080/(4).png'
  },
  {
    url: 'http://127.0.0.1:8080/(5).png'
  },
  {
    url: 'http://127.0.0.1:8080/(6).png'
  },
  {
    url: 'http://127.0.0.1:8080/(7).png'
  },
  {
    url: 'http://127.0.0.1:8080/(8).png'
  },
  {
    url: 'http://127.0.0.1:8080/(9).png'
  },
  {
    url: 'http://127.0.0.1:8080/(10).png'
  },
  {
    url: 'http://127.0.0.1:8080/(11).png'
  },
  {
    url: 'http://127.0.0.1:8080/(12).png'
  },
  {
    url: 'http://127.0.0.1:8080/(13).png'
  },
  {
    url: 'http://127.0.0.1:8080/(14).png'
  },
  {
    url: 'http://127.0.0.1:8080/(15).png'
  },
  {
    url: 'http://127.0.0.1:8080/(16).png'
  },
  {
    url: 'http://127.0.0.1:8080/(17).png'
  },
  {
    url: 'http://127.0.0.1:8080/(18).png'
  },
  {
    url: 'http://127.0.0.1:8080/(19).png'
  },
  {
    url: 'http://127.0.0.1:8080/(20).png'
  },
  {
    url: 'http://127.0.0.1:8080/(21).png'
  }
]
const gap = ref(10)
const column = ref(10)
let isForward = false
const change = () => {
  if (column.value && !isForward) {
    column.value--
  } else {
    isForward = true
    if (column.value < 5) {
      column.value++
    } else {
      isForward = false
    }
  }
  console.log(column.value)
}
</script>
<style scoped>
.waterfall_wrap {
  position: relative;
  width: 1200px;
}
</style>
