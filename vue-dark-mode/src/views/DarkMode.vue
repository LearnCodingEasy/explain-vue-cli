<template>
  <div class="">
    <!-- 
    npm i @vueuse/core
    npm install -D tailwindcss postcss autoprefixer
    npx tailwindcss init -p
 -->
    <p>isDork : {{ isDark }}</p>
    <button
      @click="toggleDark()"
      class="px-4 py-2 text-white bg-green-500 rounded"
    >
      Toggle Dark Mode
    </button>
  </div>
</template>

<script setup>
import { useDark } from "@vueuse/core";
import { useToggle } from "@vueuse/core";

let isDark = useDark();
console.log("isDark: ", isDark);
let toggleDark = useToggle(isDark);
console.log("toggleDark: ", toggleDark);
</script>

<style lang="scss" scoped></style>
