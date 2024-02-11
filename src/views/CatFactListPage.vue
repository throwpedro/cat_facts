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
        <div v-for="(page, index) in catFatcs?.pages" :key="index">
          <div v-for="(catFact, idx) in page?.data?.data" :key="idx">
            <ion-item
              @click="openDetailsDialog(catFact.fact)"
              color="light"
              class="list-item ion-margin"
            >
              <ion-avatar class="avatar" aria-hidden="true" slot="start">
                <img alt="cat" :src="`/cats/cat${idx % 10}.png`" />
              </ion-avatar>
              <ion-label>{{ limitString(catFact.fact, 50) }}</ion-label>
              <ion-icon
                aria-label="add to favorites"
                color="warning"
                @click="toggleFavorite(catFact.fact, $event)"
                v-if="isFavorite(catFact.fact)"
                :icon="star"
              />
              <ion-icon
                aria-label="remove from favorites"
                @click="toggleFavorite(catFact.fact, $event)"
                v-else
                :icon="starOutline"
              />
            </ion-item>
          </div>
        </div>
      </ion-list>
      <ion-infinite-scroll @ionInfinite="scrollmore">
        <ion-infinite-scroll-content></ion-infinite-scroll-content>
      </ion-infinite-scroll>
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
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  InfiniteScrollCustomEvent,
} from "@ionic/vue";
import { star, starOutline } from "ionicons/icons";
import { useCatsQuery } from "../api/useCatsQuery";
import { useFavoriteStore } from "@/stores/favoritesStore";
import { storeToRefs } from "pinia";
import { useModalStore } from "@/stores/modalStore";
import { limitString } from "@/utils/utils";
import LoadingCard from "@/components/LoadingCard.vue";
import ErrorCard from "@/components/ErrorCard.vue";

const {
  data: catFatcs,
  isError,
  isLoading,
  fetchNextPage,
  hasNextPage,
} = useCatsQuery();

const favStore = useFavoriteStore();
const mStore = useModalStore();
const { isFavorite, toggleFavorite } = storeToRefs(favStore);
const { setOpen: openDetailsDialog } = mStore;

const scrollmore = async (e: InfiniteScrollCustomEvent) => {
  if (!hasNextPage.value) {
    e.target?.complete();
    return;
  }
  await fetchNextPage();
  e.target?.complete();
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
