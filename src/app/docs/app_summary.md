---

## 1. Visi Proyek

**DropNotes** adalah aplikasi *Personal Knowledge Management* (PKM) berbasis web yang dirancang untuk menjadi versi yang lebih sederhana, cepat, dan fokus pada struktur dibandingkan aplikasi *note-taking* kompleks seperti Obsidian. Fokus utamanya adalah memungkinkan pengguna:

- Membuat catatan secara cepat
- Mengorganisir catatan secara hierarkis (mirip BAB dan SUB-BAB)
- Menavigasi catatan dengan antarmuka yang bersih dan interaktif

---

## 2. Target Pengguna

Pengguna individu seperti:

- Mahasiswa
- Profesional
- Peneliti
- Siapa pun yang membutuhkan tempat terpusat untuk mencatat ide, materi kuliah, atau dokumentasi proyek

Kebutuhan utama: **struktur folder/hierarki yang kuat** untuk mencegah informasi hilang atau tidak terorganisir.

---

## 3. Fitur Utama Berdasarkan Rancangan & Stack

| Fitur | Teknologi Pendukung | Deskripsi Implementasi |
| :--- | :--- | :--- |
| **Autentikasi Aman** | **Clerk** | Pengelolaan *user* (login/signup) yang cepat dan aman. Clerk menyediakan *user ID* untuk membatasi akses catatan hanya untuk pemiliknya. |
| **Struktur Hierarkis (BAB/SUB-BAB)** | **Next.js Routing** & **Supabase (PostgreSQL)** | Data disimpan di Supabase dengan relasi "Parent-Child" (`note_id` → `parent_note_id`). Next.js menggunakan *dynamic routing* (`/notes/parent-slug/child-slug`). |
| **Navigasi Sidebar (Daftar Isi)** | **Shadcn/ui** & **Tailwind CSS** | Sidebar menampilkan struktur BAB/SUB-BAB secara rekursif dari database menggunakan komponen Shadcn (`ScrollArea`/`Tree`). |
| **Konten Catatan (Materi Detail)** | *Component Editor* (TBD) | Area utama menampilkan konten. Bisa menggunakan *rich-text editor* atau Markdown murni, di-styling oleh Shadcn. |
| **Dark/Light Mode** | **Shadcn/ui & Tailwind** | Tema global dengan *toggle* built-in menggunakan komponen Shadcn. |
| **Penyimpanan Data & Query** | **Drizzle ORM** & **Supabase** | Drizzle menyediakan *type-safe queries* untuk mengambil, menyimpan, dan mengupdate catatan dari Next.js Server Actions ke Supabase. |
| **Interaktivitas UI/UX** | **Next.js (React)** | Menangani interaksi seperti membuka/menutup sidebar, navigasi antar catatan tanpa reload penuh, dan *state management*. |
| **Visualisasi Struktur (Opsional)** | *Library Visualization* (misal: Mermaid.js) | Memvisualisasikan hubungan antar catatan utama, mereplikasi diagram pohon dari sketsa. |

---

## 4. Ringkasan Tech Stack

- **Frontend / Framework:** Next.js (React)  
- **Styling & UI:** Tailwind CSS + Shadcn/ui  
- **Backend-as-a-Service (DB & Hosting):** Supabase (PostgreSQL)  
- **ORM / Query Builder:** Drizzle  
- **Autentikasi:** Clerk  

**DropNotes** diposisikan sebagai alat pencatat yang **cepat, aman, terstruktur, dan elegan**, menggabungkan kekuatan *structuring* ala Obsidian dengan *developer experience* modern dari ekosistem Vercel/Next.js.

---