<template>
  <div>
    <h1>Car Details</h1>
    <div class="car-details">
      <h2>{{ car.name }}</h2>
      <p>Year: {{ car.year }}</p>
      <p>Make: {{ car.mark }}</p>
      <p>Price: {{ car.price }}</p>
      <button @click="goBack">Back to Cars</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const carId = Number(router.currentRoute.value.params.id);

const cars = ref([
  { id: 1, name: "car1", year: 1991, mark: "Chevrolet", price: "12000$" },
  { id: 2, name: "car2", year: 1992, mark: "Chevrolet", price: "14000$" },
  { id: 3, name: "car3", year: 1993, mark: "Chevrolet", price: "15000$" },
  { id: 4, name: "car4", year: 1994, mark: "Chevrolet", price: "17000$" },
]);

const car = computed(() => {
  return cars.value.find((c) => c.id === carId);
});

const goBack = () => {
  router.push({ name: "cars" });
};
</script>

<style scoped>
h1 {
  color: #007bff; 
  text-align: center;
  margin: 20px auto;}

.car-details {
  border: 1px solid #ccc;
  padding: 20px;
  margin: 20px auto;
  max-width: 400px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  background-color: #fff;
}

.car-details h2 {
  font-size: 24px;
  margin-bottom: 10px; 
}

.car-details p {
  margin: 5px 0; 
}

.car-details button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  cursor: pointer;
  display: block;
  margin-top: 15px; 
}

.car-details button:hover {
  background-color: #0056b3;
}
</style>
