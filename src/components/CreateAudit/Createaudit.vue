<template>
  <v-container fluid>
    <v-layout row wrap>
      <v-flex xs12 sm6 offset-sm3>
        <h3>Maak een audit</h3>
        <form @submit.prevent="onCreateAudit">
          <v-card flat>
            <v-card flat>
              <v-layout row>
                <v-flex>
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
            </v-card>
            <v-divider></v-divider>
            <v-card
              row
              flat
              v-for="question, index in questions"
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
                      label="Schaal"
                      single-line
                      required
                    ></v-select>
                    <v-container v-if="question.scale.text === 'Eigen schaal'">
                      <v-layout>
                        <v-flex xs12 sm6>
                          <v-card>
                            <v-card flat
                                    v-for="label, i in question.customScale"
                                    :key="i">
                              <v-text-field
                                v-model="question.customScale[i].label"></v-text-field>
                              <v-btn small
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
          <v-container>
            <v-layout row wrap>
              <v-flex xs12 sm6 offset-sm10>
                <v-btn
                  right
                  type="submit">Create audit</v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data() {
      return {
        title: '',
        subtitle: '',
        items: [
          {text: 'Ja/Nee'},
          {text: 'Ja/Nee/Soms'},
          {text: '1 tot 3'},
          {text: '1 tot 5'},
          {text: '1 tot 7'},
          {text: 'Vrij tekstveld'},
          {text: 'Eigen schaal'}
        ],
        questions: [
          {
            question: '',
            scale: '',
            explanation: '',
            answer: '',
            customScale: [{label: ''}]
          }
        ]
      }
    },
    methods: {
      onCreateAudit() {
        const auditData = {
          title: this.title,
          subtitle: this.subtitle,
          questions: this.questions,
          answer: this.answer
        }
        this.$store.dispatch('createAudit', auditData)
        this.$router.push('/Doaudit')
      },
      addNewQuestion() {
        this.questions.push({
          question: '',
          scale: '',
          explanation: '',
          answer: '',
          customScale: [{label: ''}]
        })
      },
      deleteQuestion(index) {
        this.questions.splice(index, 1)
      },
      addScaleButton(index) {
        this.questions[index].customScale.push({label: ''})
      },
      deleteScaleButton(index, i) {
        this.questions[index].customScale.splice(i, 1)
      }
    }
  }
</script>
