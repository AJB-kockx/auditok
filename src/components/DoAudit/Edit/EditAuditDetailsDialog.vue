<template>
  <v-dialog
    v-model="editDialog"
    hide-overlay
    transition="dialog-bottom-transition"
    max-width = "900px">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Audit</v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                required></v-text-field>
              <v-text-field
                name="subtitle"
                label="Subtitle"
                id="subtitle"
                v-model="editedSubtitle"
                required></v-text-field>
            </v-card-text>
            <v-layout
              row
              v-for="question, index in editedQuestions"
              :key="index">
              <v-container>
                <v-flex xs12 sm6 offset-sm3>
                  <v-text-field
                    name="vraag"
                    label="Vraag"
                    id="vraag"
                    v-model="question.question"
                  ></v-text-field>
                  <v-select
                    :items="items"
                    v-model="question.scale"
                    :placeholder="question.scale.text"
                    single-line
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
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat @click="onSaveChanges">Save</v-btn>
              <v-btn flat @click="editDialog = false">Close</v-btn>
              <v-btn
                dark
                fab
                color="blue"
                @click="addNewQuestion">
                <v-icon>add</v-icon>
              </v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['audit'],
    data() {
      return {
        editDialog: false,
        editedTitle: this.audit.title,
        editedSubtitle: this.audit.subtitle,
        editedQuestions: this.audit.questions,
        items: [
          { text: 'Ja/Nee' },
          { text: 'Ja/Nee/Soms' },
          { text: '1 tot 3' },
          { text: '1 tot 5' },
          { text: '1 tot 7' },
          { text: 'Vrij tekstveld' }
        ]
      }
    },
    methods: {
      onSaveChanges () {
        if (this.editedTitle.trim() === '' || this.editedSubtitle.trim() === '') {
          return
        }
        this.editDialog = false
        this.$store.dispatch('updateAuditData', {
          id: this.audit.id,
          title: this.editedTitle,
          subtitle: this.editedSubtitle,
          questions: this.editedQuestions
        })
        this.$router.push('/Doaudit')
      },
      addNewQuestion() {
        this.editedQuestions.push({
          question: '',
          scale: '',
          explanation: '',
          answer: ''
        })
      },
      deleteQuestion (index) {
        this.editedQuestions.splice(index, 1)
      }
    }
  }
</script>
