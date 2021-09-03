<template>
  <div
    class="cont-group"
    :style="{ gap: expanded ? (mobile ? '20px' : '10px') : '' }"
  >
    <div
      class="cont"
      :data-pct="expanded ? title : notExpandedTitle"
      :data-title="expanded ? dataPct + '%' : notExpandedPct"
      :data-ml="`-${size / 2}px`"
      :style="{
        ...styledObject,
        width: `${size}px`,
        height: `${size}px`,
        left: '0px',
        zIndex: 1001,
      }"
    >
      <svg
        class="svg"
        :width="size"
        :height="size"
        :viewport="`0 0 ${getSize(100)} ${getSize(100)}`"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="bar"
          :r="getSize(90)"
          :cx="getSize(100)"
          :cy="getSize(100)"
          fill="transparent"
          :stroke-dasharray="getSize(565.48)"
          stroke-dashoffset="0"
          :transform="`rotate(-90 ${getSize(100)} ${getSize(100)})`"
          :style="{
            stroke: `var(--${color}--color)`,
            strokeWidth: ringSize ? ringSize : getSize(17),
            strokeDashoffset: expanded
              ? strokeDashoffset
              : getDashOffset(min, max, values[0]),
          }"
        ></circle>
      </svg>
    </div>
    <div
      v-for="(obj, index) in data"
      :key="obj.title + index + obj.value"
      class="cont"
      :class="expanded ? '' : 'cont--disable'"
      :data-pct="obj.title"
      :data-title="getDataPtc(obj.negative, obj.max, obj.value) + '%'"
      :data-ml="mobile"
      :style="{
        ...styledObject,
        width: `${size}px`,
        height: `${size}px`,
        left: expanded
          ? mobile
            ? index === 0
              ? '0px'
              : index === 1
              ? `-${size * 2 + size / 4}px`
              : index === 2
              ? `-${size * 2 + size / 4}px`
              : '0px'
            : '0px'
          : `-${(index + 1) * size}px`,
        zIndex: 1000 - index,
        top: expanded
          ? mobile
            ? index === 0
              ? '0px'
              : `${size + 20}px`
            : '0px'
          : '0px',
      }"
    >
      <svg
        class="svg"
        :width="size"
        :height="size"
        :viewport="`0 0 ${getSize(100)} ${getSize(100)}`"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          class="bar"
          :r="getSize(90)"
          :cx="getSize(100)"
          :cy="getSize(100)"
          fill="transparent"
          :stroke-dasharray="getSize(565.48)"
          stroke-dashoffset="0"
          :transform="`rotate(-90 ${getSize(100)} ${getSize(100)})`"
          :style="{
            stroke: `var(--${obj.color}--color)`,
            strokeWidth: ringSize ? ringSize : getSize(17),
            strokeDashoffset: expanded
              ? getDashOffset(obj.min, obj.max, obj.value)
              : getDashOffset(obj.min, obj.max, values[index + 1]),
          }"
        ></circle>
      </svg>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProgressCircle',
  data() {
    return {
      dataPct: '',
      id: Math.floor(Math.random() * 10000),
      contVal: 0,
      strokeDashoffset: 0,
      constRefTitle: '',
      valueStorage: 0,
      values: [] as any,
      styledObject: {
        '--ml--dynamic': `-${this.size / 2}px`,
      },
    };
  },
  props: {
    mobile: {
      type: Boolean,
    },
    size: {
      type: Number,
      default: 180,
    },
    value: {
      type: Number,
      default: 95,
    },
    max: {
      type: Number,
      default: 100,
    },
    min: {
      type: Number,
      default: 0,
    },
    title: {
      type: String,
      default: 'Javascript',
    },
    completeTitle: {
      type: String,
      default: 'Complete Title',
    },
    negative: {
      type: Boolean,
      default: false,
    },
    color: {
      type: String,
      default: 'javascript',
    },
    ringSize: {
      type: Number,
    },
    expanded: {
      type: Boolean,
      default: false,
    },
    notExpandedTitle: {
      type: String,
      default: 'Front-End',
    },
    notExpandedPct: {
      type: String,
      default: '45860 HRS',
    },
    data: {
      type: Array,
      default: [
        {
          value: 90,
          max: 100,
          min: 0,
          title: 'React',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'react',
        },
        {
          value: 90,
          max: 100,
          min: 0,
          title: 'Next',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'next',
        },
        {
          value: 50,
          max: 100,
          min: 0,
          title: 'Vue',
          completeTitle: 'Complete Title',
          negative: false,
          color: 'vue',
        },
      ],
    },
  },
  methods: {
    getSize(num: number) {
      return (this.size * num) / 200;
    },
    getDashOffset(min: number, max: number, value: number) {
      let val;
      if (value > max) {
        val = 100;
      } else if (value < min || value === min) {
        val = 0;
      } else {
        val = ((value - min) / (max - min)) * 100;
      }
      const r = this.getSize(90);
      const c = Math.PI * (r * 2);
      const pct = ((100 - val) / 100) * c;
      return pct;
    },
    getDataPtc(negative: boolean, max: number, value: number) {
      return `${negative ? max - value : value}`;
    },
    getAllPtc(num: number) {
      let main = [this.value];
      this.data.map((item: any) => {
        main.push(item.value);
      });
      let sum = main.reduce((a, b) => a + b, 0);
      this.valueStorage = this.valueStorage + (100 * num) / sum;
      return this.valueStorage;
    },
  },
  computed: {},
  mounted() {
    if (this.value !== undefined) {
      let val;
      if (this.value > this.max) {
        val = 100;
      } else if (this.value < this.min || this.value === this.min) {
        val = 0;
      } else {
        val = ((this.value - this.min) / (this.max - this.min)) * 100;
      }
      this.strokeDashoffset = this.getDashOffset(
        this.min,
        this.max,
        this.value
      );
      this.dataPct = this.getDataPtc(this.negative, this.max, this.value);
      val === 100 ? (this.constRefTitle = this.completeTitle) : this.title;
    }

    this.values.push(this.getAllPtc(this.value));
    this.data.map((item: any) => {
      this.values.push(this.getAllPtc(item.value));
    });
  },
});
</script>

<style lang="scss" scoped>
.cont-group {
  display: flex;
  flex-direction: row;
  transition: all 800ms;
  gap: 0px;
  & > div {
    transition: all 800ms;
  }
}
.svg circle {
  stroke-dashoffset: 0;
  transition: stroke-dashoffset 1s linear;
  stroke: #747474;
}
.svg .bar {
  stroke: green;
}
.cont {
  display: block;
  border-radius: 100%;
  position: relative;
  &--disable::after,
  &--disable::before {
    transition: all 0.2s !important;
    color: transparent !important;
  }
}
.cont:after {
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  content: attr(data-pct);
  margin-top: -20px;
  margin-left: var(--ml--dynamic);
  width: 100%;
  border-radius: 100%;
  font-size: 22px;
  color: white;
  font-weight: bold;
  text-align: center;
  transition: 1s ease-in;
}
.cont:before {
  position: absolute;
  display: block;
  left: 50%;
  top: 50%;
  content: attr(data-title);
  margin-top: 10px;
  margin-left: var(--ml--dynamic);
  width: 100%;
  border-radius: 100%;
  font-size: 14px;
  color: white;
  text-align: center;
  transition: 1s ease-in;
}
</style>
