import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useAppStore = defineStore('app', () => {
  // State
  const isLoading = ref(false)
  const currentSection = ref('hero')

  // Actions
  function setLoading(value: boolean) {
    isLoading.value = value
  }

  function setCurrentSection(section: string) {
    currentSection.value = section
  }

  return {
    isLoading,
    currentSection,
    setLoading,
    setCurrentSection,
  }
})
