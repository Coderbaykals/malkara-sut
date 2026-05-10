# Site Yönetimi Rehberi — Malkara Süt Üreticileri Birliği

Bu rehber, sitenizin günlük yönetimi için Birlik personelinin yapabileceği tüm işlemleri açıklar. Geliştirici desteği gerekmeden çoğu güncelleme tek bir dosyayı değiştirerek yapılabilir.

---

## 📍 Site Adresi ve Repo

- **Canlı URL:** https://coderbaykals.github.io/malkara-sut/
- **GitHub Repo:** github.com/Coderbaykals/malkara-sut
- **Hosting:** GitHub Pages (ücretsiz, otomatik SSL, custom domain destekli)

---

## ⚡ Hızlı İşlemler — En Sık Kullanılanlar

### 1. WhatsApp sipariş numarasını değiştirmek

**Dosya:** `assets/data/site-config.json`

```json
"whatsapp": {
  "number": "905XX1234567"     ← Buraya yeni numarayı yaz
}
```

**Format kuralı:**
- Sadece rakam (boşluk, tire, parantez yok)
- Ülke kodu dahil (Türkiye için **90** ile başlar)
- Örn. `+90 532 123 45 67` → `905321234567`

Değişiklik git push'ladıktan sonra ~1 dakikada canlıya yansır.

### 2. Kargo ücretini güncellemek

**Dosya:** `assets/data/site-config.json`

```json
"shipping": {
  "freeThreshold": 350,        ← Bu tutarın üzeri ücretsiz
  "defaultFee": 49,            ← Altı için sabit kargo ücreti
  "currency": "₺"
}
```

### 3. Sosyal medya hesabı eklemek

**Dosya:** `assets/data/site-config.json`

```json
"social": {
  "instagram": "https://instagram.com/malkarasut",
  "facebook": "https://facebook.com/malkarasut",
  "youtube": "",                ← Boş kalırsa "Yakında" rozetiyle görünür
  "linkedin": ""
}
```

Boş alanlar otomatik gri "Yakında" rozetiyle gösterilir; URL eklendiği anda aktif olur.

---

## 🛒 Ürün Yönetimi

### Yeni ürün eklemek

**Dosya:** `assets/data/products.json`

`"products"` array'ine yeni bir obje ekle. Mevcut ürünlerden birini kopyalayıp düzenlemen en kolayı:

```json
{
  "id": "p021",                                    ← p001, p002... benzersiz olmalı
  "slug": "yeni-urun-adi",                         ← URL dostu, küçük harf, tire ile
  "name": "Yeni Ürün Adı",
  "category": "sut",                               ← sut|yogurt|peynir|tereyagi|manda|fonksiyonel|set
  "subCategory": "pastorize",
  "price": 95,                                     ← TL olarak sayı (tırnak olmadan)
  "unit": "1L",                                    ← 500g, 250g, 1kg, 1L, vb.
  "image": "https://...",                          ← Ürün görseli URL'si
  "images": ["https://...", "https://..."],        ← Galeri için ek görseller
  "producerVillage": "Evrenbey",
  "producerId": "pr001",                           ← producers.json'daki üretici ID
  "tags": ["a2", "yeni"],                          ← Filtreleme için
  "featured": true,                                ← Anasayfada öne çıkan?
  "isNew": true,                                   ← "YENİ" rozeti gösterilsin mi?
  "isBio": false,                                  ← "BİO" rozeti
  "inStock": true,                                 ← false ise stokta yok gösterimi
  "shortDescription": "Kısa tanıtım metni.",
  "longDescription": "Uzun açıklama, paragraf...",
  "nutritionFacts": {
    "calories": "67 kcal/100ml",
    "protein": "3.4g",
    "fat": "3.6g",
    "carbs": "4.8g",
    "calcium": "120mg"
  },
  "shelfLifeDays": 7,
  "storageInstruction": "+2°C / +6°C arasında saklayın."
}
```

### Ürün silmek / fiyat değiştirmek

Aynı `products.json` dosyasında:
- **Sil:** İlgili obje'yi (süslü parantezler dahil) ve önceki virgülü sil
- **Fiyat değiştir:** Sadece `"price": 95` satırını güncelle

### Stok durumunu değiştirmek

`"inStock": false` yapılınca ürün hâlâ listede görünür ama "Stokta Yok" rozetiyle çıkar (Sprint 9'da görsel olarak vurgulanacak).

---

## 👥 Üretici Yönetimi

### Yeni üretici eklemek

**Dosya:** `assets/data/producers.json`

```json
{
  "id": "pr005",
  "slug": "yeni-uretici",
  "name": "İsim Soyisim",
  "village": "Köy Adı",
  "role": "A2 Üreticisi",
  "yearsOfExperience": 25,
  "animals": 50,
  "dailyProduction": "500L/gün",
  "specialty": "A2 sütü",
  "photo": "https://...",
  "bio": "Tek satırlık özet (kart için).",
  "story": "3-4 paragraflık hikâye (üretici detay sayfası için).\\n\\nİkinci paragraf...",
  "products": ["p005", "p006"],                    ← Bu üreticinin ürün ID'leri
  "tags": ["a2"],
  "featured": false,
  "joinedYear": 2010
}
```

`products` array'i bu üreticinin ürettiği ürünlerin ID'leri olmalı; ayrıca `products.json`'daki o ürünlerin `"producerId"` alanını da bu üreticiye eşleştir.

---

## 📝 Yasal Metinler

Mevcut yasal sayfalar **avukat onayı bekleyen taslak metin** içeriyor. Sayfaların başında bu uyarıyı belirten bir info-box var.

**Avukat onayı geldikten sonra:**
1. İlgili HTML sayfasını aç (örn. `pages/kvkk.html`)
2. İçeriği güncelle
3. Üstteki "Bu metin avukat onayı bekleyen taslaktır" info-box'ını sil
4. Git push

---

## 🛍 WhatsApp Sipariş Süreci (Birlik personeli için)

### Müşteri akışı

1. Müşteri sitede sepete ürün ekler
2. `Sepete Git` butonuna basar → sepet sayfasında ürünleri görür
3. Teslimat bilgilerini doldurur (Ad, Telefon, Adres, İlçe, gün tercihi)
4. `WhatsApp ile Sipariş Ver` butonuna basar
5. WhatsApp uygulaması açılır, sepet detayı + müşteri bilgileri hazır olarak gelir
6. Müşteri mesajı sizin numaranıza gönderir

### Birlik personeli ne yapar?

Gelen mesaj formatı:

```
🛒 Yeni Sipariş — Malkara Süt
Sipariş Kodu: ML-26-XXXXX

ÜRÜNLER
• A2 Tam Yağlı Süt (1L · Evrenbey köyü)
  2 × 89 ₺ = 178 ₺
• Süzme Yoğurt (500g · Karaidemir köyü)
  1 × 125 ₺ = 125 ₺

Ara Toplam: 303 ₺
Kargo: 49 ₺
Toplam: 352 ₺

TESLİMAT BİLGİLERİ
👤 Müşteri Adı
📞 Telefon
📍 Adres
🏙️ İlçe / Şehir
🚚 Tercih: Perşembe günü
```

**Adımlar:**
1. Müşteriye onay mesajı atın (sipariş alındı, hazırlanıyor)
2. Ödeme bilgilerini iletin (havale/EFT/ödeme yöntemi)
3. Ödeme onayı sonrası kargoya verin
4. Kargo takip numarasını müşteriye gönderin

---

## 🚨 Acil Durum / Sorun Giderme

### "Site açılmıyor"

1. https://github.com/Coderbaykals/malkara-sut/actions adresine git
2. En son "Deploy to GitHub Pages" iş kalemine bak
3. Yeşil ✓ ise GitHub Pages cache problemi olabilir, 5 dk bekle ve hard refresh (Cmd+Shift+R)
4. Kırmızı ✗ ise hata mesajını geliştiriciye ilet

### "Yeni ürün eklediğim ama sitede görünmüyor"

`products.json` dosyasında JSON syntax hatası olabilir:
1. https://jsonlint.com/ aç
2. Dosyanın tamamını yapıştır → Validate
3. Hata bulursa konumunu söyler (örn. eksik virgül, kapatılmamış süslü parantez)

### "Sipariş gelmiyor"

`assets/data/site-config.json` → `whatsapp.number` doğru mu kontrol:
- Sadece rakam olmalı
- Ülke kodu dahil
- Boşluk/tire/parantez olmamalı

### "Sosyal medya rozeti bozuk"

Boş URL'ler "Yakında" rozetiyle gösterilir — bu **doğru davranış**. URL eklenince otomatik aktif olur.

---

## 🔧 Teknik Bilgiler

### Site mimarisi

- **Framework:** Saf HTML + CSS (Tailwind CDN) + Vanilla JavaScript (Alpine.js)
- **Build step:** Yok — düzenlenen dosya direkt Pages'e deploy olur
- **Veri kaynağı:** 3 JSON dosyası (`products.json`, `producers.json`, `site-config.json`)
- **Sepet:** localStorage (kullanıcı tarayıcısında, sunucuda saklanmaz)
- **Sipariş:** WhatsApp API üzerinden manuel onay (otomatik ödeme yok)

### Dosya konumları

```
malkara-sut/
├── index.html                 ← Anasayfa
├── 404.html                   ← Hata sayfası
├── pages/                     ← Tüm iç sayfalar
│   ├── kategori.html
│   ├── urun-detay.html
│   ├── ureticiler.html
│   ├── ... (16 sayfa)
│   ├── kvkk.html              ← Yasal sayfalar
│   ├── cerez-politikasi.html
│   ├── mesafeli-satis.html
│   └── gizlilik.html
├── assets/
│   ├── data/                  ← 🟢 EN ÖNEMLİ — sürekli güncellenecek
│   │   ├── products.json      ← Ürünler
│   │   ├── producers.json     ← Üreticiler
│   │   └── site-config.json   ← Genel ayarlar (WhatsApp, kargo, social)
│   ├── css/                   ← Tasarım (genelde dokunulmaz)
│   ├── js/                    ← İşlevsellik (genelde dokunulmaz)
│   └── images/                ← Logo, favicon, OG görsel
└── docs/                      ← Bu rehber + lansman checklist + brand guide
```

### Git ile değişiklik nasıl yapılır

GitHub web arayüzünden basit dosya düzenlemesi:

1. github.com/Coderbaykals/malkara-sut adresine git
2. Düzenlemek istediğin dosyaya tıkla (örn. `assets/data/site-config.json`)
3. Sağ üstte kalem ✏️ ikonuna bas
4. Değişikliği yap
5. Sayfa altında "Commit changes" yeşil butonuna bas
6. ~1 dakika içinde canlıda görünür

Daha karmaşık değişiklikler için geliştirici desteği gerekebilir.

---

## 📞 Teknik Destek

- **Geliştirici:** Coderbaykals (GitHub)
- **Repo:** github.com/Coderbaykals/malkara-sut
- **Issues:** github.com/Coderbaykals/malkara-sut/issues (sorun bildirimi için)

---

**Son güncelleme:** 10 Mayıs 2026
