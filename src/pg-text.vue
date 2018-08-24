<template>
  <div class="paragraph paragraph--text">
    <div 
      class="paragraph__field-text" 
      v-html="fieldText"
      v-if="hasText"
    >
    </div>
    <slot name="field-text"></slot>
  </div>
</template>
<script>
  export default {
    name: 'PgText',
    props: {
      dataFieldText: { type: String, default: () => '' },
    },
    computed: {
      hasText() {
        return this.dataFieldText !== '';
      },
    }
  };
</script>
