<template>
  <div class="paragraph paragraph--text">
    <div class="paragraph__field-text" v-html="fieldText">
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgText',
    props: {
      dataFieldText: { type: String, default: () => '' },
    },
    computed: {
      fieldText() {
        return JSON.parse(this.dataFieldText);
      },
    }
  };
</script>
