<script setup>
import { onMounted, watch, ref } from "vue";
import { useRouter } from "vue-router";
import { useCountriesStore } from "../stores/countries.js";

const { countries, setCountries } = useCountriesStore();
const hisCountries = ref("");
const router = useRouter();

onMounted(() => {
  console.log(countries, "?");
  fetch("http://localhost:3000/countries")
    .then((res) => res.json())
    .then((res) => {
      setCountries(res);
      hisCountries.value = res;
    });
});

watch(hisCountries, () => {
  console.log("test");
});

// watch(countries.value, () => {
//   console.log("test");
// });
</script>

<template>
  <main>
    <div class="container">
      <h1 class="h1">Countries</h1>
      <div class="btn-container">
        <div
          v-for="country in hisCountries"
          :key="country"
          @click="() => router.push(`/country/${country.name}`)"
          class="btn"
        >
          <img width="40" :src="country.flag" alt="ico countries" />
          {{ country.name }}
        </div>
      </div>
    </div>
  </main>
</template>

<style>
h1 {
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
}
</style>
