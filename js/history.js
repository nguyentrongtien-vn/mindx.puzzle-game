class HistoryManager {
  constructor(containerElement) {
    this.container = containerElement;
    this.records = [];
  }

  addRecord(moves, timeFormatted) {
    const record = {
      id: this.records.length + 1,
      moves: moves,
      time: timeFormatted,
    };
    this.records.push(record);
    this.render();
  }

  render() {
    if (!this.container) return;

    if (this.records.length === 0) {
      this.container.innerHTML = `
        <tr>
          <td colspan="3" class="px-4 py-4 text-center text-gray-400 italic">
            Chưa có lượt chơi nào hoàn thành
          </td>
        </tr>
      `;
      return;
    }

    this.container.innerHTML = this.records
      .map(
        (item) => `
        <tr class="hover:bg-gray-50 transition-colors">
          <td class="px-4 sm:px-6 py-2.5 text-center font-medium text-gray-600">${item.id}</td>
          <td class="px-4 sm:px-6 py-2.5 text-center text-gray-700">${item.moves} bước</td>
          <td class="px-4 sm:px-6 py-2.5 text-center font-mono text-gray-700">${item.time}</td>
        </tr>
      `
      )
      .join('');
  }
}

window.HistoryManager = HistoryManager;
