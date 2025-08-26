import { ref } from 'vue'
import { defineStore } from 'pinia'
import { fetchOrnaments } from './api'
import type { Ornament } from './types'

export const useOrnamentStore = defineStore('ornaments', () => {
  const ornamentsMap = ref(new Map<number, Ornament>())
  const ornamentIds = ref(new Set<number>())

  async function getOrnaments() {
    const response = await fetchOrnaments()
    response.forEach((orn) => {
      ornamentsMap.value.set(orn.id, orn)
      ornamentIds.value.add(orn.id)
    })
  }

  function getOneOrnament(id: number) {
    return ornamentsMap.value.get(id) ?? { id, date: '', location: '', description: '', photo: '' }
  }

  return { getOrnaments, getOneOrnament, ornamentsMap, ornamentIds }
})
