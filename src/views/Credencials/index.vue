<template>
  <div class="flex justify-center w-full h-28 bg-brand-main">
    <HeaderLogged />
  </div>

  <div class="flex flex-col items-center justify-center h-64 bg-brand-gray">
    <h1 class="text-4xl font-black text-center text-gray-800">
      Credenciais
    </h1>
    <p class="text-lg text-center text-gray-800 font-regular">
      Guia de instalação das suas credenciais
    </p>
  </div>

  <div class="flex justify-center w-full">
    <div class="flex flex-col w-4/5 max-6xl py-10">
      <h1 class="text-3xl font-black text-brand-darkgray">
        Instalação e Configuração
      </h1>
      <p class="mt-10 text-lg text-gray-800">
        Este aqui é sua chave de api
      </p>

      <ContentLoader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />

      <div
        v-else
        class="flex py-3 pl-5 mt-2 rounded justify-between items-center bg-brand-gray w-full lg:w-1/2"
      >
        <span>{{ store.User.currentUser.apiKey }}</span>
        <div class="flex ml-20 mr-5">
          <icon
            name="copy"
            :color="brandColors.graydark"
            size="24"
            class="cursor-pointer ml-3"
          >
          </icon>
          <icon
            name="loading"
            :color="brandColors.graydark"
            size="24"
            class="cursor-pointer ml-3"
          >
          </icon>
        </div>
      </div>

      <p class="mt-5 text-lg text-gray-800">
        Coloque o script abaixo no seu site para começar a receber feedbacks
      </p>

      <ContentLoader
        v-if="store.Global.isLoading || state.isLoading"
        class="rounded"
        width="600px"
        height="50px"
      />

      <div
        v-else
        class="px-3 pl-5 pr-20 mt-2 rounded bg-brand-gray w-full lg:w-2/3 overflow-x-scroll"
      >
        <pre>&lt;script src="https://samrfreitas-feedbacker-widget.netlify.app?api_key={{store.User.currentUser.apiKey}}"&gt;&lt;/script&gt;</pre>
      </div>
    </div>
  </div>
</template>
<script>
import HeaderLogged from '../../components/HeaderLogged'
import ContentLoader from '../../components/ContentLoader'
import Icon from '../../components/Icon'
import useStore from '../../hooks/useStore'
import palette from '../../../palette'
import { reactive } from 'vue'
export default {
  components: { ContentLoader, HeaderLogged, Icon },
  setup () {
    const store = useStore()
    const state = reactive({
      isLoading: false
    })
    return {
      state,
      store,
      brandColors: palette.brand
    }
  }
}
</script>
