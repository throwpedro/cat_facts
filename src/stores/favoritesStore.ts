import { defineStore } from "pinia";
import { onMounted, ref, watch } from "vue";

const LOCAL_STORAGE_KEY = "favorites";

export const favoritesStore = defineStore("favoritesStore", () => {
    const favorites = ref<string[]>([]);

    const isFavorite = ref((catfact: string) => {
        return favorites.value.includes(catfact);
    });

    const toggleFavorite = ref((catfact: string) => {
        if (isFavorite.value(catfact)) {
            const index = favorites.value.indexOf(catfact);
            if (index !== -1) {
                favorites.value.splice(index, 1);
            }
        } else {
            favorites.value.push(catfact);
        }
    });

    // NOTE: localStorage might be unreliable when running on native devices
    // https://capacitorjs.com/docs/guides/storage
    // It would probably be preferable to use capacitor's 'preferences api' or sqlite
    const saveToLocalStorage = () => {
        localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(favorites.value));
    };

    const getFromLocalStorage = () => {
        const storedFavorites = localStorage.getItem(LOCAL_STORAGE_KEY);
        if (storedFavorites) {
            favorites.value = JSON.parse(storedFavorites);
        }
    };

    watch(() => favorites.value, () => {
        saveToLocalStorage();
        // NOTE: Fun gotcha, deep mutations are fine.
        // Unless you're using the 'watch' function.
        // then you need to specify { deep: true }
        // to let vue know it should watch for nested mutations.
    }, { deep: true });

    onMounted(() => {
        getFromLocalStorage();
    });

    return { favorites, isFavorite, toggleFavorite };
});
