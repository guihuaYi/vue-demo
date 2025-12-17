<template>
  <div>
    <p>{{ msg }}</p>
    <button @click="count++">Count: {{ count }}</button>
    <ul>
      <li v-for="item in items" :key="item.id">{{ item.text }}</li>
    </ul>
    <input v-model="newItem" placeholder="Add item" />
    <button @click="addItem">Add</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
  msg: { type: String, default: 'Hello' }
})

const count = ref(0)
const items = ref([
  { id: 1, text: 'Learn Vue 3' },
  { id: 2, text: 'Build something fun' }
])
const newItem = ref('')

function addItem() {
  if (!newItem.value.trim()) return
  items.value.push({ id: Date.now(), text: newItem.value })
  newItem.value = ''
}
</script>
