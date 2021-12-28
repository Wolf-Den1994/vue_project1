const App = {
  data() {
    return {
      myPlaceholder: 'Введите название заметки',
      title: 'Список заметок',
      inputValue: '',
      notes: ['zametka 1', 'заметка 2']
    }
  },
  methods: {
    inputChangeHanlder(e) {
      this.inputValue = e.target.value;
    },
    addNewNote() {
      if (this.inputValue) {
        this.notes.push(this.inputValue);
        this.inputValue = '';
      }
    },
    toUpperCase(item) {
      return item.toUpperCase();
    },
    removeNote(idx) {
      this.notes.splice(idx, 1);
    }
  },
  computed: {
    doubleCountComputed() {
      console.log('doubleCountComputed')
      return this.notes.length * 2;
    },
  },
  watch: {
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}

const app = Vue.createApp(App).mount('#app');
