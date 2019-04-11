<template>
   <v-app dark>
      <v-navigation-drawer app permanent v-if="$vuetify.breakpoint.lgAndUp" class="grey darken-4">
         <NavMenu></NavMenu>
      </v-navigation-drawer>
      <div v-else>
         <v-navigation-drawer app v-model="drawer" class="grey darken-4">
            <NavMenu></NavMenu>
         </v-navigation-drawer>
         <v-toolbar flat fixed scroll-off-screen>
            <v-toolbar-side-icon v-on:click="drawer = !drawer" class="primary--text" style="position: absolute; margin: 0px;"></v-toolbar-side-icon>
            <v-layout justify-center>
               <span class="primary--text title">Business Name</span>
            </v-layout>
         </v-toolbar>
      </div>
      <v-content>
         <v-slide-x-transition mode="out-in">
            <router-view></router-view>
         </v-slide-x-transition>
      </v-content>
   </v-app>
</template>
<script src="./app.ts"></script>