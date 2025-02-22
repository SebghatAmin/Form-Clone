class Library {
  constructor() {
    this.globalIndex = -1;
    this.collection = [];
    this.saveButton = document.getElementById("saveBtn");
    this.dataTable = document.getElementById("tableBody"); // Removed extra space
    this.inputForm = document.getElementById("inputForm");

    // Attach the event listener to trigger dataStore on button click
    this.saveButton.addEventListener("click", () => this.dataStore());
  }

  renderTable() {
    this.dataTable.innerHTML = "";
    this.collection.forEach((item, idx) => {
      const rows = `
            <tr class="bg-amber-200 flex justify-evenly">
              <td class="rounded">${idx + 1}</td>
              <td class="rounded">${item.name}</td>  
              <td class="rounded">${item.author}</td>
              <td class="rounded">${item.price}</td>
            </tr>`;
      this.dataTable.insertAdjacentHTML("beforeend", rows);
    });
  }

  dataStore() {
    if (
      !this.inputForm.name?.value ||
      !this.inputForm.author?.value ||
      !this.inputForm.price?.value
    ) {
      alert("Please fill out the form");
      return;
    }
    const data = {
      name: this.inputForm.name.value,
      author: this.inputForm.author.value,
      price: this.inputForm.price.value,
    };
    if (this.globalIndex > -1) {
      this.collection.splice(this.globalIndex, 1, data);
      this.saveButton.innerHTML = "Save";
      this.globalIndex = -1;
    } else {
      this.collection.push(data);
    }
    this.renderTable();
    this.inputForm.reset();
  }
}

const lib = new Library();
