<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
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
          <v-layout row v-for="question, index in questions">
            <v-container >
              <v-flex xs12 sm6 offset-sm3>
                <v-text-field
                  name="vraag"
                  label="Vraag"
                  id="vraag"
                  v-model="question.question"
                  required></v-text-field>
                <v-select
                  :items="items"
                  v-model="question.scale"
                  label="Select"
                  single-line
                ></v-select>
                <v-text-field
                  name="uitleg"
                  label="Uitleg"
                  id="uitleg"
                  v-model="question.explanation"
                 required></v-text-field>
                <v-btn @click="deleteQuestion(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-flex>
            </v-container>
          </v-layout>
          <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
              <v-btn type="submit">Create Audit</v-btn>
              <v-btn
                dark
                fab
                color="blue"
                @click="addNewQuestion">
                <v-icon>add</v-icon>
              </v-btn>
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
         ],
         questions: [
           {
             question: '',
             scale: '',
             explanation: ''
           }
         ]
       }
     },
     methods: {
       onCreateAudit () {
         const auditData = {
           title: this.title,
           subtitle: this.subtitle,
           questions: this.questions
         }
         this.$store.dispatch('createAudit', auditData)
         this.$router.push('/Doaudit')
       },
       addNewQuestion () {
         this.questions.push({
           question: '',
           scale: '',
           explanation: ''
         })
       },
       deleteQuestion (index) {
         this.questions.splice(index, 1)
       }
     }
   }
 </script>
