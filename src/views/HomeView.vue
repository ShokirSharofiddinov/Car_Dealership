<template>
  <div class="home">
    <h1>Welcome to Car Dealership</h1>
    <p>Explore our collection of cars and find the perfect one for you.</p>
    <router-link to="/login" class="login-link">Login</router-link>
  </div>
</template>

<script></script>

<style scoped>
.home {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #007bff; /* Your desired color */
  font-size: 28px;
  margin-bottom: 10px;
}

p {
  font-size: 16px;
  margin-bottom: 20px;
}

.login-link {
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  transition: background-color 0.3s ease-in-out;
}

.login-link:hover {
  background-color: #0056b3;
}
</style>
