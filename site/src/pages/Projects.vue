<template>
  <Layout navbarTitle="Projects">
    <v-card class="mx-auto mt-2 mb-0" max-width="1024" outlined>
      <v-list-item>
        <v-list-item-content>
          <div class="overline">Startup News</div>
          <v-list-item-title class="headline"
            >Lambda (λ) Automata</v-list-item-title
          >
          <div class="text--primary">
            <br />
            Since late 2021, I've joined <b>λ-automata</b> as a Co-Founding
            Engineer. <br /><br />
            We're building AI-first systems for autonomous surveillance,
            reconnaissance, and superhuman situational awareness.<br /><br />
            We are a team of engineers, defense experts and former military
            officers, set on a mission to create cutting-edge technology for the
            European Defense sector at Silicon Valley-style speed and agility.

            <br /><br />

            We're hiring.
          </div>
        </v-list-item-content>
      </v-list-item>
      <br /><br />
      <v-card-actions style="position: absolute; bottom: -4px">
        <v-btn text href="http://lambda-automata.eu" target="_blank"
          >lambda-automata.eu</v-btn
        >

        <v-btn
          text
          href="https://www.lambda-automata.eu/work-with-us"
          target="_blank"
          >Jobs</v-btn
        >
      </v-card-actions>
    </v-card>
    <br />

    <v-layout row wrap>
      <v-card
        class="mx-auto mt-2 mb-0"
        max-width="344"
        outlined
        v-for="project in projects"
        :key="project.title"
      >
        <v-list-item>
          <v-list-item-content>
            <div class="overline">{{ project.type }}</div>
            <v-list-item-title class="headline">{{
              project.title
            }}</v-list-item-title>
            <div class="text--primary">
              <br />
              {{ project.description }}
            </div>
          </v-list-item-content>
        </v-list-item>
        <br /><br />
        <v-card-actions style="position: absolute; bottom: -4px">
          <v-btn
            v-for="(url, name) in project.urls"
            :key="url"
            text
            :href="url"
            target="_blank"
            >{{ name }}</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-layout>
  </Layout>
</template>

<script>
import projects from "~/data/projects.json";

export default {
  name: "Projects",
  metaInfo: {
    title: "Projects",
    meta: [
      {
        name: "description",
        content: "Project Index Page",
      },
    ],
  },
  data() {
    return {
      projects,
    };
  },
};
</script>

<style>
</style>
