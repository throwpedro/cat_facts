import { defineStore } from "pinia";
import { readonly, ref } from "vue";


export const toastStore = defineStore("toastStore", () => {
    const _isOpen = ref(false);
    const _message = ref("");
    const isOpen = readonly(_isOpen);
    const message = readonly(_message);
    const setToast = (msg: string) => {
        _isOpen.value = true;
        _message.value = msg;
        setTimeout(() => {
            _isOpen.value = false;
        }, 3000);
    };

    return { isOpen, message, setToast };
});