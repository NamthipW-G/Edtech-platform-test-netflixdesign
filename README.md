# GitHub Pages Ready (Static)

อันนี้เป็นไฟล์เวอร์ชันที่ “วางไว้ที่ root ของ repo ได้เลย” เพื่อให้ GitHub Pages หา `index.html` เจอทันที

## วิธีอัปขึ้น GitHub
1) เข้า repo ของคุณบน GitHub  
2) กด **Add file → Upload files**  
3) ลากไฟล์/โฟลเดอร์ “ทั้งหมดใน zip นี้” ขึ้นไป (ให้ `index.html` อยู่ที่ root)  
4) Commit

## ตั้งค่า GitHub Pages
Settings → Pages  
- Source: Deploy from a branch  
- Branch: main  
- Folder: / (root)  
Save

จากนั้นรอ 1–2 นาที แล้วเข้า URL:
`https://<username>.github.io/<repo>/`

> หมายเหตุ: ถ้าคุณใช้ React/Vite แบบต้อง build จริง ๆ แนะนำ deploy ด้วย Vercel/Netlify หรือทำ GitHub Actions build ไปที่ branch `gh-pages`
