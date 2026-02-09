# Deploy to GitHub Pages (Next.js static export)

โปรเจกต์นี้เป็น **Next.js** เลยไม่สามารถ “อัปไฟล์ดิบๆ แล้วให้ Pages เสิร์ฟได้” แบบเว็บ static ปกติ
ไฟล์ชุดนี้เพิ่มการตั้งค่า + GitHub Actions ให้ build แล้ว deploy ให้เอง

## 1) อัปไฟล์ขึ้น repo
- แตก zip นี้
- เอาไฟล์ทั้งหมดขึ้นไปที่ root ของ repo (ให้เห็น app/, components/, next.config.mjs ฯลฯ)

## 2) เปิด GitHub Pages ให้ใช้ GitHub Actions
Repo → Settings → Pages
- Source: **GitHub Actions**

## 3) Push เข้า main
พอ push เข้า `main` แล้ว workflow `Deploy Next.js (static export) to GitHub Pages` จะทำงาน
- build → ได้โฟลเดอร์ `out/`
- deploy → ไปที่ Pages

## URL
https://<username>.github.io/Edtech-platform-test-netflixdesign/

> ถ้าชื่อ repo เปลี่ยน ให้แก้ค่า `repo_name` ใน `next.config.mjs` และ `.github/workflows/pages.yml`
