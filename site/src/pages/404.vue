<template>
  <Layout navbarTitle="Error 404">
    <div style="text-align: center;">
      <br /><br />
      <h1>Page not found</h1><br /><br />
      <g-image src="/shuffleparrot.gif"/><br /><br />
      <h3>Bad url or under construction</h3>

      <br />
      <br />
      <hr />
      <br />
      <br />

      <p>
      A lot has changed in the past few years that this website has been alive. 
      <br />
      This has been a pain to maintain due to old and obsolete software used.
      <br />
      <br />

      Please refer to my LinkedIn profile for all enquiries.
      </p>

      <v-btn outlined href="https://www.linkedin.com/in/theodoros-ntakouris/"
        >Visit Linked In</v-btn
      >
    </div>
  </Layout>
</template>

<script>
export default {
  name: "404",
    meta: [
      {
        name: "description",
        content: "Bad url or under construction"
      }
    ]
};
</script>

<style>
</style>
