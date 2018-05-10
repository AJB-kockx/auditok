<template>
  <v-layout>
   <v-flex xs12 sm6 offset-sm3>
     <v-container v-for="item in CardItems"
                  :key="item.name">
      <v-card :to="item.link">
        <v-card-media :src="item.pic" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
             <h3 class="headline mb-0">{{item.title}}</h3>
          </div>
        </v-card-title>
      </v-card>
     </v-container>
   </v-flex>
  </v-layout>
</template>

<script>
  export default {
    computed: {
      CardItems () {
        let CardItems = [
          {name: 'SignIn', title: 'Sign in', link: '/SignIn', pic: '/static/SignIn.png'}
        ]
        if (this.userIsAuthenticated) {
          CardItems = [
           {name: 'DoAudit', title: 'Do Audit', link: '/DoAudit', pic: '/static/DoAudit.jpg'},
           {name: 'CreateAudit', title: 'Create Audit', link: '/CreateAudit', pic: '/static/CreateAudit.png'}
          ]
        }
        return CardItems
      },
      userIsAuthenticated () {
        return this.$store.getters.user !== null && this.$store.getters.user !== undefined
      }
    }
  }
</script>
