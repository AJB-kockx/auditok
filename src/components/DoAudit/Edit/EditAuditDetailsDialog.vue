<template>
  <v-dialog
    v-model="editDialog"
    hide-overlay
    transition="dialog-bottom-transition"
    scrollable>
    <v-btn fab accent slot="activator">
      <v-icon>edit</v-icon>
    </v-btn>
    <v-card>
      <v-container>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Audit</v-card-title>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-text>
              <v-text-field
                name="title"
                label="Title"
                id="title"
                v-model="editedTitle"
                required></v-text-field>
              <v-text-field
                name="subtitle"
                label="Subtitle"
                id="subtitle"
                v-model="editedSubtitle"
                required></v-text-field>
            </v-card-text>
          </v-flex>
        </v-layout>
        <v-layout row wrap>
          <v-flex xs12>
            <v-card-actions>
              <v-btn flat @click="onSaveChanges">Save</v-btn>
              <v-btn flat @click="editDialog = false">Close</v-btn>
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
        editDialog: false,
        editedTitle: this.audit.title,
        editedSubtitle: this.audit.subtitle
      }
    },
    methods: {
      onSaveChanges () {
        if (this.editedTitle.trim() === '' || this.editedSubtitle.trim() === '') {
          return
        }
        this.editDialog = false
        this.$store.dispatch('updateAuditData', {
          id: this.audit.id,
          title: this.editedTitle,
          subtitle: this.editedSubtitle
        })
      }
    }
  }
</script>
