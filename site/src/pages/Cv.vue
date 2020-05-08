<template>
  <Layout>
    <div class="cv-head">
      <p>Theodoros Ntakouris</p> 
      &nbsp;<a href="mailto:zarkopafilis@gmail.com" target="_blank">zarkopafilis@gmail.com</a> 
      &nbsp;<a href="https://github.com/zarkopafilis" target="_blank">Github Account</a>
    </div>

    <h2>Summary</h2>
    <p>
      Curiosity and results-driven engineer with a strong focus on machine and deep learning. Keeps up to date with latest research advancements in order to apply them to real world problems. Open source contributor and passionate about good software, statistics and data engineering practices.
      Occasionally stuck in local maxima.
    </p>

    <h2>Education</h2>
    <ul>
      <li>
        In pursuit of
        <b>Integrated Master of Computer Engineering & Informatics</b> at
        <i>
          <a href="https://www.ceid.upatras.gr/" target="_blank">University of Patras</a>
        </i>
        .&nbsp; Expected Graduation 2021 (5 year curriculum)
      </li>
    </ul>

    <br />
    <h2 class="mb-1">Skills</h2>
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
            <td>Python - C# - JavaScript - Java (up to 8)</td>
          </tr>
          <tr>
            <td>Databases</td>
            <td>MySQL - MongoDB</td>
          </tr>
          <tr>
            <td>Experience with</td>
            <td>Keras - Tensorflow - PyTorch - Pandas - Scikit-Learn - Numpy - ASP.Net Core - Vue</td>
          </tr>
          <tr>
            <td>Other</td>
            <td>Async Programming - REST APIs - Testing - Git - Gradle - Design Patterns - ORM - CQRS - Continuous Integration - Docker</td>
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

    <h2>Machine Learning Projects (2019 - ongoing)</h2>

    <h4>Bitcoin Market Data Prediction (Keras)</h4>
    <ul>
      <li>Created a configuration-file based model training, evaluation and hyperparameter exploration system along with result visualization</li>
      <li>Used bitcoin exchange data to predict next-day results. On-Chain Analytics and possibly order book data will be also added in the future </li>
      <li>Enhanced model performance by feature engineering technical indicators</li>
      <li>A deployment and backtesting trading bot is under construction</li>
    </ul>
    <br />

    <h4>Shop & Item Sales Forecasting (Keras, LSTM)</h4>
    <ul>
      <li>Processed (shop, item, quantity, date) sale tuples and train a neural network to predict future monthly sales for each shop and item pair</li>
    </ul>
    <br />

    <h4>Movie Recommendations through Collaborative Filtering (Keras, MLP, Genetic Algorithm)</h4>
    <ul>
      <li>Trained a neural network that produces rankings for each user</li>
      <li>Took a genetic-algorithm approach exploring how different encodings and generation operations effect the results</li>
      <li>Used Train-Validation Splits to select the best model parameters</li>
    </ul>
    <br />

    <h4>Generative Chatbot text based on previous Discord Server chat logs (Pytorch)</h4>
    <ul>
      <li>Trained a generative LSTM model with teacher forcing to predict the next messages from exported chat logs</li>
      <li>Leveraged fast-text word embeddings as a form of transfer learning</li>
    </ul>
    <br />

    <h4>Deepfake Generation, GANs (Keras)</h4>
    <ul>
      <li>Used latest pretrained models such us First Order Motion Models for Image Animation to generate a few deepfakes</li>
      <li>Used SinGAN to generate some art for a university festival </li>
    </ul>
    <br />

    <h4>Spam Comment Classification (Keras, Tf-Idf)</h4>
    <ul>
      <li>Tokenized, Created Vocabulary, Removed stopwords and produced the tf-idf matrix for the comment text corpus</li>
      <li>Used a deep dense neural network to perform binary classification</li>
    </ul>
    <br />

    <h4>Wine Quality Prediction from Chemical Indicators (Scikit-Learn, SVM)</h4>
    <ul>
      <li>Performed a grid search to fine-tune the SVM classification task</li>
      <li>Compared data imputation techniques (Mean, Nearest-Neighbour, Drop-Column)</li>
    </ul>
    <br />

    <h4>Model Pruning and Optimization through Intel OpenVINO (Tensorflow)</h4>
    <ul>
      <li>Intel Edge AI Udacity Scholarship Course</li>
      <li>Performed Model Pruning and Optimizing through OpenVINO (exclusively for intel-based edge ai products)</li>
    </ul>

    <br />
    <h2>Employment</h2>
    <h4>
      Android Developer,
      <a href="https://www.eventora.com/" target="_blank">Eventora</a> (Summer 2016 - 2018, Java)
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

    <h4>Game & Game Server Development (2011 - 2016, Java, C++) - Freelancing</h4>
    <ul>
      <li>Published a game on Steam, made in Unreal Engine 4 with C++ (4000+ Sales)</li>
      <li>Unreal Engine 4 contribution by implementing the Android local notification system </li>
      <li>Created a series of game server modifications for a grid of Minecraft servers(400 concurrent players at peak, Java)</li>
    </ul>
    <br />

    <h2>Open Source Contributions</h2>
    <h4>
      <a
        href="https://github.com/Zarkopafilis/awesome-dronecraft"
        target="_blank"
      >A Complete Autonomous Drones Study Plan (2019-2020)</a>
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

    <h4>UAVCAN / libuavcan, Yukon (150 stars, 1800 commits, Embedded C++, Python, JavaScript)</h4>
    <ul>
      <li>Optimised the transmission queue by simplifying frame transfer logic and most importanly, swap out a bottlenecking linked list queue with a custom AVL-Tree implementation, which supports equal keys, by using a custom block allocator to avoid fragmentation, in order to improve worse case performance by a large margin</li>
      <li>Collaborated with the hardware and python api team to design the new web-based bus inspection tool</li>
      <li>Architected a flask backend and a vue frontend solution, including the usage of server sent events</li>
    </ul>
    <br />

    <h4>Elfocrash/Cosmonaut (70 stars, 250 commits) (C#)</h4>
    <ul>
      <li>Created the .Net Core 2 Sample REST API app that supports async CRUD operations with paging using the Cosmonaut wrapper for the CosmosDB SDK
      </li>
    </ul>
    <br />

    <h4>src-d/go-mysql-server (130 stars, 900 commits) (Go)</h4>
    <ul>
      <li>Implement some SQL functions to comply with the MySQL standard (unit tests included)</li>
      <li>Make some parts of the SQL parser more robust</li>
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
        (Hacktoberfest!) and Publishing of Software Engineering Articles on <a href="https://medium.com/@zarkopafilis">medium.com</a> (Averaging 6K article views per month)
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
