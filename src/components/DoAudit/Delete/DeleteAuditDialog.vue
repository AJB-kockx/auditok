<template>
  <v-dialog
    v-model="deleteDialog"
    hide-overlay
    max-width="500">
    <v-btn
      flat
      slot="activator"
      top
    small>Delete</v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Are you sure you want to delete: {{ auditTitle }}?</v-card-title>
            <v-card-actions>
              <v-btn flat @click="onDeleteAudit" color="error">Delete</v-btn>
              <v-spacer></v-spacer>
              <v-btn flat @click="deleteDialog = false">Cancel</v-btn>
            </v-card-actions>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    props: ['audit'],
    data () {
      return {
        deleteDialog: false,
        auditTitle: this.audit.title
      }
    },
    methods: {
      onDeleteAudit () {
        this.$store.dispatch('deleteAudit', {
          id: this.audit.id
        })
      }
    }
  }
</script>
