# Marka Kılavuzu — Malkara Süt Üreticileri Birliği

> Malkara Süt Üreticileri Birliği'nin marka kimliğini doğru ve tutarlı bir biçimde uygulamak için referans rehberi. Tasarımcılar, yazarlar, ajanslar ve birlik çalışanları için.

---

## Logo Kullanımı

Logomuz tüm marka iletişiminin görsel kimliğinin merkezindedir. "M" monogramı, Trakya yeşili daire içinde Fraunces tipografisi ile oluşturulmuştur. Cam şişe sütteki temizlik hissi, monogramın yumuşak yapısıyla destekler.

**Logo Kullanılmamalı:**
- Logo deforme edilmemeli, oranı bozulmamalı, eğilmemelidir
- Marka renkleri dışında renklendirilmemelidir (yeşil/krema/buğday haricinde)
- Karmaşık veya yoğun arkaplanlar üzerinde direkt kullanılmamalıdır
- Minimum 32px (dijital) / 12mm (baskı) boyutunun altında kullanılmamalıdır
- Çevresinde minimum boşluk (yarı çap kadar) bırakılmadan kullanılmamalıdır

> Logo varyasyonlarının görsel önizlemesi için: [`docs/_archive/brand-guide.html`](_archive/brand-guide.html)

---

## Renk Paleti

Trakya yeşili merkezde, krema/süt beyazı sıcaklık katar, buğday tonu hasat ve kalite hissi verir. Klasik "baby blue" süt klişesinden bilinçli olarak uzak durulmuştur.

### Ana Renkler

| Token | İsim | HEX | RGB | CMYK | Kullanım |
|-------|------|-----|-----|------|----------|
| `--green-deep` | Trakya Yeşili | `#1F3A2E` | 31, 58, 46 | 78, 55, 75, 65 | Birincil marka rengi, header, CTA |
| `--cream` | Krema Sarısı | `#F7F1E3` | 247, 241, 227 | 3, 4, 14, 0 | Sıcak arkaplan, kart yüzeyleri |
| `--wheat` | Buğday Tonu | `#D4A574` | 212, 165, 116 | 18, 38, 60, 5 | Vurgu, ikincil CTA, hasat hissi |
| `--milk` | Süt Beyazı | `#FDFBF5` | 253, 251, 245 | 1, 1, 5, 0 | Genel sayfa zemini |

### İkincil Renkler

| Token | İsim | HEX | RGB | Kullanım |
|-------|------|-----|-----|----------|
| `--green-mid` | Çayır Yeşili | `#2D5A3D` | 45, 90, 61 | Orta vurgu, bağlantılar |
| `--green-light` | Mera Yeşili | `#5A8A6B` | 90, 138, 107 | Soft vurgu, durum işaretleri |
| `--wheat-dark` | Hasat Toprağı | `#B8843F` | 184, 132, 63 | Buğday üzeri vurgu |
| `--charcoal` | Antrasit | `#2A2826` | 42, 40, 38 | Ana metin rengi |
| `--warm-grey` | Sıcak Gri | `#6B6660` | — | İkincil/yardımcı metin |
| `--line` | Çizgi | `#E8E0CF` | — | Ayraç çizgileri, ince kenarlıklar |

---

## Tipografi

Karakterli ama okunaklı bir serif (Fraunces) ile yüksek okunaklı bir sans-serif (Inter) kombinasyonu. **Türkçe karakter desteği zorunludur** — tüm Türkçe glyph'ler test edilmiştir.

### Birincil — Başlıklar

- **Aile**: `Fraunces`, serif
- **Ağırlıklar**: 400, 500, 600, 700
- **Italik**: 400 italik (vurgu, üretici adı, slogan)
- **Kullanım**: H1–H3, slogan, hero başlık, ürün adı

### İkincil — Metin

- **Aile**: `Inter`, sans-serif
- **Ağırlıklar**: 400 (normal), 500 (orta), 600 (vurgu), 700 (kalın)
- **Kullanım**: Body, button, label, navigasyon, form

### Tip Hiyerarşisi

| Rol | Aile | Ağırlık | Notlar |
|-----|------|---------|--------|
| Display / Hero | Fraunces | 600–700 | `clamp()` ile responsive |
| H1 | Fraunces | 600 | — |
| H2 | Fraunces | 600 | — |
| H3 | Fraunces / Inter | 500 | Sayfaya göre |
| Body | Inter | 400 | 16px taban |
| Small | Inter | 400 | 14px |
| Caption | Inter | 500 | 12px, harf aralığı geniş |
| Mono / Code | system mono | 400 | Ambalaj/tarih bilgisi |

CSS değişkenleri: `--font-heading`, `--font-body` (bkz. [`tokens.css`](../assets/css/tokens.css)).

---

## Ses ve Ton

Sıcak, samimi, dürüst, abartısız. "Köy ağzı" değil ama "köyün öz değeri". Güvenilir komşu, bilgili çiftçi, yeni nesil kooperatif duruşu.

### Bakım Veren

Çocuğunun beslenmesini düşünen anne, sevdiklerini koruyan ev sahibi gibi. Şefkat, güven, sorumluluk hisleri uyandırır. Ürünlerimize ve müşterilere bu duyguyla yaklaşırız.

### Sıradan İnsan

Klişe pastoral köylü değil, çağdaş yerli. Üretici emeğini kibirsiz vurgulayan, her gün herkesin sofrasında olan dürüst bir ses. Lüks tüketim değil, hakiki bir tercih.

### Yazma Stili

- Net, kısa cümleler. Süslü dilden kaçın.
- Sayılarla konuş ("57 köy", "92 soğutma merkezi", "günlük 105 ton").
- İsim isim üreticilerden bahset (İsmail Yıldız, Ayşe Kaplan).
- Türkçe karakterleri tam yaz (ç, ğ, ı, ş, ö, ü) — ASCII kısaltma yok.

---

## Sloganlar

Marka iletişiminde tutarlı kullanılan sloganlar. Ana slogan birinci derecede, diğerleri kampanya/içerik özelinde değiştirilebilir.

| Slogan | Kullanım |
|--------|----------|
| **Trakya'nın bereketi, çatımızın altında.** | Ana slogan |
| 57 köyün ortak emeği. | Kurumsal iletişim |
| Süt nereden geliyor? Biliyoruz. | İzlenebilirlik kampanyaları |
| Üreticiden, tek çatı altından, size. | D2C / e-ticaret |
| Malkara: Sütün öz hâli. | Kısa kullanım, sosyal medya |

Belge başında ayrıca anılan ürün vaadi: **"Bugün sağıldı. Yarın sofranda."**

---

## UI Bileşenleri

Web ve dijital uygulamalarda kullanılan temel bileşenler — buton stilleri, etiketler, formlar. Detaylı görsel örnekler için [`docs/_archive/brand-guide.html`](_archive/brand-guide.html).

Temel CSS örneği (Sprint 3'te `assets/css/components.css`'e taşınacak):

```css
.btn-primary {
  background: var(--green-deep);
  color: var(--milk);
  font-family: var(--font-body);
  font-weight: 600;
  padding: 12px 24px;
  border-radius: var(--radius-md);
  transition: var(--transition-base);
}
.btn-primary:hover {
  background: var(--green-mid);
}

.btn-secondary {
  background: var(--wheat);
  color: var(--charcoal);
}

.tag {
  background: var(--cream);
  color: var(--green-deep);
  font-size: 12px;
  letter-spacing: 0.05em;
  padding: 4px 10px;
  border-radius: var(--radius-full);
}
```

---

## Fotoğraf Yönlendirmesi

Doğal ışık öncelikli, sahici, dokunulabilir hisli kompozisyonlar. Stüdyo set'leri yerine saha ve mutfak gerçekliği.

**Kaçınılması gerekenler:**
- Aşırı işlenmiş, suni doygunluk/satürasyonu yüksek görüntüler
- Stok fotoğraf hissi veren, tipik "süt reklamı" görüntüleri
- Steril, soğuk, pürüzsüz beyaz arkaplan ürün çekimleri (tek başına)
- Aşırı romantize edilmiş, fazla pastoral, gerçeklikten kopuk sahneler

---

## Ambalaj Uygulaması

Cam şişe, karton kutu ve kraft kâğıt ambalajlar. Plastiği aktif olarak azaltıyoruz. Her ambalaj üreticisinin köyünü ve adını taşır.

**Ambalaj Anatomisi — Olmazsa Olmaz Bilgiler:**
- "M" monogramı veya tam logo (üst orta veya tepe)
- Ürün adı (Fraunces, italik vurgu ile)
- Hacim/ağırlık (Inter, küçük, harf aralığı geniş)
- Üretici köy ve isim (Fraunces italik, alt orta)
- Parti numarası ve tarih (monospace, küçük, alt)
- QR kod (izlenebilirlik için, arka yüz)
- Besin değeri tablosu, içindekiler, saklama (arka yüz)

---

**Orijinal görsel önizlemeli versiyon:** [`docs/_archive/brand-guide.html`](_archive/brand-guide.html)
