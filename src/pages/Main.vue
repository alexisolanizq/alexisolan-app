<script setup>
import Navbar from "@/components/layout/Navbar.vue";
import Banner from "@/components/layout/Banner.vue";
import Services from "@/components/layout/Services.vue";
</script>

<template>
  <div class="absolute w-full">
    <Navbar />
    <Banner />
    <div
      class="relative top-10 lg:top-52 mt-20 p-6 lg:px-20 h-screen bg-white text-black"
    >
      <h2
        class="text-center lg:text-left text-4xl lg:text-5xl font-medium mb-10 lg:mb-20 underline underline-offset-4"
      >
        Servicios
      </h2>

      <div class="flex flex-col lg:flex-row justify-between items-center">
        <img
          src="@/assets/images/services.svg"
          alt="Services ilustration"
          class="w-96 lg:w-[600px] mb-20 lg:mb-0"
        />

        <div class="items">
          <div
            class="item flex gap-5 items-start lg:ml-auto w-full lg:w-3/5 mb-10"
          >
            <span class="rounded-full flex bg-cyan-200 p-3">
              <v-icon name="bi-chevron-right" />
            </span>
            <div class="flex flex-col">
              <p class="text-2xl lg:text-3xl font-medium mb-2">Diseño</p>
              <p class="lg:w-[80%]">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Neque
                accusantium accusamus ex quo assumenda commodi dolor dicta quasi
                exercitationem dolorum!
              </p>
            </div>
          </div>
          <div
            class="item flex gap-5 items-start lg:ml-auto w-full lg:w-3/5 mb-10"
          >
            <span class="rounded-full flex bg-cyan-200 p-3">
              <v-icon name="bi-chevron-right" />
            </span>
            <div class="flex flex-col">
              <p class="text-2xl lg:text-3xl font-medium mb-2">Desarrollo</p>
              <p class="lg:w-[80%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Consectetur adipisci doloribus, ut officiis eligendi mollitia
                veniam totam sunt pariatur porro.
              </p>
            </div>
          </div>
          <div
            class="item flex gap-5 items-start lg:ml-auto w-full lg:w-3/5 mb-10"
          >
            <span class="rounded-full flex bg-cyan-200 p-3">
              <v-icon name="bi-chevron-right" />
            </span>
            <div class="flex flex-col">
              <p class="text-2xl lg:text-3xl font-medium mb-2">Análisis</p>
              <p class="lg:w-[80%]">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius
                architecto eveniet praesentium qui impedit necessitatibus minus
                atque aut sapiente enim!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- <Services /> -->
  </div>
</template>
