import { defineStore } from "pinia";
import { ref } from "vue";

export const useToastStore = defineStore("toastStore", () => {
  const isOpen = ref(false);
  const message = ref("");
  const setToast = (msg: string) => {
    isOpen.value = true;
    message.value = msg;
    setTimeout(() => {
      isOpen.value = false;
      message.value = "";
    }, 3000);
  };

  return { isOpen, message, setToast };
});
