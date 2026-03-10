# Rencana Pembuatan Website PPOB (Payment Point Online Bank)

## 1. Ringkasan Proyek

Website PPOB adalah platform pembayaran online yang memungkinkan pengguna untuk melakukan berbagai transaksi seperti pembelian pulsa, token listrik, pembayaran tagihan (PDAM, BPJS, internet), dan layanan digital lainnya.

### Tech Stack

| Komponen | Teknologi |
|----------|-----------|
| Backend | Node.js (Express.js) |
| Frontend | React.js (Vite) + TailwindCSS |
| Database | MySQL (Sequelize ORM) |
| Cache & Session | Redis |
| Autentikasi | JWT (JSON Web Token) |
| Payment Gateway | Midtrans / Xendit |
| API Provider PPOB | DigiFlazz / MobilePulsa / IAK |

---

## 2. Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────────┐
│                        CLIENT                               │
│              React.js (Vite) + TailwindCSS                  │
│                     Port: 5173                              │
└──────────────────────┬──────────────────────────────────────┘
                       │ HTTP/HTTPS (REST API)
┌──────────────────────▼──────────────────────────────────────┐
│                    BACKEND (Node.js)                        │
│                   Express.js - Port: 3000                   │
│  ┌─────────┐  ┌────────────┐  ┌───────────┐  ┌──────────┐ │
│  │ Routes  │→ │Controllers │→ │ Services  │→ │  Models   │ │
│  └─────────┘  └────────────┘  └───────────┘  └──────────┘ │
│  ┌──────────────┐  ┌────────────┐  ┌──────────────────┐   │
│  │ Middlewares  │  │ Validators │  │    Utilities      │   │
│  └──────────────┘  └────────────┘  └──────────────────┘   │
└──────┬───────────────────┬──────────────────────────────────┘
       │                   │
┌──────▼──────┐     ┌──────▼──────┐
│    MySQL    │     │    Redis    │
│  Port: 3306 │     │  Port: 6379 │
└─────────────┘     └─────────────┘
```

---

## 3. Struktur Folder Proyek

### 3.1 Struktur Backend (`/backend`)

```
backend/
├── src/
│   ├── config/
│   │   ├── database.js          # Konfigurasi koneksi MySQL (Sequelize)
│   │   ├── redis.js             # Konfigurasi koneksi Redis
│   │   ├── jwt.js               # Konfigurasi JWT secret & options
│   │   └── app.js               # Konfigurasi Express app
│   │
│   ├── models/
│   │   ├── index.js             # Inisialisasi Sequelize & relasi antar model
│   │   ├── User.js              # Model pengguna
│   │   ├── Transaction.js       # Model transaksi
│   │   ├── Product.js           # Model produk PPOB
│   │   ├── Category.js          # Model kategori produk
│   │   ├── Balance.js           # Model saldo pengguna
│   │   ├── BalanceMutation.js   # Model mutasi saldo
│   │   ├── Deposit.js           # Model deposit/top-up saldo
│   │   ├── Commission.js        # Model komisi agen
│   │   ├── Notification.js      # Model notifikasi
│   │   ├── Setting.js           # Model pengaturan sistem
│   │   └── AuditLog.js          # Model log audit
│   │
│   ├── controllers/
│   │   ├── authController.js    # Controller autentikasi (login, register, logout)
│   │   ├── userController.js    # Controller manajemen pengguna
│   │   ├── productController.js # Controller produk PPOB
│   │   ├── transactionController.js  # Controller transaksi
│   │   ├── balanceController.js # Controller saldo
│   │   ├── depositController.js # Controller deposit
│   │   ├── reportController.js  # Controller laporan
│   │   ├── settingController.js # Controller pengaturan
│   │   └── notificationController.js # Controller notifikasi
│   │
│   ├── services/
│   │   ├── authService.js       # Logika bisnis autentikasi
│   │   ├── userService.js       # Logika bisnis pengguna
│   │   ├── productService.js    # Logika bisnis produk
│   │   ├── transactionService.js # Logika bisnis transaksi
│   │   ├── balanceService.js    # Logika bisnis saldo
│   │   ├── depositService.js    # Logika bisnis deposit
│   │   ├── ppobService.js       # Integrasi API provider PPOB
│   │   ├── paymentService.js    # Integrasi payment gateway
│   │   ├── notificationService.js # Logika bisnis notifikasi
│   │   ├── reportService.js     # Logika bisnis laporan
│   │   ├── cacheService.js      # Service Redis caching
│   │   └── webhookService.js    # Pengelolaan callback/webhook
│   │
│   ├── routes/
│   │   ├── index.js             # Kumpulan semua route
│   │   ├── authRoutes.js        # Route autentikasi
│   │   ├── userRoutes.js        # Route pengguna
│   │   ├── productRoutes.js     # Route produk
│   │   ├── transactionRoutes.js # Route transaksi
│   │   ├── balanceRoutes.js     # Route saldo
│   │   ├── depositRoutes.js     # Route deposit
│   │   ├── reportRoutes.js      # Route laporan
│   │   ├── settingRoutes.js     # Route pengaturan
│   │   ├── webhookRoutes.js     # Route callback/webhook
│   │   └── notificationRoutes.js # Route notifikasi
│   │
│   ├── middlewares/
│   │   ├── authMiddleware.js    # Middleware autentikasi JWT
│   │   ├── roleMiddleware.js    # Middleware otorisasi berdasarkan role
│   │   ├── rateLimiter.js       # Middleware pembatasan request (Redis)
│   │   ├── validator.js         # Middleware validasi input
│   │   ├── errorHandler.js      # Middleware penanganan error global
│   │   ├── logger.js            # Middleware logging request
│   │   └── cors.js              # Middleware CORS
│   │
│   ├── validators/
│   │   ├── authValidator.js     # Validasi input autentikasi
│   │   ├── userValidator.js     # Validasi input pengguna
│   │   ├── transactionValidator.js # Validasi input transaksi
│   │   ├── depositValidator.js  # Validasi input deposit
│   │   └── productValidator.js  # Validasi input produk
│   │
│   ├── utils/
│   │   ├── response.js          # Format response API standar
│   │   ├── pagination.js        # Helper paginasi
│   │   ├── encryption.js        # Utility enkripsi/dekripsi
│   │   ├── generateId.js        # Generator ID transaksi unik
│   │   ├── dateHelper.js        # Helper format tanggal
│   │   └── constants.js         # Konstanta aplikasi
│   │
│   ├── jobs/
│   │   ├── checkPendingTransaction.js  # Cron job cek transaksi pending
│   │   ├── syncProducts.js      # Cron job sinkronisasi produk
│   │   └── cleanupLogs.js       # Cron job pembersihan log lama
│   │
│   └── database/
│       ├── migrations/          # File migrasi database
│       │   ├── 001_create_users.js
│       │   ├── 002_create_categories.js
│       │   ├── 003_create_products.js
│       │   ├── 004_create_balances.js
│       │   ├── 005_create_balance_mutations.js
│       │   ├── 006_create_transactions.js
│       │   ├── 007_create_deposits.js
│       │   ├── 008_create_commissions.js
│       │   ├── 009_create_notifications.js
│       │   ├── 010_create_settings.js
│       │   └── 011_create_audit_logs.js
│       │
│       └── seeders/             # File seeder data awal
│           ├── 001_admin_user.js
│           ├── 002_categories.js
│           ├── 003_products.js
│           └── 004_settings.js
│
├── tests/
│   ├── unit/
│   │   ├── services/
│   │   │   ├── authService.test.js
│   │   │   ├── transactionService.test.js
│   │   │   └── balanceService.test.js
│   │   └── utils/
│   │       ├── response.test.js
│   │       └── encryption.test.js
│   │
│   └── integration/
│       ├── auth.test.js
│       ├── transaction.test.js
│       └── product.test.js
│
├── .env.example               # Contoh environment variables
├── .sequelizerc               # Konfigurasi path Sequelize CLI
├── package.json
├── nodemon.json
└── server.js                  # Entry point aplikasi
```

### 3.2 Struktur Frontend (`/frontend`)

```
frontend/
├── public/
│   ├── favicon.ico
│   └── logo.png
│
├── src/
│   ├── api/
│   │   ├── axiosInstance.js     # Konfigurasi Axios (base URL, interceptor)
│   │   ├── authApi.js           # API call autentikasi
│   │   ├── productApi.js        # API call produk
│   │   ├── transactionApi.js    # API call transaksi
│   │   ├── balanceApi.js        # API call saldo
│   │   ├── depositApi.js        # API call deposit
│   │   ├── reportApi.js         # API call laporan
│   │   ├── userApi.js           # API call pengguna
│   │   └── notificationApi.js   # API call notifikasi
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Button.jsx       # Komponen tombol reusable
│   │   │   ├── Input.jsx        # Komponen input reusable
│   │   │   ├── Modal.jsx        # Komponen modal reusable
│   │   │   ├── Table.jsx        # Komponen tabel reusable
│   │   │   ├── Card.jsx         # Komponen card reusable
│   │   │   ├── Alert.jsx        # Komponen alert/notifikasi
│   │   │   ├── Spinner.jsx      # Komponen loading spinner
│   │   │   ├── Pagination.jsx   # Komponen paginasi
│   │   │   ├── Badge.jsx        # Komponen badge status
│   │   │   └── SearchBar.jsx    # Komponen pencarian
│   │   │
│   │   ├── layout/
│   │   │   ├── Navbar.jsx       # Navigasi atas
│   │   │   ├── Sidebar.jsx      # Navigasi samping
│   │   │   ├── Footer.jsx       # Footer
│   │   │   ├── MainLayout.jsx   # Layout utama (dengan sidebar)
│   │   │   └── AuthLayout.jsx   # Layout autentikasi (tanpa sidebar)
│   │   │
│   │   ├── dashboard/
│   │   │   ├── StatCard.jsx     # Card statistik dashboard
│   │   │   ├── RecentTransactions.jsx # Daftar transaksi terbaru
│   │   │   ├── SalesChart.jsx   # Grafik penjualan
│   │   │   └── BalanceWidget.jsx # Widget saldo
│   │   │
│   │   ├── transaction/
│   │   │   ├── ProductCard.jsx  # Card produk PPOB
│   │   │   ├── TransactionForm.jsx # Form transaksi
│   │   │   ├── TransactionDetail.jsx # Detail transaksi
│   │   │   ├── TransactionList.jsx # Daftar transaksi
│   │   │   └── TransactionFilter.jsx # Filter transaksi
│   │   │
│   │   ├── deposit/
│   │   │   ├── DepositForm.jsx  # Form deposit saldo
│   │   │   ├── DepositList.jsx  # Daftar deposit
│   │   │   └── DepositDetail.jsx # Detail deposit
│   │   │
│   │   └── user/
│   │       ├── ProfileForm.jsx  # Form edit profil
│   │       ├── ChangePasswordForm.jsx # Form ubah password
│   │       └── UserList.jsx     # Daftar pengguna (admin)
│   │
│   ├── pages/
│   │   ├── auth/
│   │   │   ├── LoginPage.jsx    # Halaman login
│   │   │   ├── RegisterPage.jsx # Halaman register
│   │   │   └── ForgotPasswordPage.jsx # Halaman lupa password
│   │   │
│   │   ├── dashboard/
│   │   │   └── DashboardPage.jsx # Halaman dashboard
│   │   │
│   │   ├── transaction/
│   │   │   ├── PulsaPage.jsx    # Halaman pembelian pulsa
│   │   │   ├── DataPage.jsx     # Halaman pembelian paket data
│   │   │   ├── PLNPage.jsx      # Halaman token listrik & tagihan PLN
│   │   │   ├── PDAMPage.jsx     # Halaman tagihan PDAM
│   │   │   ├── BPJSPage.jsx     # Halaman tagihan BPJS
│   │   │   ├── InternetPage.jsx # Halaman tagihan internet/TV kabel
│   │   │   ├── EWalletPage.jsx  # Halaman top-up e-wallet
│   │   │   ├── GamePage.jsx     # Halaman voucher game
│   │   │   └── TransactionHistoryPage.jsx # Halaman riwayat transaksi
│   │   │
│   │   ├── deposit/
│   │   │   ├── DepositPage.jsx  # Halaman deposit saldo
│   │   │   └── DepositHistoryPage.jsx # Halaman riwayat deposit
│   │   │
│   │   ├── report/
│   │   │   ├── SalesReportPage.jsx # Halaman laporan penjualan
│   │   │   └── CommissionReportPage.jsx # Halaman laporan komisi
│   │   │
│   │   ├── user/
│   │   │   ├── ProfilePage.jsx  # Halaman profil
│   │   │   └── UserManagementPage.jsx # Halaman manajemen user (admin)
│   │   │
│   │   ├── setting/
│   │   │   └── SettingPage.jsx  # Halaman pengaturan (admin)
│   │   │
│   │   └── NotFoundPage.jsx     # Halaman 404
│   │
│   ├── hooks/
│   │   ├── useAuth.js           # Custom hook autentikasi
│   │   ├── useBalance.js        # Custom hook saldo
│   │   ├── useTransaction.js    # Custom hook transaksi
│   │   ├── useNotification.js   # Custom hook notifikasi
│   │   └── useDebounce.js       # Custom hook debounce input
│   │
│   ├── store/
│   │   ├── index.js             # Konfigurasi Redux store / Zustand
│   │   ├── authSlice.js         # State management autentikasi
│   │   ├── balanceSlice.js      # State management saldo
│   │   ├── transactionSlice.js  # State management transaksi
│   │   ├── productSlice.js      # State management produk
│   │   └── notificationSlice.js # State management notifikasi
│   │
│   ├── utils/
│   │   ├── formatCurrency.js    # Format mata uang Rupiah
│   │   ├── formatDate.js        # Format tanggal Indonesia
│   │   ├── validation.js        # Validasi form
│   │   ├── constants.js         # Konstanta frontend
│   │   └── storage.js           # Helper localStorage/sessionStorage
│   │
│   ├── routes/
│   │   ├── AppRoutes.jsx        # Definisi semua route
│   │   ├── PrivateRoute.jsx     # Route yang memerlukan autentikasi
│   │   └── AdminRoute.jsx       # Route khusus admin
│   │
│   ├── styles/
│   │   └── index.css            # File CSS utama (TailwindCSS directives)
│   │
│   ├── App.jsx                  # Komponen root aplikasi
│   └── main.jsx                 # Entry point React
│
├── .env.example
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
├── postcss.config.js
└── eslint.config.js
```

---

## 4. Desain Database (MySQL)

### 4.1 Tabel `users`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID pengguna |
| uuid | VARCHAR(36) | UUID unik |
| name | VARCHAR(100) | Nama lengkap |
| email | VARCHAR(100) | Email (unik) |
| phone | VARCHAR(20) | Nomor telepon (unik) |
| password | VARCHAR(255) | Password (bcrypt hash) |
| role | ENUM('admin','agen','member') | Peran pengguna |
| status | ENUM('active','inactive','suspended') | Status akun |
| pin | VARCHAR(255) | PIN transaksi (hash) |
| avatar | VARCHAR(255) | URL foto profil |
| created_at | DATETIME | Tanggal dibuat |
| updated_at | DATETIME | Tanggal diperbarui |

### 4.2 Tabel `categories`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID kategori |
| name | VARCHAR(100) | Nama kategori |
| slug | VARCHAR(100) | Slug URL |
| icon | VARCHAR(255) | URL icon |
| description | TEXT | Deskripsi |
| is_active | BOOLEAN | Status aktif |
| sort_order | INT | Urutan tampil |
| created_at | DATETIME | Tanggal dibuat |
| updated_at | DATETIME | Tanggal diperbarui |

### 4.3 Tabel `products`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID produk |
| category_id | INT (FK) | ID kategori |
| provider_code | VARCHAR(50) | Kode produk dari provider API |
| name | VARCHAR(200) | Nama produk |
| brand | VARCHAR(100) | Merek (Telkomsel, PLN, dll.) |
| type | ENUM('prepaid','postpaid') | Tipe produk |
| base_price | DECIMAL(15,2) | Harga dasar dari provider |
| sell_price | DECIMAL(15,2) | Harga jual ke member |
| agent_price | DECIMAL(15,2) | Harga jual ke agen |
| admin_fee | DECIMAL(15,2) | Biaya admin |
| commission | DECIMAL(15,2) | Komisi per transaksi |
| is_active | BOOLEAN | Status aktif |
| description | TEXT | Deskripsi |
| created_at | DATETIME | Tanggal dibuat |
| updated_at | DATETIME | Tanggal diperbarui |

### 4.4 Tabel `balances`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID saldo |
| user_id | INT (FK) | ID pengguna |
| amount | DECIMAL(15,2) | Jumlah saldo |
| updated_at | DATETIME | Terakhir diperbarui |

### 4.5 Tabel `balance_mutations`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID mutasi |
| user_id | INT (FK) | ID pengguna |
| type | ENUM('credit','debit') | Tipe mutasi |
| amount | DECIMAL(15,2) | Jumlah |
| balance_before | DECIMAL(15,2) | Saldo sebelum |
| balance_after | DECIMAL(15,2) | Saldo sesudah |
| reference_type | VARCHAR(50) | Tipe referensi (transaction, deposit) |
| reference_id | INT | ID referensi |
| description | VARCHAR(255) | Keterangan |
| created_at | DATETIME | Tanggal dibuat |

### 4.6 Tabel `transactions`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID transaksi |
| user_id | INT (FK) | ID pengguna |
| product_id | INT (FK) | ID produk |
| trx_id | VARCHAR(30) | ID transaksi unik |
| target | VARCHAR(50) | Nomor tujuan (HP, meter, ID pelanggan) |
| price | DECIMAL(15,2) | Harga transaksi |
| admin_fee | DECIMAL(15,2) | Biaya admin |
| total | DECIMAL(15,2) | Total pembayaran |
| commission | DECIMAL(15,2) | Komisi |
| status | ENUM('pending','processing','success','failed','refunded') | Status transaksi |
| provider_ref | VARCHAR(100) | Referensi dari provider |
| provider_status | VARCHAR(50) | Status dari provider |
| serial_number | VARCHAR(255) | Serial number / token (hasil transaksi) |
| response_data | JSON | Data response lengkap dari provider |
| note | TEXT | Catatan |
| created_at | DATETIME | Tanggal dibuat |
| updated_at | DATETIME | Tanggal diperbarui |

### 4.7 Tabel `deposits`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID deposit |
| user_id | INT (FK) | ID pengguna |
| deposit_id | VARCHAR(30) | ID deposit unik |
| amount | DECIMAL(15,2) | Jumlah deposit |
| fee | DECIMAL(15,2) | Biaya transfer |
| total | DECIMAL(15,2) | Total yang harus dibayar |
| payment_method | VARCHAR(50) | Metode pembayaran |
| payment_channel | VARCHAR(50) | Channel pembayaran |
| payment_ref | VARCHAR(100) | Referensi pembayaran |
| status | ENUM('pending','paid','confirmed','expired','cancelled') | Status deposit |
| expired_at | DATETIME | Waktu kedaluwarsa |
| confirmed_at | DATETIME | Waktu dikonfirmasi |
| confirmed_by | INT | Dikonfirmasi oleh (admin) |
| note | TEXT | Catatan |
| created_at | DATETIME | Tanggal dibuat |
| updated_at | DATETIME | Tanggal diperbarui |

### 4.8 Tabel `commissions`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID komisi |
| user_id | INT (FK) | ID pengguna |
| transaction_id | INT (FK) | ID transaksi |
| amount | DECIMAL(15,2) | Jumlah komisi |
| status | ENUM('pending','paid') | Status komisi |
| created_at | DATETIME | Tanggal dibuat |

### 4.9 Tabel `notifications`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID notifikasi |
| user_id | INT (FK) | ID pengguna |
| title | VARCHAR(200) | Judul notifikasi |
| message | TEXT | Isi notifikasi |
| type | ENUM('info','success','warning','error') | Tipe notifikasi |
| is_read | BOOLEAN | Status sudah dibaca |
| created_at | DATETIME | Tanggal dibuat |

### 4.10 Tabel `settings`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID setting |
| key | VARCHAR(100) | Key setting (unik) |
| value | TEXT | Value setting |
| description | VARCHAR(255) | Deskripsi |
| updated_at | DATETIME | Tanggal diperbarui |

### 4.11 Tabel `audit_logs`

| Kolom | Tipe | Keterangan |
|-------|------|------------|
| id | INT (PK, AI) | ID log |
| user_id | INT (FK) | ID pengguna |
| action | VARCHAR(100) | Aksi yang dilakukan |
| entity_type | VARCHAR(50) | Tipe entitas (user, transaction, dll.) |
| entity_id | INT | ID entitas |
| old_data | JSON | Data sebelum perubahan |
| new_data | JSON | Data sesudah perubahan |
| ip_address | VARCHAR(45) | Alamat IP |
| user_agent | VARCHAR(255) | User agent browser |
| created_at | DATETIME | Tanggal dibuat |

---

## 5. Desain API Endpoint

### 5.1 Autentikasi (`/api/auth`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| POST | `/api/auth/register` | Registrasi pengguna baru |
| POST | `/api/auth/login` | Login pengguna |
| POST | `/api/auth/logout` | Logout pengguna |
| POST | `/api/auth/refresh-token` | Refresh JWT token |
| POST | `/api/auth/forgot-password` | Kirim email reset password |
| POST | `/api/auth/reset-password` | Reset password |
| GET | `/api/auth/me` | Dapatkan data pengguna yang login |

### 5.2 Pengguna (`/api/users`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/users` | Daftar semua pengguna (admin) |
| GET | `/api/users/:id` | Detail pengguna |
| PUT | `/api/users/profile` | Update profil sendiri |
| PUT | `/api/users/change-password` | Ubah password |
| PUT | `/api/users/change-pin` | Ubah PIN transaksi |
| PUT | `/api/users/:id/status` | Ubah status pengguna (admin) |
| DELETE | `/api/users/:id` | Hapus pengguna (admin) |

### 5.3 Produk (`/api/products`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/products` | Daftar semua produk |
| GET | `/api/products/:id` | Detail produk |
| GET | `/api/products/category/:slug` | Produk berdasarkan kategori |
| POST | `/api/products` | Tambah produk (admin) |
| PUT | `/api/products/:id` | Update produk (admin) |
| DELETE | `/api/products/:id` | Hapus produk (admin) |
| POST | `/api/products/sync` | Sinkronisasi produk dari provider (admin) |

### 5.4 Kategori (`/api/categories`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/categories` | Daftar semua kategori |
| POST | `/api/categories` | Tambah kategori (admin) |
| PUT | `/api/categories/:id` | Update kategori (admin) |
| DELETE | `/api/categories/:id` | Hapus kategori (admin) |

### 5.5 Transaksi (`/api/transactions`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/transactions` | Daftar transaksi pengguna |
| GET | `/api/transactions/:id` | Detail transaksi |
| POST | `/api/transactions` | Buat transaksi baru |
| POST | `/api/transactions/inquiry` | Cek tagihan (postpaid) |
| GET | `/api/transactions/all` | Semua transaksi (admin) |

### 5.6 Saldo (`/api/balance`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/balance` | Cek saldo pengguna |
| GET | `/api/balance/mutations` | Riwayat mutasi saldo |

### 5.7 Deposit (`/api/deposits`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/deposits` | Daftar deposit pengguna |
| GET | `/api/deposits/:id` | Detail deposit |
| POST | `/api/deposits` | Buat permintaan deposit |
| PUT | `/api/deposits/:id/confirm` | Konfirmasi deposit (admin) |
| PUT | `/api/deposits/:id/cancel` | Batalkan deposit |
| GET | `/api/deposits/all` | Semua deposit (admin) |

### 5.8 Laporan (`/api/reports`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/reports/sales` | Laporan penjualan |
| GET | `/api/reports/commission` | Laporan komisi |
| GET | `/api/reports/summary` | Ringkasan dashboard |
| GET | `/api/reports/export` | Export laporan (CSV/PDF) |

### 5.9 Pengaturan (`/api/settings`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/settings` | Daftar pengaturan (admin) |
| PUT | `/api/settings` | Update pengaturan (admin) |

### 5.10 Webhook (`/api/webhook`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| POST | `/api/webhook/ppob` | Callback dari provider PPOB |
| POST | `/api/webhook/payment` | Callback dari payment gateway |

### 5.11 Notifikasi (`/api/notifications`)

| Method | Endpoint | Keterangan |
|--------|----------|------------|
| GET | `/api/notifications` | Daftar notifikasi pengguna |
| PUT | `/api/notifications/:id/read` | Tandai sudah dibaca |
| PUT | `/api/notifications/read-all` | Tandai semua sudah dibaca |

---

## 6. Penggunaan Redis

Redis digunakan untuk:

| Penggunaan | Key Pattern | TTL | Keterangan |
|------------|-------------|-----|------------|
| Session/Token | `session:{userId}` | 24 jam | Menyimpan JWT token aktif |
| Rate Limiting | `ratelimit:{ip}:{endpoint}` | 1 menit | Membatasi request per IP |
| Cache Produk | `products:{categorySlug}` | 1 jam | Cache daftar produk |
| Cache Harga | `price:{productCode}` | 30 menit | Cache harga produk |
| Lock Transaksi | `lock:trx:{userId}` | 30 detik | Mencegah transaksi ganda |
| OTP | `otp:{phone}` | 5 menit | Menyimpan kode OTP |
| Token Blacklist | `blacklist:{token}` | Sisa masa berlaku JWT | Token yang sudah di-revoke |
| Dashboard Stats | `stats:dashboard:{userId}` | 5 menit | Cache statistik dashboard |

---

## 7. Fitur Utama

### 7.1 Fitur Member/Agen

- [x] Registrasi & login
- [x] Dashboard (statistik transaksi, saldo, grafik)
- [x] Pembelian pulsa & paket data
- [x] Token listrik PLN (prepaid)
- [x] Pembayaran tagihan (PLN postpaid, PDAM, BPJS, internet)
- [x] Top-up e-wallet (OVO, GoPay, DANA, ShopeePay)
- [x] Voucher game
- [x] Deposit saldo (transfer bank, QRIS, virtual account)
- [x] Riwayat transaksi
- [x] Riwayat mutasi saldo
- [x] Profil & pengaturan akun
- [x] Notifikasi real-time

### 7.2 Fitur Admin

- [x] Dashboard admin (ringkasan bisnis)
- [x] Manajemen pengguna (aktivasi, nonaktifkan, hapus)
- [x] Manajemen produk & harga
- [x] Konfirmasi deposit manual
- [x] Laporan penjualan & komisi
- [x] Pengaturan sistem (markup harga, fee, dll.)
- [x] Log audit aktivitas

---

## 8. Alur Kerja (Workflow)

### 8.1 Alur Transaksi Prepaid (Pulsa, Token PLN)

```
User Input Nomor & Pilih Produk
        │
        ▼
Validasi Input (Middleware)
        │
        ▼
Cek Saldo Cukup (Service)
        │
        ▼
Acquire Lock Redis (Cegah Duplikasi)
        │
        ▼
Potong Saldo User (Balance Service)
        │
        ▼
Kirim Request ke API Provider PPOB
        │
        ▼
    ┌───┴───┐
    │       │
 Sukses   Gagal
    │       │
    ▼       ▼
Simpan SN  Refund Saldo
    │       │
    ▼       ▼
Catat Mutasi & Komisi
    │
    ▼
Kirim Notifikasi ke User
    │
    ▼
Release Lock Redis
```

### 8.2 Alur Deposit Saldo

```
User Pilih Metode & Nominal Deposit
        │
        ▼
Buat Invoice Payment Gateway
        │
        ▼
User Bayar via Bank/QRIS/VA
        │
        ▼
Payment Gateway Kirim Webhook
        │
        ▼
Verifikasi Signature Webhook
        │
        ▼
Update Status Deposit → "paid"
        │
        ▼
Tambah Saldo User
        │
        ▼
Catat Mutasi Saldo
        │
        ▼
Kirim Notifikasi ke User
```

---

## 9. Keamanan

| Aspek | Implementasi |
|-------|-------------|
| Autentikasi | JWT dengan access token (15 menit) & refresh token (7 hari) |
| Password | Bcrypt hash dengan salt rounds 12 |
| PIN Transaksi | Hash PIN terpisah untuk konfirmasi transaksi |
| Rate Limiting | Redis-based rate limiter (100 req/menit per IP) |
| Input Validation | Joi/express-validator di setiap endpoint |
| SQL Injection | Sequelize ORM (parameterized queries) |
| XSS Protection | Helmet.js headers, sanitize input |
| CORS | Whitelist origin yang diizinkan |
| Webhook Verification | Validasi signature/IP dari provider |
| Encryption | AES-256 untuk data sensitif di database |
| Audit Trail | Log semua aksi penting ke tabel audit_logs |
| HTTPS | Enforce HTTPS di production |

---

## 10. Environment Variables

### Backend (`.env`)

```env
# Server
NODE_ENV=development
PORT=3000
APP_URL=http://localhost:3000
FRONTEND_URL=http://localhost:5173

# Database MySQL
DB_HOST=localhost
DB_PORT=3306
DB_NAME=ppob_db
DB_USER=root
DB_PASSWORD=your_password

# Redis
REDIS_HOST=localhost
REDIS_PORT=6379
REDIS_PASSWORD=

# JWT
JWT_ACCESS_SECRET=your_access_secret_key
JWT_REFRESH_SECRET=your_refresh_secret_key
JWT_ACCESS_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d

# PPOB Provider (DigiFlazz)
PPOB_API_URL=https://api.digiflazz.com/v1
PPOB_USERNAME=your_username
PPOB_API_KEY=your_api_key

# Payment Gateway (Midtrans)
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_IS_PRODUCTION=false

# Encryption
ENCRYPTION_KEY=your_32_char_encryption_key

# Rate Limiting
RATE_LIMIT_WINDOW=60
RATE_LIMIT_MAX=100
```

### Frontend (`.env`)

```env
VITE_API_URL=http://localhost:3000/api
VITE_APP_NAME=PPOB Platform
VITE_MIDTRANS_CLIENT_KEY=your_client_key
```

---

## 11. Dependensi (Packages)

### Backend (`package.json`)

```json
{
  "dependencies": {
    "express": "^4.18.x",
    "sequelize": "^6.37.x",
    "mysql2": "^3.9.x",
    "ioredis": "^5.3.x",
    "jsonwebtoken": "^9.0.x",
    "bcryptjs": "^2.4.x",
    "joi": "^17.12.x",
    "helmet": "^7.1.x",
    "cors": "^2.8.x",
    "morgan": "^1.10.x",
    "winston": "^3.11.x",
    "dotenv": "^16.4.x",
    "axios": "^1.6.x",
    "crypto-js": "^4.2.x",
    "node-cron": "^3.0.x",
    "uuid": "^9.0.x",
    "express-rate-limit": "^7.1.x",
    "rate-limit-redis": "^4.2.x",
    "midtrans-client": "^1.3.x"
  },
  "devDependencies": {
    "nodemon": "^3.0.x",
    "jest": "^29.7.x",
    "supertest": "^6.3.x",
    "eslint": "^8.56.x"
  }
}
```

### Frontend (`package.json`)

```json
{
  "dependencies": {
    "react": "^18.2.x",
    "react-dom": "^18.2.x",
    "react-router-dom": "^6.22.x",
    "axios": "^1.6.x",
    "zustand": "^4.5.x",
    "react-hook-form": "^7.50.x",
    "react-hot-toast": "^2.4.x",
    "react-icons": "^5.0.x",
    "recharts": "^2.12.x",
    "dayjs": "^1.11.x",
    "clsx": "^2.1.x"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^4.2.x",
    "vite": "^5.1.x",
    "tailwindcss": "^3.4.x",
    "postcss": "^8.4.x",
    "autoprefixer": "^10.4.x",
    "eslint": "^8.56.x",
    "eslint-plugin-react": "^7.33.x"
  }
}
```

---

## 12. Tahapan Pengembangan

### Fase 1 — Fondasi (Minggu 1–2)

- [ ] Setup proyek backend (Express.js, Sequelize, Redis)
- [ ] Setup proyek frontend (Vite, React, TailwindCSS)
- [ ] Desain & migrasi database MySQL
- [ ] Implementasi model Sequelize & relasi
- [ ] Setup Redis connection & caching service
- [ ] Konfigurasi environment variables

### Fase 2 — Autentikasi & Manajemen User (Minggu 3)

- [ ] Implementasi registrasi & login (JWT)
- [ ] Middleware autentikasi & otorisasi
- [ ] Halaman login & register (frontend)
- [ ] Manajemen profil pengguna
- [ ] Sistem role (admin, agen, member)

### Fase 3 — Produk & Kategori (Minggu 4)

- [ ] CRUD kategori produk
- [ ] CRUD produk PPOB
- [ ] Integrasi API provider PPOB (sinkronisasi produk)
- [ ] Halaman daftar produk (frontend)
- [ ] Cache produk dengan Redis

### Fase 4 — Transaksi (Minggu 5–6)

- [ ] Sistem saldo & mutasi
- [ ] Proses transaksi prepaid (pulsa, token PLN)
- [ ] Proses transaksi postpaid (tagihan)
- [ ] Lock transaksi dengan Redis
- [ ] Halaman transaksi (frontend)
- [ ] Riwayat transaksi

### Fase 5 — Deposit & Pembayaran (Minggu 7)

- [ ] Integrasi payment gateway (Midtrans/Xendit)
- [ ] Sistem deposit saldo
- [ ] Webhook handler pembayaran
- [ ] Halaman deposit (frontend)
- [ ] Konfirmasi deposit (admin)

### Fase 6 — Dashboard & Laporan (Minggu 8)

- [ ] Dashboard member (statistik, grafik)
- [ ] Dashboard admin (ringkasan bisnis)
- [ ] Laporan penjualan
- [ ] Laporan komisi
- [ ] Export laporan (CSV/PDF)

### Fase 7 — Fitur Tambahan (Minggu 9)

- [ ] Sistem notifikasi
- [ ] Log audit aktivitas
- [ ] Pengaturan sistem (admin)
- [ ] Manajemen pengguna (admin)
- [ ] Rate limiting & security hardening

### Fase 8 — Testing & Deployment (Minggu 10)

- [ ] Unit testing (Jest + Supertest)
- [ ] Integration testing
- [ ] Performance testing
- [ ] Bug fixing & optimization
- [ ] Setup CI/CD pipeline
- [ ] Deployment ke production server

---

## 13. Referensi Repository GitHub

Berikut beberapa repositori GitHub yang dapat dijadikan referensi arsitektur dan implementasi:

| Referensi | URL | Keterangan |
|-----------|-----|------------|
| Express.js Best Practice | https://github.com/goldbergyoni/nodebestpractices | Best practice Node.js |
| Express API Boilerplate | https://github.com/hagopj13/node-express-boilerplate | Boilerplate Express.js dengan JWT |
| Sequelize Example | https://github.com/sequelize/express-example | Contoh integrasi Express + Sequelize |
| React Vite Starter | https://github.com/joaopaulomoraes/reactjs-vite-tailwindcss-boilerplate | Boilerplate React + Vite + TailwindCSS |
| Zustand State Management | https://github.com/pmndrs/zustand | State management ringan untuk React |
| Midtrans Node.js | https://github.com/Midtrans/midtrans-nodejs-client | Library payment gateway Midtrans |
| DigiFlazz API | https://developer.digiflazz.com/api | Dokumentasi API provider PPOB |

---

## 14. Catatan Penting

1. **Arsitektur berlapis** — Gunakan pola Routes → Controllers → Services → Models untuk memisahkan tanggung jawab setiap komponen.
2. **Error handling terpusat** — Semua error ditangani oleh middleware `errorHandler.js` untuk konsistensi response.
3. **Validasi berlapis** — Validasi dilakukan di frontend (form) dan backend (middleware validator).
4. **Idempotent transactions** — Gunakan lock Redis untuk mencegah duplikasi transaksi.
5. **Logging** — Gunakan Winston untuk logging yang terstruktur dan bisa ditelusuri.
6. **Database transactions** — Gunakan Sequelize transaction untuk operasi yang melibatkan banyak tabel.
7. **Caching strategy** — Cache data yang jarang berubah (produk, harga) dan invalidasi saat ada update.
8. **Monitoring** — Pertimbangkan penggunaan PM2 untuk process management di production.
