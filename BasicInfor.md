### JSX là gì?
Là một cấu trúc ngữ pháp mở rộng của JavaScript, cú pháp rất giống với HTML.

### Bable là gì?
- Bable là một công cụ chuyển đổi mã lệnh JavaScript từ ES (ECMAScript) phiên bản mới về phiên bản cũ hơn, nhằm có thể chạy được trên nhiều trình duyệt khác nhau.

### Props là gì? State là gì? Sự khác nhau giữa state và props
- State: 
     - Khai báo những giá trị cần lưu trữ riêng của component đó.
     - Tạo state tại constructor. Gọi `this.state = { key:value, key1:value1, ...}`
     - Gọi State: `this.state.key`
     - Thay đổi state: this.setState({key:value, key1:value1,...})\



     - Phạm vi State: private in component

### Kieu du lieu
- Biến khai báo bằng `const` thì không thể chỉnh sửa. Tuy nhiên, khi biến là array haowcj object, giá trị của nó có thể được update:

```
const helloWorld = {
     text: 'Welcome to the Road to learn React'
};
helloWorld.text = 'Bye Bye React';
```

### ReactDOM
- ReactDOM.render() dùng để nhúng React vào trong DOM