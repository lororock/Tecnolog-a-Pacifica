import { ref } from "vue";
import { defineStore } from "pinia";

export const useWhatsappStore = defineStore("whatsapp", () => {
  const whatsapp = ref("");
  const changewhatsapp = () => {
    if ( window.innerWidth <= 768) {
      whatsapp.value = "app";
    } else {
      whatsapp.value = "web";
    }
  };

  return { whatsapp, changewhatsapp };
});
