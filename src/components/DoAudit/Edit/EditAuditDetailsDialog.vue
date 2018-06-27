<template>
  <v-dialog
    v-model="editDialog"
    hide-overlay
    transition="dialog-bottom-transition"
    max-width="900px">
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-card flat>
        <v-card flat>
          <v-layout row>
            <v-flex>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                required></v-text-field>
              <v-text-field
                name="subtitle"
                label="SubTitle"
                id="subtitle"
                v-model="editedSubtitle"
                required></v-text-field>
            </v-flex>
          </v-layout>
        </v-card>
        <v-divider></v-divider>
        <v-card
          row
          flat
          v-for="question, index in editedQuestions"
          :key="index">
          <v-layout>
            <v-container>
              <v-flex>
                <v-text-field
                  name="vraag"
                  label="Vraag"
                  id="vraag"
                  v-model="question.question"
                  required></v-text-field>
                <v-select
                  :items="items"
                  v-model="question.scale"
                  :label="question.scale.text"
                  single-line
                  required
                ></v-select>
                <v-container v-if="question.scale.text === 'Eigen schaal'">
                  <v-layout>
                    <v-flex xs12 sm6>
                      <v-card>
                        <v-card
                          flat
                          v-for="label, i in question.customScale"
                          :key="i">
                          <v-text-field
                            v-model="question.customScale[i].label"></v-text-field>
                          <v-btn
                            small
                            @click="deleteScaleButton(index, i)">Delete button
                          </v-btn>
                          <v-divider></v-divider>
                        </v-card>
                        <v-btn
                          absolute
                          bottom
                          right
                          fab
                          small
                          v-if="question.scale.text === 'Eigen schaal'"
                          @click="addScaleButton(index)">
                          <v-icon>add</v-icon>
                        </v-btn>
                      </v-card>
                    </v-flex>
                  </v-layout>
                </v-container>
                <v-text-field
                  name="uitleg"
                  label="Uitleg"
                  id="uitleg"
                  v-model="question.explanation"></v-text-field>
                <v-layout row wrap>
                  <v-flex xs12 sm6 offset-sm10>
                    <v-btn @click="deleteQuestion(index)">
                      <v-icon color="red">delete</v-icon>
                    </v-btn>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-container>
          </v-layout>
          <v-divider></v-divider>
        </v-card>
        <v-layout>
          <v-flex xs12 sm6 offset-sm3>
            <v-btn
              absolute
              dark
              bottom
              left
              fab
              color="blue"
              @click="addNewQuestion">
              <v-icon>add</v-icon>
            </v-btn>
          </v-flex>
        </v-layout>
      </v-card>
      <v-container grid-list-md text-xs-center>
        <v-layout row wrap>
          <v-flex xs6>
            <v-btn @click="editDialog = false">Close</v-btn>
          </v-flex>
          <v-flex xs6>
            <v-btn @click="onSaveChanges">Save</v-btn>
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
          {text: 'Ja/Nee'},
          {text: 'Ja/Nee/Soms'},
          {text: '1 tot 3'},
          {text: '1 tot 5'},
          {text: '1 tot 7'},
          {text: 'Vrij tekstveld'},
          {text: 'Eigen schaal'}
        ]
      }
    },
    methods: {
      onSaveChanges() {
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
      deleteQuestion(index) {
        this.editedQuestions.splice(index, 1)
      },
      addScaleButton(index) {
        this.editedQuestions[index].customScale.push({label: ''})
      },
      deleteScaleButton(index, i) {
        this.editedQuestions[index].customScale.splice(i, 1)
      }
    }
  }
</script>
