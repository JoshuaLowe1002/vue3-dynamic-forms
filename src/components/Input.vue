<template>
<div v-if="visible">
  <label v-if="label">{{label}}</label>
  <input 
    :type="type" 
    :name="name"
    :placeholder="placeholder" 
    :value="value"
    @change="$emit('input', $event.target.value)"
  />
</div>
</template>

<script>

export default {
  name: 'Input',
  props: {
    type: String,
    name: String,
    label: String,
    visible: {
      type: Boolean,
      default: true
    },
    placeholder: String,
    value: String
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
  input {
    display: block;
    margin: .5rem 0 1.5rem;
    width: 100%;
    padding: 1rem;
    border: 1px solid #DDD;
  }
</style>