<script setup>
import { useNavbar } from "../../composables/navbar";
const { topOfPage } = useNavbar();
</script>

<template>
  <nav
    :class="`${
      topOfPage ? 'bg-black/30 shadow-md' : 'bg-transparent'
    } py-5 px-6 lg:px-20 sticky top-0 z-40 transition-all ease-in-out delay-100 duration-200`"
  >
    <div class="flex items-center justify-between">
      <img src="@/assets/logos/logo_text.svg" class="h-[40px]" alt="" />

      <div class="mobile-nav hidden"></div>

      <div class="flex gap-10">
        <a href="" :class="`text-white font-medium text-xl hidden lg:block`"
          >Sobre mí</a
        >
        <a href="" :class="`text-white font-medium text-xl hidden lg:block`"
          >Proyectos</a
        >
        <a href="" :class="`text-white font-medium text-xl hidden lg:block`"
          >Servicios</a
        >
      </div>

      <button
        class="rounded-lg border-[3px] border-white py-2 px-4 text-white hover:bg-white hover:text-cyan-600 font-medium transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
      >
        Contáctame
      </button>
    </div>
  </nav>
</template>
