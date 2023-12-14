const { createApp } = Vue;

const app = createApp({
  data() {
    return {
      objArray: [],
    };
  },
  created() {
    axios.get("server.php").then((resp) => {
      console.log(resp);
      this.objArray = resp.data;
      console.log(this.objArray);
    });
  },
}).mount("#app");
