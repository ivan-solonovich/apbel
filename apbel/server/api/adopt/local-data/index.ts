import type { Pets } from '~~/types/pets'
import { pets } from '~~/db.json'

const allPets: Pets = pets

// @ts-ignore
const fractionOfThePetsArray = (pets, fraction) => {

    // @ts-ignore
    return pets
        // @ts-ignore
    .map((pet) => ({
      ...pet,
      sort: Math.random(),
    }))
        // @ts-ignore
    .sort((a, b) => a.sort - b.sort)
    .slice(0, Math.floor(pets.length * fraction))
}

export default defineEventHandler(async (/*event*/) => {
  const somePets: Pets = fractionOfThePetsArray(allPets, 0.5)

  return {
    allPets,
    somePets,
  }
})
