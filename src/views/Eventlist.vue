<template>
    <div>
        <h1>Event Listing</h1>
        <eventcard v-for="event in events" :key="event.id" :event="event"></eventcard>
    </div>
</template>
<script>
import Eventcard from '../components/Eventcard.vue'
import EventService from '@/services/Eventservice.js'

export default {
    components:{
        Eventcard
    },
    data() {
        return {

            events : []

        }
    },
    created(){
       EventService.getEvents()
            .then(response => {
                this.events = response.data
            })
            .catch(error => {
                console.log("An error occured" + error.response)
            })
    }
}
</script>
<style scoped>

</style>