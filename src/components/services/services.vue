<template>
  <v-layout column>
    <v-flex xs12>
      <v-img :src="require('@/assets/photo5.jpg')" height="100vh">
        <v-layout column text-xs-right justify-end fill-height class="header-padding">
          <h1 class="header-text primary--text">Services</h1>
        </v-layout>
      </v-img>
    </v-flex>
    <v-container fluid class="content-container">
      <v-layout row wrap justify-space-between>
        <v-flex xs12>
          <h2 class="content-title primary--text mb-4">Our Services</h2>
        </v-flex>
        <v-flex md5 xs12 v-for="(service, i) in services" :key="i" pb-4>
          <v-card>
            <v-img :src="require('@/assets/' + service.image)" height="400"></v-img>
            <v-card-title class="headline primary--text">{{service.title}}</v-card-title>
            <v-card-text>{{service.text}}</v-card-text>
            <v-card-actions>
              <v-layout justify-space-between pa-3>
                <span class="primary--text subheading font-weight-medium">{{service.length}}</span>
                <span class="primary--text subheading font-weight-medium">{{service.price}}</span>
              </v-layout>
            </v-card-actions>
          </v-card>
        </v-flex>
        <v-flex xs12 mt-4>
          <h2 class="content-title primary--text mb-4">Purchase</h2>
        </v-flex>
        <v-flex md5 xs12 mb-4>
          <h2
            class="primary--text title font-weight-light text-uppercase mb-3"
          >Select a service to book</h2>
          <v-form ref="form" lazy-validation>
            <v-select v-model="service" :items="services" item-text="title" label="Service" box required></v-select>
            <v-text-field v-model="name" label="Name" box required></v-text-field>
            <v-text-field v-model="email" label="Email" box required></v-text-field>
            <v-dialog ref="datepicker" v-model="datemodal" :return-value.sync="date" persistent lazy full-width width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="date" label="Date" append-icon="event" readonly v-on="on" box required></v-text-field>
              </template>
              <v-date-picker v-model="date" scrollable>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="datemodal = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.datepicker.save(date)">OK</v-btn>
              </v-date-picker>
            </v-dialog>
            <v-dialog ref="timepicker" v-model="timemodal" :return-value.sync="time" persistent lazy full-width width="290px">
              <template v-slot:activator="{ on }">
                <v-text-field v-model="time" label="Time" append-icon="access_time" readonly v-on="on" box required></v-text-field>
              </template>
              <v-time-picker v-if="timemodal" v-model="time" full-width>
                <v-spacer></v-spacer>
                <v-btn flat color="primary" @click="timemodal = false">Cancel</v-btn>
                <v-btn flat color="primary" @click="$refs.timepicker.save(time)">OK</v-btn>
              </v-time-picker>
            </v-dialog>
            <v-text-field v-model="message" label="Message" height="200px" box required></v-text-field>
            <v-layout justify-center>
              <v-btn raised color="primary" class="ma-0" v-on:click="send()">Book</v-btn>
            </v-layout>
          </v-form>
        </v-flex>
        <v-flex lg5 xs12>
          <h2 class="primary--text title font-weight-light text-uppercase mb-3">Calender</h2>
            <v-calendar color="primary" :value="nowString" style="height: 620px;">
            <template v-slot:day="{ date }">
               <v-card v-for="(event, i) in eventsMap[date]" :key="i" color="primary">
                 <v-card-title>
                    {{event.title}}
                </v-card-title>
               </v-card>
            </template>
            </v-calendar>
           <v-layout justify-space-between pt-4>
              <v-btn @click="prev()" color="primary">
                <v-icon dark left>
                  keyboard_arrow_left
                </v-icon>
                Prev
              </v-btn>
              <v-btn @click="next()" color="primary">
                Next
                <v-icon dark right>
                  keyboard_arrow_right
                </v-icon>
              </v-btn>
            </v-layout>
        </v-flex>
      </v-layout>
      <v-layout justify-center>
        <v-btn flat color="primary" to="/">Home</v-btn>
      </v-layout>
    </v-container>
  </v-layout>
</template>
<script src="./services.ts"></script>