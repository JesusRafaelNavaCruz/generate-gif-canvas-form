<template>
  <div>
    <Form />
    <Images />
  </div>
</template>

<script>
import Form from "../components/Form";
import Images from "@/components/Images.vue";

export default {
  name: "Home",

  components: {
    Form,
    Images,
  },
};
</script>
