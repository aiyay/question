<template>
  <section>
    <div class="sd">
      {{ person.name }}
    </div>
  </section>
</template>
<script lang="ts">
import { defineComponent, defineProps, onMounted, ref } from 'vue';
export default {
  props: {
    // 子组件接收父组件传递过来的值
    name: {
      type: String,
      default: '默认1',
    },
  },
  setup(props) {
    const person = gPerson;
    // 使用父组件传递过来的值
    const { name } = toRefs(props);
    // onMounted(() => {
    person.setName(name.value);
    // });
    return {
      person,
    };
  },
};
</script>
