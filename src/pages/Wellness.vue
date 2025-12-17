<template>
  <div>
    <h1>Wellness Corner (Demo)</h1>
    <p>Curated wellness articles and short reads.</p>
    <ul>
      <li v-for="post in posts" :key="post.id">
        <h3>{{ post.title }}</h3>
        <p>{{ post.excerpt }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const posts = [
  { id: 1, title: 'Mindful Browsing', excerpt: 'Tips to stay present while using the web.' },
  { id: 2, title: 'Digital Wellness', excerpt: 'How to balance screen time and rest.' },
  { id: 3, title: 'Privacy Basics', excerpt: 'Understanding trackers and how to reduce exposure.' }
]
</script>
