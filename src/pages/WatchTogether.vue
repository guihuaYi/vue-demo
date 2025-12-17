<template>
  <div>
    <h1>Watch Together (Demo)</h1>
    <p>Invite friends to watch videos together — this is a mock UI.</p>
    <label>Room name: <input v-model="room" /></label>
    <button @click="createRoom">Create Invite Link</button>

    <div v-if="link" style="margin-top:1rem">
      <p>Share this link with friends:</p>
      <input :value="link" readonly style="width:100%" />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const room = ref('')
const link = ref('')

function createRoom() {
  const name = room.value || 'room-' + Date.now().toString(36).slice(-6)
  link.value = `${location.origin}/watch?room=${encodeURIComponent(name)}`
}
</script>
