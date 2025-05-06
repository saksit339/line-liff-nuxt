<template>
    
    <div class="welcome">
      <div class="register-container">
        <button class="item" @click="goTo('https://web.facebook.com/WalailakUniversity/?locale=th_TH&_rdc=1&_rdr#')">WU Facebook</button>
        <button class="item" @click="goTo('https://ces.wu.ac.th/main/')">Wu website</button>
    </div>
    <div class="feature">
      <div class="feature-item-container">        
        <button class="item">1</button>
        <button class="item">2</button>
        <button class="item">3</button>
      </div>
      <div class="feature-item-container">
        <button class="item">1</button>
        <button class="item">2</button>
        <button class="item">3</button>
      </div>
    </div>
    </div>
</template>

<script lang="ts" setup>
// import { onMounted, ref } from 'vue'
// import liff from '@line/liff'
                                                                    
// const displayName = ref<string | null>(null)

// const profileImage = ref<string | null>(null)

// onMounted(async () => {
//   try {
//     await liff.init({ liffId: "2007363037-jvDbe3m4" })

//     if (!liff.isLoggedIn()) {
//       liff.login()
//       return
//     }
//     console.log(liff.getProfile())
//     const profile = await liff.getProfile()
//     displayName.value = profile.displayName
//     profileImage.value = profile.pictureUrl ?? null
//   } catch (error) {
//     console.error('LIFF init failed', error)
//   }
// })
  function goTo(url: string) {
    window.location.href = url
  }
</script>

<style>

.welcome {
  background-image:url('https://img.freepik.com/premium-photo/cartoon-dog-with-red-blanket-word-no-it_1166173-8992.jpg?w=740');
  height: 100vh;
}

.register-container {
  display: flex;
  height: 8em;
  justify-content: center;
  gap: 5px;
  padding-top: 5px;
}

.item {
  flex: 1;
  border-radius: 15px;
  background-color: rgb(255, 255, 255);
  filter: drop-shadow(0 0 0.75rem rgb(109, 109, 109));
  border: none;
}


.item:active {
  background-color: rgb(105, 156, 156);
  filter: drop-shadow(0 0 0.75rem rgb(123, 184, 160));
}

.feature{
  display: flex;
  flex-direction: column;
  height: 18em;
  margin-left: 1em;
  margin-right: 1em;
  justify-content: center;
}

.feature-item-container {
  flex: 1;
  display: flex;
  height: 45em;
  border: 1;
  margin-top: 5px;
  gap: 5px;
}

</style>