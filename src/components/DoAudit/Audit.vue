<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              {{audit.title}}
              <template>
                <v-spacer></v-spacer>
                <app-edit-audit-details-dialog :audit="audit"></app-edit-audit-details-dialog>
              </template>
            </v-card-title>
            <v-card-text>
              {{audit.subtitle}}
            </v-card-text>
          </v-card>
        </v-container>
        <v-container
          v-for="question, index in audit.questions"
          key="index">
          <v-card>
            <v-card-title>
              {{question.question}}
              <template>
                <v-spacer></v-spacer>
                <question-dialog :question="question"></question-dialog>
              </template>
            </v-card-title>
            <v-card-actions>
              <v-text-field></v-text-field>
            </v-card-actions>
          </v-card>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false
      }
    },
    props: ['id'],
    computed: {
      audit () {
        return this.$store.getters.loadedAudit(this.id)
      }
    }
  }
</script>
