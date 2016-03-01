const req = require.context('./posts/', true, /\.md$/);
const posts = req.keys().map((k) => req(k));

module.exports = posts;
