<template>
    <ion-page>
        <ion-tabs>
            <ion-router-outlet></ion-router-outlet>
            <ion-tab-bar id="tabbar" slot="bottom">
                <ion-tab-button tab="catFactList" href="/tabs/cat-fact-list">
                    <ion-icon aria-hidden="true" :icon="list" />
                    <ion-label>List</ion-label>
                </ion-tab-button>
                <ion-tab-button tab="favorites" href="/tabs/favorites">
                    <ion-icon aria-hidden="true" :icon="star" />
                    <ion-label>Favorites</ion-label>
                </ion-tab-button>
            </ion-tab-bar>
        </ion-tabs>
    </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { list, star } from 'ionicons/icons';
</script>
