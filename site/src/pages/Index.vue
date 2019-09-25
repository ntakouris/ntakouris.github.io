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

    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Project</div>
          <v-list-item-title class="headline mb-1">Algotrading Experiments</v-list-item-title>
          <v-list-item-subtitle>Some Deep Learning Experiment I am doing with <a href="https://github.com/deepettas" target="_blank">@deepettas</a> et al. <br />
          </v-list-item-subtitle>
          <div class="text--primary"><br />
            Basically a 3-part project: Data Acquisition, a functional Rest API and the ML experiments.
          </div>
        </v-list-item-content>

      </v-list-item>

      <v-card-actions>
        <v-btn text href="https://github.com/bitaesthetics/algotrading-api" target="_blank">Source</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Tutorial</div>
          <v-list-item-title class="headline mb-1">.Net Core Rest API</v-list-item-title>
          <v-list-item-subtitle>Videos and articles in collab with <a href="https://github.com/Elfocrash" target="_blank">@elfocrash</a><br />
          </v-list-item-subtitle>

          <div class="text--primary"><br />
            A big spectrum of concepts is covered. Difficulty is beginner/intermediate. View the videos or read the instructional articles.
          </div>
        </v-list-item-content>

      </v-list-item>

      <v-card-actions>
        <v-btn text href="https://github.com/Elfocrash/Youtube.AspNetCoreTutorial" target="_blank">Source</v-btn>
        <v-btn text href="https://medium.com/@zarkopafilis/asp-net-core-2-2-3-rest-api-tutorials-index-e322afd39348?source=friends_link&sk=5c95258dcb116067588c1d9c0eb8b297" target="_blank">Medium</v-btn>
        <v-btn text href="https://www.youtube.com/watch?v=sdlt3-ptt9g&list=PLUOequmGnXxOgmSDWU7Tl6iQTsOtyjtwU" target="_blank">Youtube</v-btn>
      </v-card-actions>
    </v-card>

    <v-card class="mx-auto" max-width="344" outlined>
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">Project</div>
          <v-list-item-title class="headline mb-1">Go SQL Server</v-list-item-title>
          <v-list-item-subtitle>Query tabular and not only data. Powered by Go.<br />
          </v-list-item-subtitle>

          <div class="text--primary"><br />
            Interesting project. I did contributions on the implementations of several SQL commands and tests, as well as bug reports, during hacktoberfest.
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn text href="https://github.com/src-d/go-mysql-server" target="_blank">Source</v-btn>
      </v-card-actions>
    </v-card>
    </v-layout>
    </v-container>

  <br /><br />
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: 'Home'
  }
}
</script>

<style>
</style>
