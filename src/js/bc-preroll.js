var $ = require("./lib/qsa");

var makePlayer = function(id) {
  return `
<iframe src="//players.brightcove.net/1509317113/V1eCvUwO2g_default/index.html?videoId=${id}&autoplay=true" allowfullscreen webkitallowfullscreen mozallowfullscreen></iframe>
`;
};

$(".bc-preroll").forEach(function(container) {
  var id = container.getAttribute("data-id");
  var replace = function() {
    container.innerHTML = makePlayer(id);
    container.removeEventListener("click", replace);
  };
  container.addEventListener("click", replace);
});