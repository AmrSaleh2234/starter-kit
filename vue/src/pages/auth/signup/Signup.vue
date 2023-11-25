<template>
  <form @submit.prevent="onsubmit()">
    
    <div class="card flex justify-content-center py-6">
      <span class="p-float-label w-full ">
          <InputText type="email" style="background-color: #ECF0F1;" id="username" class="w-full" v-model="email"/>
          <label style="font-size: 16px;" for="username">Email</label>
      </span>
    </div>
    <div class="card flex justify-content-center py-6">

      <span class="p-float-label w-full">
          <InputText style="background-color: #ECF0F1;" type="password" id="username" class="w-full bg-[#ECF0F1]" v-model="password" />
          <label style="font-size: 16px;" for="username">password</label>
      </span>
  </div>

   

    <div class="auth-layout__options flex items-center justify-between">
    
      <router-link class="ml-1 va-link" :to="{ name: 'recover-password' }">
        {{ t('auth.recover_password') }}
      </router-link>
    </div>

    <div class="flex justify-center mt-4">
      <button style="background-color: #448AEB !important;border-radius: 10px;color:white" class="w-full lg:w-[50%] py-2 text-lg" @click="onsubmit" >{{ t('auth.sign_up') }}</button>
    </div>

   
  </form>
</template>

<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { useRouter } from 'vue-router'
  import { useI18n } from 'vue-i18n'
  const { t } = useI18n()

  const email = ref('')
  const password = ref('')
  const agreedToTerms = ref(false)
  const emailErrors = ref<string[]>([])
  const passwordErrors = ref<string[]>([])
  const agreedToTermsErrors = ref<string[]>([])

  const formReady = computed(() => {
    return !(emailErrors.value.length || passwordErrors.value.length || agreedToTermsErrors.value.length)
  })

  function onsubmit() {
    if (!formReady.value) return

    emailErrors.value = email.value ? [] : ['Email is required']
    passwordErrors.value = password.value ? [] : ['Password is required']
    agreedToTermsErrors.value = agreedToTerms.value ? [] : ['You must agree to the terms of use to continue']

    useRouter().push({ name: 'dashboard' })
  }
</script>
