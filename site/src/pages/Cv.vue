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
    I am a results-driven machine learning engineer with over 
    10 years of software engineering experience and
     a passion for applying AI to solve real-world problems.
     
     I specialize in machine learning and have developed a versatile skillset
     that includes a strong understanding of data-powered algorithms and techniques,
     high quality software systems, leadership, executive communication,
     and managerial abilities.
     
     I am committed to making a positive impact through the use of innovative technologies,
     and I bring a collaborative mindset and a proven track record of delivering high-quality work.
    </p>
    <br />

    <p><u>Note:</u> This is a very short version of my CV. For work-related inquiries or complete PDF versions of this page please reach out to me.</p>

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
      Thesis: Sparsity and Quantization in Convolutional Neural Networks
    </ul>
    <br />

    <h2 class="mb-1">Work Experience</h2>

    <h4><u>Senior AI Engineer</u> | VEED.IO (2023 - Present)</h4>
    <p>AI Features of an online video editing platform</p>

    <h4><u>Lead Machine Learning and Software Engineer</u> | Lambda (λ) Automata (2021 - 2023)</h4>
    <p>Machine Learning Engineering and Research for world perception</p>

    <h4>
      <u>AI Research Engineer</u> | Greek Army - Center of Technology and Research
      (Mandatory Army Service, 2021)
    </h4>
    <p>AI for Defence Applications</p>

    <h4><u>Deep Learning Research Engineer</u> | Loctio.com (2020 - 2021)</h4>
    <p>Leveraged AI advancements inside a cloud-based GPS system</p>

    <h4><u>Software Engineer</u> | Multiple Contracts (2016-2020)</h4>
    <p>Websites, CMS, Android apps, Software Tools</p>

    <h4><u>Android Software Engineer</u> | Eventora (2016 - 2017)</h4>
    <p>Worked on a Ticket Wallet App</p>

    <h4><u>Game Developer</u> | Self-Employed (2011 - 2016)</h4>
    <p>Launched a game on Steam. Developed a cluster of minecraft servers.</p>

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
