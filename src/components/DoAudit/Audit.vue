<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              <h3>{{audit.title}}</h3>
              <template>
                <v-spacer></v-spacer>
                <app-edit-audit-details-dialog :audit="audit"></app-edit-audit-details-dialog>
              </template>
            </v-card-title>
              <v-card-text>
                {{audit.subtitle}}
              </v-card-text>
            <v-card-actions>
              <v-text-field
                v-model="auditTaker"
                label="Audit afnemer (Alleen voornaam)"
                required></v-text-field>
            </v-card-actions>
          </v-card>
        </v-container>
        <form @submit.prevent="onSaveAudit">
          <v-container
            v-for="question, i in audit.questions"
            :key = "i">
            <v-card>
              <v-card-title>
                {{question.question}}
                <template>
                  <v-spacer></v-spacer>
                  <question-dialog :question="question"></question-dialog>
                </template>
              </v-card-title>
              <v-card-actions>
                <scale-component :question="question"></scale-component>
              </v-card-actions>
            </v-card>
          </v-container>
          <v-btn type="submit">Save Answers</v-btn>
        </form>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        dialog: false,
        auditTitle: '',
        auditSubtitle: '',
        auditTaker: '',
        answeredQuestions: []
      }
    },
    props: ['id'],
    computed: {
      audit () {
        return this.$store.getters.loadedAudit(this.id)
      }
    },
    methods: {
      onSaveAudit () {
        const completedAuditData = {
          auditTitle: this.audit.title,
          auditSubtitle: this.audit.subtitle,
          auditTaker: this.auditTaker,
          answeredQuestions: this.audit.questions
        }
        this.$store.dispatch('createAnsweredAudit', completedAuditData)
        this.$router.push('/CompAudits')
      }
    }
  }
</script>
