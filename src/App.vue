<template>
  <div id="app">
    <header style="padding:1rem; border-bottom:1px solid #eee; display:flex; align-items:center; justify-content:space-between;">
      <div style="font-weight:700">VibeMate Demo</div>
      <nav>
        <router-link to="/">Home</router-link>
        <span style="margin:0 0.5rem">·</span>
        <router-link to="/wellness">Wellness</router-link>
        <span style="margin:0 0.5rem">·</span>
        <router-link to="/watch">Watch Together</router-link>
      </nav>
    </header>

    <main style="padding:2rem">
      <router-view />
    </main>

    <footer style="padding:1rem; border-top:1px solid #eee; text-align:center; font-size:0.9rem;">
      Demo implementation — features inspired by vibemate.com
    </footer>
  </div>
</template>

<script setup>
</script>
