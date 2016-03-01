import wikismith from '../wikismith';
import PostType from '../wikismith/PostType';
import TalkType from '../wikismith/TalkType';
import MapType from '../wikismith/MapType';
import posts from '../content/posts.js';
import talks from '../content/talks.js';

wikismith.registerContentType('post', PostType);
wikismith.registerContentType('talk', TalkType);
wikismith.registerContentType('map', MapType);
wikismith.registerContent(posts);
wikismith.registerContent(talks);

module.exports = wikismith;
