import { ref } from "vue";
import { defineStore } from "pinia";

export const usePageNameStore = defineStore("pageName", () => {
  const pageName = ref("page");

  const setPageName = (name) => {
    pageName.value = name;
    return pageName.value;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return { pageName, setPageName, scrollToTop };
});
