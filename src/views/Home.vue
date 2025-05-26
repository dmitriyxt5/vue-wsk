<script setup>
import { useRouter } from "vue-router";

const router = useRouter();
</script>

<template>
  <main>
    <div class="container">
      <img src="/frame.png" alt="olympic-medals" />
      <div class="btn-container">
        <div @click="() => router.push('/countries')" class="btn">
          <img src="/ico-countries.svg" alt="ico countries" />
          Countries
        </div>
        <div @click="() => router.push('/disciplines')" class="btn">
          <img src="/ico-disciplines.svg" alt="ico disciplines" />
          Disciplines
        </div>
      </div>
    </div>
  </main>
</template>
