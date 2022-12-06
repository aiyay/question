<template>
  <section>
    <div class="border-2 border-indigo-600">
      <div class="sd">刀:{{ skill.knife }}</div>
      <div class="sd">剑:{{ skill.sword }}</div>
      <div class="sd">枪:{{ skill.pike }}</div>
      <div class="sd">弓:{{ skill.bow }}</div>
      <div class="sd">拳:{{ skill.fist }}</div>
      <div class="sd">腿:{{ skill.leg }}</div>
    </div>
  </section>
</template>
<script lang="ts">
export default {
  props: {
    // 技能
    knife: {
      type: Number,
      default: 0,
    },
    pike: {
      type: Number,
      default: 0,
    },
    sword: {
      type: Number,
      default: 0,
    },
    bow: {
      type: Number,
      default: 0,
    },
    fist: {
      type: Number,
      default: 0,
    },
    leg: {
      type: Number,
      default: 0,
    },
  },
  setup(props) {
    const { knife, sword, pike, bow, fist, leg } = toRefs(props);

    const skill = gSkill({
      knife: knife.value,
      sword: sword.value,
      pike: pike.value,
      bow: bow.value,
      fist: fist.value,
      leg: leg.value,
    });
    // 使用父组件传递过来的值

    // onMounted(() => {
    // person.setName(name.value);
    // });
    return {
      skill,
    };
  },
};
</script>
