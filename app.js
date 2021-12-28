const App = {
  data() {
    return {
      myPlaceholder: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
    }
  },
  methods: {
    inputChangeHanlder(e) {
      this.inputValue = e.target.value;
    }
  }
}

const app = Vue.createApp(App).mount('#app');
