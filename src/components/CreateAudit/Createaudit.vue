<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 sm6 offset-sm3>
        <h3>Maak een audit</h3>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <form @submit.prevent="onCreateAudit">
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
          <v-layout
            row
            v-for="question, index in questions">
            <v-container>
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
                  required
                ></v-select>
                <v-text-field
                  name="uitleg"
                  label="Uitleg"
                  id="uitleg"
                  v-model="question.explanation"></v-text-field>
                <v-btn @click="deleteQuestion(index)">
                  <v-icon>delete</v-icon>
                </v-btn>
              </v-flex>
            </v-container>
          </v-layout>
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
        </form>
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
           { text: 'Ja/Nee' },
           { text: 'Ja/Nee/Soms' },
           { text: '1 tot 3' },
           { text: '1 tot 5' },
           { text: '1 tot 7' },
           { text: 'Vrij tekstveld'}
         ],
         questions: [
           {
             question: '',
             scale: '',
             explanation: '',
             answer: ''
           }
         ]
       }
     },
     methods: {
       onCreateAudit () {
         const auditData = {
           title: this.title,
           subtitle: this.subtitle,
           questions: this.questions,
           answer: this.answer
         }
         this.$store.dispatch('createAudit', auditData)
         this.$router.push('/Doaudit')
       },
       addNewQuestion () {
         this.questions.push({
           question: '',
           scale: '',
           explanation: '',
           answer: ''
         })
       },
       deleteQuestion (index) {
         this.questions.splice(index, 1)
       }
     }
   }
 </script>
