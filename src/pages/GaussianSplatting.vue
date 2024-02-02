<template>
    <div class="wrapper">
      <TopNavbar />
  
      <!-- Centered GaussianSplattingViewer with 80% width -->
      <div class="centered-window">
        <div class="window">
            <GaussianSplattingViewer class="gsViewer" />
        </div>
    </div>
  
      <!-- <Footer /> -->
    </div>
  </template>
  
  <script setup>
  import TopNavbar from '../components/TopNavbar.vue';
//   import Footer from '../components/Footer.vue';
  import GaussianSplattingViewer from '../components/GaussianSplattingViewer.vue';
  </script>
  
  <style scoped>
  .centered-window {
  display: flex;
  justify-content: center;
  align-items: center; 
  height: 90vh;
}
  </style>