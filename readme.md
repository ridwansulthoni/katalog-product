# Katalog Produk

Katalog Produk is a simple application that uses Express.js and MySQL to manage data for product, categorie, and brand. This application provides an API for performing CRUD operations on the mentioned resources.

## Installation

Clone repositori :

```bash
git clone https://github.com/ridwansulthoni/katalog-product.git
cd katalog-product

```

Instal dependensi :

```bash
npm install

```

Run app :

```bash
npm run api-service

```

## Documentation API

| Path               | Method   | Description                  |
| :----------------- | :------- | :--------------------------- |
| `/api/v1/produk`   | `GET`    | Get all product.             |
| `/api/v1/produk`   | `POST`   | Add a new product.           |
| `/api/v1/produk`   | `PUT`    | Update an existing product.  |
| `/api/v1/produk`   | `DELETE` | Delete a product.            |
| `/api/v1/kategori` | `GET`    | Get all categori.            |
| `/api/v1/kategori` | `POST`   | Add a new categori.          |
| `/api/v1/kategori` | `PUT`    | Update an existing categori. |
| `/api/v1/kategori` | `DELETE` | Delete a categori.           |
| `/api/v1/merek`    | `GET`    | Get all brand.               |
| `/api/v1/merek`    | `POST`   | Add a new brand.             |
| `/api/v1/merek`    | `PUT`    | Update an existing brand.    |
| `/api/v1/merek`    | `DELETE` | Delete a brand.              |

## Structure Folder

```bash
src/
├── config/
│   └── db.js
├── controller/
│   ├── productController.js
│   ├── categoryController.js
│   └── brandController.js
├── routes/
│   ├── productRoutres.js
│   ├── categoryRouters.js
│   └── brandRouters.js
├── utils/
│   └── response.js
├── index.js
└── server.js

```
