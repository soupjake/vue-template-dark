<template>
   <v-layout column>
      <v-flex xs12>
         <v-img :src="require('@/assets/photo3.jpg')" height="100vh" transition="null">
            <v-layout column text-xs-right justify-end fill-height pa-5 v-if="$vuetify.breakpoint.mdAndUp">
               <span class="text-uppercase display-3">
               Business Name
               </span>
               <h1 class="primary--text text-uppercase display-4">
                  Business One Liner
               </h1>
            </v-layout>
            <v-layout column text-xs-right justify-end fill-height pa-3 v-else>
               <span class="text-uppercase display-1">
               Business Name
               </span>
               <h1 class="primary--text text-uppercase display-2">
                  Business One Liner
               </h1>
            </v-layout>
         </v-img>
      </v-flex>
      <v-container container pa-5 fluid>
         <v-layout row wrap justify-space-around>
            <v-flex ref="whoBox" md8 xs12 mb-4>
               <h2 class="display-2 font-weight-bold primary--text mb-4">Who We Are</h2>
               <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. </p>
               <p> Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? </p>
               <p> Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur? At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. </p>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/biography">Biography</v-btn>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo2.jpg')" style="border-radius: 5px;" max-height="400"></v-img>
               </v-layout>
            </v-flex>
            <v-flex xs3 ml-3 v-if="$vuetify.breakpoint.mdAndUp" mt-4 mb-4>
               <v-layout fill-height>
                  <v-img :src="require('@/assets/photo7.jpg')" style="border-radius: 5px;" max-height="400"></v-img>
               </v-layout>
            </v-flex>
            <v-flex md8 xs12 mb-4>
               <h2 class="display-2 font-weight-bold primary--text mb-4 mt-4">What We Do</h2>
               <v-expansion-panel v-model="panel" expand popout>
                  <v-expansion-panel-content v-for="(item,i) in items" :key="i" v-bind:style="{'background-color': getBackground(i)}">
                     <template v-slot:header>
                        <div>{{item.title}}</div>
                     </template>
                     <v-card>
                        <v-card-text>{{item.text}}</v-card-text>
                     </v-card>
                  </v-expansion-panel-content>
               </v-expansion-panel>
               <v-layout justify-center>
                  <v-btn flat color="primary" to="/services">Services</v-btn>
               </v-layout>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review1.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Joe Blogss</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review2.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Jane Doe</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. "</p>
            </v-flex>
            <v-flex md3 xs12 text-xs-center>
               <v-avatar size="200" class="mb-4">
                  <v-img :src="require('@/assets/review3.jpg')"></v-img>
               </v-avatar>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">John Hancock</h2>
               <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."</p>
            </v-flex>
            <v-flex xs12 ma-4>
               <v-divider></v-divider>
            </v-flex>
            <v-flex md8 xs12>
               <h2 class="display-2 font-weight-bold primary--text mb-4">Contact Us</h2>
               <h2 class="primary--text title font-weight-light text-uppercase mb-3">Send me a message</h2>
               <v-form ref="form" lazy-validation>
                  <v-text-field v-model="name" label="Name" box required></v-text-field>
                  <v-text-field v-model="email" label="Email" box required></v-text-field>
                  <v-text-field v-model="subject" label="Subject" box required></v-text-field>
                  <v-text-field v-model="message" label="Message" height="200px" box required></v-text-field>
                  <v-layout v-if="$vuetify.breakpoint.mdAndUp" justify-end>
                     <v-btn raised color="primary" class="ma-0">Contact Me</v-btn>
                  </v-layout>
                  <v-layout v-else justify-center>
                     <v-btn raised color="primary" >Contact Me</v-btn>
                  </v-layout>
               </v-form>
            </v-flex>
            <v-flex md3 xs12>
               <v-layout align-center justify-center fill-height>
                  <v-list style="background: transparent;">
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">location_on</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Location
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              Cardiff, UK
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">email</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Email
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              email@address.com
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                     <v-list-tile avatar three-line>
                        <v-list-tile-avatar>
                           <v-icon large color="primary">phone</v-icon>
                        </v-list-tile-avatar>
                        <v-list-tile-content>
                           <v-list-tile-title class="primary--text">
                              Telephone
                           </v-list-tile-title>
                           <v-list-tile-sub-title>
                              07000123456
                           </v-list-tile-sub-title>
                        </v-list-tile-content>
                     </v-list-tile>
                  </v-list>
               </v-layout>
            </v-flex>
         </v-layout>
      </v-container>
   </v-layout>
</template>
<script src="./home.ts"></script>