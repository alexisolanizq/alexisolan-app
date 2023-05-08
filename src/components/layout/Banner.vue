<script setup>
import MeshGradient from "./MeshGradient.vue";
import image from '@/assets/images/alexis.svg'
</script>

<template>
  <div class="absolute -top-10 lg:top-0 w-full h-screen overflow-hidden z-0">
    <MeshGradient />
  </div>

  <div class="absolute z-10 top-[100%] lg:top-[80%] left-0 p-6 lg:p-20 flex flex-col lg:flex-row items-center gap-10">
    <div class="w-full lg:w-[47%] text-white lg:mt-12">
      <h2 class="text-3xl lg:text-6xl text-center lg:text-left font-semibold mb-4 lg:mb-3">
        Soluciones de Diseño y Desarrollo Web
      </h2>
      <p class="text-lg lg:text-2xl text-center lg:text-left font-extralight">
        Experiencias e interfaz de usuario, sistemas y aplicaciones de acuerdo a lo que necesitas.
      </p>
    </div>
    <img :src="image" class="w-[350px] lg:w-[500px] lg:absolute right-0 top-[20%]" alt="Alexis ilustration">
  </div>
</template>
