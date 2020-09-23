<template>
  <Layout navbarTitle="Theodoros Ntakouris CV">
    <div class="cv-head mb-1">
      <a href="mailto:hi@ntakour.is" target="_blank">hi@ntakour.is</a>
      &nbsp;
      <a href="https://github.com/ntakouris" target="_blank">Github Account</a>
      &nbsp;
      <a href="https://www.linkedin.com/in/theodoros-ntakouris/" target="_blank">Linked In</a>
    </div>

    <h2>Summary</h2>
    <p>
      Curiosity and results-driven engineer with a strong focus on machine and deep learning. 
      Analytical thinker and methodical, regarding good software, statistics and data engineering practices.
      Active Open source contributor.
      <br />
    </p>

    <h2>Formal Education</h2>
    <ul>
      <li>
        <u>Integrated Master of Computer Engineering and Informatics</u>,
        <i>
          <a href="https://www.ceid.upatras.gr/" target="_blank">University of Patras</a>
        </i>
        - Expected Graduation 2021 (5 year curriculum in total)
      </li>
    </ul>

    <br />
    <h2 class="mb-1">Skills</h2>
    <v-simple-table class="mb-1">
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Category</th>
            <th class="text-left">Technologies</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Languages</td>
            <td>Python - C# - JavaScript - Java (up to 8)</td>
          </tr>
          <tr>
            <td>Databases</td>
            <td>MySQL - MongoDB - SQLite</td>
          </tr>
          <tr>
            <td>Deep Learning</td>
            <td>Tensorflow - Keras - Pandas - Scikit-Learn - Numpy - Jupyter Notebooks</td>
          </tr>
          <tr>
            <td>ML Engineering</td>
            <td>Tensorflow Extended (TFX) - Tensorflow Serving - Apache Beam - Kubeflow Pipelines - ML Metadata - Tensorboard - End 2 End Tests</td>
          </tr>
          <tr>
            <td>Software Engineering</td>
            <td>REST APIs - Async Programming - Testing - Design Patterns - Benchmarking - Dependency Injection - ORM - CQRS - Reactive Extensions (Rx)</td>
          </tr>
          <tr>
            <td>DevOps and Other</td>
            <td>Git - Docker - Kubernetes - Github Actions (CI)</td>
          </tr>
          <tr>
            <td>Web Development</td>
            <td>FastAPI - ASP.Net Core - Vue.js - Vuetify - Webpack</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <a href="https://github.com/ntakouris" target="_blank">Github Account</a>
    <a
      style="display: inline; margin-left: 12px;"
      href="https://medium.com/@zarkopafilis"
      target="_blank"
    >Medium Blog</a>
    <br />
    <br />

    <h2>Machine Learning Projects (Q2 2019 - ongoing)</h2>

    <h4><a href="/projects/bitbot" target="_blank">Cryptocurrency Trading Bot</a> (Q4 2019 ~ Ongoing | Tensorflow Extended, Python)</h4>
    <small>(Private source code, sorry.)</small>
    <ul>
      <li>Architected end to end, cloud-native machine learning model pipelines, powered by Tensorflow Extended</li>
      <li>Built and deployed system components for data scraping, data querying, deep learning model development and deployment</li>
      <li>Developed a kubernetes cluster with kubeflow pipelines</li>
      <li>Provided strongly-typed client APIs for the invocation of the model prediction service</li>
      <li>Construced vendor-agnostic feed models, order placement and tracking services</li>
      <li>Created backtesting.py strategies that use the deep learning models to make decisions </li>
      <li>Implemented live-streaming data prediction dashboards</li>
    </ul>
    <br />

    <h4><a href="https://github.com/ntakouris/fluent-tfx" target="_blank">Fluent TFX</a> (Q2 2020 | Tensorflow Extended, Python)</h4>
    <small>This is a package that I published on PyPi</small>
    <ul>
      <li>Fluent TFX provides a better API for TFX pipeline creation. 
        If you are already using tensorflow or keras for your models, 
        this is an easy to use api that will have your model up and running in an e2e scenario quickly, 
        without the need to waste a significant amount of time of learning the internals of tfx to get something working.</li>
    </ul>
    <br />

    <h4><a href="https://github.com/ntakouris/tf-technical-indicators" target="_blank">Tensorflow Technical Indicators</a> (Q2 2020 | Tensorflow, Python)</h4>
    <small>This is a package that I published on PyPi</small>
    <ul>
      <li>Financial Market Technical Indicators, implemented as Tensorflow Graph Functions (for speed and compatibility)</li>
    </ul>
    <br />

    <h4>
      Generative Text RNN Experiments trained on discord server chat logs (Q1 2020 | Keras, Python)
    </h4>
    <ul>
      <li><a href="https://github.com/ntakouris/implybot" target="_blank">Trained a generative seq2seq LSTM</a> model with teacher forcing to generate text from ~15 MB discord chat logs</li>
      <li>Leveraged fast-text word embeddings for transfer learning</li>
      <li><a href="https://colab.research.google.com/gist/ntakouris/f7cdfbcb614686d158f65b4bb124cd2c/elinika_gen.ipynb">Trained a character-level GRU RNN</a> to generate Greek song lyrics</li>
    </ul>
    <br />

    <h4>Shop & Item Sales Forecasting (Keras, Python)</h4>
    <ul>
      <li>Processed (shop, item, quantity, date) sale tuples and train a neural network to predict future monthly sales for each shop and item pair, in order to obtain next-day or next-moth item sales</li>
    </ul>

    <br />
    <h2>Employment</h2>
    <h4>
      Android Developer,
      <a href="https://www.eventora.com/" target="_blank">Eventora</a> (Summer 2016 - 2018 | Java)
    </h4>
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
        >Ticket Wallet</a> apps with over 1 million tickets validated
      </li>
      <li>App redesign & architecture with addition of offline first features</li>
      <li>Vertical maintenance & upkeep of the project</li>
    </ul>
    <br />

    <h4>Game & Game Server Development (2011 - 2016 | Java, C++) - Freelancing</h4>
    <ul>
      <li>
        Published a
        <a
          href="https://store.steampowered.com/app/493650/Deep_Space_Dash/"
          target="_blank"
        >game on Steam</a>, made in Unreal Engine 4 with C++ (4000+ Sales)
      </li>
      <li>Unreal Engine 4 contribution by implementing the Android local notification system</li>
      <li>
        Created a series of game
        <a href="https://github.com/ntakouris/RFS" target="_blank">server modifications</a> for a grid of Minecraft servers (400 concurrent players at peak, Java)
      </li>
    </ul>
    <br />

    <h2>Open Source Contributions</h2>
    <h4>
      <a
        href="https://github.com/ntakouris/awesome-dronecraft"
        target="_blank"
      >A Complete Autonomous Drones Study Plan</a> (2019 - 2020)
    </h4>
    <p>
      I originally created this as a short to-do list of study topics for becoming a software engineer,
      I am creating this list to share my 3 year list of topics that I studied on the side during the
      curriculum of a Computer Engineering and Informatics degree. This is a list of short and medium
      length study topics to obtain knowledge regarding autonomous rotorcraft. The items listed here
      will give you enough knowledge to be able to understand how they work, their limitations and
      effort required to make them fly.
    </p>
    <br />

    <h4>
      <a href="https://github.com/UAVCAN" target="_blank">UAVCAN</a> /
      <a href="https://github.com/UAVCAN/libuavcan" target="_blank">libuavcan</a> -
      <a href="https://github.com/UAVCAN/Yukon" target="_blank">Yukon</a> (2019 | Embedded C++, Python, JavaScript)
    </h4>
    <ul>
      <li>Optimised the transmission queue by simplifying frame transfer logic and most importanly, swap out a bottlenecking linked list queue with a custom AVL-Tree implementation, which supports equal keys, by using a custom block allocator to avoid fragmentation, in order to improve worse case performance by a large margin</li>
      <li>Collaborated with the hardware and python api team to design the new web-based bus inspection tool</li>
      <li>Architected a flask backend and a vue frontend solution, including the usage of server sent events</li>
    </ul>
    <br />

    <h4>
      <a href="https://github.com/src-d/go-mysql-server" target="_blank">src-d/go-mysql-server</a> (2019 | Go)
    </h4>
    <ul>
      <li>Implement some SQL functions to comply with the MySQL standard (unit tests included)</li>
      <li>Make some parts of the query parser more robust</li>
    </ul>

    <br />
    <h2>Other Projects</h2>
    <h4>Geolocation based Social Network App Frontend for Android (Java, Kotlin rewrite)</h4>
    <ul>
      <li>Implemented an offline-first app by using Room & Retrofit</li>
      <li>Used MVVM with a mix of Observables and LiveData</li>
      <li>Performed cross fragment/activity communication by EventBus</li>
      <li>Extensively used Dagger 2, Architecture Components & the Design support library</li>
      <li>Consume a Rest API & handle authentication with Jason Web Tokens</li>
      <li>Features Include: Login/Signup, Post viewing, Likes, Comments, Friends & Blocking, Post Uploading (with image)</li>
    </ul>

    <br />
    <h2>Hobbies</h2>
    <ul>
      <li>
        Express love for Software Engineering by contributing to Open Source projects
        (Hacktoberfest!) and Publishing of Software Engineering Articles on
        <a href="https://medium.com/@zarkopafilis" target="_blank">medium.com</a> (Averaging ~6K article views per month)
      </li>
      <li>Voxxed Days Athens 2018 Volunteer (3 consecutive years)</li>
      <li>Photography, Audiovisual Arts through applied computer engineering</li>
    </ul>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "CV",
    meta: [
      {
        name: "description",
        content: "Curriculum Vitae"
      }
    ]
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
