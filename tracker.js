(function () {
  var SERVICE_ID  = "service_r954pt9";
  var TEMPLATE_ID = "template_fhi5v77";
  var PUBLIC_KEY  = "zdniFfke6xnYC8I4e";
  var TO_EMAIL    = "leninxperience@gmail.com";
  var STORAGE_KEY = "portfolio_visits";

  function getParam(name) {
    return new URLSearchParams(window.location.search).get(name) || "";
  }

  // Split a tracking ref into its base code + the link that was opened.
  // e.g. "0628r4P" -> { code: "0628r4", link: "Portfolio" }; "0628r4L" -> LinkedIn.
  // Reserved/organic codes (no P/L suffix) pass through unchanged.
  function parseRef(ref) {
    var m = /^(\d{4}[a-z][2-9])([PL])$/.exec(ref);
    if (m) return { code: m[1], link: m[2] === "P" ? "Portfolio" : "LinkedIn" };
    return { code: ref, link: "" };
  }

  function getLocation() {
    return new Promise(function (resolve) {
      fetch("https://ipapi.co/json/")
        .then(function (r) { return r.json(); })
        .then(function (d) {
          resolve((d.city || "") + ", " + (d.country_name || ""));
        })
        .catch(function () { resolve("Ubicación desconocida"); });
    });
  }

  function saveVisit(company, timestamp, location, code, link) {
    var visits = [];
    try { visits = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"); } catch (e) {}
    visits.unshift({ company: company, timestamp: timestamp, location: location, code: code, link: link });
    if (visits.length > 200) visits = visits.slice(0, 200);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(visits)); } catch (e) {}
  }

  function sendEmail(company, timestamp, location, code, link) {
    if (typeof emailjs === "undefined") return;
    emailjs.init(PUBLIC_KEY);
    emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      to_email:  TO_EMAIL,
      company:   company,
      code:      code || "",
      link:      link || "",
      timestamp: timestamp,
      location:  location
    });
  }

  // No trackear en entornos locales
  var hostname = window.location.hostname;
  if (hostname === "localhost" || hostname === "127.0.0.1" || hostname === "") return;

  // Si go.html ya trackeó esta sesión, no volver a disparar
  try {
    if (sessionStorage.getItem("portfolio_tracked")) {
      sessionStorage.removeItem("portfolio_tracked");
      return;
    }
  } catch (e) {}

  var ref = getParam("ref");
  if (!ref) ref = "organic";
  if (ref === "me") return;

  var parsed  = parseRef(ref);
  var company = parsed.link ? parsed.code + " · " + parsed.link : parsed.code;

  var timestamp = new Date().toLocaleString("es-AR", {
    timeZone: "America/Argentina/Cordoba",
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit"
  });

  getLocation().then(function (location) {
    saveVisit(company, timestamp, location, parsed.code, parsed.link);
    sendEmail(company, timestamp, location, parsed.code, parsed.link);
  });
})();
