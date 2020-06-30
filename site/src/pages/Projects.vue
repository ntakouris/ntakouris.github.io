<template>
  <Layout navbarTitle="Projects">
    <v-container grid-list-md text-xs-center>
    <v-layout row wrap>

    <v-card class="mx-auto mt-4" max-width="344" outlined v-for="project in projects" :key="project.title">
      <v-list-item three-line>
        <v-list-item-content>
          <div class="overline mb-4">{{ project.type }}</div>
          <v-list-item-title class="headline mb-1">{{ project.title }}</v-list-item-title>
          <div class="text--primary">
            <br />
            {{ project.description }}
          </div>
        </v-list-item-content>
      </v-list-item>

      <v-card-actions>
        <v-btn v-for="(url, name) in project.urls" :key="url" text :href="url" target="_blank">{{ name }}</v-btn>
      </v-card-actions>
    </v-card>

    </v-layout>
    </v-container>
  </Layout>
</template>

<script>
import projects from '~/data/projects.json'

export default {
  name: "Projects",
  metaInfo: {
    title: 'Projects'
  },
  data() {
    return {
      projects        
    }
  }
};
</script>

<style>
</style>
