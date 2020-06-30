<template>
  <Layout navbarTitle="Theodoros Ntakouris CV">
    <div class="cv-head mb-1">
      <a href="mailto:zarkopafilis@gmail.com" target="_blank">zarkopafilis@gmail.com</a> 
      &nbsp;<a href="https://github.com/zarkopafilis" target="_blank">Github Account</a>
    </div>

    <h2>Summary</h2>
    <p>
      Curiosity and results-driven engineer with a strong focus on machine and deep learning. Keeps up to date with latest research advancements in order to apply them to real world problems. Open source contributor and passionate about good software, statistics and data engineering practices.
      <br /><small>Occasionally stuck in local maxima.</small>
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
            <td>MariaDB - MongoDB - SQLite</td>
          </tr>
          <tr>
            <td>Deep Learning</td>
            <td>Tensorflow - Keras - Tensorflow Extended - Apache Beam - TFLite - Pandas - Scikit-Learn - Numpy - Tensorboard - Jupyter Notebooks</td>
          </tr>
          <tr>
            <td>Web Development</td>
            <td>ASP.Net Core - Vue.js - Vuetify - Webpack</td>
          </tr>
          <tr>
            <td>Software Engineering</td>
            <td>REST APIs - Async Programming - Testing - Benchmarking - Design Patterns - Dependency Injection - ORM - CQRS - Rx</td>
          </tr>
          <tr>
            <td>DevOps and Other</td>
            <td>Docker - Jenkins - CircleCI - Git - JSON Web Tokens</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <a href="https://github.com/zarkopafilis" target="_blank">Github Account</a>
    <a
      style="display: inline; margin-left: 12px;"
      href="https://medium.com/@zarkopafilis"
      target="_blank"
    >Medium Blog</a>
    <br /><br />

    <h2>Machine Learning Projects (2019 - ongoing)</h2>

    <h4>Bitcoin Market Data Predictions (Keras, Python)</h4>
    <ul>
      <li>Created a configuration-file based model training, evaluation and hyperparameter exploration system along with result visualization</li>
      <li>Used bitcoin exchange data to predict next-day results. On-Chain Analytics and possibly order book data will be also added in the future </li>
      <li>Enhanced model performance by feature engineering technical indicators</li>
      <li>Implemented and evaluated backtesting strategies</li>
      <li>Made a custom windowed pipeline system to perform and visualize on-line predictions</li>
      <li>Created a vendor-independent api for order management and strategy execution</li>
      <li>Streamed data from Binance, Coinbase Pro</li>
    </ul>
    <br />

    <h4><a href="https://github.com/Zarkopafilis/implybot" target="blank">Generative Chatbot</a> trained on discord server chat logs (Keras, Python)</h4>
    <ul>
      <li>Trained a generative seq2seq LSTM model with teacher forcing to generate text from ~15 MB discord chat logs</li>
      <li>Leveraged fast-text word embeddings for transfer learning</li>
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
        >Ticket Wallet</a> apps with over 1 million tickets validated</li>
        <li>App redesign & architecture with addition of offline first features</li>
        <li>Vertical maintenance & upkeep of the project</li>
    </ul>
    <br />

    <h4>Game & Game Server Development (2011 - 2016 | Java, C++) - Freelancing</h4>
    <ul>
      <li>Published a <a href="https://store.steampowered.com/app/493650/Deep_Space_Dash/" target="_blank">game on Steam</a>, made in Unreal Engine 4 with C++ (4000+ Sales)</li>
      <li>Unreal Engine 4 contribution by implementing the Android local notification system </li>
      <li>Created a series of game <a href="https://github.com/Zarkopafilis/RFS"  target="_blank">server modifications</a> for a grid of Minecraft servers (400 concurrent players at peak, Java)</li>
    </ul>
    <br />

    <h2>Open Source Contributions</h2>
    <h4>
      <a
        href="https://github.com/Zarkopafilis/awesome-dronecraft"
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

    <h4><a href="https://github.com/UAVCAN"  target="_blank">UAVCAN</a> / <a href="https://github.com/UAVCAN/libuavcan"  target="_blank">libuavcan</a> - <a href="https://github.com/UAVCAN/Yukon"  target="_blank">Yukon</a> (2019 | Embedded C++, Python, JavaScript)</h4>
    <ul>
      <li>Optimised the transmission queue by simplifying frame transfer logic and most importanly, swap out a bottlenecking linked list queue with a custom AVL-Tree implementation, which supports equal keys, by using a custom block allocator to avoid fragmentation, in order to improve worse case performance by a large margin</li>
      <li>Collaborated with the hardware and python api team to design the new web-based bus inspection tool</li>
      <li>Architected a flask backend and a vue frontend solution, including the usage of server sent events</li>
    </ul>
    <br />

    <h4><a href="https://github.com/src-d/go-mysql-server" target="_blank">src-d/go-mysql-server</a> (2019 | Go)</h4>
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
        (Hacktoberfest!) and Publishing of Software Engineering Articles on <a href="https://medium.com/@zarkopafilis" target="_blank">medium.com</a> (Averaging ~6K article views per month)
      </li>
      <li>Voxxed Days Athens 2018 Volunteer (3 consecutive years)</li>
      <li>Photography, Audiovisual Arts through applied computer engineering</li>
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
