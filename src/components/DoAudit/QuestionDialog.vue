<template>
  <v-dialog
    v-model="dialog"
    hide-overlay
    max-width="600px"
    scrollable
    :disabled=questionNotAvailable>
    <v-btn
      fab
      accent
      small
      slot="activator"
      color="info"
      :disabled=questionNotAvailable>
      <v-icon>info</v-icon>
    </v-btn>
    <v-card>
      <v-card-title>
        <h4>Uitleg:</h4>
      </v-card-title>
      <v-card-text>
        {{ questionExplanation }}
      </v-card-text>
      <v-card-actions>
        <v-btn flat @click="dialog = false">Close</v-btn>
      </v-card-actions>
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
