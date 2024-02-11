<template>
  <ion-page>
    <ion-header>
      <ion-toolbar color="primary">
        <ion-title>Favorites</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-list v-if="favorites.length > 0">
        <div v-for="(catFact, index) in favorites" :key="index">
          <ion-item
            @click="openDetailsDialog(catFact)"
            color="light"
            class="list-item ion-margin"
          >
            <ion-label>{{ limitString(catFact, 50) }}</ion-label>
            <ion-icon
              aria-label="remove from favorites"
              color="danger"
              @click="
                toggleFavorite(catFact, $event),
                  setToast('Removed from favorites')
              "
              :icon="trashOutline"
            />
          </ion-item>
        </div>
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
import { useFavoriteStore } from "@/stores/favoritesStore";
import { useToastStore } from "@/stores/toastStore";
import { useModalStore } from "@/stores/modalStore";
import { storeToRefs } from "pinia";
import { limitString } from "@/utils/utils";

const favoritesStore = useFavoriteStore();
const toastStore = useToastStore();
const modalStore = useModalStore();
const { favorites, toggleFavorite } = storeToRefs(favoritesStore);
const { setOpen: openDetailsDialog } = modalStore;
const { setToast } = toastStore;
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
