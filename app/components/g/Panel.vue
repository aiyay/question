<template>
  <section>
    <GBasePerson />
    <GBasePerson :name="type" />
    <GBaseAttributes />
    <GBaseSkill />
    <div class="">{{ type }}</div>
    <div>{{ ad }}</div>
    <div>{{ bs }}</div>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const type = ref('login');
    const ad = ref('11');
    const bs = ref('11');
    onMounted(() => {});

    return {
      type,
      ad,
      bs,
    };
  },
});
</script>
