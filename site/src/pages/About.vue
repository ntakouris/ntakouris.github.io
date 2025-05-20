<template>
  <Layout navbarTitle="About">
    <h1>Background</h1>
    <br />

    <ul>
      <li>
        A self-motivated, AI Wizard
      </li>
      <li>
        Please refer to my LinkedIn profile for all enquiries. This website is no longer maintained
      </li>
      <br />
    </ul>
    <br />

    <v-btn outlined href="https://www.linkedin.com/in/theodoros-ntakouris/"
      >Visit Linked In</v-btn
    >

    <br />
    <br />

    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap">
      <h3>Standing on the shoulders of giants</h3>
    </div>
    <div style="display: flex; flex-direction: row-reverse; flex-wrap: wrap">
      <i>Isaac Newton 15 February 1676</i>
    </div>
    <br />


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
