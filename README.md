Họ tên:Nguyễn Hoàng Phúc Msv:22810310108
Ứng dụng gồm các màn hình chính sau:

HomeScreen – Hiển thị danh sách sản phẩm

CheckoutScreen – Thanh toán đơn hàng

SuccessScreen – Hiển thị xác nhận thanh toán thành công

ScanScreen – Hiển thị giao diện quét sản phẩm (không dùng camera)

HomeScreen (Màn hình chính) Chức năng Hiển thị danh sách sản phẩm có thể mua
Chọn sản phẩm để thêm vào giỏ hàng

Điều hướng đến CheckoutScreen khi bấm "Mua hàng"

Mô tả hoạt động Người dùng mở ứng dụng, danh sách sản phẩm hiển thị

Khi nhấn vào một sản phẩm, có thể xem chi tiết hoặc thêm vào giỏ hàng

Khi nhấn vào nút "Mua hàng", chuyển sang CheckoutScreen

CheckoutScreen (Màn hình thanh toán) Chức năng Nhập thông tin thanh toán
Chọn phương thức thanh toán

Khi bấm "Pay for order", giả lập thanh toán thành công và chuyển đến SuccessScreen

Mô tả hoạt động Người dùng nhập thông tin thẻ

Chọn phương thức thanh toán

Khi nhấn nút "Pay for order", ứng dụng thực hiện:

Gửi dữ liệu thanh toán (ở đây chỉ là giả lập)

Chuyển màn hình sang SuccessScreen

Lưu ý: Nếu dữ liệu không hợp lệ, có thể hiển thị cảnh báo hoặc yêu cầu nhập lại.

SuccessScreen (Màn hình xác nhận thanh toán) Chức năng Xác nhận thanh toán thành công
Hiển thị tổng tiền đơn hàng

Cung cấp nút "Tải hóa đơn" hoặc "Xem chi tiết"

Mô tả hoạt động Khi thanh toán xong, ứng dụng hiển thị SuccessScreen

Người dùng có thể:

Bấm "Check Details" để xem đơn hàng

Bấm "Download Invoice" để tải hóa đơn

Lưu ý: Nếu muốn quay lại trang chủ, có thể thêm nút "Back to Home".

ScanScreen (Màn hình quét sản phẩm - không dùng camera) Chức năng Hiển thị hình ảnh sản phẩm đang quét
Tạo hiệu ứng khung quét

Hiển thị tên sản phẩm & nút thêm vào giỏ hàng

Mô tả hoạt động Khi người dùng vào ScanScreen, ứng dụng hiển thị hình ảnh sản phẩm

Hiệu ứng khung quét tạo cảm giác đang quét sản phẩm

Ở dưới cùng, hiển thị tên sản phẩm và nút thêm (+)

Lưu ý: Nếu muốn tích hợp camera thực tế, có thể dùng react-native-camera.

Tóm tắt luồng hoạt động Người dùng vào HomeScreen, chọn sản phẩm

Bấm "Mua hàng" → Đi đến CheckoutScreen

Nhập thông tin, bấm "Pay for order" → Chuyển đến SuccessScreen

Có thể tải hóa đơn hoặc quay lại trang chủ

Nếu vào ScanScreen, xem trước sản phẩm bằng ảnh tượng trưng

![image](https://github.com/user-attachments/assets/9c173d58-0ede-42de-afa4-d7518c2d8845)
![image](https://github.com/user-attachments/assets/b71e3678-2b73-4ad5-a380-18ba155005e2)
![image](https://github.com/user-attachments/assets/5fdd6a9a-1ec2-4402-a300-2b48f5e5c045)
![image](https://github.com/user-attachments/assets/30ef04cb-37e8-4ed7-834c-b9581360fa12)





