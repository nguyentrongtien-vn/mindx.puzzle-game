# 🧩 Hướng Dẫn Chơi Game Xếp Hình (Sliding Puzzle)

Một trò chơi trí tuệ xếp hình cổ điển trên lưới **3 hàng x 4 cột (12 ô)**, nhiệm vụ của bạn là đưa các ô số bị xáo trộn trở về đúng thứ tự ban đầu trong thời gian ngắn nhất và số bước đi ít nhất!

---

## 🎯 Mục Tiêu Trò Chơi

Sắp xếp lại 11 ô số theo đúng thứ tự tăng dần từ **1 đến 11** từ trái qua phải, từ trên xuống dưới, và **ô đen (ô trống)** nằm ở góc dưới cùng bên phải:

```
[  1 ] [  2 ] [  3 ] [  4 ]
[  5 ] [  6 ] [  7 ] [  8 ]
[  9 ] [ 10 ] [ 11 ] [⬛ Ô đen]
```

---

## 🎮 Cách Bắt Đầu Lượt Chơi

1. Nhấp đúp chuột vào file **`index.html`** để mở game trên trình duyệt web.
2. Bấm nút **"Bắt đầu"** màu xanh lá ở phía trên:
   - Các ô số sẽ được tự động xáo trộn ngẫu nhiên **100 lần**.
   - Đồng hồ bấm giờ sẽ bắt đầu đếm từ `00:00`.
   - Nút chuyển thành **"Kết thúc"** (bạn có thể bấm lại bất cứ lúc nào để trộn lại ván mới).

---

## 🕹️ Cách Điều Khiển & Di Chuyển Ô Số

Bạn có thể điều khiển game bằng **1 trong 2 cách** sau:

### 1. Dùng Bàn Phím (Khuyên dùng)
- **Cụm phím mũi tên:** `↑` (Lên), `↓` (Xuống), `←` (Trái), `→` (Phải)
- **Hoặc cụm phím WASD:** `W` (Lên), `S` (Xuống), `A` (Trái), `D` (Phải)
- *Nguyên lý:* Khi bấm phím điều hướng, ô đen sẽ di chuyển theo hướng đó và kéo ô số tương ứng trượt vào vị trí trống.
- *Giới hạn biên:* Ô đen không thể di chuyển vượt ra ngoài khung viền của bảng.

### 2. Dùng Chuột
- Rê chuột vào các ô số đang nằm ngay sát cạnh ô đen (các ô này sẽ có hiệu ứng nổi nhẹ).
- **Nhấp chuột trái** vào ô số đó để đẩy nó trượt thẳng vào ô đen.

---

## 🏆 Chiến Thắng & Lịch Sử Lượt Chơi

- **Khi bạn xếp thành công:**
  - Màn hình sẽ xuất hiện bảng thông báo **YOU WIN!** 🎉
  - Đồng hồ đếm giờ sẽ tự động dừng lại.
  - Kết quả gồm: **Số thứ tự lượt chơi**, **Tổng số bước đi** và **Thời gian hoàn thành** sẽ được ghi nhận vào bảng **Lịch Sử Lượt Chơi** ở phía dưới.
- Bấm nút **"Chơi lại"** trên bảng thông báo hoặc nút ở phía trên để thử sức với ván mới và phá kỷ lục thời gian của chính mình!

---

## 💡 Mẹo Tiện Ích

- **Chế độ Toàn màn hình:** Bấm nút **⛶ Toàn màn hình** ở góc trên bên phải khung trò chơi để trải nghiệm game với màn hình lớn trọn vẹn nhất.


---

## 🎮 Cách Bắt Đầu Lượt Chơi

1. Nhấp đúp chuột vào file **`index.html`** để mở game trên trình duyệt web.
2. Bấm nút **"Bắt đầu"** màu xanh lá ở phía trên:
   - Các ô số sẽ được tự động xáo trộn ngẫu nhiên **100 lần**.
   - Đồng hồ bấm giờ sẽ bắt đầu đếm từ `00:00`.
   - Nút chuyển thành **"Kết thúc"** (bạn có thể bấm lại bất cứ lúc nào để trộn lại ván mới).

---

## 🕹️ Cách Điều Khiển & Di Chuyển Ô Số

Bạn có thể điều khiển game bằng **1 trong 2 cách** sau:

### 1. Dùng Bàn Phím (Khuyên dùng)
- **Cụm phím mũi tên:** `↑` (Lên), `↓` (Xuống), `←` (Trái), `→` (Phải)
- **Hoặc cụm phím WASD:** `W` (Lên), `S` (Xuống), `A` (Trái), `D` (Phải)
- *Nguyên lý:* Khi bấm phím điều hướng, ô đen sẽ di chuyển theo hướng đó và kéo ô số tương ứng trượt vào vị trí trống.
- *Giới hạn biên:* Ô đen không thể di chuyển vượt ra ngoài khung viền của bảng.

### 2. Dùng Chuột
- Rê chuột vào các ô số đang nằm ngay sát cạnh ô đen (các ô này sẽ có hiệu ứng nổi nhẹ).
- **Nhấp chuột trái** vào ô số đó để đẩy nó trượt thẳng vào ô đen.

---

## 🏆 Chiến Thắng & Lịch Sử Lượt Chơi

- **Khi bạn xếp thành công:**
  - Màn hình sẽ xuất hiện bảng thông báo **YOU WIN!** 🎉
  - Đồng hồ đếm giờ sẽ tự động dừng lại.
  - Kết quả gồm: **Số thứ tự lượt chơi**, **Tổng số bước đi** và **Thời gian hoàn thành** sẽ được ghi nhận vào bảng **Lịch Sử Lượt Chơi** ở phía dưới.
- Bấm nút **"Chơi lại"** trên bảng thông báo hoặc nút ở phía trên để thử sức với ván mới và phá kỷ lục thời gian của chính mình!

---

## 💡 Mẹo Tiện Ích

- **Chế độ Toàn màn hình:** Bấm nút **⛶ Toàn màn hình** ở góc trên bên phải khung trò chơi để trải nghiệm game với màn hình lớn trọn vẹn nhất.