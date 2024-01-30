<script setup>
import {useProjects} from '/src/store/projects.js'
const proj = useProjects()

</script>
<template>
  <div class="container projects-panel">
    <h1>Projects</h1>

    <div class="row row-cols-1 row-cols-md-3 g-4">
      <div class="col" v-for="project in projects" :key="project.id">
        <router-link :to="'/project/' + project.id" class="card-link">
          <div class="card h-80">
            <div class="card-body d-flex flex-column justify-content-between">
              <h3 class="card-title text-center mb-0 project-title">{{ project.title }}</h3>
              <p class="card-text text-center project-description">{{ project.description }}</p>
            </div>
            <img :src="project.image" :alt="project.title" class="card-img-top mx-auto d-block img-thumbnail" />
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<style scoped>
.projects-panel {
  margin-top: 0px;
}
.projects-panel h1 {
  text-align: center;
  color: #e1bee7;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 70px;
  font-weight: 100;
  background-color: transparent;
}
.project .border {
  border-color: rgba(255,255,255,.3)!important;
}
.card-link .project-title {
  color: #f0ad4e !important;
}
.card-link .project-description {
  color: #ccc !important;
}
.img-thumbnail {
  width: 80%;
  margin-bottom: 5%;
}
.card-link {
  text-decoration: none; /* Optional: Remove underline from the link */
}
</style>

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
  },

  mounted() {
    console.log('results: ', this.projects)
  },

  methods: {
    ...mapActions(useProjects, [
      'fetchProjects'
    ]),
  },

  created() {
    this.fetchProjects();
  }
};
</script>