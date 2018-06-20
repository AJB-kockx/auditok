<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-layout>
        <v-flex xs12 class = "text-xs-center">
          <v-progress-circular
            indeterminate
            color="primary"
            :width="7"
            :size="70"
            v-if="loading"></v-progress-circular>
        </v-flex>
      </v-layout>
      <h3>Completed audits:</h3>
      <v-list v-for="audit in audits" :key="audit.id" class="mb-2" v-if="!loading">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{audit.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{audit.subtitle}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat :to=" '/AnsweredAudit/' + audit.id">
              Select Audit
            </v-btn>
          </v-list-tile-action>
        </v-list-tile>
      </v-list>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      audits () {
        this.$store.dispatch('loadCompAudits')
        return this.$store.getters.loadedCompAudits
      },
      loading () {
        return this.$store.getters.loading
      }
    }
  }
</script>
