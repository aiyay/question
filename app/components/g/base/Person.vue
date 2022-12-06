<template>
  <section>
    <div class="grid gap-2">
      <div class="border-2 border-indigo-600">
        <div class="sd">姓名:{{ person.name }}</div>
        <div class="sd">年龄:{{ person.age }}</div>
        <div class="sd">魅力:{{ person.charm }}</div>
      </div>

      <div class="border-2 border-indigo-600">
        <div class="sd">阴:{{ person.yin }}</div>
        <div class="sd">阳:{{ person.yang }}</div>
      </div>
      <div class="border-2 border-indigo-600">
        <div class="sd">力量:{{ person.power }}</div>
        <div class="sd">生命值:{{ person.hp }}</div>
        <div class="sd">攻击力:{{ person.attack }}</div>
        <div class="sd">防御力:{{ person.defense }}</div>
        <div class="sd">精力:{{ person.eg }}</div>
      </div>
      <div class="border-2 border-indigo-600">
        <div class="sd">悟性:{{ person.understanding }}</div>
        <div class="sd">精神力:{{ person.sp }}</div>
        <div class="sd">毅力:{{ person.perseverance }}</div>
      </div>
      <div class="border-2 border-indigo-600">
        <div class="sd">敏捷:{{ person.agile }}</div>
      </div>
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
      default: Math.floor(Math.random() * 100).toString(),
    },
    age: {
      type: Number,
      default: 0,
    },
    charm: {
      type: Number,
      default: 0,
    },
    power: {
      type: Number,
      default: 0,
    },
    hp: {
      type: Number,
      default: 0,
    },
    attack: {
      type: Number,
      default: 0,
    },
    defense: {
      type: Number,
      default: 0,
    },
    eg: {
      type: Number,
      default: 0,
    },
    agile: {
      type: Number,
      default: 0,
    },
    understanding: {
      type: Number,
      default: 0,
    },
    sp: {
      type: Number,
      default: 0,
    },
    perseverance: {
      type: Number,
      default: 0,
    },
    yin: {
      type: Number,
      default: 0,
    },
    yang: {
      type: Number,
      default: 0,
    },
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
    const {
      name,
      age,
      charm,
      power,
      hp,
      attack,
      defense,
      eg,
      agile,
      understanding,
      sp,
      perseverance,
      yin,
      yang,
      knife,
      sword,
      pike,
      bow,
      fist,
      leg,
      attrMetal,
      attrWood,
      attrWater,
      attrFire,
      attrEarth,
    } = toRefs(props);
    const person = gPerson({
      name: name.value,
      age: age.value,
      charm: charm.value,
      power: power.value,
      hp: hp.value,
      attack: attack.value,
      defense: defense.value,
      eg: eg.value,
      agile: agile.value,
      understanding: understanding.value,
      sp: sp.value,
      perseverance: perseverance.value,
      yin: yin.value,
      yang: yang.value,
    });
    const skill = gSkill({
      knife: knife.value,
      sword: sword.value,
      pike: pike.value,
      bow: bow.value,
      fist: fist.value,
      leg: leg.value,
    });
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
      person,
      skill,
      attributes,
    };
  },
};
</script>
