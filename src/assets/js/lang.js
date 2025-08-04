const translations = {
        en: { hero_title: "Welcome" },
        ta: { hero_title: "வரவேற்பு" }
      };

      const toggle = document.getElementById("lang-toggle");
      let lang = localStorage.getItem("lang") || "en";
      apply(lang);
      toggle.textContent = lang === "en" ? "தமிழ்" : "EN";

      toggle.addEventListener("click", () => {
        lang = lang === "en" ? "ta" : "en";
        localStorage.setItem("lang", lang);
        toggle.textContent = lang === "en" ? "தமிழ்" : "EN";
        apply(lang);
      });

      function apply(lang) {
        document.documentElement.lang = lang;
        document.querySelectorAll("[data-i18n]").forEach(el => {
          const key = el.dataset.i18n;
          if (translations[lang][key]) {
            el.textContent = translations[lang][key];
          }
        });
      }
