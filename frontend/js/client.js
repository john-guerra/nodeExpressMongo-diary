console.log("⭐️ client.js loaded");

function TemplateMaster() {
  let templates = ["formCreateEntry", "navBar"];

  async function loadTemplate(templateName) {
    console.log("👴🏼 loading template", templateName);
    const placeholders = document.querySelectorAll(`.template-${templateName}`);

    const res = await fetch(`/templates/${templateName}.html`);
    const code = await res.text();

    for (const placeholder of placeholders) {
      placeholder.innerHTML = code;
    }
  }
  async function loadTemplates() {
    console.log("👴🏼 loading templates");

    templates.forEach(loadTemplate);
  }

  function initialize() {
    loadTemplates();
  }

  initialize();
}

TemplateMaster();
