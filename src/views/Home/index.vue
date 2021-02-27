<template>
  <CustomHeader
    @create-account="handleAccountCreate"
    @login="handleLogin"
  />
  <Contact />
  <div class="flex justify-center py-10 bg-brand-gray">
    <p class="font-medium text-center text-gray-800">Feedbacker &#169; 2021</p>
  </div>
</template>

<script>
import CustomHeader from './CustomHeader'
import { useRouter } from 'vue-router'
import Contact from './Contact'
import { onMounted } from 'vue'
export default {
  components: { CustomHeader, Contact },

  setup () {
    const router = useRouter()
    onMounted(() => {
      const token = window.localStorage.getItem('token')
      if (token) {
        router.push({ name: 'Feedback' })
      }
    })
    function handleLogin () {}
    function handleAccountCreate () {}
    return {
      handleLogin,
      handleAccountCreate
    }
  }
}
</script>
