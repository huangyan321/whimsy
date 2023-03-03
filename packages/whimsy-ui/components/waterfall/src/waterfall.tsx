import { defineComponent, PropType, Teleport, ref, onMounted, type TeleportProps, toRefs, watch } from 'vue';
import WaterfallItem from './waterfallItem';
import '../style/index.scss';
import { IImage } from './type';
import { useWindowSize } from 'root/hooks/dom';
export const waterfallProps: {
  column: PropType<number>;
  gap: PropType<number>;
  images: PropType<IImage[]>;
  teleport: PropType<TeleportProps['to']>;
} = {
  column: Number,
  gap: Number,
  images: Array,
  teleport: [String, Object] as PropType<TeleportProps['to']>
};
export default defineComponent({
  name: 'WWaterfall',
  props: waterfallProps,
  emits: ['trigger', 'scrollBottom', 'scrollTop'],
  setup(props, { emit, slots }) {
    // const _this = getCurrentInstance()\
    const { column, gap, images, teleport } = toRefs(props);
    const { width, height } = useWindowSize();

    if (teleport.value) {
      console.log(teleport);
    }
    const waterfallWrapRef = ref<HTMLDivElement>();
    const waterfallItemRefs: any = [];

    const getMinIndex = (arr: number[]) => {
      return arr.indexOf(Math.min.apply(null, arr));
    };
    const init = () => {
      setImagePos();
    };

    const setImagePos = () => {
      if (!column.value || !gap.value) return;
      const oItemsLength = waterfallItemRefs.length;
      const heights: number[] = [];
      let itemWidth = 0;
      if (waterfallWrapRef.value?.offsetWidth) {
        itemWidth = (waterfallWrapRef.value?.offsetWidth - (column.value - 1) * gap.value) / column.value;
        for (let i = 0; i < oItemsLength; i++) {
          const el: HTMLDivElement = waterfallItemRefs[i].$el;
          el.style.width = itemWidth + 'px';
          if (i < column.value) {
            heights.push(waterfallItemRefs[i].$el.offsetHeight);
            el.style.top = '0';
            if (i % column.value) {
              el.style.left = (el.offsetWidth + gap.value) * (i % column.value) + 'px';
            } else {
              el.style.left = '0';
            }
          } else {
            const minIndex = getMinIndex(heights);
            const minEl: HTMLDivElement = waterfallItemRefs[minIndex].$el;
            el.style.left = minEl.style.left;
            el.style.top = heights[minIndex] + gap.value + 'px';
            heights[minIndex] += el.offsetHeight + gap.value;
          }
        }
      }
    };
    onMounted(() => {
      init();
    });
    watch(props, init);
    watch([width, height], init);
    // const imageAfterPos = useWaterfall(waterfallWrapRef, waterfallItemRefs as Ref<(typeof WaterfallItem)[]>, toRefs(props))
    const onTrigger = (imgItem: IImage) => {
      emit('trigger', imgItem);
    };
    const render = () => {
      waterfallItemRefs.length = 0;
      return (
        <div class="waterfall_wrap" ref={waterfallWrapRef}>
          {images.value?.map(({ url }) => (
            <WaterfallItem ref={(el) => (el ? waterfallItemRefs?.push(el) : '')} imgUrl={url} onTrigger={onTrigger} />
          ))}
        </div>
      );
    };
    return () => {
      if (props.teleport) {
        return <Teleport to={props.teleport}>{render()}</Teleport>;
      }
      return <>{render()}</>;
    };
  }
});
