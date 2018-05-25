<template>
  <v-dialog
    v-model="dialog"
    hide-overlay
    max-width="500"
    :disabled=questionNotAvailable>
    <v-btn
      fab
      accent
      small
      slot="activator"
      :disabled=questionNotAvailable>
      <v-icon>info</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              {{ questionExplanation }}
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat @click="dialog = false">Close</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['question'],
    data () {
      return {
        dialog: false,
        questionExplanation: this.question.explanation
      }
    },
    computed: {
      questionNotAvailable () {
        if (this.questionExplanation === '') {
          return true
        }
      }
    }
  }
</script>
