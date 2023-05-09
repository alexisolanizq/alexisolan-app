<script setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import MeshGradient from "./MeshGradient.vue";
import image from "@/assets/images/alexis.svg";
import { Autoplay } from "swiper";
</script>

<template>
  <div class="absolute top-0 lg:top-0 w-full h-[95vh] overflow-hidden z-0">
    <MeshGradient />
  </div>

  <section
    class="relative z-10 left-0 p-6 lg:px-20 flex flex-col lg:flex-row items-center gap-10 overflow-hidden"
  >
    <div>
      <swiper
        class="lg:h-[60vh] w-[300px] lg:w-[550px]"
        :slides-per-view="1"
        :autoplay="{
          delay: 7000,
          disableOnInteraction: false,
        }"
        :modules="[Autoplay]"
      >
        <swiper-slide class="w-3/6">
          <div class="text-white pt-5 lg:pt-20">
            <h2
              class="text-3xl lg:text-6xl text-center lg:text-left font-semibold mb-4 lg:mb-3"
            >
            {{ `${$t('hi')}, ${$t('my_name')}` }}
            </h2>
            <p
              class="text-lg lg:text-2xl text-center lg:text-left font-extralight"
            >
              Experiencias e interfaz de usuario, sistemas y aplicaciones de
              acuerdo a lo que necesitas.
            </p>
          </div>
        </swiper-slide>
        <swiper-slide class="w-3/6">
          <div class="text-white pt-5 lg:pt-20">
            <h2
              class="text-3xl lg:text-6xl text-center lg:text-left font-semibold mb-4 lg:mb-3"
            >
              Soluciones de Diseño y Desarrollo Web
            </h2>
            <p
              class="text-lg lg:text-2xl text-center lg:text-left font-extralight"
            >
              Experiencias e interfaz de usuario, sistemas y aplicaciones de
              acuerdo a lo que necesitas.
            </p>
          </div>
        </swiper-slide>
        <!-- <swiper-slide>
          <div class="text-white pt-5 lg:pt-20">
            <h2
              class="text-3xl lg:text-6xl text-center lg:text-left font-semibold mb-4 lg:mb-3"
            >
              Soluciones de Diseño y Desarrollo Web
            </h2>
            <p
              class="text-lg lg:text-2xl text-center lg:text-left font-extralight"
            >
              Experiencias e interfaz de usuario, sistemas y aplicaciones de
              acuerdo a lo que necesitas.
            </p>
          </div>
        </swiper-slide> -->
      </swiper>
    </div>

    <img
      :src="image"
      class="w-[350px] lg:w-[500px] lg:absolute right-[10%] top-[15%]"
      alt="Alexis ilustration"
    />
  </section>
</template>
