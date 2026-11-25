# MindX - Module 1: Đề Thi Định Kỳ (Game Xếp Hình)

Dự án được xây dựng hoàn toàn bằng **HTML, JavaScript (ES6) và Tailwind CSS**, cấu trúc module hóa rõ ràng, độc lập, không phụ thuộc vào `npm` hay cài đặt phức tạp.

## 🚀 Cách mở và chạy dự án

1. **Cách 1 (Nhanh nhất):** Nhấp đúp chuột trực tiếp vào file [`index.html`](file:///e:/02_Study/Mindx/mindx.puzzle-game/index.html) để mở trên bất kỳ trình duyệt nào (Chrome, Edge, Firefox, Cốc Cốc,...).
2. **Cách 2 (VS Code):** Mở thư mục dự án trên VS Code, nhấp chuột phải vào `index.html` chọn **"Open with Live Server"**.

---

## 📁 Cấu trúc thư mục (Module hóa)

```
mindx.puzzle-game/
├── index.html                    # Giao diện chính chuẩn thiết kế đề bài
├── js/
│   ├── config.js                 # Cấu hình kích thước 3x4, danh sách màu Tailwind, 100 lần shuffle
│   ├── timer.js                  # Module đồng hồ đếm thời gian (setInterval, format mm:ss)
│   ├── history.js                # Module quản lý và hiển thị bảng lịch sử lượt chơi
│   ├── game.js                   # Module logic: bảng 12 ô, di chuyển ô đen, check biên, check win
│   ├── ui.js                     # Module render giao diện DOM, nút bấm, modal YOU WIN!
│   └── app.js                    # Controller kết nối tất cả module và lắng nghe phím/chuột
└── README.md                     # Hướng dẫn chi tiết
```