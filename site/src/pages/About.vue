<template>
  <Layout navbarTitle="About">
    <v-card class="mx-auto mt-2 mb-0" max-width="1024" outlined>
      <v-list-item>
        <v-list-item-content>
          <div class="overline">Startup News</div>
          <v-list-item-title class="headline"
            >Lambda (λ) Automata</v-list-item-title
          >
          <div class="text--primary">
            <br />
            Since late 2021, I've joined <b>λ-automata</b> as a Co-Founding
            Engineer. <br /><br />
            We're building AI-first systems for autonomous surveillance,
            reconnaissance, and superhuman situational awareness.<br /><br />
            We are a team of engineers, defense experts and former military
            officers, set on a mission to create cutting-edge technology for the
            European Defense sector at Silicon Valley-style speed and agility.

            <br /><br />

            We're hiring.
          </div>
        </v-list-item-content>
      </v-list-item>
      <br /><br />
      <v-card-actions style="position: absolute; bottom: -4px">
        <v-btn text href="http://lambda-automata.eu" target="_blank"
          >lambda-automata.eu</v-btn
        >

        <v-btn
          text
          href="https://www.lambda-automata.eu/work-with-us"
          target="_blank"
          >Jobs</v-btn
        >
      </v-card-actions>
    </v-card>
    <br />

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
        After starting his studies at the Computer Engineering and Informatics
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
      <br />
    </ul>
    <br />

    <h1>Skillset</h1>
    <br />
    <p>
      Over the years, a wide range of tools, programming languages and operating
      systems got employed in order to make an even more diverse set of
      projects. <br /><br />
      Eventually, the programming languages that are more frequently used
      converged to Python for most Data Science or Machine Learning workloads,
      scripts and lightweight tooling, C# for Web APIs and JavaScript for
      frontend work. <br /><br />

      The public cloud services is something to be embraced. The deep learning
      framework of choice is the tensorflow and pytorch ecosystem. The weapon of
      choice against aliens is matrix multiplication. I stay up to date with
      machine learning and continuously refine my skillset in order to have a
      good grasp of the industry's state and best practises. My skillset is
      focused on machine and deep learning, but it also spans the dimensions of
      Web & Mobile App Development, AI on the Edge, IoT and big data.
      <br /><br />
      <small>Occasionally playing competitive video games</small>
    </p>

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
