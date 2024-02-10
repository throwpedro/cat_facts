<template>
    <ion-app>
        <ion-router-outlet />
        <ion-toast position-anchor="tabbar" :is-open="isOpen" :message="message" :duration="3000"></ion-toast>
    </ion-app>
</template>

<script setup lang="ts">
import { IonApp, IonRouterOutlet, IonToast } from "@ionic/vue";
import { toastStore } from "@/stores/toastStore";
import { storeToRefs } from "pinia";

const store = toastStore();
const { isOpen, message } = storeToRefs(store);
</script>
