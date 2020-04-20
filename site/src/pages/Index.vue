<template>
  <Layout>
    <h1>Curiosity - Creativity - Contribution</h1>
    <br />

    <ul>
      <li>Software &amp; AI Engineering</li>
      <li>Deep Learning, Autonomous Systems</li>
      <li>Open Source Software and Research</li>
      <li>Unmanned Aviation</li>
      <li>Curiosity driven, passionate about code, technology and their effects on humanity </li>
    </ul>
    <br /><br />

    <h1>Summary</h1>
    <p>
      Computer Engineering and Informatics Student - University of Patras <br />
      Python, C#, JavaScript, Java  <br />
      Keras &amp; Tensorflow, ASP.Net Core, Vue.js, Android <br />
      Deep Learning, UAVs, Autonomous Systems <br />
      <br />
      <small>Occasionally playing competitive video games</small>
    </p>

    <v-btn outlined>View CV</v-btn>

    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <i>Isaac Newton 15 February 1676</i>
    </div>


    <br /><br />
    <h1>Projects</h1>
    <br />

    <ProjectList />

    <br /><br />
  </Layout>
</template>

<script>
import ProjectList from '~/components/ProjectList.vue'

export default {
  metaInfo: {
    title: 'Home'
  },
  components: {
    ProjectList
  }
}
</script>

<style>
</style>
