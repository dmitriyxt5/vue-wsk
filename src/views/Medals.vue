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
const medal = ref(route.params.medal);
const disciplines = ref();
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
  console.log(hisCountry.value, "hisCountry.value");
  medalsSum.value =
    hisCountry.value.gold + hisCountry.value.silver + hisCountry.value.bronze;

  disciplines.value = countries
    .map((el) => {
      if (el.name == country.value) {
        return el.disciplines;
      }
    })
    .filter(Boolean)[0]
    .map((elem) => {
      console.log(elem);
      return {
        name: elem.name,
        sum: elem.gold + elem.silver + elem.bronze,
      };
    });
  console.log(disciplines.value, "disciplines");
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
        <div class="medals">
          <p class="p">{{ medal }} medals</p>
          <p class="big-text">{{ medalsSum }}</p>
        </div>
        <table>
          <thead>
            <tr>
              <th>Discipline</th>
              <th>Medals</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="discipline in disciplines" :key="discipline">
              <td>
                {{ discipline.name }}
              </td>
              <td>{{ discipline.sum }}</td>
            </tr>
          </tbody>
        </table>
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
.medals {
  text-align: center;
}
p {
  font-size: 24px;
  color: white;
  font-weight: 500;
  text-transform: uppercase;
}
.big-text {
  font-size: 48px;
  font-weight: bold;
  line-height: 48px;
}
.h1 {
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
}
</style>
