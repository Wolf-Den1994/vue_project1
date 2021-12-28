const App = {
  data() {
    return {
      myPlaceholder: 'Введите название заметки',
      title: 'Список заметок',
    }
  }
}

const app = Vue.createApp(App).mount('#app');
