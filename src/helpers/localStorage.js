export default class Storage {
  constructor(identifier) {
    this.identifier = identifier;
    this.allItems = this.allItems();
    localStorage.setItem(identifier, '[]');
  }

  allItems() {
    return JSON.parse(localStorage.getItem(this.identifier));
  }

  add(item) {
    const all = this.allItems;
    all.push(item);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  reset() {
    localStorage.setItem(this.identifier, '[]');
  }

  update(id, payload) {
    let all = this.allItems;
    let currentItem = all.find(item => (item.id = id));
    let currentIndex = all.findIndex(item => (item.id = id));
    currentItem = { ...currentItem, ...payload };
    all.splice(currentIndex, 1);
    all.push(currentItem);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  delete(id) {
    let all = this.allItems;
    let index = all.findIndex(item => (item.id = id));
    all.splice(index, 1);
    localStorage.setItem(this.identifier, JSON.stringify(all));
  }

  deleteDB() {
    localStorage.removeItem(this.identifier);
  }
}
