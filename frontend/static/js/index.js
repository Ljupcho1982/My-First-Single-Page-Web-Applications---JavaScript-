const navigateTo = (url) => {
  history.pushState(null, null, url);
  router();
};

const router = async () => {
  const routes = [
    {
      path: "/",
      view: () => console.log("Viewing Dashboard"),
    },
    { path: "/posts", view: () => console.log("Viewing Posts") },
    { path: "/settings", view: () => console.log("Viewing Settings") },
  ];

  //Test each rout for potential match

  const potentialMatches = routes.map((route) => {
    return {
      route: route,
      isMatch: location.pathname === route.path,
    };
  });

  console.log(potentialMatches);
};

let match = potentialMatches.find((potentialMatch) => potentialMatch.isMatch);

if (!match) {
  match = {
    route: routes[0],
    isMatch: true,
  };
  console.log(match.route.view());
}

window.addEventListener("popstate", router);
document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    if (e.target.matchesh([data - link])) {
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  router();
});
