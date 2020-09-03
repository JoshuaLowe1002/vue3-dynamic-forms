<template>
<div v-if="visible">
  <label v-if="label">{{label}}</label>
  <select :name="name" @input="$emit('input', $event.target.value)">
    <option value="" disabled selected>Select an option</option>
    <option v-for="option in options" :value="option.title" :key="option.id">{{option.title}}</option>
  </select>
</div>
</template>

<script>

export default {
  name: 'Select',
  props: {
    name: String,
    label: String,
    options: Object,
    visible: {
      type: Boolean,
      default: true
    }
  },
  emits: ['input']
}
</script>

<style scoped>
label {
  display: block;
  text-align: left;
  font-size: .875rem;
}
select {
  display: block;
  margin: .5rem 0 1.5rem;
  width: 107%;
  padding: 1rem;
  border: 1px solid #DDD;
}
</style>