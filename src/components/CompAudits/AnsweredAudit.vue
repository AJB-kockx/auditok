<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              {{audit.title}}
            </v-card-title>
            <v-card-text>{{audit.subtitle}}</v-card-text>
            <v-card-text>{{audit.taker}}</v-card-text>
            <v-card-actions>
            </v-card-actions>
          </v-card>
          <v-container>
            <v-card v-for="question in audit.questions">
              <v-card-text>{{question.question}}</v-card-text>
              <v-card-text>{{question.scale.text}}</v-card-text>
              <v-card-text>{{question.answer}}</v-card-text>
            </v-card>
          </v-container>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      audit () {
        return this.$store.getters.loadedCompAudit(this.id)
      }
    }
  }
</script>
