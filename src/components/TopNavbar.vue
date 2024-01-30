<script setup>
</script>
<template>
  <nav class="py-2 fixed-top">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><router-link to="/" class="nav-link px-2 active" aria-current="page">Home</router-link></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">About Me</a></li>
        <li class="nav-item"><router-link to="/projects" class="nav-link px-2 active" aria-current="page">Projects</router-link></li>
        <li class="nav-item"><a href="#" class="nav-link px-2">Contact</a></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
  #dropdownUser2 {
    min-width: 40px;
  }
  nav .dropdown .dropdown-menu {
    margin-left: -85px !important;
  }
  .wrapper .fixed-top {
    position: sticky;
    z-index: 2100;
  }
  .wrapper nav {
    background-color: rgba(0,0,0,.8);
  }
  .wrapper nav a {
    color: #e1bee7;
    font-weight: 500;
  }
  .wrapper nav a:hover {
    color: #f0ad4e;
  }
  nav .dropdown-menu a {
    color: #222;
  }
  nav .dropdown-menu a:hover {
    color: #555;
  }

  nav .bg-primary {
    --bs-primary-rgb: 255,190,231;
    --bs-bg-opacity: .9;
    color: #0B212B;
  }
  .shopping-cart a .badge {
    font-size: 11px;
    margin-top:-3px;
    padding: 3px 6px;
  }
</style>

<script>
import { mapState} from 'pinia'

export default {
  data() {
    return {

    };
  },

  computed: {
    // ...mapState(useCart, {
    //   count: 'count'
    // })
  },

  methods: {

  }
};
</script>