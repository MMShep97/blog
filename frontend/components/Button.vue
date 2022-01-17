<template>
  <div class="button-wrapper">
      <div class="button-shadow"></div>
      <v-btn class="submit-button px-10 button" style="letter-spacing: 3px" color="primaryAccent" tile x-large>
          <span>{{title}}</span>
      </v-btn>
  </div>
</template>

<script>
export default {
  props: ['title'],

  data() {
    return {

    }
  }
}
</script>

<style scoped>
.submit-button {
    color: var(--v-primary-base);
    background-color: var(--v-primaryAccent-base);
}

.button-wrapper {
    position: relative;
    display: inline-block;
}

.button-shadow {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    box-shadow: -10px 8px var(--v-background-base);
}

</style>
