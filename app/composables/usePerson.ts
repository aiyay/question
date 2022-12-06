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
  attr_metal: number, // 金
  attr_wood: number, // 木
  attr_water: number, // 水
  attr_fire: number, // 火
  attr_earth: number, // 土
}

class Attributes implements AttributesIF {
  attr_metal: number;
  attr_wood: number;
  attr_water: number;
  attr_fire: number;
  attr_earth: number;
  constructor({
    attr_metal,
    attr_wood,
    attr_water,
    attr_fire,
    attr_earth
  }:AttributesIF) {
    this.attr_metal = attr_metal;
    this.attr_wood = attr_wood;
    this.attr_water = attr_water;
    this.attr_fire = attr_fire;
    this.attr_earth = attr_earth;
  }
  setData(){

  }
}

export const gAttributes = new Attributes({
  attr_metal: 0,
  attr_wood: 0,
  attr_water: 0,
  attr_fire: 0,
  attr_earth: 0,
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

export const gSkill = new Skill({
  knife: 0,
  pike: 0,
  sword: 0,
  bow: 0,
  fist: 0,
  leg: 0,
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

  attr_yin: number; // 阴
  attr_yang: number; // 阳
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
  attr_yin: number;
  attr_yang: number;
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
    attr_yin,
    attr_yang,
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
    this.attr_yin = attr_yin;
    this.attr_yang = attr_yang;
  }
  setName(name: string) {
    this.name = name
  }
  setData() {

  }
  getData() {

  }
}

export const gPerson = new Person({
  name: '0',
  age: 0,
  charm: 0,
  power: 0,
  hp: 0,
  attack: 0,
  defense: 0,
  eg: 0,
  agile: 0,
  understanding: 0,
  sp: 0,
  perseverance: 0,
  attr_yin: 0,
  attr_yang: 0
})