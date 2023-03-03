import { ref, Ref } from 'vue';

let width: Ref<number>;
let height: Ref<number>;

export function useWindowSize() {
  if (!width) {
    width = ref(0);
    height = ref(0);

    if (typeof window !== 'undefined') {
      const update = () => {
        width.value = window.innerWidth;
        height.value = window.innerHeight;
      };

      update();
      window.addEventListener('resize', update, { passive: true });
      window.addEventListener('orientationchange', update, { passive: true });
    }
  }

  return { width, height };
}
