<template>
  <div>
    <h1>Cars List</h1>
    <table class="cars-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Make</th>
          <th>Price</th>
          <th>Details</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="car in cars" :key="car.id">
          <td>{{ car.name }}</td>
          <td>{{ car.year }}</td>
          <td>{{ car.mark }}</td>
          <td>{{ car.price }}</td>
          <td><button @click="moveOneCar(car.id)">Details</button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();

const cars = ref([
  { id: 1, name: "car1", year: 1991, mark: "Chevralet", price: "12000$" },
  { id: 2, name: "car2", year: 1992, mark: "Chevralet", price: "14000$" },
  { id: 3, name: "car3", year: 1993, mark: "Chevralet", price: "15000$" },
  { id: 4, name: "car4", year: 1994, mark: "Chevralet", price: "17000$" },
]);

const moveOneCar = (id) => {
  router.push({ name: "car-details", params: { id: id } });
};
</script>

<style scoped>
h1 {
  color: #007bff; 
  text-align: center;
  margin: 20px auto; 
}
.cars-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}

.cars-table th,
.cars-table td {
  padding: 10px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.cars-table th {
  background-color: #f5f5f5;
}

.cars-table tbody tr:hover {
  background-color: #f0f0f0;
}

.cars-table button {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.cars-table button:hover {
  background-color: #0056b3;
}
</style>
