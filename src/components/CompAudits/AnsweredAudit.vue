<template>
  <v-container>
    <v-layout>
      <v-flex>
        <v-container>
          <v-card>
            <v-card-title>
              <h4>{{audit.title}}</h4>
            </v-card-title>
            <v-card-text>{{audit.subtitle}}</v-card-text>
            <v-card-text>{{audit.taker}}</v-card-text>
            <v-card-actions>
            </v-card-actions>
          </v-card>
          <v-container>
            <v-card v-for="question, index in audit.questions"
                    :key = "index">
              <v-card-text>{{question.question}}</v-card-text>
              <v-card-text>{{question.scale.text}}</v-card-text>
              <v-card-text>{{question.answer}}</v-card-text>
              <v-divider></v-divider>
            </v-card>
          </v-container>
          <download-excel
            class="btn btn-default"
            :data="json_data"
            :fields="json_fields"
            name="Audit.xls">
            Download Excel
          </download-excel>
        </v-container>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        json_fields: {
          'Audit Titel': 'title',
          'Audit Subtitel': 'subtitle',
          'Afnemer': 'taker',
          'Vraag': 'question',
          'Schaal': 'scale',
          'Antwoord': 'answer'
        },
        json_data: []
      }
    },
    props: ['id'],
    computed: {
      audit () {
        return this.$store.getters.loadedCompAudit(this.id)
      }
    },
    methods: {
      setAuditData () {
        this.json_data.push({
          title: this.audit.title,
          subtitle: this.audit.subtitle,
          taker: this.audit.taker,
          question: '',
          scale: '',
          answer: ''
        })
        for (var i = 0; i < this.audit.questions.length; i++) {
          this.json_data.push({
            title: '',
            subtitle: '',
            taker: '',
            question: this.audit.questions[i].question,
            scale: this.audit.questions[i].scale.text,
            answer: this.audit.questions[i].answer
          })
        }
      }
    },
    created () {
      this.setAuditData()
    }
  }
</script>
