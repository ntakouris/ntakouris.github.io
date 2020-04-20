<template>
  <Layout>
    <div class="cv-head">
      <p>Theodoros Ntakouris / CV</p>
      <a href="mailto:zarkopafilis@gmail.com" target="_blank">zarkopafilis@gmail.com</a>
    </div>

    <h1>Education</h1>
    <ul>
      <li>
        In pursuit of
        <b>Integrated Master of Computer Engineering & Informatics</b> at
        <i>
          <a href="https://www.ceid.upatras.gr/" target="_blank">University of Patras</a>
        </i>
        Expected Graduation 2021 (Currently in the 4th year of studies)
        Modules Include: Deep Learning, Computer Vision, AI, Data Mining & Statistics,
        Data Structures, Databases, Embedded Systems, Software Engineering
      </li>
      <li>
        Certificate of Proficiency in English,
        <i>University of Michigan</i>
      </li>
    </ul>

    <br />
    <h1 class="mb-1">Skills</h1>
    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Category</th>
            <th class="text-left">Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Programming Languages</td>
            <td>Python - C# - JavaScript - Java</td>
          </tr>
          <tr>
            <td>Databases</td>
            <td>SQL - NoSQL (MySQL/MariaDB - CosmosDB)</td>
          </tr>
          <tr>
            <td>Frameworks</td>
            <td>Tensorflow + Keras - Scikit Learn - Pandas - ASP.Net Core - Vue.js</td>
          </tr>
          <tr>
            <td>VCS - Build Systems & Related</td>
            <td>Git - Gradle - Maven - Webpack - CI/CD - Docker</td>
          </tr>
          <tr>
            <td>Programming Paradigms</td>
            <td>Object Oriented - Functional - Async - Design Patterns - ORM - CQRS - Offline First</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <a href="https://github.com/zarkopafilis" target="_blank">Github Account</a>
    <a
      style="display: inline; margin-left: 12px;"
      href="https://medium.com/@zarkopafilis"
      target="_blank"
    >Technical Articles</a>

    <br />
    <br />
    <h1>Open Source Activity & Projects</h1>

    <h3>
      <a
        href="https://github.com/Zarkopafilis/awesome-dronecraft"
        target="_blank"
      >A Complete Autonomous Drones Study Plan (2019-2020)</a>
    </h3>
    <p>
      I originally created this as a short to-do list of study topics for becoming a software engineer, 
      I am creating this list to share my 3 year list of topics that I studied on the side during the 
      curriculum of a Computer Engineering and Informatics degree. This is a list of short and medium
      length study topics to obtain knowledge regarding autonomous rotorcraft. The items listed here
      will give you enough knowledge to be able to understand how they work, their limitations and
      effort required to make them fly.
    </p>

    <h3>
      Cryptocurrency Trading Bot (2019-2020)
    </h3>
    <p>
      Designed and built a deep learning model training-evaluation-selection pipeline for historical cryptocurrency market and blockchain data.
      Ensured that the model is portable and can be easily deployed in term of configuration files and automatic serialization of the preprocess pipeline.
      Integrated this prediction engine with the LEAN-QuantConnect ecosystem where several statistical arbitrage strategies were implemented.
    </p>

    <h3>
      Various small scale machine and deep learning projects (2019-2020)
    </h3>
    <ul>
      <li>Wine Quality Prediction from Chemical Indicators</li>
      <li>Shop & Item Sales Forecasting</li>
      <li>Movie - User Collaborative Filtering Recommendations</li>
      <li>Generative Chatbot text based on previous Discord Server chat logs</li>
      <li>Deepfake, Music Generation</li>
      <li>Common Model Pruning and Optimization through Intel OpenVINO</li>
    </ul> <br />

    <h3>
      <a href="https://uavcan.org/" target="_blank">UAVCAN</a> (150 stars, 1800 commits) (Embedded C++)
    </h3>
    <ul>
      <li>
        Optimise the
        <a
          href="https://github.com/UAVCAN/libuavcan/pull/198"
          target="_blank"
        >transmission queue</a> by simplifying frame transfer logic and most importanly,
        swap out a bottlenecking linked list queue with a custom AVL-Tree implementation,
        which supports equal keys, by using a custom block allocator to avoid fragmentation,
        in order to improve worse case performance by a large margin
      </li>
      <li>
        After this, I joined the UAVCAN team and I actively participated in the design &
        implementation of the protocol and tooling accompanying it.
        Implementations in C, C++, libraries in Python, a data type definition language
        and it's Parser, a
        <a
          href="https://github.com/UAVCAN/Yukon"
          target="_blank"
        >Bus monitoring tool</a> (backend in Python and frontend in JavaScript).
        This is a team of 4-10 people, participating in an open to public weekly dev call,
        communicating and solving any problem that comes up with design and implementation decisions.
      </li>
    </ul>

    <br />
    <h3>
      <a href="https://github.com/Elfocrash/Cosmonaut" target="_blank">Cosmonaut</a> (250 stars, 360 commits) (C# - .Net Core)
    </h3>
    <ul>
      <li>
        Create the .Net Core 2
        <a
          href="https://github.com/Elfocrash/Cosmonaut/tree/develop/samples/Cosmonaut.NetCore2WebApi/Controllers"
          target="_blank"
        >Sample REST API app</a> that supports async CRUD operations with paging using the Cosmonaut wrapper for the CosmosDB SDK
      </li>
    </ul>

    <br />
    <h3>Game & Game Server Development (2011 - 2017)</h3>
    <ul>
      <li>
        Publish a
        <a
          href="https://store.steampowered.com/app/493650/Deep_Space_Dash/"
          target="_blank"
        >game on Steam</a> made in Unreal Engine 4 with C++ (4000+ Sales)
      </li>
      <li>
        Contribute to the Unreal Engine 4 by implementing the
        <a
          href="https://github.com/EpicGames/UnrealEngine/pull/2740"
          target="_blank"
        >Local Notification System for Android</a>
      </li>
      <li>
        Become a Unreal Engine 4
        <a
          href="https://forums.unrealengine.com/member/38138-zarkopafilis"
          target="_blank"
        >Community Spotlight Member</a>
      </li>
      <li>
        Create
        <a
          href="https://github.com/Zarkopafilis/RFS"
          target="_blank"
        >numerous game server modifications</a> for a grid of Minecraft servers in Java (400 concurrent players at peak)
      </li>
    </ul>

    <br />
    <h3>
      <a href="https://github.com/src-d/go-mysql-server" target="_blank">src-d/go-mysql-server</a> (850 stars, 1300 commits) (Go)
    </h3>
    <ul>
      <li>
        Implement some
        <a
          href="https://github.com/src-d/go-mysql-server/pulls?utf8=%E2%9C%93&q=zarkopafilis"
          target="_blank"
        >SQL functions</a> to comply with the MySQL standard (tests included)
      </li>
      <li>Enhance some parts of the parser</li>
      <li>Report bugs of the implementation that did not have compatibility with the MySQL standard</li>
    </ul>

    <br />
    <h1>Employment</h1>
    <h3>
      Intern Android Developer,
      <a href="https://www.eventora.com/" target="_blank">Eventora</a> (Summer 2016 - 2018)
    </h3>
    <ul>
      <li>
        Work on the
        <a
          href="https://play.google.com/store/apps/details?id=com.eventora.BarcodeScanner"
          target="_blank"
        >Ticket Scanner</a> &
        <a
          href="https://play.google.com/store/apps/details?id=com.eventora.mobile.android"
          target="_blank"
        >Ticket Wallet</a> apps (500.000+ tickets validated as of now)
      </li>
      <li>
        Redesign the app to use the new Android Architecture Components & Support library,
        as well as implement Offline First features
      </li>
      <li>Keep up with new Android versions & fix reported bugs, improve performance & compatibility, eliminate crashes</li>
    </ul>

    <br />
    <h1>Hobbies</h1>
    <ul>
      <li>
        Express love for Software Engineering by contributing to Open Source projects
        (Hacktoberfest!) and Publishing of Software Engineering Articles
      </li>
      <li>Voxxed Days Athens 2018 Volunteer (3 consecutive years)</li>
      <li>Photography, Audiovisual Arts through applied computer engineering</li>
      <li>Sports</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "CV"
  }
};
</script>

<style>
.no-pointer {
  cursor: default !important;
}

.cv-head {
  display: flex;
  flex-direction: row wrap;
}

.cv-head > * {
  flex: 0 0 20%;
}
</style>
