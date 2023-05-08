<script setup>
import SpanCircles from "../layout/SpanCircles.vue";
</script>
<template>
  <SpanCircles
    color="bg-blue-600"
    size="800px"
    directionX="-left-28"
    directionY="-top-52"
    transitionMove="animate-meshFour"
  />
  <SpanCircles
    color="bg-cyan-600"
    size="800px"
    directionX="-right-14"
    directionY="-top-52 delay-[1s]"
    transitionMove="animate-meshFour"
  />
  <SpanCircles
    color="bg-blue-600"
    size="800px"
    directionX="-left-24"
    directionY="-bottom-64 delay-[.5s]"
    transitionMove="animate-meshThree"
  />
  <SpanCircles
    color="bg-blue-600"
    size="800px"
    directionX="-right-52"
    directionY="-bottom-64 delay-[1.5s]"
    transitionMove="animate-meshThree"
  />
  <SpanCircles
    color="bg-cyan-500"
    size="800px"
    directionX="left-72"
    directionY="-top-8 delay-[3s]"
    transitionMove="animate-meshOne"
  />
  <span class="absolute w-full h-full bg-black/20 backdrop-blur-[80px] m-0 p-0 z-40" />
  <svg
      class="absolute bottom-0 z-40 outline-none"
      id="wave"
      style="transform: rotate(0deg); transition: 0.3s"
      viewBox="0 0 1440 110"
      version="1.1"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
          <stop stop-color="rgba(255, 255, 255, 1)" offset="0%"></stop>
          <stop
            stop-color="rgba(209.716, 236.743, 255, 1)"
            offset="100%"
          ></stop>
        </linearGradient>
      </defs>
      <path
        style="transform: translate(0, 0px); opacity: 1"
        fill="url(#sw-gradient-0)"
        d="M0,22L21.8,33C43.6,44,87,66,131,64.2C174.5,62,218,37,262,27.5C305.5,18,349,26,393,33C436.4,40,480,48,524,44C567.3,40,611,26,655,27.5C698.2,29,742,48,785,47.7C829.1,48,873,29,916,23.8C960,18,1004,26,1047,40.3C1090.9,55,1135,77,1178,80.7C1221.8,84,1265,70,1309,66C1352.7,62,1396,70,1440,67.8C1483.6,66,1527,55,1571,44C1614.5,33,1658,22,1702,27.5C1745.5,33,1789,55,1833,69.7C1876.4,84,1920,92,1964,93.5C2007.3,95,2051,92,2095,78.8C2138.2,66,2182,44,2225,38.5C2269.1,33,2313,44,2356,44C2400,44,2444,33,2487,36.7C2530.9,40,2575,59,2618,64.2C2661.8,70,2705,62,2749,58.7C2792.7,55,2836,55,2880,47.7C2923.6,40,2967,26,3011,20.2C3054.5,15,3098,18,3120,20.2L3141.8,22L3141.8,110L3120,110C3098.2,110,3055,110,3011,110C2967.3,110,2924,110,2880,110C2836.4,110,2793,110,2749,110C2705.5,110,2662,110,2618,110C2574.5,110,2531,110,2487,110C2443.6,110,2400,110,2356,110C2312.7,110,2269,110,2225,110C2181.8,110,2138,110,2095,110C2050.9,110,2007,110,1964,110C1920,110,1876,110,1833,110C1789.1,110,1745,110,1702,110C1658.2,110,1615,110,1571,110C1527.3,110,1484,110,1440,110C1396.4,110,1353,110,1309,110C1265.5,110,1222,110,1178,110C1134.5,110,1091,110,1047,110C1003.6,110,960,110,916,110C872.7,110,829,110,785,110C741.8,110,698,110,655,110C610.9,110,567,110,524,110C480,110,436,110,393,110C349.1,110,305,110,262,110C218.2,110,175,110,131,110C87.3,110,44,110,22,110L0,110Z"
      ></path>
    </svg>
</template>
