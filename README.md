# Malkara Süt Üreticileri Birliği — Web Sitesi

Trakya'nın 57 köyünden, soğuk zincirle Marmara sofralarına ulaşan süt ürünleri.

## 🚀 Canlı

(Yakında) https://malkarasut.com

## 🛠 Teknoloji

- HTML5 + CSS3 (vanilla, build step yok)
- Tailwind CSS (CDN)
- Alpine.js (CDN)
- Vanilla JavaScript (sepet, filtre, WhatsApp)
- GitHub Pages hosting

## 📁 Klasör Yapısı

```
malkara-sut/
├── index.html              # Anasayfa
├── 404.html                # 404 hata
├── pages/                  # İç sayfalar
├── assets/                 # CSS, JS, images, data
├── docs/                   # Brief, marka kılavuzu (public değil)
└── .github/workflows/      # GitHub Pages deploy
```

## 🔧 Geliştirme

Build step yok. Doğrudan tarayıcıda aç:

```bash
# Basit local server (Python)
python3 -m http.server 8000

# veya Node
npx serve .
```

http://localhost:8000

## 📝 Lisans

© 2026 Malkara Süt Üreticileri Birliği. Tüm hakları saklıdır.

## 🤝 İletişim

- info@malkarasutureticileri.org.tr
- +90 282 673 81 50
- Gazibey, Tevfikbey Cd. No:3, 59310 Malkara/Tekirdağ
