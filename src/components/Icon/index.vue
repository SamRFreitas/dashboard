<template>
  <component :is="name" v-bind="$props"/>
</template>

<script>
import Loading from './Loading'
import Copy from './Copy'
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  },
  components: { Loading, Copy }
}
</script>
