<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Cat facts</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <loading-card v-if="isLoading" />
            <error-card v-else-if="isError" />
            <ion-list v-else>
                <ion-item color="light" class="list-item ion-margin" v-for="(catFact, index) in catFatcs?.data"
                    :key="index">
                    <ion-avatar class="avatar" aria-hidden="true" slot="start">
                        <img alt="cat" :src="imageSrc(index)" />
                    </ion-avatar>
                    <ion-label>{{ limitString(catFact.fact, 50) }}</ion-label>
                    <ion-icon aria-label="add to favorites" color="warning" @click="toggleFavorite(catFact.fact)"
                        v-if="isFavorite(catFact.fact)" :icon="star" />
                    <ion-icon aria-label="remove from favorites" @click="toggleFavorite(catFact.fact)" v-else
                        :icon="starOutline" />
                </ion-item>
            </ion-list>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import {
    IonPage,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonAvatar,
    IonIcon,
} from "@ionic/vue";
import { star, starOutline } from "ionicons/icons";
import { useCatsQuery } from "../api/useCatsQuery";
import { favoritesStore } from "@/stores/favoritesStore";
import { storeToRefs } from "pinia";
import { limitString } from "@/utils/utils";
import LoadingCard from "@/components/LoadingCard.vue";
import ErrorCard from "@/components/ErrorCard.vue";

// NOTE: We dance around some importing problems here.
// vite does not allow us to inline `require()`.
// We have to use `import.meta.glob` to import all images.
// https://vitejs.dev/guide/features#glob-import
const images = import.meta.glob('@/assets/*.png', { eager: true });

const { data: catFatcs, isError, isLoading } = useCatsQuery();
const favStore = favoritesStore();
const { isFavorite, toggleFavorite } = storeToRefs(favStore);
const imageSrc = (index: number) => {
    const imagePaths = Object.keys(images);
    // We have 10 images, hence `% 10`.
    return imagePaths[index % 10];
};
</script>
<style scoped>
ion-item {
    --min-height: 80px;
    border-color: #535151;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
}

ion-icon {
    padding-left: 8px;
}

.avatar {
    width: 60px;
    height: 60px;
}
</style>