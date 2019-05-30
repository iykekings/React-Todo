export default class Storage {
  constructor(identifier) {
    this.identifier = identifier;
    localStorage.setItem(identifier, '[]');
  }

  allItem() {
    return JSON.parse(localStorage.getItem(this.identifier));
  }

  add(item) {
    const all = this.allItem();
    all.push(item);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  reset() {
    localStorage.setItem(this.identifier, '[]');
  }

  update(id, payload) {
    let all = this.allItem();
    let currentItem = all.find(item => (item.id = id));
    let currentIndex = all.findIndex(item => (item.id = id));
    currentItem = { ...currentItem, ...payload };
    all.splice(currentIndex, 1);
    all.push(currentItem);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  delete(id) {
    let all = this.allItem();
    let index = all.findIndex(item => (item.id = id));
    all.splice(index, 1);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  deleteDB() {
    localStorage.removeItem(this.identifier);
  }
}
