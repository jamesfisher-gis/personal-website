<script setup>
import TopNavbar from '../components/TopNavbar.vue';
import Footer from '../components/Footer.vue';
import Projects from '../components/Projects.vue';
</script>

  <template>
    <div class="wrapper">
      <TopNavbar />

      <div id="top-section" class="top-text">
        <div class="container">
          <div class="d-flex flex-wrap align-items-center">
            <!-- <div class="col-12"><h1>James A. Fisher</h1></div> -->
            <div class="col-12"><p>Photogrammetry</p></div>
            <!-- <div class="col-12"><p>I am a Data Engineer with a passion for Cloud-Native Geospatial and 3-D Graphics and Classical Greek History. 
              Below you will find a collection of my personal software projects and open-source resources. I hope you find it interesting. Feel free to
              reach out over email or through Github.
            </p></div>
            <div class="col-12"><p>Thank you for visiting</p></div>
            <div class="col-12"><p>- James A. Fisher</p></div> -->

          </div>

          <div class="d-flex flex-wrap align-items-center">
            <div class="col-md-2 col-lg-3 col-1"></div>
            <div class="col-md-8 col-lg-6 col-sm-10 col-10">
            </div>
            <div class="col-md-2 col-lg-3 col-1"></div>
          </div>
        </div>
      </div>

      <!-- <div class="parallax__layer parallax__layer--3">
        <div id="stars" class="top-stars">&nbsp;</div>
      </div> -->
      <!-- <div class="parallax__layer parallax__layer--2"></div> -->

      <!-- <div class="parallax__layer parallax__layer--2"><div id="clouds" class="top-clouds">&nbsp;</div></div> -->

      <!-- <div class="parallax__layer parallax__layer--2" style="z-index: 1000"></div> -->

      <!-- <div class="parallax__layer parallax__layer--1"></div> -->

      <!-- <div class="parallax__layer parallax__layer--0" style="z-index: 100">
        <div class="top-trees">&nbsp;</div>
        <div class="container-fluid" id="main-panel">
          <Projects />
        </div>

        <Footer />

      </div> -->

    </div>
  </template>

  <style scoped>
  </style>

<script>
export default {
  components: {
    TopNavbar,
    Footer
  },

  data() {
    return {
    };
  }
};
</script>