<template>
  <div>
    <v-container>
        <v-row dense>
            <v-col>
                <h1>Imagenes</h1>
            </v-col>
        </v-row>
        <v-row justify="center">
            <v-col v-for="(image, index) in imagesList" :key="index" cols="12" md="6" sm="12">
                <v-card>
                    <v-img :src="`${image.path}`"></v-img>
                    <v-card-title>
                        {{ image.name }}
                    </v-card-title>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
  </div>
</template>
<script>
import { getImagesGenerated } from "@/api";

export default {
  name: "Images",
  data: () => ({
    imagesList: [],
  }),
  methods: {
    async fetchImages() {
      const response = await getImagesGenerated();
      this.imagesList = response.images
    },
  },
  created(){
    this.fetchImages();
  }
};
</script>
