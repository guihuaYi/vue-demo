<template>
  <div style="border:1px dashed #ddd; padding:1rem; border-radius:6px">
    <h3>What Users Are Saying</h3>
    <div v-if="items.length">
      <blockquote style="background:#f9f9f9; padding:1rem; border-radius:4px">{{ current.text }}</blockquote>
      <div style="text-align:right">— {{ current.author }}</div>
      <div style="margin-top:0.5rem; display:flex; gap:0.5rem; justify-content:center">
        <button @click="prev">Prev</button>
        <button @click="next">Next</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
const items = ref([
  { id:1, author: 'NjBell09 (Reddit)', text: "VibeMate's AI search pulled up creative proposal ideas and made everything smooth." },
  { id:2, author: 'MrEverythingjazz', text: "I found Lovense and VibeMate — now browsing is more fun." }
])
const idx = ref(0)
const current = computed(() => items.value[idx.value])
function next() { idx.value = (idx.value + 1) % items.value.length }
function prev() { idx.value = (idx.value - 1 + items.value.length) % items.value.length }
</script>
