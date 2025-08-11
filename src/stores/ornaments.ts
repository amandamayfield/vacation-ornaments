import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useOrnamentStore = defineStore('ornaments', () => {
  const mockData = ref([
    {
      id: 1,
      date: 'November 2021',
      location: 'Universal Studios Orlando',
      description:
        'Our first travel ornament! We got the idea from Eddie/Linda and took the tradition for our own! This pair shows both our house robes from the Harry Potter world section of Universal.',
      photo:
        'https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI',
    },
    {
      id: 2,
      date: 'June 2022',
      location: 'New York City',
      description: `This trip was our first with Sean and Stina! This ornament is from the Tenement Museum. It's probably my favorite museum in New York!`,
      photo:
        'https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI',
    },
    {
      id: 3,
      date: 'October 2022',
      location: 'Salem, Massachusetts',
      description:
        'This was our first trip to the Boston area and, of course, the spooky capital of the states! It was so much fun. We bought this to celebrate being in the “witch city”.',
      photo:
        'https://fastly.picsum.photos/id/40/4106/2806.jpg?hmac=MY3ra98ut044LaWPEKwZowgydHZ_rZZUuOHrc3mL5mI',
    },
  ])

  return { mockData }
})
