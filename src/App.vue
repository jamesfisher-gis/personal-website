<script setup>
import TopNavbar from './components/TopNavbar.vue';
import Footer from './components/Footer.vue';
import './styles/global.css'; 
</script>

<template>
  <TopNavbar />
  <router-view></router-view>
  <!-- <Footer /> -->
  <footer>
    <Footer />
    <i18n tag="small" path="poweredBy" class="poweredby text-muted">
      <template #link>
        <a href="https://github.com/radiantearth/stac-browser" target="_blank">STAC Browser</a> {{ browserVersion }}
      </template>
    </i18n>
  </footer>
</template>
