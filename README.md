📝 TASKEL - Task Tracker CLI
============================
TASKEL (Task-CLI) adalah aplikasi manajemen pengeluaran berbasis terminal yang efisien dan ringan. Dibangun menggunakan Node.js, aplikasi ini memungkinkan pengguna untuk melakukan operasi CRUD (Create, Read, Update, Delete) pada pengeluaran mereka langsung dari command line.

🚀 Fitur Utama
==============
Global Command: Akses aplikasi dari folder mana saja menggunakan perintah expense-tracker.

Manajemen Status: Lacak pengeluaran.

Smart Filtering: Tampilkan total pengeluaran.

Data Persisten: Menggunakan sistem penyimpanan lokal berbasis file JSON yang aman dan cepat.

Timestamp Otomatis: Mencatat waktu pembuatan (createdAt) dan perubahan terakhir (updatedAt) untuk setiap tugas.

🛠️ Prasyarat & Instalasi
========================
Prasyarat

Node.js (Versi 14 atau yang lebih baru)
npm (Node Package Manager)

Installation Guide
==================
1. git clone https://github.com/elepann/Expense-Tracker.git
2. cd tracker-expense
3. npm install
4. sudo npm link //only on mac user

Guide
=====
1. Add a New Expense Note
   expense-tracker add --description "Mempelajari Integrasi Express.js" --amount 20
2. View Expense
   expense-tracker list
3. View Expense Summary
   expense-tracker summary
4. Delete Expense
   expense-tracker delete 2


