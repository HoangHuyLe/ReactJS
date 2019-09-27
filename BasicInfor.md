### JSX là gì?
Là một cấu trúc ngữ pháp mở rộng của JavaScript, cú pháp rất giống với HTML.

### Bable là gì?
- Bable là một công cụ chuyển đổi mã lệnh JavaScript từ ES (ECMAScript) phiên bản mới về phiên bản cũ hơn, nhằm có thể chạy được trên nhiều trình duyệt khác nhau.

### Props là gì? State là gì? Sự khác nhau giữa state và props
- State: 
     - Khai báo những giá trị cần lưu trữ riêng của component đó.
     - Tạo state tại constructor. Gọi `this.state = { key:value, key1:value1, ...}`
     - Gọi State: `this.state.key`
     - Thay đổi state: this.setState({key:value, key1:value1,...})
     - Phạm vi State: private in component