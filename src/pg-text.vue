<template>
  <div class="paragraph paragraph--text">
    <div class="paragraph__field-text">
      {{ fieldText }}
      <slot/>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgText',
    props: {
      fieldText: { type: String, default: () => '' },
    },
  };
</script>
