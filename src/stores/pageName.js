import { ref } from 'vue'
import { defineStore } from 'pinia'

export const usePageNameStore = defineStore('pageName', () => {
  const pageName = ref('page')

  const setPageName = (name)=>{
    pageName.value = name
    return pageName.value
  }

  return { pageName, setPageName }
})
