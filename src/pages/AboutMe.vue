<script setup>
import TopNavbar from '../components/TopNavbar.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <div class="wrapper">
    <!-- <TopNavbar /> -->
    <div class="about-me-container">
      <h1>About Me</h1>
      <div class="about-me-content">
        <!-- Add your resume information here -->
        <p>Name: [Your Name]</p>
        <p>Profession: [Your Profession]</p>
        <p>Summary: [A brief summary about yourself]</p>
        <p>Experience:</p>
        <ul>
          <li v-for="experience in experiences" :key="experience.id">
            <h3>{{ experience.position }}</h3>
            <p>{{ experience.company }}</p>
            <p>{{ experience.duration }}</p>
            <p>{{ experience.description }}</p>
          </li>
        </ul>
        <p>Education:</p>
        <ul>
          <li v-for="education in educations" :key="education.id">
            <h3>{{ education.degree }}</h3>
            <p>{{ education.institution }}</p>
            <p>{{ education.duration }}</p>
          </li>
        </ul>
        <p>Skills:</p>
        <ul>
          <li v-for="skill in skills" :key="skill.id">{{ skill.name }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TopNavbar,
    Footer
  },
  data() {
    return {
      experiences: [
        // Add your experience details here
        {
          id: 1,
          position: 'Position 1',
          company: 'Company 1',
          duration: 'Start Date - End Date',
          description: 'Description of your role and responsibilities'
        },
        // Add more experience objects as needed
      ],
      educations: [
        // Add your education details here
        {
          id: 1,
          degree: 'Degree 1',
          institution: 'Institution 1',
          duration: 'Start Date - End Date'
        },
        // Add more education objects as needed
      ],
      skills: [
        // Add your skills here
        { id: 1, name: 'Skill 1' },
        // Add more skill objects as needed
      ]
    }
  }
}
</script>

<style scoped>
.about-me-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

.about-me-content {
  text-align: left;
}
</style>