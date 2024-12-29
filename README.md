![Logo](./assets/logo.png)

# Travel Vietnam - API Documentation

## Mô Tả:
Travel Vietnam là một API backend được xây dựng bằng NestJS, cung cấp các chức năng quản lý du lịch như quản lý người dùng, quyền, vai trò, khách sạn, tour du lịch, đánh giá, đặt phòng và các khuyến mãi. API này được thiết kế để phục vụ cho các ứng dụng web hoặc ứng dụng di động liên quan đến du lịch Việt Nam.


## Công Nghệ Sử Dụng:
* [NestJS](https://nestjs.com/): Một framework Node.js mạnh mẽ để xây dựng các ứng dụng backend có khả năng mở rộng và dễ bảo trì.
* [MongoDB](https://www.mongodb.com/): Cơ sở dữ liệu NoSQL linh hoạt để lưu trữ dữ liệu ứng dụng.


## API Endpoints:


### 1. Permission


#### 1.1. Tạo mới Permission
- **Endpoint:** `POST /permission/create`
- **Mô tả:** Tạo một quyền mới.
- **Body (JSON):**
    ```json
    {
        "name": "Tên quyền",
        "code": "Mã quyền",
        "group": "Nhóm quyền",
        "status": "PUBLISHED"
    }
    ```
- **Ví dụ:**
    ```json
    {
        "name": "Role Delete",
        "code": "ROLE_DELETE",
        "group": "ROLES",
        "status": "PUBLISHED"
    }
    ```
- **Response:** Trả về thông tin permission vừa tạo


#### 1.2. Lấy danh sách Permission
- **Endpoint:** `GET /permission/list`
- **Mô tả:** Lấy danh sách các quyền, có phân trang.
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=5`).
    - `page`: Số trang (ví dụ: `page=1`).
- **Ví dụ:** `GET /permission/list?limit=5&page=1`
- **Response:** Trả về danh sách permission


#### 1.3. Cập nhật Permission
- **Endpoint:** `PUT /permission/update/{id}`
- **Mô tả:** Cập nhật thông tin một quyền.
- **Path Parameter:**
    - `id`: ID của permission cần cập nhật.
- **Body (JSON):**
    ```json
    {
        "name": "Tên quyền",
        "code": "Mã quyền",
        "group": "Nhóm quyền",
        "status": "PUBLISHED"
    }
    ```
- **Ví dụ:** `PUT /permission/update/66e7a178ac8985ca356b3b21`
- **Response:** Trả về thông tin permission sau khi cập nhật


#### 1.4. Xóa Permission
- **Endpoint:** `DELETE /permission/delete/{id}`
- **Mô tả:** Xóa một quyền theo ID.
- **Path Parameter:**
    - `id`: ID của permission cần xóa.
- **Ví dụ:** `DELETE /permission/delete/id`
- **Response:** Thông báo xóa thành công


### 2. Role


#### 2.1. Tạo mới Role
- **Endpoint:** `POST /role/create`
- **Mô tả:** Tạo một vai trò mới.
- **Body (JSON):**
    ```json
    {
        "name": "Tên vai trò",
        "code": "Mã vai trò",
        "group": "Nhóm vai trò",
        "status": "PUBLISHED"
    }
    ```
- **Ví dụ:**
    ```json
    {
        "name": "Role Delete",
        "code": "ROLE_DELETE",
        "group": "ROLES",
        "status": "PUBLISHED"
    }
    ```
- **Response:** Trả về thông tin role vừa tạo


#### 2.2. Lấy danh sách Role
- **Endpoint:** `GET /roles/get-all`
- **Mô tả:** Lấy danh sách các vai trò, có phân trang.
- **Headers:**
    - `Authorization`: `Bearer {accessToken}`
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=5`).
    - `page`: Số trang (ví dụ: `page=0`).
- **Ví dụ:** `GET /roles/get-all?limit=5&page=0`
- **Response:** Trả về danh sách role


#### 2.3. Cập nhật Role
- **Endpoint:** `PUT /update/{id}`
- **Mô tả:** Cập nhật thông tin một vai trò.
- **Path Parameter:**
    - `id`: ID của role cần cập nhật.
- **Body (JSON):**
    ```json
    {
        "name": "Tên vai trò",
        "code": "Mã vai trò",
        "group": "Nhóm vai trò",
        "status": "PUBLISHED"
    }
    ```
- **Ví dụ:** `PUT /update/66e7a178ac8985ca356b3b21`
- **Response:** Trả về thông tin role sau khi cập nhật


#### 2.4. Xóa Role
- **Endpoint:** `DELETE /role/delete/{id}`
- **Mô tả:** Xóa một vai trò theo ID.
- **Path Parameter:**
    - `id`: ID của role cần xóa.
- **Ví dụ:** `DELETE /role/delete/id`
- **Response:** Thông báo xóa thành công


### 3. Auth


#### 3.1. Đăng ký người dùng
- **Endpoint:** `POST /auth/register`
- **Mô tả:** Đăng ký một người dùng mới.
- **Body (JSON):**
    ```json
    {
        "email": "johndoe@example.com",
        "password": "password123",
        "role": "admin",
        "fullName": "John Doe",
        "avatar": "https://example.com/avatar.jpg",
        "photoCover": "https://example.com/cover.jpg",
        "bio": "Software engineer with 5 years of experience in web development."
    }
    ```
- **Response:** Trả về thông tin user vừa đăng kí


#### 3.2. Đăng nhập
- **Endpoint:** `POST /auth/login`
- **Mô tả:** Đăng nhập bằng email và password
- **Body (JSON):**
    ```json
    {
        "email": "admin@travel.com",
        "password": "Admin123"
    }
    ```
- **Response:** Trả về `access_token`


### 4. Hotels


#### 4.1. Tìm kiếm Khách sạn
- **Endpoint:** `GET /hotels/search`
- **Mô tả:** Tìm kiếm khách sạn theo các tiêu chí.
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=10`).
    - `page`: Số trang (ví dụ: `page=0`).
    - `name`: Tên khách sạn.
    - `maxGroupSize`: Số lượng người tối đa.
    - `price`: Giá.
    - `status`: Trạng thái.
- **Ví dụ:** `GET /hotels/search?limit=10&page=0&name=&maxGroupSize=`
- **Response:** Trả về danh sách khách sạn phù hợp


#### 4.2. Tạo Đánh giá Khách sạn
- **Endpoint:** `POST /reviews/{hotelId}/hotel`
- **Mô tả:** Tạo một đánh giá cho khách sạn.
- **Headers:**
    - `Authorization`: `Bearer {accessToken}`
- **Path Parameter:**
    - `hotelId`: ID của khách sạn.
- **Body (JSON):**
    ```json
    {
        "userId": "66e8d93d3e2e52e70d7cc229",
        "reviewText": "Xịn lắm lun á!",
        "rating": 5
    }
    ```
- **Ví dụ:** `POST /reviews/673e0e79d4fba1add3d42a12/hotel`
- **Response:** Trả về thông tin review vừa tạo


#### 4.3. Tạo mới Khách sạn
- **Endpoint:** `POST /hotels`
- **Mô tả:** Tạo một khách sạn mới.
- **Headers:**
    - `Authorization`: `Bearer {accessToken}`
    - `Content-Type`: `multipart/form-data`
- **Body (form-data):**
    - `name`: Tên khách sạn.
    - `address[province]`: Tỉnh thành.
    - `address[district]`: Quận huyện.
    - `address[ward]`: Phường xã.
    - `description`: Mô tả khách sạn.
    - `amenities[]`: Danh sách tiện nghi (ví dụ: `Wi-Fi`).
    - `files`: Danh sách ảnh của khách sạn.
    - `price`: Giá khách sạn.
    - `startDate`: Ngày bắt đầu
    - `endDate`: Ngày kết thúc
- **Ví dụ:**
    ```form-data
    name: aaaaa
    address[province]: 77
    address[district]: 754
    address[ward]: 26704
    description: aaaaa
    amenities[]: Wi-Fi
    files: [file1.png, file2.jpg]
    price: 111111
    startDate: 2024-10-11T00:00:00.000+00:00
    endDate: 2024-10-18T00:00:00.000+00:00
    ```
- **Response:** Trả về thông tin khách sạn vừa tạo


#### 4.4. Cập nhật Khách sạn
- **Endpoint:** `PUT /hotels/{id}`
- **Mô tả:** Cập nhật thông tin khách sạn.
- **Path Parameter:**
    - `id`: ID của khách sạn cần cập nhật.
- **Body (form-data):**
    - `name`: Tên khách sạn.
    - `address`: Địa chỉ.
    - `rating`: Đánh giá.
    - `description`: Mô tả khách sạn.
    - `amenities[]`: Danh sách tiện nghi (ví dụ: `Wi-Fi`).
    - `files`: Danh sách ảnh mới của khách sạn.
    - `images[]`: Danh sách ảnh cũ của khách sạn
- **Ví dụ:**
    ```form-data
    name: 1111
    address: 1323
    rating: 5
    description: 123
    amenities[]: Wi-fi
    files: [file1.png, file2.jpg]
    images[]: https://storage.googleapis.com/travel-vietnam-2cca2.appspot.com/hotels/1727672498235__2c4e6a2a-d64d-4d50-b426-71b3e2d70aea.jpeg
    images[]: https://storage.googleapis.com/travel-vietnam-2cca2.appspot.com/hotels/1727678278185__14fece06-8272-403c-9c8c-b5688e558e06.jpeg
    ```
- **Response:** Trả về thông tin khách sạn sau khi cập nhật


#### 4.5. Xóa Khách sạn
- **Endpoint:** `DELETE /hotels/{id}`
- **Mô tả:** Xóa một khách sạn theo ID.
- **Path Parameter:**
    - `id`: ID của khách sạn cần xóa.
- **Ví dụ:** `DELETE /hotels/670104e3e83937020c920a0e`
- **Response:** Thông báo xóa thành công


### 5. Reviews


#### 5.1. Get reviews
- **Endpoint:** `GET /hotels/search`
- **Mô tả:** Get review, không rõ type
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=10`).
    - `page`: Số trang (ví dụ: `page=0`).
    - `search`: Không rõ.
- **Ví dụ:** `GET /hotels/search?limit=10&page=0`
- **Response:** Trả về thông tin review


#### 5.2. Tạo review hotel
- **Endpoint:** `POST /tours/{tourId}/reviews`
- **Mô tả:** Tạo một review cho tour theo tourId
- **Path Parameters:**
    - `tourId`: Id của tour
- **Body (JSON):**
    ```json
    {
        "userId": "66e8d93d3e2e52e70d7cc229",
        "reviewText": "hello 123",
        "rating": 5
    }
    ```
- **Response:** Trả về thông tin review vừa tạo


### 6. Discount


#### 6.1. Tìm kiếm Discount
- **Endpoint:** `GET /hotels/search`
- **Mô tả:** Tìm kiếm Discount, không rõ
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=10`).
    - `page`: Số trang (ví dụ: `page=0`).
    - `search`: Không rõ.
- **Ví dụ:** `GET /hotels/search?limit=10&page=0`
- **Response:** Trả về thông tin discount


#### 6.2. Tìm kiếm Discount
- **Endpoint:** `GET /hotels`
- **Mô tả:** Tìm kiếm Discount, không rõ
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang ```markdown
    (ví dụ: `limit=10`).
    - `page`: Số trang (ví dụ: `page=0`).
    - `search`: Không rõ.
- **Ví dụ:** `GET /hotels?limit=10&page=0&search=142`
- **Response:** Trả về thông tin discount


#### 6.3. Tạo Discount
- **Endpoint:** `POST /discounts`
- **Mô tả:** Tạo mới một mã giảm giá
- **Headers:**
    - `Authorization`: Bearer {accessToken}
- **Body (JSON):**
    ```json
    {
        "code": "PQTBVNHT300K",
        "description": "Mã 300K | Phú Quốc",
        "type": "HOTEL",
        "value": 300,
        "startDate": "2024-11-21",
        "endDate": "2024-12-08",
        "min_order_value": 100000,
        "max_discount_value": 2000000
    }
    ```
- **Response:** Trả về thông tin discount vừa tạo


### 7. Rooms


#### 7.1. Tìm kiếm phòng
- **Endpoint:** `GET /rooms`
- **Mô tả:** Lấy danh sách phòng.
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=10`).
    - `search`: không rõ.
- **Ví dụ:** `GET /rooms?limit=10`
- **Response:** Trả về danh sách room


#### 7.2. Lấy phòng theo hotelId và roomId
- **Endpoint:** `GET /rooms/{hotelId}/{roomId}`
- **Mô tả:** Lấy thông tin một phòng theo ID của khách sạn và phòng.
- **Path Parameters:**
    - `hotelId`: ID của khách sạn.
    - `roomId`: ID của phòng.
- **Ví dụ:** `GET /rooms/66fa2bbf3f13cce22bb16b40/66fa5550234c4da4ca584671`
- **Response:** Trả về thông tin room


#### 7.3. Tạo mới phòng
- **Endpoint:** `POST /rooms`
- **Mô tả:** Tạo một phòng mới.
- **Headers:**
    - `Content-Type`: multipart/form-data
- **Body (form-data):**
    - `roomNumber`: Số phòng.
    - `price`: Giá phòng.
    - `available`: Tình trạng phòng.
    - `hotelId`: ID của khách sạn.
    - `roomType`: Loại phòng.
    - `maxOccupancy`: Số người tối đa.
    - `amenities[]`: Danh sách tiện nghi.
    - `files`: Ảnh phòng.
    - `description`: Mô tả phòng.
- **Ví dụ:**
    ```form-data
    roomNumber: 123
    price: 1323
    available: 
    hotelId: 66fa2bbf3f13cce22bb16b40
    roomType: standard
    maxOccupancy: 5
    amenities[]: Wi-fi
    files: /Users/apple/Downloads/_2c4e6a2a-d64d-4d50-b426-71b3e2d70aea.jpeg
    description: 123
    ```
- **Response:** Trả về thông tin phòng vừa tạo


### 8. Tour


#### 8.1. Review tour
- **Endpoint:** `GET /hotels/search`
- **Mô tả:** Tìm kiếm theo không rõ
- **Query Parameters:**
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=10`).
    - `page`: Số trang (ví dụ: `page=0`).
    - `search`: Không rõ.
- **Ví dụ:** `GET /hotels/search?limit=10&page=0`


#### 8.2. Bookings
- **Endpoint:** `GET /bookings`
- **Mô tả:** Lấy toàn bộ booking
- **Response:** Trả về danh sách booking


- **Endpoint:** `POST /bookings`
- **Mô tả:** Tạo một booking mới
- **Body (JSON):**
    ```json
    {
        "userId": "66e8d93d3e2e52e70d7cc229",
        "tourId": "66fd08144bed5f03ee539f5b",
        "guestSize": 2
    }
    ```
- **Response:** Trả về thông tin booking vừa tạo


#### 8.3. Tạo Tour
- **Endpoint:** `POST /tours`
- **Mô tả:** Tạo một tour du lịch mới.
- **Headers:**
    - `Authorization`: Bearer {accessToken}
    - `Content-Type`: multipart/form-data
- **Body (form-data):**
    - `title`: Tên tour.
    - `desc`: Mô tả tour.
    - `price`: Giá tour.
    - `maxGroupSize`: Số người tối đa.
    - `files`: Ảnh tour.
    - `hotelId`: ID của khách sạn.
    - `startDate`: Ngày bắt đầu.
    - `endDate`: Ngày kết thúc.
    - `destination[province]`: Tỉnh thành đến.
    - `destination[district]`: Quận huyện đến.
    - `destination[ward]`: Phường xã đến.
    - `departurePoint[province]`: Tỉnh thành đi.
    - `departurePoint[district]`: Quận huyện đi.
    - `departurePoint[ward]`: Phường xã đi.
- **Ví dụ:**
    ```form-data
    title: Explore the Ancient Ruins of Rome 2
    desc: 11222111111
    price: 111111
    maxGroupSize: 10
    files: /Users/133th/Downloads/hinh-nen-pc-4k-chill_040237333.jpg
    hotelId: 67010643d0b5a85f149b1d46
    startDate: 2024-10-05
    endDate: 2024-10-10
    destination[province]: Lazio
    destination[district]: Lazio
    destination[ward]: Lazio
    departurePoint[province]: Rome
    departurePoint[district]: Central
    departurePoint[ward]: Rome Center
    ```
- **Response:** Trả về thông tin tour vừa tạo


#### 8.4. Lấy danh sách Tour
- **Endpoint:** `GET /tours`
- **Mô tả:** Lấy danh sách các tour du lịch, có phân trang.
- **Query Parameters:**
    - `page`: Số trang (ví dụ: `page=0`).
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=9`).
    - `city`: Không rõ.
- **Ví dụ:** `GET /tours?page=0&limit=9&city=123`
- **Response:** Trả về danh sách tour


#### 8.5. Tìm kiếm tour
- **Endpoint:** `GET /tours/search`
- **Mô tả:** Tìm kiếm tour du lịch
- **Query Parameters:**
    - `page`: Số trang (ví dụ: `page=0`).
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=9`).
    - `city`: không rõ.
    - `groupSize`: số lượng người trong group
- **Ví dụ:** `GET /tours/search?page=0&limit=9&city=12&groupSize=6`
- **Response:** Trả về danh sách tour


#### 8.6. Lấy tour nổi bật
- **Endpoint:** `GET /tours/featured`
- **Mô tả:** Lấy danh sách các tour nổi bật
- **Response:** Trả về danh sách tour nổi bật


#### 8.7. Lấy tour theo ID
- **Endpoint:** `GET /get/{id}`
- **Mô tả:** Lấy thông tin tour theo ID
- **Path Parameter:**
    - `id`: ID của tour
- **Ví dụ:** `GET /get/66fd08144bed5f03ee539f5b`
- **Response:** Trả về thông tin tour


#### 8.8. Xóa Tour
- **Endpoint:** `DELETE /tours/{id}`
- **Mô tả:** Xóa một tour du lịch theo ID.
- **Headers:**
    - `Authorization`: Bearer {accessToken}
- **Path Parameter:**
    - `id`: ID của tour cần xóa.
- **Ví dụ:** `DELETE /tours/6700fbd82315cf58d2f2fccc`
- **Response:** Thông báo xóa thành công


### 9. Users


#### 9.1. Lấy danh sách User
- **Endpoint:** `GET /users`
- **Mô tả:** Lấy danh sách thông tin user
 - **Headers:**
    - `Authorization`: Bearer {accessToken}
- **Response:** Trả về danh sách user


#### 9.2. Update password
- **Endpoint:** `PUT /users/change-password/{id}`
- **Mô tả:** Cập nhật password user
- **Headers:**
    - `Authorization`: Bearer {accessToken}
- **Path Parameter:**
    - `id`: ID của user.
- **Body (JSON):**
    ```json
    {
        "oldPassword": "Admin111",
        "newPassword": "Admin123"
    }
    ```
- **Ví dụ:** `PUT /users/change-password/670758fa8dad956b35385ad8`
- **Response:** Trả về thông tin user sau khi đổi pass


### 10. Booking


#### 10.1. get all booking user
- **Endpoint:** `GET /bookings`
- **Mô tả:** Lấy toàn bộ booking của user đang login
- **Headers:**
    - `Authorization`: Bearer {accessToken}
- **Response:** Trả về danh sách booking


#### 10.2. get all booking admin
- **Endpoint:** `GET /bookings/search`
- **Mô tả:** Lấy toàn bộ booking của admin
- **Headers:**
    - `Authorization`: Bearer {accessToken}
- **Query Parameters:**
    - `page`: Số trang (ví dụ: `page=0`).
    - `limit`: Số lượng bản ghi trên mỗi trang (ví dụ: `limit=5`).
    - `amount`: Không rõ
    - `status`: Trạng thái
    - `bookingType`: loại booking
- **Ví dụ:** `GET /bookings/search?page=0&limit=5&amount=&status=&bookingType=`
- **Response:** Trả về danh sách booking ```markdown