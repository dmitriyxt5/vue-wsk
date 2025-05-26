import { ref, computed } from "vue";
import { defineStore } from "pinia";

export const useCountriesStore = defineStore("countries", () => {
  const countries = ref("");
  function setCountries(newValue) {
    countries.value = newValue;
  }
  const result = ref("");
  function setResult(newValue) {
    result.value = newValue;
  }

  return { countries, setCountries, result, setResult };
});
