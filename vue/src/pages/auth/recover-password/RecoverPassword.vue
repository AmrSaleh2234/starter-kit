<template>
  <form class="login" @submit.prevent="onsubmit">
    
    <div class="card flex justify-content-center py-6">
      <span class="p-float-label w-full ">
          <InputText type="email" style="background-color: #ECF0F1;" id="username" class="w-full" v-model="email"/>
          <label style="font-size: 16px;" for="username">Email</label>
      </span>
    </div>

    
    <div class="flex justify-center mt-4">
      <button style="background-color: #448AEB !important;border-radius: 10px;color:white" class="w-full lg:w-[50%] py-2 text-lg" @click="onsubmit" >{{ t('auth.reset_password') }}</button>
    </div>
  </form>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const email = ref('')
  const emailErrors = ref<string[]>([])

  function onsubmit() {
    if (!email.value) {
      emailErrors.value = ['Email is required']
    } else {
      useRouter().push('/')
    }
  }
</script>
