<template>
  <div class="login">
    <h1>Login</h1>
    <form>
      <div class="form-group">
        <label for="username">Username</label>
        <input type="text" id="username" placeholder="Enter your username" />
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" placeholder="Enter your password" />
      </div>
      <router-link to="/cars" class="login-button">Login</router-link>
    </form>
  </div>
</template>

<script>

</script>

<style scoped>
/* Custom font family */
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

.login {
  text-align: center;
  padding: 20px;
}

h1 {
  color: #007bff; /* Your desired color */
  font-size: 28px;
  margin-bottom: 20px;
  font-family: 'Roboto', sans-serif; /* Apply the custom font family */
}

form {
  display: inline-block;
  text-align: left;
  background-color: #fff;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  width: 250px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  font-weight: bold;
}

input[type="text"],
input[type="password"] {
  width: 90%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

.login-button {
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 18px;
  display: block;
  margin-top: 20px;
  transition: background-color 0.3s ease-in-out;
  font-family: 'Roboto', sans-serif; /* Apply the custom font family */
}

.login-button:hover {
  background-color: #0056b3;
}
</style>
