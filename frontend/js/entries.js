console.log("⭐️ client.js loaded");

function EntriesMaster() {
  const entriesDiv = document.getElementById("divEntries");

  async function getEntries() {
    // get the page number from the url, or default to 1
    let page = new URLSearchParams(window.location.search).get("page") || 1;
    page = +page; // Make sure it is a number
    const res = await fetch(`/api/entries?page=${page}`);
    const data = await res.json();
    console.log("⭐️ Got entries", data);

    renderEntries(data.entries, {
      page: +data.page,
      docsPerPage: +data.docsPerPage,
      totalDocs: +data.totalDocs,
    });
  }

  function getPagination({ page = 1, docsPerPage = 21, totalDocs = 21 } = {}) {
    console.log("⭐️ getPagination", { page, docsPerPage, totalDocs });

    const url = "/";

    // for page p return p-n/2, ...,p-1, p, p+1, ... p+n/2
    // n is the number of pages to show
    const pageRange = (n) => {
      const minPage = Math.max(1, page - Math.floor(n / 2));
      const maxPage = Math.min(totalDocs / docsPerPage, minPage + n - 1);
      console.log("⭐️ minPage", minPage, "maxPage", maxPage);
      return Array.from({ length: maxPage - minPage + 1 }).map(
        (_, i) => minPage + i
      );
    };
    console.log("⭐️ pageRange", pageRange(5));

    const getLiForPage = (newPage) => (
      console.log(
        "getLIForPage",
        { newPage, page, totalDocs, docsPerPage },
        newPage === page,
        totalDocs / docsPerPage
      ),
      `<li class="page-item">
        <a
          class="page-link ${newPage === page ? `active` : ""}"
          href="${url + `?page=${newPage}`}"
          ${newPage === page ? `aria-current="page"` : ""}
        >${newPage}</a>
      </li>`
    );

    return `<nav aria-label="...">
        <ul class="pagination">
          <li class="page-item ${page === 1 ? `disabled` : ""}">
            <a
              class="page-link"
              href="${url + `?page=${page - 1}`}"

              >Previous</a>
          </li>
          ${pageRange(5).map(getLiForPage).join("\n")}
          <li class="page-item ${page >= Math.floor(totalDocs / docsPerPage) ? `disabled` : ""}">
            <a
              class="page-link"
              href="${url + `?page=${page + 1}`}"
            >Next</a>
          </li>
        </ul>
      </nav>`;
  }

  function renderEntries(
    entries,
    { page = 1, docsPerPage = 21, totalDocs = 21 } = {}
  ) {
    entriesDiv.innerHTML = `
      ${getPagination({ page, totalDocs })}
      <div class="row">
      ${entries
        .map(
          (entry) => `<div class="col-md-4 col-xs-12 mb-1">
            <div class="card">
              <div class="card-body">
                <h3 class="card-title fs-6">${entry.date}</h3>
                <p class="card-text overflow-y-auto" style="max-height: 90px" >${entry.text}</p>
                <p class="card-text">${entry.owner}</p>
              </div>
            </div>
          </div>`
        )
        .join("\n")}
      </div>`;
  }

  function initialize() {
    getEntries();
  }

  initialize();
}

EntriesMaster();
