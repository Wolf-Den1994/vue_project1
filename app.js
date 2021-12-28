const App = {
  data() {
    return {
      counter: 0,
      title: 'Счётчик',
    }
  }
}

const app = Vue.createApp(App).mount('#app');
