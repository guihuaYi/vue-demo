<template>
  <div>
    <h1>Your Private, AI-Powered Browser (Demo)</h1>
    <p>Core demo features implemented: AI Search Assistant (mock), Ad-free toggle, Testimonials, Downloads section.</p>

    <section style="margin-top:1.5rem">
      <search-assistant />
    </section>

    <section style="margin-top:2rem">
      <h2>Ad-Free Browsing</h2>
      <label><input type="checkbox" v-model="adFree" /> Ad-Blocker On</label>
      <p v-if="adFree">Ad-free is enabled in this demo UI (visual only).</p>
    </section>

    <section style="margin-top:2rem">
      <h2>Downloads</h2>
      <div style="display:flex; gap:1rem; flex-wrap:wrap">
        <button @click="download('iOS')">Apple Store</button>
        <button @click="download('Android')">Google Play</button>
        <button @click="download('Desktop')">Windows / Mac</button>
      </div>
    </section>

    <section style="margin-top:2rem">
      <testimonials />
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SearchAssistant from '../components/SearchAssistant.vue'
import Testimonials from '../components/Testimonials.vue'

const adFree = ref(true)

function download(platform) {
  alert(`Pretend download for ${platform} (demo).`)
}
</script>
