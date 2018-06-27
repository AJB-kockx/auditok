<template>
  <v-container>
    <v-layout row wrap>
      <v-flex>
        <v-radio-group
          v-if="questionScale === 'Ja/Nee'"
          v-model="question.answer">
          <v-radio
            label="Ja"
            value="Ja">
          </v-radio>
          <v-radio
            label="Nee"
            value="Nee">
          </v-radio>
          <v-radio
            label="Niet beoordeeld"
            value="Niet Beoordeeld">
          </v-radio>
          <v-radio
            label="NVT"
            value="NVT">
          </v-radio>
        </v-radio-group>
        <v-radio-group
          v-if="questionScale === 'Ja/Nee/Soms'"
          v-model="question.answer">
          <v-radio
            label="Ja"
            value="Ja">
          </v-radio>
          <v-radio
            label="Nee"
            value="Nee">
          </v-radio>
          <v-radio
            label="Soms"
            value="Soms">
          </v-radio>
          <v-radio
            label="Niet beoordeeld"
            value="Niet Beoordeeld">
          </v-radio>
          <v-radio
            label="NVT"
            value="NVT">
          </v-radio>
        </v-radio-group>
        <v-radio-group
          v-if="questionScale === '1 tot 3'"
          v-model="question.answer">
          <v-radio
            label="1"
            value="1">
          </v-radio>
          <v-radio
            label="2"
            value="2">
          </v-radio>
          <v-radio
            label="3"
            value="3">
          </v-radio>
        </v-radio-group>
        <v-radio-group
          v-if="questionScale === '1 tot 5'"
          v-model="question.answer">
          <v-radio
            label="1"
            value="1">
          </v-radio>
          <v-radio
            label="2"
            value="2">
          </v-radio>
          <v-radio
            label="3"
            value="3">
          </v-radio>
          <v-radio
            label="4"
            value="4">
          </v-radio>
          <v-radio
            label="5"
            value="5">
          </v-radio>
        </v-radio-group>
        <v-radio-group
          v-if="questionScale === '1 tot 7'"
          v-model="question.answer">
          <v-radio
            label="1"
            value="1">
          </v-radio>
          <v-radio
            label="2"
            value="2">
          </v-radio>
          <v-radio
            label="3"
            value="3">
          </v-radio>
          <v-radio
            label="4"
            value="4">
          </v-radio>
          <v-radio
            label="5"
            value="5">
          </v-radio>
          <v-radio
            label="6"
            value="6">
          </v-radio>
          <v-radio
            label="7"
            value="7">
          </v-radio>
        </v-radio-group>
        <v-text-field
          v-if="this.question.scale.text === 'Vrij tekstveld'"
          v-model="question.answer">
        </v-text-field>
        <v-radio-group
          v-if="questionScale === 'Eigen schaal'"
          v-model="question.answer">
          <v-radio
            v-for="label, index in this.question.customScale"
            :key="index"
            :label=label.label
            :value=label.label></v-radio>
        </v-radio-group>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    props: ['question'],
    data () {
      return {
        questionScale: this.question.scale.text
      }
    }
  }
</script>
