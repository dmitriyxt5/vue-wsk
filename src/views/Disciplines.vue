<script setup>
import { onMounted, watch, ref } from "vue";
import { useRouter } from "vue-router";
import { useCountriesStore } from "../stores/countries.js";

const { countries, setCountries, setResult } = useCountriesStore();
const hisCountries = ref("");
const router = useRouter();

onMounted(() => {
  console.log(countries, "?");
  fetch("http://localhost:3000/countries")
    .then((res) => res.json())
    .then((res) => {
      setCountries(res);
      hisCountries.value = res;
      console.log(res);
    });
});
const res = ref();
watch(hisCountries, () => {
  console.log(hisCountries.value, "hisCountries.value.disciplines");
  res.value = [
    ...new Set(
      hisCountries.value.flatMap((el) =>
        el.disciplines.map((element) => {
          return element.name;
        })
      )
    ),
  ];
});
</script>

<template>
  <main>
    <div class="container">
      <h1 class="h1">Disciplines</h1>
      <div class="btn-container">
        <div
          v-for="response in res"
          :key="response"
          @click="() => router.push(`/discipline/${response}`)"
          class="btn"
        >
          <img
            width="40"
            :src="`/disciplines/` + response + `.svg`"
            alt="ico countries"
          />
          {{ response }}
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
