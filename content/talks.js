const req = require.context('./talks/', true, /\.md$/);
const talks = req.keys().map((k) => req(k));
module.exports = talks;
