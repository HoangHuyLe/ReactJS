## 1- Sesstion là gì?
- Một tập tin lưu lại dữ liệu của người dùng sử dụng website, được lưu ở server.
- Mỗi session được tạo ra thì cần phải có một cookie tương ứng với nó để xác định xem session này được sử dụng cho trình duyệt nào. 

### Cookie là gì?
- Một tập tin lưu lại lịch sử duyệt web của người dùng
- Lưu trên máy người dùng 

### LocalStorage & SessionStorage
- Giúp lưu trữ dữ liệu tạm thời ở trình duyệt
- Local storage mất khi xóa lịch sử hoặc dùng lệnh xóa. SessionStorage mất khi đóng trình duyệt.

## 2- JSX là gì?
Là một cấu trúc ngữ pháp mở rộng của JavaScript, cú pháp rất giống với HTML.

## 3- Bable là gì?
- Bable là một công cụ chuyển đổi mã lệnh JavaScript từ ES (ECMAScript) phiên bản mới về phiên bản cũ hơn, nhằm có thể chạy được trên nhiều trình duyệt khác nhau.

## 4- Props là gì? State là gì? Sự khác nhau giữa state và props
- State: 
     - Khai báo những giá trị cần lưu trữ riêng của component đó.
     - Tạo state tại constructor. Gọi `this.state = { key:value, key1:value1, ...}`
     - Gọi State: `this.state.key`
     - Thay đổi state: this.setState({key:value, key1:value1,...})\



     - Phạm vi State: private in component

## 5- ReactDOM
- ReactDOM.render() dùng để nhúng React vào trong DOM    

## 6- Lifecycle component
![LifeCycle_Component](./Picture/LifeCycleComponent.png)






# Lưu ý khi code Reactjs
## 1- Kiểu dữ liệu
- Biến khai báo bằng `const` thì không thể chỉnh sửa. Tuy nhiên, khi biến là array haowcj object, giá trị của nó có thể được update:

```
const helloWorld = {
     text: 'Welcome to the Road to learn React'
};
helloWorld.text = 'Bye Bye React';
```

                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                