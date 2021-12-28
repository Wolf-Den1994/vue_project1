const App = {
  data() {
    return {
      myPlaceholder: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['zametka 1', 'заметка 2', 'заметочка 100500']
    }
  },
  methods: {
    inputChangeHanlder(e) {
      this.inputValue = e.target.value;
    },
    addNewNote() {
      this.notes.push(this.inputValue);
      this.inputValue = '';
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    }
  }
}

const app = Vue.createApp(App).mount('#app');
