console.log("⭐️ client.js loaded");

function EntriesMaster() {
  let entries = [];
  const entriesDiv = document.getElementById("divEntries");

  async function getEntries() {
    const res = await fetch("/api/entries");
    const data = await res.json();
    console.log("⭐️ Got entries", data);
    entries = data.entries;

    renderEntries();
  }

  function renderEntries() {
    entriesDiv.innerHTML = entries
      .map(
        (entry) => `<div class="col-md-4 col-xs-12">
      <div class="card">
        <div class="card-body">
          <h3 class="card-title">${entry.date}</h3>
          <p class="card-text">${entry.text}</p>
          <p class="card-text">${entry.owner}</p>

        </div>
      </div>

    </div>`
      )
      .join("\n");
  }




  function initialize() {
    getEntries();
  }

  initialize();
}

EntriesMaster();
