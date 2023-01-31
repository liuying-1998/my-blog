export default function (refValue) {
  return {
    mounted() {
      this.$bus.$on("setMainScroll", this.handleToTop);
    this.$refs[refValue].addEventListener("scroll", this.handleTopScroll);
    },
    
  beforeDestroy() {
    this.$bus.$emit("mainScroll", undefined);
    this.$refs[refValue].removeEventListener("scroll", this.handleTopScroll);
    this.$bus.$off("setMainScroll", this.handleTop);
  },
  methods: {
    handleToTop() {
      this.$refs[refValue].scrollTop = top;
      },
    
  handleTopScroll() {
    this.$bus.$emit("mainScroll", this.$refs[refValue]);
  },
  },
  }
}