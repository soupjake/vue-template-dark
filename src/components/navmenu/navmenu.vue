<template>
   <v-layout align-center column fill-height justify-center py-5>
      <span class="primary--text font-weight-bold text-uppercase display-3 mb-2">BN</span>
      <span class="display-1 mb-2">Business Name</span>
      <span class="title font-weight-light mb-5">Business One Liner</span>
      <v-list>
         <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.path">
            <v-list-tile-content>
               <v-list-tile-title class="text-xs-center">{{ item.title }}</v-list-tile-title>
            </v-list-tile-content>
         </v-list-tile>
      </v-list>
      <v-spacer></v-spacer>
      <v-layout row align-end>
         <v-btn flat icon>
            <v-img :src="require('@/assets/facebook.svg')" contain height="24"></v-img>
         </v-btn>
         <v-btn flat icon>
            <v-img :src="require('@/assets/instagram.svg')" contain height="24"></v-img>
         </v-btn>
         <v-btn flat icon>
            <v-img :src="require('@/assets/linkedin.svg')" contain height="24"></v-img>
         </v-btn>
      </v-layout>
   </v-layout>
</template>
<script src="./navmenu.ts"></script>