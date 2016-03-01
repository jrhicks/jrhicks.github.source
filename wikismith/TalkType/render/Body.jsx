import React from 'react';
import Highlight from 'react-highlight';
import styles from './Body.scss';
import uuid from 'node-uuid';

const contextTypes = {
  wikismith: React.PropTypes.object
};

class Body extends React.Component {

  constructor() {
    super();
    this.renderRoot = this.renderRoot.bind(this);
    this.renderText = this.renderText.bind(this);
    this.renderLeaf = this.renderLeaf.bind(this);
  }

  renderRoot(ast) {
    return (
      <div>
        {
          ast.map((c) => {
            return <Body key={c.key} ast={c} />;
          })
        }
      </div>
    );
  }

  renderText(ast) {
    let results;
    if (typeof(ast) === typeof('string')) {
      results = <span dangerouslySetInnerHTML={{ __html: ast }} />;
    } else if (ast instanceof Array) {
      results = (
        <span>
          {
            ast.map((c) => {
              return <Body key={c.key} ast={c} />;
            })
          }
        </span>
      );
    }
    return results;
  }


  renderLeaf(ast) {
    switch (ast.type) {
      case 'wikismith':
        switch (ast.method) {
          case 'reference':
            return this.context.wikismith.linkBySlug(ast.slug);
          case 'embed':
            return this.context.wikismith.embedBySlug(ast.slug);
          default:
            throw new Error('method not handled');
        }
        break;
      case 'section':
        return (
            <div key={ ast.key } className={styles.section}>
              <Body key={uuid.v4()} ast={ast.body}/>
            </div>
          );
      case 'heading':
        switch (ast.level) {
          case 1:
            return <h1>{this.renderText(ast.text)}</h1>;
          case 2:
            return <h2>{this.renderText(ast.text)}</h2>;
          case 3:
            return <h3>{this.renderText(ast.text)}</h3>;
          case 4:
            return <h4>{this.renderText(ast.text)}</h4>;
          case 5:
            return <h5>{this.renderText(ast.text)}</h5>;
          default:
            return <h1>{this.renderText(ast.text)}</h1>;
        }
        break;
      case 'image':
        // TODO handle text and title
        return (
          <img src={ast.href} />
        );
      case 'blockquote':
        return (
          <blockquote>{this.renderText(ast.quote)}</blockquote>
        );
      case 'strong':
        return (
          <strong>{this.renderText(ast.text)}</strong>
        );
      case 'paragraph':
        return (
          <p>{this.renderText(ast.text)}</p>
        );
      case 'link':
        return (
          <a href={ast.href}>{this.renderText(ast.text)}</a>
        );
      case 'codespan':
        return (
          <span className={styles.codespan}>{ast.text}</span>
        );
      case 'code':
        return (
          <div className={styles.codeContainer}>
            <div className={styles.code}>
              <Highlight>{ast.code}</Highlight>
            </div>
          </div>
        );
      case 'em':
        return (
          <em>{this.renderText(ast.text)}</em>
        );
      case 'html':
        return (
          <span dangerouslySetInnerHTML={{ __html: ast.html }}></span>
        );
      case 'list':
        return <ul><Body ast={ast.body} /></ul>;
      case 'listitem':
        return <li>{this.renderText(ast.text)}</li>;
      default:
        return <span>{JSON.stringify(ast, null, 2)}</span>;
    }
  }

  render() {
    let results;
    if (typeof(this.props.ast) === typeof('string')) {
      results = this.renderText(this.props.ast);
    } else if (this.props.ast instanceof Array) {
      results = this.renderRoot(this.props.ast);
    } else {
      results = this.renderLeaf(this.props.ast);
    }
    return results;
  }
}

Body.contextTypes = contextTypes;
module.exports = Body;
