<template>
  <div class="paragraph paragraph--text">
    <div class="title">
      <slot name="title" />
    </div>
    <div class="content">
      <slot :name="$slots.content ? 'content': 'default'" />
    </div>
  </div>
</template>
<script>
  export default {
    name: 'PgText'
  };
</script>
