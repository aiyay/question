<template>
  <section>
    <div class="border-2 border-indigo-600">
      <div class="sd">金:{{ attributes.attrMetal }}</div>
      <div class="sd">木:{{ attributes.attrWood }}</div>
      <div class="sd">水:{{ attributes.attrWater }}</div>
      <div class="sd">火:{{ attributes.attrFire }}</div>
      <div class="sd">土:{{ attributes.attrEarth }}</div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  props: {
    attrMetal: {
      type: Number,
      default: 0,
    },
    attrWood: {
      type: Number,
      default: 0,
    },
    attrWater: {
      type: Number,
      default: 0,
    },
    attrFire: {
      type: Number,
      default: 0,
    },
    attrEarth: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { attrMetal, attrWood, attrWater, attrFire, attrEarth } =
      toRefs(props);
    const attributes = gAttributes({
      attrMetal: attrMetal.value,
      attrWood: attrWood.value,
      attrWater: attrWater.value,
      attrFire: attrFire.value,
      attrEarth: attrEarth.value,
    });
    // 使用父组件传递过来的值

    // onMounted(() => {
    // person.setName(name.value);
    // });
    return {
      attributes,
    };
  },
};
</script>
