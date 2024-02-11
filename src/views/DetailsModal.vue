<template>
  <ion-modal :is-open="isOpen">
    <ion-header>
      <ion-toolbar>
        <ion-title>Details</ion-title>
        <ion-buttons slot="end">
          <ion-button @click="setClosed">Close</ion-button>
        </ion-buttons>
      </ion-toolbar>
    </ion-header>
    <ion-content class="ion-padding">
      <ion-card class="ion-text-center ion-padding">
        <img class="gif" alt="cat gif" src="@/assets/kitty.gif" />
        <ion-card-header>
          <ion-card-title color="success">Did you know?</ion-card-title>
        </ion-card-header>
        <ion-card-content>
          <ion-text class="ion-text-start" color="dark">
            <p class="fact-text">
              {{ catFact }}
            </p>
          </ion-text>
          <ion-icon
            class="icon"
            aria-label="add to favorites"
            color="warning"
            @click="toggleFavorite(catFact, $event)"
            v-if="isFavorite(catFact)"
            :icon="star"
          />
          <ion-icon
            class="icon"
            aria-label="remove from favorites"
            @click="toggleFavorite(catFact, $event)"
            v-else
            :icon="starOutline"
          />
        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-modal>
</template>
<script setup lang="ts">
import {
  IonModal,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonText,
  IonCardContent,
  IonIcon,
} from "@ionic/vue";
import { star, starOutline } from "ionicons/icons";
import { useModalStore } from "@/stores/modalStore";
import { useFavoriteStore } from "@/stores/favoritesStore";
import { storeToRefs } from "pinia";

const modalStore = useModalStore();
const favoriteStore = useFavoriteStore();
const { isFavorite, toggleFavorite } = storeToRefs(favoriteStore);
const { setClosed } = modalStore;
const { isOpen, catFact } = storeToRefs(modalStore);
</script>
<style scoped>
.gif {
  border-radius: 10px;
}

.fact-text {
  font-size: 1.4rem;
}

.icon {
  font-size: 2.5rem;
}
</style>
