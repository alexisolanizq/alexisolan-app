<script setup>
const props = defineProps([
  "color",
  "size",
  "directionX",
  "directionY",
  "transitionMove",
  "zIndex",
]);
</script>

<template>
  <span
    :class="`absolute rounded-full ${transitionMove} ${color} w-[800px] h-[800px] ${directionX} ${directionY}`"
  ></span>
</template>
