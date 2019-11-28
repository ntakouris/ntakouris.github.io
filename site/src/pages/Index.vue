<template>
  <Layout>
    <div>
      <h1>Hi</h1>
      <h4>
        This is a portal regarding my activity on the internet, as Theodoros Ntakouris, going by the alias <u>zarkopafilis</u>.<br /><br />
        Main objectives: <br />
      </h4>
      <ul>
        <li>Software Engineering and <a href="http://manifesto.softwarecraftsmanship.org/">Craftsmanship</a></li>
        <li>Deep Learning</li>
        <li>Unmanned Aviation</li>
        <li>Quantum Computing</li>
      </ul>

      <br />
      <i>
        I don't actually post about UAVs and Quantum Computing, but I study them in my free/study time.
        Quite interesting technologies. It's not hard to mess with them with basic embedded systems and math knowledge.
        I've messed with cirq and intermediate quantum papers, as well as built my own FPV drone.
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
      I'm never stationary. Always something science related is on my study list, or, I'm developing random interesting software projects.
      Not sure what carreer path I want to follow yet. Deep Learning Engineering is an interesting path. So is Backend or Control Engineering.
    </p>

    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <i>Isaac Newton 15 February 1676</i>
    </div>

    <br /><br />
    <h1>Definitely check these out while you hang around this website</h1>
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
