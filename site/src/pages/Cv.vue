<template>
  <Layout navbarTitle="Theodoros Ntakouris CV">
    <div style="display: flex; align-items: center">
      <v-btn outlined href="mailto:hi@ntakour.is" target="_blank"
        >hi@ntakour.is</v-btn
      ><br /><br />
      <v-btn
        outlined
        href="https://github.com/ntakouris"
        target="_blank"
        class="ml-6"
        >Github Account</v-btn
      ><br /><br />
    </div>
    <br />
    <h2>Summary</h2>
    <p>
      Curiosity and results-driven engineer with a strong focus on applied
      machine learning research. Analytical thinker and methodical regarding
      good software, statistics and data engineering practices. Active Open
      source contributor and researcher. I stay up to date with ML research and
      continuously refine my skillset in order to have a good grasp of the
      industry's state and best practises. My skillset is focused on machine and
      deep learning, but it is also spans the dimensions of Web & Mobile App
      Development, AI on the Edge, IoT and Big Data.
    </p>
    <br />

    <h2>Formal Education</h2>
    <ul>
      <li>
        <u>Master of Computer Engineering and Informatics</u>,
        <i>
          <a href="https://www.ceid.upatras.gr/" target="_blank"
            >University of Patras</a
          >
        </i>
        - (2016 - 2021)
      </li>
      <br />
      Modules include: Machine Learning, Computer Vision, Data Engineering, Web
      Technologies, Software Engineering & Testing
    </ul>
    <br /><br />

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
            <td>Python, C#, JavaScript, Java</td>
          </tr>
          <tr>
            <td>Databases</td>
            <td>MySQL, MongoDB, TimescaleDB, SQLite</td>
          </tr>
          <tr>
            <td>Machine Learning</td>
            <td>
              Keras & TensorFlow, PyTorch, Model Optimization, Distributed
              Training & TPUs, Apache Beam, Scikit-Learn, Jetson Platform,
              NVIDIA DeepStream
            </td>
          </tr>
          <tr>
            <td>Software Engineering</td>
            <td>
              Design Patterns, Async Programming, ORM, CQRS, Testing, REST APIs,
              Distributed Systems
            </td>
          </tr>
          <tr>
            <td>Web Frameworks</td>
            <td>ASP.Net Core, Spring Boot, FastAPI, Vuejs, Grafana</td>
          </tr>
          <tr>
            <td>DevOps and Other</td>
            <td>Git, Gradle, CI/CD, Docker, Kubernetes</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
    <br />

    <a href="https://github.com/ntakouris" target="_blank">Github Account</a>
    <a
      style="display: inline; margin-left: 12px"
      href="https://zarkopafilis.medium.com"
      target="_blank"
      >Medium Blog</a
    >
    <br /><br /><br />

    <h2 class="mb-1">Work Experience</h2>

    <h4>
      <u>ML Engineer | Greek Army - Center of Technology and Research</u>
      (Mandatory Army Service, 2021)
    </h4>

    <!-- <ul>
      <li>
        Collaborated with Mechanical and Aviation Engineers in order to assess
        viability of primarily AI Vision-guided autonomous vehicles
      </li>

      <li>
        Selected suitable hardware for the sensory subsystem and collected the
        data required in order to train guidance and other vision systems
      </li>
    </ul>  -->
    <br />

    <h4><u>ML Research Engineer | Loctio.com</u> (Contract, 2020 - 2021)</h4>

    <ul>
      <li>
        Collaborated with VLSI, Ground Position Systems and Software Engineers
        to evaluate and develop a satellite segmentation model (PointNet
        Variant) as part of a larger cloud based location estimation system.
        Increased past published research accuracy from 92% to 99.5% by applying
        proper training and preprocessing techniques
      </li>
    </ul>
    <br />

    <p class="ml-2">Responsibilities included:</p>

    <ul>
      <li>
        Exploratory data analysis to determine if a machine learning model is
        suitable for the task at hand
      </li>

      <li>Re-Implementation and improvement of existing papers</li>

      <li>
        Prototyping with newer research advancements in order to improve model
        performance
      </li>

      <li>Model optimization in order to deploy to embedded edge devices</li>

      <li>Hardware-specific dataset creation</li>
    </ul>
    <br />

    <h4>
      <u>Researcher, Lecturer, Lab Assistant | University of Patras</u>
      (2019-2020)
    </h4>
    <ul>
      <li>
        Performed research on: CNN Compression, Quantization, Semantic Image
        Inpainting with GANs
      </li>
      <li>
        Lectured on Computer Vision and Deep Learning: Introduction to Deep
        Learning for Vision CNNs, Transformers and popular architectures
        Transfer Learning, Contrastive Pre-training GANs
      </li>
      <li>
        Built lab exercises on basic computer vision tasks: classification,
        object detection, siamese network similarity, GANs
      </li>
    </ul>
    <br />

    <h4><u>Android Developer | Eventora </u> (Summer 2016)</h4>
    <ul>
      <li>Worked on the Ticket Scanner and Wallet apps</li>
    </ul>
    <br />

    <h2>Machine Learning Projects</h2>

    <h4><u>Cryptocurrency Trading Bot</u> (2019 - Present)</h4>
    <ul>
      <li>
        Created an end to end ML Pipeline System to train a multivariate time
        series model based on market data and other features such as blockchain
        analytics and sentiment indicators
      </li>
      <li>
        Crafted a data-acquisition/scraping service leveraging TimescaleDB
      </li>
      <li>
        Implemented backtesting strategies with grafana dashboards and real-time
        slack notifications
      </li>
      <li>Deployed everything mentioned in a Kubernetes cluster</li>
    </ul>
    <br />

    <h4><u>PoseNet Dino</u> (2020)</h4>
    <ul>
      <li>
        Used a pretrained pose estimation tensorflow lite model in order to play
        google chrome's "no internet" game by physically jumping and crouching
      </li>
    </ul>

    <h4><u>Highway Traffic</u> (2020)</h4>
    <ul>
      <li>
        Used relative vehicle positions to train a recurrent neural network that
        predicts vehicle collision danger and congestion level
      </li>
      <li>
        Leverage a pretrained vehicle detection model to detect shockwaves on
        highways
      </li>
      <li>Train a small team of curators on dataset labelling</li>
    </ul>
    <br />

    <h4><u>Shop & Item Sales Forecasting</u> (2020)</h4>
    <ul>
      <li>
        Trained a recurrent neural network to forecast sales per shop, per item
      </li>
    </ul>
    <br />

    <h4><u>Generative Test RNN Experiments on Discord Chat Logs</u> (2019)</h4>
    <ul>
      <li>
        Trained a generative seq2seq LSTM model with teacher forcing to generate
        text from ~15 MB discord chat logs
      </li>
      <li>Leveraged fasttext word embeddings for transfer learning</li>
      <li>Trained a character-level GRU RNN to generate Greek song lyrics</li>
    </ul>
    <br />

    <h2>Open Source</h2>

    <h4><u>Fluent TFX</u> (2020)</h4>
    <small>PyPi Package</small>
    <ul>
      <li>
        Fluent TFX provides a better API for TFX pipeline creation. If you are
        already using tensorflow or keras for your models, this is an easy to
        use api that will have your model up and running in an e2e scenario
        quickly, without the need to waste a significant amount of time of
        learning the internals of tfx to get something working.
      </li>
    </ul>
    <br />

    <h4><u>A Complete Autonomous Drones Study Plan</u> (2019 - 2020)</h4>
    <ul>
      <li>
        I originally created this as a short to-do list of study topics for
        becoming a software engineer, I am creating this list to share my 3 year
        list of topics that I studied on the side during the curriculum of a
        Computer Engineering and Informatics degree. This is a list of short and
        medium length study topics to obtain knowledge regarding autonomous
        rotorcraft. The items listed here will give you enough knowledge to be
        able to understand how they work, their limitations and effort required
        to make them fly.
      </li>
    </ul>
    <br />

    <h4><u>UAVCAN / libuavcan - Yukon </u> (2019)</h4>
    <ul>
      <li>
        Architected a flask backend and a vue frontend solution, including the
        usage of server sent events
      </li>
      <li>
        Optimised the transmission queue by simplifying frame transfer logic and
        most importanly, swap out a bottlenecking linked list queue with a
        custom AVL-Tree implementation, which supports equal keys, by using a
        custom block allocator to avoid fragmentation, in order to improve worse
        case performance by a large margin
      </li>
      <li>
        Collaborated with the hardware and python api team to design the new
        web-based bus inspection tool
      </li>
    </ul>
    <br />

    <h4><u>src-d / go-mysql-server </u> (2019)</h4>
    <ul>
      <li>
        Implement some SQL functions to comply with the MySQL standard (unit
        tests included)
      </li>
      <li>Make some parts of the query parser more robust</li>
    </ul>

    <br /><br />
    <h2>Other</h2>
    <h4>
      Geolocation based Social Network App Frontend for Android (Java, Kotlin
      rewrite)
    </h4>
    <ul>
      <li>Implemented an offline-first app by using Room & Retrofit</li>
      <li>Used MVVM with a mix of Observables and LiveData</li>
      <li>Performed cross fragment/activity communication by EventBus</li>
      <li>
        Extensively used Dagger 2, Architecture Components & the Design support
        library
      </li>
      <li>Consume a Rest API & handle authentication with Jason Web Tokens</li>
      <li>
        Features Include: Login/Signup, Post viewing, Likes, Comments, Friends &
        Blocking, Post Uploading (with image)
      </li>
    </ul>
    <br />

    <h4>
      Game & Game Server Development (2011 - 2016 | Java, C++) - Freelancing
    </h4>
    <ul>
      <li>
        Published a
        <a
          href="https://store.steampowered.com/app/493650/Deep_Space_Dash/"
          target="_blank"
          >game on Steam</a
        >, made in Unreal Engine 4 with C++ (4000+ Sales)
      </li>
      <li>
        Unreal Engine 4 contribution by implementing the Android local
        notification system
      </li>
      <li>
        Created a series of game
        <a href="https://github.com/ntakouris/RFS" target="_blank"
          >server modifications</a
        >
        for a grid of Minecraft servers (400 concurrent players at peak, Java)
      </li>
    </ul>
    <br />

    <br />
    <h2>Hobbies</h2>
    <ul>
      <li>
        Express love for Software Engineering by contributing to Open Source
        projects (Hacktoberfest!) and Publishing of Software Engineering
        Articles on
        <a href="https://medium.com/@zarkopafilis" target="_blank"
          >medium.com</a
        >
        (Averaging ~6K article views per month)
      </li>
      <li>Voxxed Days Athens 2018 Volunteer (3 consecutive years)</li>
      <li>
        Photography, Audiovisual Arts through applied computer engineering
      </li>
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
        content: "Curriculum Vitae",
      },
    ],
  },
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
