export const useFace = () =>
  useState('face', () => ({
    skin: '1'
  }));

export const usePerson = () =>
  useState('person', () => ({
    name: '12',
    age: '12',
    sex: '0',
    clothes:'1',
  }));
export const Face = () => ({
  a: 1,
  b: 2
})

/*
  相生相克：
  水生木，木生火，火生土，土生金，金生水。
  水克火，火克金，金克木，木克土，土克水。
  木有生长发育之性；
  火有炎热、向上之性；
  土有和平、存实之性；
  金有肃杀、收敛之性；
  水有寒凉、滋润之性。
*/
interface AttributesIF {
  attrMetal: number, // 金
  attrWood: number, // 木
  attrWater: number, // 水
  attrFire: number, // 火
  attrEarth: number, // 土
}

class Attributes implements AttributesIF {
  attrMetal: number;
  attrWood: number;
  attrWater: number;
  attrFire: number;
  attrEarth: number;
  constructor({
    attrMetal,
    attrWood,
    attrWater,
    attrFire,
    attrEarth
  }:AttributesIF) {
    this.attrMetal = attrMetal;
    this.attrWood = attrWood;
    this.attrWater = attrWater;
    this.attrFire = attrFire;
    this.attrEarth = attrEarth;
  }
  setData(){

  }
}

export const gAttributes = ({
  attrMetal,
  attrWood,
  attrWater,
  attrFire,
  attrEarth,
}: AttributesIF) => new Attributes({
  attrMetal,
  attrWood,
  attrWater,
  attrFire,
  attrEarth,
})

interface SkillIF {
  knife: number, // 刀
  sword: number, // 剑
  pike: number, // 枪
  bow: number, // 弓
  fist: number, // 拳
  leg: number, // 腿
}

class Skill implements SkillIF {
  knife: number;
  sword: number;
  pike: number;
  bow: number;
  fist: number;
  leg: number;
  
  constructor({
    knife,
    sword,
    pike,
    bow,
    fist,
    leg
  }:SkillIF) {
    this.knife = knife;
    this.pike = pike;
    this.sword = sword;
    this.bow = bow;
    this.fist = fist;
    this.leg = leg;
  }
}

export const gSkill = ({
  knife,
  sword,
  pike,
  bow,
  fist,
  leg,
}:SkillIF) => new Skill({
  knife,
  sword,
  pike,
  bow,
  fist,
  leg,
})

interface PersonIF {
  name: string; 
  age: number;
  charm: number; // 魅力

  power: number; // 力量
  hp: number; // 血量
  attack: number; // 攻击
  defense: number;// 防御
  eg: number; // 精力

  agile: number; // 敏捷

  understanding: number; // 悟性
  sp: number; // 精神力
  perseverance: number;// 毅力

  yin: number; // 阴
  yang: number; // 阳
}

class Person implements PersonIF {
  name: string;
  age: number;
  charm: number;
  power: number;
  hp: number;
  attack: number;
  defense: number;
  eg: number;
  agile: number;
  understanding: number;
  sp: number;
  perseverance: number;
  yin: number;
  yang: number;
  constructor({
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
  }:PersonIF) {
    this.name = name;
    this.age = age;
    this.charm = charm;
    this.power = power;
    this.hp = hp;
    this.attack = attack;
    this.defense = defense;
    this.eg = eg;
    this.agile = agile;
    this.understanding = understanding;
    this.sp = sp;
    this.perseverance = perseverance;
    this.yin = yin;
    this.yang = yang;
  }
  setData() {

  }
  getData() {

  }
}

export const gPerson = ({
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
  yang
}:PersonIF) => {
  return new Person({
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
    yang
  })
} 