<script setup>
</script>

<template>
  <nav class="top-nav">
    <div class="container">
      <ul class="nav top-nav-links">
        <li class="nav-item">
          <router-link to="/" class="nav-link" aria-current="page">Home</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/about-me" class="nav-link">About Me</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/projects" class="nav-link">Projects</router-link>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">Contact</a>
        </li>
      </ul>
    </div>
  </nav>
</template>

<!-- <style scoped>
.top-nav {
  background-color: #0b1a24;
  padding: 10px 0;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.top-nav-links {
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  align-items: center;
}

.nav-item {
  margin-right: 20px;
}

.nav-link {
  color: #e1bee7;
  font-weight: 500;
  text-decoration: none;
  transition: color 0.3s ease;
  padding: 5px 10px;
  border-radius: 5px;
}

.nav-link:hover,
.nav-link.active {
  color: #f0ad4e;
  background-color: rgba(255, 255, 255, 0.1);
}
</style> -->