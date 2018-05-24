<template>
  <v-container>
  <v-layout>
    <v-flex>
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
        <v-card-text v-for="question in audit.questions">
          {{question.question}}
        </v-card-text>
      </v-card>
    </v-flex>
  </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['id'],
    computed: {
      audit () {
        return this.$store.getters.loadedAudit(this.id)
      }
    }
  }
</script>
