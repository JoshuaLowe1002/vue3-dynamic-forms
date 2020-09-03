<template>
  <div>
    <DynamicForm :schema="schema" v-model="data" :submit="submit" />
    <button @click="submit">Submit</button>
    <code>{{ data }}</code>  
  </div>
</template>

<script lang="ts">
import { reactive, watch, compile, ref, onBeforeMount } from 'vue'
import DynamicForm from './components/DynamicForm.vue'
import { schema, submit } from './forms/registration/schema'

export default {
  name: 'App',
  components: {
    DynamicForm
  },
  setup() {
    let data = reactive({})

    return {
      data, schema, submit
    }
  }
}
</script>

<style scoped>
  div {
    margin: 0 auto;
    width:500px;
  }

  code {
    width: 100%;
    background: #EEE;
    padding: 1rem;
    display: block;
    margin: 2rem 0;
  }

  button {
    padding: 1rem;
    width: 107%;
    font-size: larger;
    font-weight: 700;
    background: dodgerblue;
    border-radius: 10px;
    border: 0px;
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    cursor: pointer;
    color: white;
  }

  button:hover {
    background-color: #2EE59D;
    box-shadow: 0px 15px 20px rgba(46, 229, 157, 0.4);
  }
</style>