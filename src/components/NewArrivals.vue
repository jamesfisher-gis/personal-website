<script setup>
// import {useCatalog} from '/src/store/catalog.js'
import {useProjects} from '/src/store/projects.js'
// import {useCart} from '/src/store/cart.js'
// const store = useCatalog()
const proj = useProjects()
// const cart = useCart()
</script>

<template>
  <div class="container new-arrivals-panel">
  <h1>Projects</h1>

  <div class="row mb-2 new-arrival">
    <div class="col-md-6" v-for="project in projects">
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
        <div class="col p-4 d-flex flex-column position-static">
          <!-- <strong class="d-inline-block mb-2 text-primary book-category">{{ bookDetail.category }}</strong> -->
          <h3 class="mb-0 book-title">{{ project.title }}</h3>
          <!-- <div class="mb-1 text-muted book-author">{{ bookDetail.author }}</div> -->
          <p class="card-text mb-auto book-description">{{ project.description }}</p>

        </div>
        <div class="col-auto d-md-block book-thumbnail">
          <img :src="project.image" :alt="project.title" />
        </div>
      </div>
    </div>
  </div>
</div>
</template>
<style scoped>
.new-arrivals-panel h1 {
  text-align: center;
  color: #e1bee7;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: 100;
  background-color: transparent;
}

.new-arrival .col-md-6 {
  min-height: 298px;
}
.new-arrival .border {
  border-color: rgba(255,255,255,.3)!important;
}
.new-arrival .book-thumbnail {
  background-color: rgba(255,255,255,.8);
  padding: 10px;
}
.new-arrival .book-thumbnail img {
  height: 250px
}
.new-arrival .book-category {
  color: #e6ee9c !important;
}
.new-arrival .book-title {
  color: #f0ad4e !important;
}
.new-arrival .book-author {
  color: #e1bee7 !important;
  font-weight: 400;
}
.new-arrival .book-description {
  color: #ccc !important;
}
.new-arrival .input-group .price:before {
  content: '$';
  z-index: 1;
  display: inline-block;
  color: #ccc;
  left: 0px;
  top: 15px;
  width: 20px;
  height: 20px;
  font-size: 18px;
  max-height: 13em;
  position: absolute;
  font-weight: 600;
}
.new-arrival .input-group input[type=text] {
  flex: none;
  width: 90px;
  margin-right: 10px;
  background-color: transparent;
  border: none;
  color: #E4E4E4;
  font-size: 18px;
  padding-top: 15px;
  padding-left: 15px;
  font-weight: 600;
}
.new-arrival button.add-to-cart {
  width: 50px;
  height: 50px;
  border: 0;
  padding: 0;
}
.new-arrival button.add-to-cart:hover {
  background-color: #2c3e50!important;
}
button.add-to-cart img{
  width: 40px;
}</style>

<script>
import { mapState, mapActions } from 'pinia'

export default {
  data() {
    return {};
  },

  computed: {
    ...mapState(useProjects, {
      projects: 'results'
    })
    // ...mapState(useCatalog, {
    //   newArrivals: 'results'
    // })
  },

  mounted() {
    // console.log('results: ', this.newArrivals)
    console.log('results: ', this.projects)
  },

  methods: {
    // ...mapActions(useCatalog, [
    //   'fetchNewArrivals'
    // ]),
    ...mapActions(useProjects, [
      'fetchProjects'
    ]),
  },

  created() {
    this.fetchProjects();
  }
};
</script>