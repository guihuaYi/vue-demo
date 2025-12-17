<template>
  <div style="border:1px solid #eee; padding:1rem; border-radius:6px">
    <h3>AI Search Assistant (Mock)</h3>
    <input v-model="query" placeholder="Search (mock AI)" style="width:100%; padding:0.5rem;" />
    <div style="margin-top:0.5rem">
      <button @click="doSearch">Search</button>
      <button @click="reset">Reset</button>
    </div>

    <div v-if="loading" style="margin-top:0.5rem">Searching...</div>

    <ul v-if="results.length && !loading" style="margin-top:0.5rem">
      <li v-for="r in results" :key="r.id">{{ r.title }}</li>
    </ul>

    <div v-if="!results.length && !loading && tried">No results (demo uses local sample data).</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const query = ref('')
const loading = ref(false)
const results = ref([])
const tried = ref(false)

const sample = [
  { id: 1, title: 'Lovense integration guide' },
  { id: 2, title: 'How to use AI search for proposals' },
  { id: 3, title: 'Wellness: Mindful browsing tips' },
  { id: 4, title: 'Watch together: invite friends' }
]

function doSearch() {
  tried.value = false
  loading.value = true
  results.value = []
  setTimeout(() => {
    const q = query.value.trim().toLowerCase()
    results.value = sample.filter(s => s.title.toLowerCase().includes(q))
    loading.value = false
    tried.value = true
  }, 600)
}

function reset() {
  query.value = ''
  results.value = []
  tried.value = false
}
</script>
