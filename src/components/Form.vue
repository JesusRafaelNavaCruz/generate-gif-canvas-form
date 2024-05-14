<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6" sm="12">
          <v-card>
            <v-card-title>
              <h3 class="text-center">Email CountDown Timers</h3>
            </v-card-title>
            <v-card-text>
              <v-form v-model="valid" lazy-validation ref="form">
                <v-container>
                  <v-row>
                    <v-col>
                      <h4>Template</h4>
                    </v-col>
                  </v-row>
                  <v-row>
                    <v-col>
                      <v-text-field
                        v-model="img.name"
                        label="Nombre del contador"
                        outlined
                        dense
                      ></v-text-field>
                    </v-col>
                  </v-row>
                  <v-row class="my-0 py-0" dense>
                    <v-col>
                      <date-picker  
                        v-model="img.finalDate"
                        type="datetime"
                        placeholder="Fecha final"
                      ></date-picker>
                    </v-col>
                  </v-row>
                  <v-row class="py-0 my-0" dense>
                    <v-col justify="center" class="text-center">
                      <v-btn
                        elevation="2"
                        color="primary"
                        @click="fetchGenerateImage(img)"
                        >Generar
                        <v-icon right dark> mdi-auto-fix </v-icon></v-btn
                      >
                    </v-col>
                  </v-row>
                </v-container>
              </v-form>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
<script>
import { generateImage } from "@/api";
import moment from "moment";
import DatePicker from "vue2-datepicker";
import "vue2-datepicker/index.css";

export default {
  components: { DatePicker },
  data: () => ({
    menu: false,
    date: null,
    valid: false,
    img: {
      name: "",
      finalDate: "",
    },
  }),
  methods: {
    async fetchGenerateImage(img) {
      const { name, finalDate } = img;
      const formData = {
        name,
        limitDate: moment(finalDate).format(),
      };
      const response = await generateImage(formData);
      return response
    },
  },
};
</script>
<style>
.mx-datepicker {
  width: 100%;
}
</style>