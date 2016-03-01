import path from 'path';

class HeroPanelGenerator {

  constructor({ gen, command, name, args }) {
    this.gen = gen;
    this.command = command;
    this.name = name;
    this.args = args;
  }

  run() {
    const gen = this.gen;
    const jsFname = `${this.camelizeName()}Hero.jsx`
    const cssFname = `${this.camelizeName()}Hero.scss`

    switch (this.command) {
      default:
        gen.template('HeroPanel.jsx', path.join(process.cwd(), jsFname));
        gen.template('HeroPanel.scss', path.join(process.cwd(), cssFname));
    }
  }

  inspect(v) {
    return JSON.stringify(v);
  }

  pluralizeName() {
    return this.gen.inflect.pluralize(this.name);
  }

  titleizeName() {
    return this.gen.inflect.titleize(this.name);
  }

  dasherizeName() {
    return this.gen.inflect.dasherize(this.name);
  }

  camelizeName() {
    return this.gen.inflect.camelize(this.name);
  }

}

module.exports = HeroPanelGenerator;
