<template>
  <button
    :class="[
      `py-${size[props.size].y}`,
      `px-${size[props.size].x}`,
      `${props.round ? 'rounded-full' : 'rounded-lg'}`,
      `bg-${props.color}-${props.plain ? '100' : '500'}`,
      `hover:bg-${props.color}-400`,
      `border-${props.color}-${props.plain ? '500' : '500'}`,
      `cursor-pointer`,
      `border-solid`,
      `border-1`,
      `text-${props.plain ? props.color + '-500' : 'white'}`,
      `transition duration-100`,
      `mx-1`
    ]"
  >
    <i v-if="props.icon" :class="[`i-ic-baseline-${props.icon} p-3`]"></i>
    <slot v-if="$slots.default"></slot>
  </button>
</template>
<script lang="ts">
export default {
  name: 'WButton'
};
</script>
<script setup lang="ts">
import { size } from './button';
import 'uno.css';
interface IProps {
  size: 'small' | 'medium' | 'large';
  color: 'gray' | 'red' | 'yellow' | 'green' | 'blue' | 'indigo' | 'purple' | 'pink' | 'white';
  round: boolean;
  plain: boolean;
  icon: string;
}

const props = withDefaults(defineProps<IProps>(), {
  size: 'medium',
  color: 'white',
  round: false,
  plain: false
});
</script>
