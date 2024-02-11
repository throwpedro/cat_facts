<template>
  <ion-app>
    <ion-router-outlet />
    <details-modal></details-modal>
    <ion-toast
      position-anchor="tabbar"
      :is-open="isOpen"
      :message="message"
      :duration="3000"
    ></ion-toast>
  </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonToast } from "@ionic/vue";
import { useToastStore } from "@/stores/toastStore";
import { storeToRefs } from "pinia";
import DetailsModal from "./views/DetailsModal.vue";

const store = useToastStore();
const { isOpen, message } = storeToRefs(store);
</script>
