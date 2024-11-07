<script setup lang="ts">
import { toRefs, defineProps } from 'vue'
import { type Event } from '@/types'
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import EventService from '@/services/EventService'
const props = defineProps<{
  event: Event
}>()
const { event } = toRefs(props)
</script>
<template>
 <p>{{ event.time }} on {{ event.date }} @ {{ event.location }}</p>
  <p>{{ event.description }}</p> 
</template>
