<template>
  <v-layout>
   <v-flex xs12 sm6 offset-sm3>
     <v-container>
      <v-card to="/Doaudit" ripple>
        <v-card-media src="/static/DoAudit.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
             <h3 class="headline mb-0">Do Audit</h3>
          </div>
        </v-card-title>
      </v-card>
     </v-container>
     <v-container>
      <v-card to="Createaudit" ripple>
        <v-card-media src="/static/CreateAudit.png" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">Create Audit</h3>
          </div>
        </v-card-title>
      </v-card>
     </v-container>
   </v-flex>
  </v-layout>
</template>
