<template>
  <section>
    <div class="grid grid-cols-2 gap-4">
      <GBasePerson class="row-span-2" />
      <div class="grid gap-2">
        <GBaseAttributes />
        <GBaseSkill />
      </div>
    </div>
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
