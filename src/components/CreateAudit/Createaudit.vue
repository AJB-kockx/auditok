<template>
  <v-container>
    <v-layout row>
      <v-flex xs12>
        <h4>Maak een audit</h4>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-form @submit.prevent="onCreateAudit">
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="title"
                required></v-text-field>
              <v-text-field
                name="subtitle"
                label="SubTitle"
                id="subtitle"
                v-model="subtitle"
                required></v-text-field>
            </v-flex>
          </v-layout>
          <v-container>
            <v-flex xs12 sm6 offset-sm3>
              <v-text-field
                name="vraag"
                label="Vraag"
                id="vraag"
                v-model="vraag"
                required></v-text-field>
              <v-select
                :items="items"
                v-model="e1"
                label="Select"
                single-line
              ></v-select>
              <v-text-field
                name="uitleg"
                label="Uitleg"
                id="uitleg"
                v-model="uitleg"
                required></v-text-field>
            </v-flex>
          </v-container>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn type="submit">Create Audit</v-btn>
            </v-flex>
          </v-layout>
        </v-form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
   export default {
     data () {
       return {
         title: '',
         subtitle: '',
         items: [
           { text: 'Schaal 1' },
           { text: 'Schaal 2' },
           { text: 'Schaal 3' },
           { text: 'Schaal 4' },
           { text: 'Schaal 5' }
         ]
       }
     },
     methods: {
       onCreateAudit () {
         const auditData = {
           title: this.title,
           subtitle: this.subtitle
         }
         this.$store.dispatch('createAudit', auditData)
         this.$router.push('/Doaudit')
       }
     }
   }
 </script>
