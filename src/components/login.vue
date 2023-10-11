<script setup lang="ts">
import { reactive } from 'vue'
import axios from "../plugins/axios"

const loginInfo = reactive({
  email: '',
  password: ''
})

const submit = async () => {
  await axios.post(api).then((response) => {
  console.log(response.data)
})
} 
</script>

<template>
  
<div class="flex justify-center bg-yellow-100">

  <div class="grid grid-cols-1 mt-10">
  <div>Email address: <input v-model="loginInfo.email" class="border-2 w-52"/></div>
  <div class="mt-5">Password: <input v-model="loginInfo.password" class="border-2 w-52"/></div>
  <button @click="submit()">Submit</button>
</div>
</div>
</template>