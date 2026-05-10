# Lansman Hazırlık Listesi

Site teknik olarak hazır. Aşağıdaki kontroller sırayla tamamlandığında yayına alınabilir.

---

## 1. Birlik bilgileri (zorunlu — yayına almadan önce doldurulmalı)

Hepsi `assets/data/site-config.json` üzerinden tek dosyada güncellenir. Gerekirse Birlik avukatı/muhasebesi de yardımcı olabilir.

- [ ] **WhatsApp sipariş numarası**
  - `whatsapp.number` alanı (ülke kodu dahil, sadece rakam)
  - Örn. `905XX1234567` (sabit hat veya WhatsApp Business)

- [ ] **Kargo ücreti**
  - `shipping.defaultFee` — şu an 49 ₺ placeholder
  - `shipping.freeThreshold` — şu an 350 ₺ (üzeri ücretsiz)

- [ ] **Sosyal medya hesapları (varsa)**
  - `social.instagram`, `social.facebook`, `social.youtube`, `social.linkedin`
  - Boş kalanlar otomatik "Yakında" rozetiyle gösterilir; doldurulduğunda otomatik aktif olur

- [ ] **Vergi numarası**
  - `business.taxNumber` — yasal sayfalar için gerekli

---

## 2. Brand görselleri (önerilen — eksik olunca placeholder kullanılır)

- [ ] **Logo SVG** — `assets/images/logo/logo.svg`
  - Şu an placeholder M monogramı (`favicon.svg` kullanılıyor)
  - Birlik'in resmi logosu geldiğinde `logo.svg` ve `favicon.svg`'yi değiştir

- [ ] **OG default görseli** — `assets/images/og/default.jpg` (1200×630)
  - Şu an Unsplash bir süt görseliyle çalışıyor + `default.svg` placeholder var
  - Real brand artwork (logo + slogan + estetik fotoğraf) tercih edilir
  - Tüm sosyal paylaşımlarda gözükür (WhatsApp, FB, Twitter, LinkedIn)

- [ ] **Apple touch icon** — `assets/images/logo/apple-touch-icon.png` (180×180)

---

## 3. Yasal metinler (post-launch revize edilebilir)

Mevcut yasal sayfalar **avukat onayı bekleyen taslak metin** içeriyor — site üstünde bunu açıkça belirten info-box var.

- [ ] **`pages/kvkk.html`** — Birlik avukatı KVKK aydınlatma metnini revize etsin
- [ ] **`pages/cerez-politikasi.html`** — kullanılan çerezler doğru listelenmiş, gerekirse rapor ekle
- [ ] **`pages/mesafeli-satis.html`** — WhatsApp süreci için adapte edildi; avukat doğrulasın
- [ ] **`pages/gizlilik.html`** — günlük dilde, avukat onaylasın
- [ ] Onay sonrası "Taslak metin" info-box'ını sil

---

## 4. Custom domain (opsiyonel, lansman öncesi/sonrası)

Şu anki URL: `https://coderbaykals.github.io/malkara-sut/`  
Önerilen: `malkarasut.com` veya benzeri.

- [ ] Domain alımı (~150-300 ₺/yıl)
- [ ] Repo `Settings → Pages → Custom domain` alanına gir
- [ ] CNAME dosyası otomatik oluşur (zaten boş hâlde mevcut)
- [ ] DNS (alan adı sağlayıcısında):
  - A records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
  - veya CNAME: `coderbaykals.github.io`
- [ ] SSL sertifikası 5–15 dakika içinde otomatik gelir
- [ ] Domain değişince güncellenecekler:
  - `assets/data/site-config.json` → `seo.domain`
  - `sitemap.xml` → tüm URL'ler
  - 20 sayfanın `<link rel="canonical">` ve `og:url`
  - `robots.txt` → Sitemap satırı
  - Git push → Pages otomatik redeploy

---

## 5. Google ekosistemi (lansmandan sonra)

- [ ] **Google Analytics 4 (GA4)**
  - GA4 hesabı aç → Property oluştur → Measurement ID al (`G-XXXXXXXXXX`)
  - `site-config.json` → `analytics.ga4MeasurementId` doldur
  - Cookie banner "Kabul Et" sonrası tracker yüklenir (consent-gated)

- [ ] **Google Search Console**
  - `search.google.com/search-console` → Domain ekle
  - Doğrulama (HTML meta veya DNS)
  - `Sitemap` sekmesinden `sitemap.xml` submit et
  - URL Inspection ile anasayfa indexleme talebi

- [ ] **Google Business Profile**
  - Birlik'in fiziksel adresi için (Malkara/Tekirdağ)
  - Sitenin URL'sini ekle

---

## 6. Sosyal medya hesapları (lansman duyurusu için)

- [ ] Instagram hesap aç (handle: @malkarasut veya @malkara.sut)
- [ ] Facebook business page
- [ ] YouTube kanal (üretici hikâyeleri için)
- [ ] LinkedIn şirket sayfası (B2B/kurumsal için önemli)
- [ ] Hesaplar açılınca → `site-config.json` → `social.*` alanları
- [ ] Lansman duyurusu paylaşımı: anasayfa OG paylaşılınca düzgün önizleme görünmeli (ön test)

---

## 7. Lansman günü smoke test

- [ ] **Tarayıcı testi** — hard refresh sonrası anasayfa açılır mı?
- [ ] **Mobil testi** — telefonda açıp kahvaltı senaryosu (sepete ekle → WhatsApp)
- [ ] **WhatsApp gerçek sipariş testi**
  - Sahte bir sipariş hazırla, kendi numarasına gönder
  - Birlik personeli "okunaklı, kopyalanabilir" diyor mu?
- [ ] **Sepet localStorage temizleme** — yeni kullanıcı senaryosu
- [ ] **Lighthouse skoru** — `pagespeed.web.dev` ile final
- [ ] **Cookie banner** — "Kabul Et" → kapan → bir daha gelmiyor
- [ ] **Search modal** — popüler aramalar + canlı sonuç
- [ ] **Footer linkleri** — KVKK, Çerez Politikası açılıyor mu?

---

## 8. Birlik personel eğitimi

- [ ] **WhatsApp sipariş süreci** — gelen mesajı nasıl okuyacak, nasıl onaylayacak
- [ ] **Yeni ürün ekleme** (Sprint 9'da admin paneli olabilir; şimdilik manuel JSON)
- [ ] **Site yöneticisi rehberi** — `docs/BIRLIK_HANDOVER.md` kullan
- [ ] **Müşteri hizmetleri akışı** — sorun, iade, kargo bilgisi, vb.

---

## 9. Lansman sonrası izleme (ilk 1 hafta)

- [ ] Günlük WhatsApp sipariş sayısı
- [ ] GA4 trafik kaynakları (organic/social/direct)
- [ ] Google Search Console: indexleme durumu, hata raporları
- [ ] PageSpeed: gerçek kullanıcı (FieldData) toplanmaya başlar (~28 gün)
- [ ] Müşteri geri bildirimleri → Sprint 9 backlog

---

## 10. Sprint 9 öncelik listesi (lansman sonrası)

Birlik'in lansman sonrası ihtiyaçlarına göre değişebilir:

- [ ] Build pipeline migration (Vite/Astro) — Lighthouse Performance < 85 ise zorunlu
- [ ] Real product photography entegrasyonu
- [ ] Blog içeriği (5–10 ilk makale, SEO derinlik için)
- [ ] Mini-CMS (admin paneli — JSON manuel yerine UI)
- [ ] E-posta entegrasyonu (sipariş onay otomatik)
- [ ] Çiftlikten Sofraya haritası interaktif (Leaflet.js)
- [ ] Üretici detay sayfası (`pages/uretici-detay.html?id=X`)
- [ ] Tarif sayfaları (Recipe schema ile rich snippet)

---

## 11. Acil durum / sorun giderme

- **Site açılmıyor** → GitHub `Settings → Pages` durumu kontrol; Actions tab deploy log
- **Yeni ürün görünmüyor** → `assets/data/products.json` JSON syntax hatası (validator: jsonlint.com)
- **Sipariş gelmiyor** → WhatsApp numarası `site-config.json`'da doğru mu (sadece rakam, ülke kodu dahil)
- **Sosyal medya rozeti bozuk** → `site-config.json` → `social.*` alanı boş ise "Yakında" gözükür (doğru davranış)
- **Cart modal açılmıyor** → DevTools Console'da Alpine.js hatası; `<script defer>` sırası bozulmuş olabilir

---

**Son güncelleme:** 10 Mayıs 2026  
**Geliştirici:** AI proje koordinatörü (Claude) + Coderbaykals  
**Repo:** github.com/Coderbaykals/malkara-sut
