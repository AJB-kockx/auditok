<template>
  <v-container>
  <v-layout>
    <v-flex>
      <v-card>
        <v-card-title>
          {{audit.title}}
        </v-card-title>
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
