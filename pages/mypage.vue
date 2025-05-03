<script lang="ts" setup>
import { onMounted, ref } from 'vue'
import liff from '@line/liff'

const displayName = ref<string | null>(null)

const profileImage = ref<string | null>(null)

onMounted(async () => {
  try {
    await liff.init({ liffId: useRuntimeConfig().public.LIFF_ID })

    if (!liff.isLoggedIn()) {
      liff.login()
      return
    }
    console.log(liff.getProfile())
    const profile = await liff.getProfile()
    displayName.value = profile.displayName
    profileImage.value = profile.pictureUrl
  } catch (error) {
    console.error('LIFF init failed', error)
  }
})
</script>

<template>
  <div>
    <h1>hello {{ displayName }}</h1>
    <img v-if="profileImage" :src="profileImage" alt="Profile Image" />
</div>
</template>
