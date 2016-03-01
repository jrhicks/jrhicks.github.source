import React from 'react';
import extractTypes from './extractTypes';
import scour from 'scourjs';

const types = {};
const contentStore = [];

class WikiSmith {

  constructor() {
    this.contentType = this.contentType.bind(this);
    this.linkTo = this.linkTo.bind(this);
    this.embed = this.embed.bind(this);
    this.render = this.render.bind(this);
    this.registerContent = this.registerContent.bind(this);
    this.registerContentType = this.registerContentType.bind(this);
    this.linkBySlug = this.linkBySlug.bind(this);
    this.embedBySlug = this.embedBySlug.bind(this);
    this.renderBySlug = this.renderBySlug.bind(this);
    this.scourContent = this.scourContent.bind(this);
    this.bindBySlug = this.findBySlug.bind(this);
    this.reference = this.reference.bind(this);
  }

  wikiReferences(content) {
    return extractTypes(content.ast, 'wikismith');
  }

  registerContent(content) {
    for (const c of content) {
      contentStore.push(c);
    }
  }

  registerContentType(key, wtype) {
    types[key] = wtype;
  }

  contentType(content) {
    const t = content.type;
    if (types[t] === undefined) {
      throw new Error(`Unhandled Content Type ${content.type}`);
    }
    return t;
  }

  scourContent() {
    return scour(contentStore);
  }

  findBySlug(slug) {
    return this.scourContent().find({ slug }).value;
  }

  linkBySlug(slug) {
    return this.linkTo(this.findBySlug(slug));
  }

  embedBySlug(slug) {
    return this.embed(this.findBySlug(slug));
  }

  renderBySlug(slug) {
    return this.render(this.findBySlug(slug));
  }

  linkTo(content) {
    const t = this.contentType(content);
    return React.createElement(types[t].link,
       { content, contentStore, wikismith: this });
  }

  embed(content) {
    const t = this.contentType(content);
    return React.createElement(types[t].embed,
       { content, contentStore, wikismith: this });
  }

  reference(content, method) {
    let results;
    console.log(method);
    if (method === 'reference') {
      results = this.linkTo(content);
    } else {
      results = this.embed(content);
    }
    return results;
  }

  render(content) {
    const t = this.contentType(content);
    return React.createElement(types[t].render,
       { content, contentStore, wikismith: this });
  }
}

module.exports = new WikiSmith();
