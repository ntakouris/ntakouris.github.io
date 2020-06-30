<template>
  <Layout navbarTitle="About">
    <h1>Background</h1>
    <br />

    <ul>
      <li>Theodoros was born and raised in Athens, Greece</li>
      <li>He came across Java randomly on the internet while studying at junior high school</li>
      <li>And made numerous minecraft mods during that time</li>
      <li>After starting his studies at the Computer Engineering and Informatics Department - University of Patras</li>
      <li>He gradually transitioned from game development to web and android development and became interested and passionate about software engineering, best practises and robust, scalable systems</li>
      <li>Halfway through his studies, he discovered what deep learning is all about, and has been practising it ever since</li>
      <br />
      <li>He wants to be a Machine Learning Engineer after finishing his studies and the mandatory 1-year Greek military service</li>
    </ul>
    <br />

    <h1>Skillset</h1>
    <p>
      Over the years, a wide range of tools, programming languages and operating systems got
      employed in order to make an even more diverse set of projects. <br /><br />
      Eventually, the programming languages that are more frequently used converged to Python for most Data Science or
      Machine Learning workloads, scripts and lightweight tooling, C# for Web APIs and JavaScript for frontend work. <br /><br />
      
      The public cloud services is something to be embraced. The deep learning framework of choice is the tensorflow ecosystem.
      The weapon of choice against aliens is math. I try to keep up to date with latest trends and advancements in deep learning.
      <br /><br />
      <small>Occasionally playing competitive video games</small>
    </p>


    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap;">
      <i>Isaac Newton 15 February 1676</i>
    </div>
    <br />

    <div style="display: flex; align-items:center;">
    <v-btn outlined href="/projects">View Projects</v-btn> <br /><br />
    <v-btn outlined href="/cv" class="ml-12">View CV</v-btn> 
    </div>



  </Layout>
</template>

<script>

export default {
  metaInfo: {
    title: 'About'
  }
}
</script>

<style>
</style>
