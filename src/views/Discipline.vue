<script setup>
import { onMounted, watch, ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import { useCountriesStore } from "../stores/countries.js";

const { countries, setCountries, setResult } = useCountriesStore();
const hisCountries = ref("");
const result = ref("");

const router = useRouter();
const route = useRoute();

onMounted(() => {
  console.log(countries, "?");
  result.value = countries
    .flatMap((res) => {
      const resSult = res.disciplines
        .map((resp) => {
          if (resp.name == route.params.discipline) {
            return {
              medals: resp.gold + resp.silver + resp.bronze,
              medalsList: resp,
              city: res.name,
            };
          }
        })
        .filter(Boolean);

      return resSult;
    })
    .filter(Boolean);
  setResult(result.value);
  // fetch("http://localhost:3000/countries")
  //   .then((res) => res.json())
  //   .then((res) => {
  //     setCountries(res);
  //     hisCountries.value = res;
  //     console.log(res);
  //   });
});

// const res = ref();
// watch(hisCountries, () => {
//   console.log(hisCountries.value, "hisCountries.value.disciplines");
//   res.value = [
//     ...new Set(
//       hisCountries.value.flatMap((el) =>
//         el.disciplines.map((element) => {
//           return element.name;
//         })
//       )
//     ),
//   ];
// });
</script>

<template>
  <main>
    <div class="container">
      <h1 class="h1">{{ route.params.discipline }}</h1>
      <img
        class="center_img"
        width="200"
        :src="`/disciplines/` + route.params.discipline + `.svg`"
        :alt="route.params.discipline"
      />
      <table>
        <thead>
          <tr>
            <th>Country</th>
            <th>Medals</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="res in result" :key="res">
            <td
              @click="
                () =>
                  router.push(
                    `/DisciplineMedals/${res.city}/${route.params.discipline}`
                  )
              "
              class="td__country"
            >
              {{ res.city }}
            </td>
            <td>{{ res.medals }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </main>
</template>

<style>
.center_img {
  margin: 0 auto;
  display: flex;
}
.td__country {
  text-decoration: underline;
}
.td__country:hover {
  cursor: pointer;
  color: rgba(226, 238, 255, 0.783);
}
h1 {
  text-align: center;
  color: white;
  font-size: 48px;
  font-weight: bold;
}
</style>
