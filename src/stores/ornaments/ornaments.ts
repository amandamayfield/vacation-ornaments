import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchOrnaments } from './api'
import type { Ornament } from './types'

export const useOrnamentStore = defineStore('ornaments', () => {
  const ornaments = ref<Ornament[]>([])

  async function getData() {
    ornaments.value = await fetchOrnaments()
  }

  return { getData, ornaments }
})
