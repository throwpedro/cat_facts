import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modalStore", () => {
  const isOpen = ref(false);
  const catFact = ref("");
  const setOpen = (fact: string) => {
    catFact.value = fact;
    isOpen.value = true;
  };
  const setClosed = () => {
    catFact.value = "";
    isOpen.value = false;
  };

  return { isOpen, catFact, setOpen, setClosed };
});
