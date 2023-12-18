const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      objArray: [],
      diskGet: null,
    };
  },
  created() {
    axios.get("server.php").then((resp) => {
      console.log(resp);
      this.objArray = resp.data;
      console.log(this.objArray);
    });
  },
  methods: {
    getDisk(num) {
      axios
        .get("server.php", {
          params: {
            index: num,
          },
        })
        .then((resp) => {
          this.diskGet = resp.data;
          console.log(this.diskGet);
        });
    },
    rechange() {
      this.diskGet = null;
    },
  },
}).mount("#app");
