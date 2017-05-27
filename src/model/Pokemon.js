class Pokemon {
  constructor(obj) {
    this.id = obj['id'];
    this.name = obj['identifier'];
    this.type = obj['type'];
    this.attack = obj['attack']
    this.sprite = `url(poke${obj['id']}.png)`;
  }
}

export default Pokemon;
