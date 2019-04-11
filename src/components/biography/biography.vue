<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/photo1.jpg')" height="100vh">
            <v-layout column text-xs-right justify-end fill-height pa-5 v-if="$vuetify.breakpoint.mdAndUp">
               <h1 class="primary--text text-uppercase display-4">
                  Biography
               </h1>
            </v-layout>
            <v-layout column text-xs-right justify-end fill-height pa-3 v-else>
               <h1 class="primary--text text-uppercase display-2">
                  Biography
               </h1>
            </v-layout>
         </v-img>
      </v-flex>
      <v-container container pa-5 fluid>
         <v-layout row wrap justify-space-around>
            <v-flex xs12>
               <h2 class="display-2 font-weight-bold primary--text mb-4">Who Am I</h2>
            </v-flex>
            <v-flex md3 xs12 mb-4>
               <v-img :src="require('@/assets/photo6.jpg')" style="border-radius: 5px;"></v-img>
            </v-flex>
            <v-flex md8 xs12 mb-4>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/blog">Blog</v-btn>
               </v-layout>
            </v-flex>
            <v-flex xs12 mb-4>
               <h2 class="display-2 font-weight-bold primary--text mb-4">My Journey</h2>
               <v-timeline :dense="useDense()">
                  <v-timeline-item v-for="(event, i) in events" :key="`event-${i}`" color="primary" large>
                     <template v-slot:opposite>
                        <span>
                        {{event.date}}
                        </span>
                     </template>
                     <v-card class="elevation-2">
                        <v-card-title class="headline primary--text">
                           {{event.title}}
                        </v-card-title>
                        <v-card-text>
                           {{event.text}}
                        </v-card-text>
                     </v-card>
                  </v-timeline-item>
               </v-timeline>
            </v-flex>
            <v-flex xs12>
               <h2 class="display-2 font-weight-bold primary--text mb-4">My Skills</h2>
            </v-flex>
            <v-flex md5 xs12 mb-4>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
               <p>&nbsp; &nbsp; &nbsp; &nbsp; Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </v-flex>
            <v-flex md5 xs12 mb-4>
               <div v-for="(skill, i) in skills" :key="i" class="mb-4">
                  <v-layout row justify-space-around align-center v-if="$vuetify.breakpoint.mdAndUp">
                     <span class="headline primary--text">{{skill.title}}</span>
                     <v-rating v-model="skill.rating" full-icon="fiber_manual_record" empty-icon="fiber_manual_record" background-color="#424242" readonly></v-rating>
                  </v-layout>
                  <v-layout column align-center v-else>
                     <span class="headline primary--text mb-4">{{skill.title}}</span>
                     <v-rating v-model="skill.rating" full-icon="fiber_manual_record" empty-icon="fiber_manual_record" background-color="#424242" readonly></v-rating>
                  </v-layout>
               </div>
            </v-flex>
         </v-layout>
         <v-layout justify-center>
            <v-btn flat color="primary" to="/">Home</v-btn>
         </v-layout>
      </v-container>
   </v-layout>
</template>
<script src="./biography.ts"></script>