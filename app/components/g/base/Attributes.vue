<template>
  <section>
    <div class="grid grid-cols-3 gap-4">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue';

export default defineComponent({
  setup() {
    const attrMetal = ref('login');
    const attrWood = ref('11');
    const attrWater = ref('11');
    const attrFire = ref('login');
    const attrEarth = ref('11');
    onMounted(() => {
      console.log(gAttributes);
    });

    return {
      attrMetal,
      attrWood,
      attrWater,
      attrFire,
      attrEarth,
    };
  },
});
</script>
