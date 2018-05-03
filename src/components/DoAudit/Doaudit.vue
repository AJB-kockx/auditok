<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-list v-for="audit in audits" :key="audit.id" class="mb-2">
        <v-list-tile>
          <v-list-tile-content>
            <v-list-tile-title>{{audit.title}}</v-list-tile-title>
            <v-list-tile-sub-title>{{audit.subTitle}}</v-list-tile-sub-title>
          </v-list-tile-content>
          <v-list-tile-action>
            <v-btn flat :to=" '/DoAudit/' + audit.id">
              Do audit
            </v-btn>
            <v-btn flat>
              Delete audit
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
        return this.$store.getters.loadedAudits
      }
    }
  }
</script>
