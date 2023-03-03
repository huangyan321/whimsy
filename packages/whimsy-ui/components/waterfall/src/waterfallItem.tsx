import { defineComponent, toRefs } from 'vue';
export default defineComponent({
  name: 'WWaterFallItem',
  props: {
    imgUrl: String,
    width: [String, Number],
    height: [String, Number],
    top: [String, Number],
    left: [String, Number]
  },
  emits: ['trigger'],
  setup(props, { emit }) {
    // const curInstance = getCurrentInstance()
    const { imgUrl, width, height, top, left } = toRefs(props);
    const onTrigger = () => {
      emit('trigger', props);
    };
    return () => (
      <div class="waterfall_item">
        <img onClick={onTrigger} src={imgUrl.value} style={{ width: width.value, height: height.value, top: top.value, left: left.value }} />
      </div>
    );
  }
});
