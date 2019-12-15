<template>
  <Layout>
    <div>
      <h1>Curiosity - Creativity - Contribution</h1> <br />
      <h4>
        Main objectives: <br />
      </h4>
      <ul>
        <li>Software Engineering and <a href="http://manifesto.softwarecraftsmanship.org/">Craftsmanship</a></li>
        <li>Deep Learning, Autonomous Systems</li>
        <li>Unmanned Aviation</li>
        <li>Quantum Computing</li>
      </ul>

      <br />
      <i>
        Drones &otimes; AI &otimes; Autonomous Systems
      </i>
    </div>

    <br />

    <h1>Summary</h1>
    <p>
      Computer Engineering & Informatics Student at University Of Patras <br />
      Software Engineer, Active Open Source Contributor  <br />
      Java, C#, JavaScript, Python  <br />
      Spring Boot, .Net Core, Vue, Deep Learning  <br />
      Curiosity driven, passionate about code, technology and their effects on humanity  <br />
      <br />
      <small>Occasionally playing competitive video games</small>
    </p>

    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <i>Isaac Newton 15 February 1676</i>
    </div>

    <br /><br />
    <h1>/projects</h1>
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
