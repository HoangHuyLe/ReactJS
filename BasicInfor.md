## 1- JSX là gì?
Là một cấu trúc ngữ pháp mở rộng của JavaScript, cú pháp rất giống với HTML.

## 2- Bable là gì?
- Bable là một công cụ chuyển đổi mã lệnh JavaScript từ ES (ECMAScript) phiên bản mới về phiên bản cũ hơn, nhằm có thể chạy được trên nhiều trình duyệt khác nhau.

## 3- Props là gì? State là gì? Sự khác nhau giữa state và props
- State: 
     - Khai báo những giá trị cần lưu trữ riêng của component đó.
     - Tạo state tại constructor. Gọi `this.state = { key:value, key1:value1, ...}`
     - Gọi State: `this.state.key`
     - Thay đổi state: this.setState({key:value, key1:value1,...})\



     - Phạm vi State: private in component

## 4- ReactDOM
- ReactDOM.render() dùng để nhúng React vào trong DOM    

## 5- Lifecycle component
![LifeCycle_Component](./Picture/LifeCycleComponent.png)

- **componentWillMount**: trước khi component được gắn vào DOM bằng hàm render() thì hàm componentWillMount sẽ được gọi.
- **componentDidMount**: được gọi sau khi render component.
- **componentWillReceiveProps**: chạy khi component con nhận props từ component cha. Sau khi nhận được props, component con có thể set lại State
- **shouldcomponentUpdate**: Nếu như return false thì các phương thức componentWillUpdate, render, componentDidUpdate sẽ không được chạy nữa(vì mặc định nó return về true để chạy được 3 hàm tiếp theo, nhiều trường hợp mình không cần chạy 3 hàm tiếp theo).
- **componentWillUpdate**: Gọi trước khi render.
- **componentDidUpdate**: được gọi sau khi đã re-render lại hay React đã cập nhật UI.
- **componentWillUnmount**: xảy ra khi component bị remove khoi DOM hoặc người dùng chuyển hướng trang web


## 6- Redux
- Khái niệm: một thùng chứa các State cho các ứng dụng JS, mỗi component đều có thể truy cập bất kỳ State nào trong Store
- Tác dụng:
     - Giúp viết các ứng dụng một cách nhất quán
     - Cạ trong mác môi trường khác nha (client, server, native)
     - Dễ dàng để test


## 7- Sự khác biệt giữa Functional và Class component
- Functional component: 
     - Là hàm JS đơn giản
     - Không thể sử dụng setState bên trong hàm
     - Không thể sử dụng lifecycle hooks
nhưng lợi ích của nó là:
     - Dễ đọc và dễ test
     - Code gọn hơn
     - React team đề cập rằng Performance của nó cao hơn

# Lưu ý khi code Reactjs
## 1- Kiểu dữ liệu
- Biến khai báo bằng `const` thì không thể chỉnh sửa. Tuy nhiên, khi biến là array haowcj object, giá trị của nó có thể được update:

```
const helloWorld = {
     text: 'Welcome to the Road to learn React'
};
helloWorld.text = 'Bye Bye React';
```
## Tránh tham chiếu dữ liệu
return [...state]; Coppy state ra một đối tượng mới và trả về thằng đã coppy
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                