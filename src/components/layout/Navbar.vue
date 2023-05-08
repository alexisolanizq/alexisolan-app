<script setup>
import { useNavbar } from "../../composables/navbar";
const { topOfPage } = useNavbar();
</script>

<template>
  <nav
    :class="`${
      topOfPage ? 'bg-black/30 shadow-md' : 'bg-transparent'
    } py-5 px-6 lg:px-28 sticky top-0 z-50 transition-all ease-in-out delay-100 duration-200`"
  >
    <div class="flex items-center justify-between">
      <img src="../../assets/logos/logo.svg" class="h-[50px]" alt="" />

      <div class="mobile-nav hidden"></div>

      <div class="flex gap-10">
        <a
          href=""
          :class="`text-white font-medium text-xl hidden lg:block`"
          >Sobre mí</a
        >
        <a
          href=""
          :class="`text-white font-medium text-xl hidden lg:block`"
          >Proyectos</a
        >
        <a
          href=""
          :class="`text-white font-medium text-xl hidden lg:block`"
          >Servicios</a
        >
      </div>
    </div>
  </nav>
</template>
