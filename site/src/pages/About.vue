<template>
  <Layout navbarTitle="About">
    <h1>Background</h1>
    <br />

    <ul>
      <li>Theodoros was born and raised in Athens, Greece</li>
      <li>
        He came across Java randomly on the internet while studying at junior
        high school
      </li>
      <li>And made numerous minecraft mods during that time</li>
      <li>
        He started studying at the Computer Engineering and Informatics
        Department - University of Patras
      </li>
      <li>
        He gradually transitioned from game development to web and android
        development and became interested and passionate about software
        engineering, best practises and robust, scalable systems
      </li>
      <li>
        Halfway through his studies, he discovered what machine learning is all
        about, and has been practising it ever since
      </li>
      <li>
        He is passionate about creative solutions with AI and data
        that are sustainable, and solve real-world problems
      </li>
      <br />
    </ul>
    <br />

    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap">
      <i>Isaac Newton 15 February 1676</i>
    </div>
    <br />

    <div style="display: flex; align-items: center">
      <v-btn outlined href="/projects">View Projects</v-btn> <br /><br />
      <v-btn outlined href="/cv" class="ml-12">View CV</v-btn>
    </div>
    <br />
    <v-btn outlined href="https://www.linkedin.com/in/theodoros-ntakouris/"
      >Visit Linked In</v-btn
    >
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "About",
    meta: [
      {
        name: "description",
        content: "About Me",
      },
    ],
  },
};
</script>

<style>
</style>
