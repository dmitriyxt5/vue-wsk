<script setup>
import { onMounted, watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCountriesStore } from "../stores/countries.js";

const { countries, setCountries } = useCountriesStore();
const hisCountry = ref("");
const medalsSum = ref(0);
const router = useRouter();
const route = useRoute();
const country = ref(route.params.city);
onMounted(() => {
  console.log(country.value);
  console.log(countries);
  hisCountry.value = countries
    .map((el) => {
      if (el.name == country.value) {
        return el.medals;
      }
    })
    .filter(Boolean)[0];
  console.log(hisCountry.value);
  medalsSum.value =
    hisCountry.value.gold + hisCountry.value.silver + hisCountry.value.bronze;
});
// onMounted(() => {
//   console.log(countries, "?");
//   fetch("http://localhost:3000/countries")
//     .then((res) => res.json())
//     .then((res) => {
//       setCountries(res);
//       hisCountries.value = res;
//     });
// });

// watch(countries.value, () => {
//   console.log("test");
// });
</script>

<template>
  <main>
    <div class="container">
      <div class="country-container">
        <h1 class="h1">{{ country }}</h1>
        <img width="200" :src="`/images/` + country + `.png`" :alt="country" />
        <table>
          <thead>
            <tr>
              <th>Gold</th>
              <th>Silver</th>
              <th>Bronze</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{{ hisCountry.gold }}</td>
              <td>{{ hisCountry.silver }}</td>
              <td>{{ hisCountry.bronze }}</td>
              <td>{{ medalsSum }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="btn-container">
        <button
          class="btn"
          @click="() => router.push(`/medals/gold/${country}`)"
        >
          <img width="40" src="/medals/gold.png" alt="gold" />
          Medals
        </button>
        <button
          class="btn"
          @click="() => router.push(`/medals/silver/${country}`)"
        >
          <img width="40" src="/medals/silver.png" alt="silver" />
          Medals
        </button>
        <button
          class="btn"
          @click="() => router.push(`/medals/bronze/${country}`)"
        >
          <img width="40" src="/medals/bronze.png" alt="bronze" />
          Medals
        </button>
      </div>
    </div>
  </main>
</template>

<style>
.country-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}
h1 {
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
}
</style>
