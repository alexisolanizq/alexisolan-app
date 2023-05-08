import { onBeforeMount, ref } from "vue";

export const useNavbar = () => {
  const topOfPage = ref(false);
  const dropdownToggle = ref(false);

  const handleScroll = () => {
    if (window.scrollY >= 50) {
      topOfPage.value = true;
    } else {
      topOfPage.value = false;
    }
  };

  onBeforeMount(() => window.addEventListener("scroll", handleScroll));

  return {
    topOfPage,
  };
};
