<template>
    <ion-page>
        <ion-header>
            <ion-toolbar color="primary">
                <ion-title>Favorites</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content class="ion-padding">
            <ion-list v-if="favorites.length > 0">
                <ion-item color="light" class="list-item ion-margin" v-for="(catFact, index) in favorites"
                    v-bind:key="index">
                    <ion-label>{{ limitString(catFact, 50) }}</ion-label>
                    <ion-icon aria-label="remove from favorites" color="danger"
                        @click="toggleFavorite(catFact), setToast('Removed from favorites')" :icon="trashOutline" />
                </ion-item>
            </ion-list>
            <ion-card v-else class="ion-text-center">
                <ion-card-content>
                    <ion-text color="medium">No favorites yet</ion-text>
                </ion-card-content>
            </ion-card>
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
    IonIcon,
    IonCard,
    IonCardContent,
    IonText,
} from "@ionic/vue";
import { trashOutline } from "ionicons/icons";
import { favoritesStore } from "@/stores/favoritesStore";
import { toastStore } from "@/stores/toastStore";
import { storeToRefs } from "pinia";
import { limitString } from "@/utils/utils";

const favStore = favoritesStore();
const tStore = toastStore();
const { favorites, toggleFavorite } = storeToRefs(favStore);
const { setToast } = tStore;
</script>

<style scoped>
ion-item {
    --min-height: 60px;
    border-color: #535151;
    border-style: solid;
    border-width: 1px;
    border-radius: 5px;
}

ion-icon {
    padding-left: 8px;
}
</style>