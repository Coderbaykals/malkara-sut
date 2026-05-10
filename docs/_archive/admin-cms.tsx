import React, { useState } from 'react';
import {
  LayoutDashboard, Package, Tag, Image as ImageIcon, Users, FileText, Mail,
  Settings, Bell, Search, Plus, Edit2, Trash2, Eye, Upload, Save,
  ChevronDown, MapPin, Phone, Globe, Clock, Star, Filter, MoreVertical,
  Check, X, ArrowUp, ArrowDown, Hash, Calendar, ShoppingBag, RefreshCw,
  TrendingUp, AlertCircle, Megaphone, Home, BookOpen, Building2, LogOut,
  Menu as MenuIcon
} from 'lucide-react';

export default function MSUBAdminCMS() {
  const [activeSection, setActiveSection] = useState('dashboard');
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Sample data state
  const [products, setProducts] = useState([
    { id: 1, name: 'A2 Tam Yağlı Pastörize Süt', category: 'Süt', price: 89, stock: 240, status: 'active', producer: 'İsmail Yıldız', village: 'Evrenbey', img: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80' },
    { id: 2, name: 'Geleneksel Süzme Yoğurt', category: 'Yoğurt', price: 125, stock: 156, status: 'active', producer: 'Ayşe Kaplan', village: 'Karaidemir', img: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=200&q=80' },
    { id: 3, name: 'Manda Sütü Beyaz Peynir', category: 'Peynir', price: 285, stock: 42, status: 'active', producer: 'Mehmet Demir', village: 'Pirinçeli', img: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=200&q=80' },
    { id: 4, name: 'Köy Tereyağı, Tuzsuz', category: 'Tereyağı', price: 165, stock: 88, status: 'active', producer: 'Mehmet Demir', village: 'Sağlamtaş', img: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=200&q=80' },
    { id: 5, name: 'Sade Kefir 500ml', category: 'Fonksiyonel', price: 75, stock: 0, status: 'draft', producer: 'Ayşe Kaplan', village: 'Karaidemir', img: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=200&q=80' }
  ]);

  const [categories, setCategories] = useState([
    { id: 1, name: 'Günlük Süt', slug: 'sut', count: 12, order: 1, icon: '🥛' },
    { id: 2, name: 'Yoğurt', slug: 'yogurt', count: 8, order: 2, icon: '🍶' },
    { id: 3, name: 'Peynir', slug: 'peynir', count: 14, order: 3, icon: '🧀' },
    { id: 4, name: 'Tereyağı', slug: 'tereyagi', count: 4, order: 4, icon: '🧈' },
    { id: 5, name: 'Fonksiyonel', slug: 'fonksiyonel', count: 6, order: 5, icon: '✨' },
    { id: 6, name: 'Manda Ürünleri', slug: 'manda', count: 5, order: 6, icon: '🐃' },
    { id: 7, name: 'Hediye Setleri', slug: 'set', count: 3, order: 7, icon: '🎁' }
  ]);

  const [contactInfo, setContactInfo] = useState({
    address: 'Gazibey, Tevfikbey Cd. No:3',
    city: 'Malkara / Tekirdağ',
    postal: '59310',
    phone: '+90 282 673 81 50',
    whatsapp: '+90 282 673 81 50',
    email: 'info@malkarasutureticileri.org.tr',
    emailSupport: 'destek@malkarasutureticileri.org.tr',
    emailB2B: 'kurumsal@malkarasutureticileri.org.tr',
    hoursWeekday: '09:00 — 18:00',
    hoursSaturday: '09:00 — 13:00',
    hoursSunday: 'Kapalı',
    instagram: '@malkarasut',
    tiktok: '@malkarasut',
    youtube: 'malkarasut',
    facebook: 'malkarasut'
  });

  const [siteSettings, setSiteSettings] = useState({
    siteName: 'Malkara Süt Üreticileri Birliği',
    tagline: 'Trakya\'nın bereketi, çatımızın altında',
    announceBar: '🚚 İstanbul ve Marmara\'ya soğuk zincirle 24 saatte teslim · 350 ₺ üzeri ücretsiz kargo',
    announceActive: true,
    minOrder: 150,
    freeShipThreshold: 350,
    subDiscount: 10,
    welcomeDiscount: 15
  });

  const [producers, setProducers] = useState([
    { id: 1, name: 'İsmail Yıldız', village: 'Evrenbey', role: 'A2 Sürü Öncüsü', years: 28, animals: 180, daily: '2.4t', tag: 'A2', img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80', featured: true },
    { id: 2, name: 'Ayşe Kaplan', village: 'Karaidemir', role: 'Kadın Kooperatifi Başkanı', years: 16, animals: 0, daily: '800kg/ay', tag: 'Kadın Kooperatifi', img: 'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?w=200&q=80', featured: false },
    { id: 3, name: 'Mehmet Demir', village: 'Pirinçeli', role: 'Manda Yetiştiricisi', years: 22, animals: 42, daily: '320L', tag: 'Manda', img: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=200&q=80', featured: false },
    { id: 4, name: 'Hasan Şahin', village: 'Sağlamtaş', role: 'Birlik Başkanı', years: 32, animals: 95, daily: '1.2t', tag: 'Organik', img: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=200&q=80', featured: false }
  ]);

  const [posts, setPosts] = useState([
    { id: 1, title: 'Trakya usulü süzme yoğurt: evde nasıl yapılır?', category: 'Tarif', author: 'Sevgi Yıldız', status: 'published', date: '2026-05-06', views: 1240, featured: true },
    { id: 2, title: 'A2 süt nedir, neden farklı? Bilimin söylediği', category: 'Bilim', author: 'Dr. Özlem Yiğit', status: 'published', date: '2026-05-02', views: 892, featured: false },
    { id: 3, title: 'Evrenbey\'de bir gün: İsmail amcanın 28 yılı', category: 'Hikâye', author: 'Mehmet Yıldırım', status: 'published', date: '2026-05-02', views: 1432, featured: false },
    { id: 4, title: 'Manda peyniri ile spanakopita: füzyon tarif', category: 'Tarif', author: 'Cem Demir', status: 'draft', date: '2026-05-08', views: 0, featured: false }
  ]);

  const [orders] = useState([
    { id: 'ML-26-04829', customer: 'Zeynep Kara', items: 3, amount: 434, status: 'shipped', date: '7 May' },
    { id: 'ML-26-04828', customer: 'Mert Akın', items: 2, amount: 220, status: 'processing', date: '7 May' },
    { id: 'ML-26-04827', customer: 'Selin Bektaş', items: 5, amount: 745, status: 'delivered', date: '6 May' },
    { id: 'ML-26-04826', customer: 'Ayşe Demir', items: 4, amount: 530, status: 'delivered', date: '6 May' },
    { id: 'ML-26-04825', customer: 'Cem Yıldız', items: 2, amount: 285, status: 'cancelled', date: '5 May' }
  ]);

  const [media] = useState([
    { id: 1, name: 'evrenbey-ismail-amca.jpg', size: '2.4 MB', type: 'photo', date: '7 May', url: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80' },
    { id: 2, name: 'a2-sut-cam-sise.jpg', size: '1.8 MB', type: 'photo', date: '6 May', url: 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=400&q=80' },
    { id: 3, name: 'suzme-yogurt.jpg', size: '2.1 MB', type: 'photo', date: '6 May', url: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=400&q=80' },
    { id: 4, name: 'manda-peynir.jpg', size: '2.7 MB', type: 'photo', date: '5 May', url: 'https://images.unsplash.com/photo-1452195100486-9cc805987862?w=400&q=80' },
    { id: 5, name: 'tereyagi-koy.jpg', size: '1.9 MB', type: 'photo', date: '5 May', url: 'https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=400&q=80' },
    { id: 6, name: 'kefir-detay.jpg', size: '1.6 MB', type: 'photo', date: '4 May', url: 'https://images.unsplash.com/photo-1571212515416-fef01fc43637?w=400&q=80' },
    { id: 7, name: 'mera-trakya.jpg', size: '3.1 MB', type: 'photo', date: '4 May', url: 'https://images.unsplash.com/photo-1500595046743-cd271d694d30?w=400&q=80' },
    { id: 8, name: 'koyden-sofraya.jpg', size: '2.3 MB', type: 'photo', date: '3 May', url: 'https://images.unsplash.com/photo-1605733513597-a8f8341084e6?w=400&q=80' }
  ]);

  const [showProductModal, setShowProductModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [savedToast, setSavedToast] = useState(false);

  const showSaved = () => {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2200);
  };

  const sidebarItems = [
    { id: 'dashboard', icon: LayoutDashboard, label: 'Genel Bakış' },
    { type: 'header', label: 'İçerik' },
    { id: 'products', icon: Package, label: 'Ürünler', badge: products.length },
    { id: 'categories', icon: Tag, label: 'Kategoriler', badge: categories.length },
    { id: 'media', icon: ImageIcon, label: 'Görsel Kütüphane' },
    { id: 'producers', icon: Users, label: 'Üreticiler', badge: producers.length },
    { id: 'posts', icon: FileText, label: 'Blog & Tarifler' },
    { type: 'header', label: 'Operasyon' },
    { id: 'orders', icon: ShoppingBag, label: 'Siparişler', badge: 12, dot: true },
    { id: 'subscriptions', icon: RefreshCw, label: 'Abonelikler' },
    { type: 'header', label: 'Site Yönetimi' },
    { id: 'announce', icon: Megaphone, label: 'Duyuru Bandı' },
    { id: 'pages', icon: Home, label: 'Sayfa İçerikleri' },
    { id: 'contact', icon: Phone, label: 'İletişim Bilgileri' },
    { id: 'settings', icon: Settings, label: 'Ayarlar' }
  ];

  const stats = [
    { label: 'Bu ayki sipariş', value: '342', change: '+12%', up: true },
    { label: 'Aylık ciro', value: '₺128.4K', change: '+8.2%', up: true },
    { label: 'Aktif abonelik', value: '186', change: '+24', up: true },
    { label: 'Stok uyarısı', value: '3', change: 'Acil', up: false }
  ];

  // === COMPONENTS ===

  const StatusBadge = ({ status }) => {
    const map = {
      active: { bg: 'rgba(45,122,79,0.12)', color: '#2d7a4f', label: 'Aktif' },
      draft: { bg: 'rgba(107,102,96,0.12)', color: '#6b6660', label: 'Taslak' },
      published: { bg: 'rgba(45,122,79,0.12)', color: '#2d7a4f', label: 'Yayında' },
      shipped: { bg: 'rgba(212,165,116,0.18)', color: '#b8843f', label: 'Yolda' },
      processing: { bg: 'rgba(31,58,46,0.08)', color: '#1f3a2e', label: 'Hazırlanıyor' },
      delivered: { bg: 'rgba(45,122,79,0.12)', color: '#2d7a4f', label: 'Teslim' },
      cancelled: { bg: 'rgba(176,72,72,0.1)', color: '#b04848', label: 'İptal' }
    };
    const s = map[status] || map.draft;
    return (
      <span style={{
        background: s.bg, color: s.color, padding: '4px 10px',
        borderRadius: 100, fontSize: 11, fontWeight: 600,
        letterSpacing: '0.04em', textTransform: 'uppercase', whiteSpace: 'nowrap'
      }}>{s.label}</span>
    );
  };

  // === SECTIONS ===

  const Dashboard = () => (
    <>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
        <div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 32, color: '#1f3a2e', marginBottom: 6, fontWeight: 500 }}>Hoş geldin, <em style={{ color: '#b8843f' }}>Hasan Bey</em></h1>
          <p style={{ color: '#6b6660', fontSize: 14 }}>Bugün 7 yeni sipariş, 3 abonelik onayı bekliyor.</p>
        </div>
        <div style={{ fontSize: 13, color: '#6b6660' }}>9 Mayıs 2026, 14:32</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16, marginBottom: 32 }}>
        {stats.map((s, i) => (
          <div key={i} style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 14, padding: 22 }}>
            <div style={{ fontSize: 11, letterSpacing: '0.06em', textTransform: 'uppercase', color: '#6b6660', fontWeight: 600, marginBottom: 12 }}>{s.label}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
              <span style={{ fontFamily: 'Fraunces, serif', fontSize: 28, color: '#1f3a2e', fontWeight: 600 }}>{s.value}</span>
              <span style={{ fontSize: 12, color: s.up ? '#2d7a4f' : '#b04848', fontWeight: 600 }}>{s.up && '↑'} {s.change}</span>
            </div>
          </div>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20, marginBottom: 24 }}>
        <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: '#1f3a2e', fontWeight: 500 }}>Son Siparişler</h3>
            <button onClick={() => setActiveSection('orders')} style={{ fontSize: 12, color: '#1f3a2e', fontWeight: 600, background: 'none', border: 'none', borderBottom: '1px solid #1f3a2e', cursor: 'pointer', padding: 0 }}>Tümü →</button>
          </div>
          {orders.slice(0, 4).map((o, i) => (
            <div key={o.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 3 ? '1px solid #e8e0cf' : 'none', alignItems: 'center', gap: 12 }}>
              <div style={{ minWidth: 0 }}>
                <div style={{ fontSize: 13, fontWeight: 600, color: '#1f3a2e' }}>{o.id}</div>
                <div style={{ fontSize: 12, color: '#6b6660' }}>{o.customer} · {o.items} ürün</div>
              </div>
              <StatusBadge status={o.status} />
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 600, color: '#1f3a2e' }}>{o.amount} ₺</div>
            </div>
          ))}
        </div>

        <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, padding: 24 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: '#1f3a2e', fontWeight: 500 }}>Hızlı Erişim</h3>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
            {[
              { icon: Plus, label: 'Yeni Ürün', section: 'products' },
              { icon: ImageIcon, label: 'Fotoğraf Yükle', section: 'media' },
              { icon: FileText, label: 'Yeni Yazı', section: 'posts' },
              { icon: Megaphone, label: 'Duyuru Düzenle', section: 'announce' }
            ].map((q, i) => (
              <button key={i} onClick={() => setActiveSection(q.section)} style={{ background: '#f7f1e3', border: '1px solid #e8e0cf', borderRadius: 12, padding: 16, fontSize: 13, fontWeight: 600, color: '#1f3a2e', display: 'flex', alignItems: 'center', gap: 10, cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = '#1f3a2e'; e.currentTarget.style.transform = 'translateY(-2px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e0cf'; e.currentTarget.style.transform = 'translateY(0)'; }}>
                <q.icon size={16} />
                {q.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ background: '#1f3a2e', color: '#f7f1e3', borderRadius: 16, padding: 28, position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: -80, right: -80, width: 240, height: 240, background: '#d4a574', borderRadius: '50%', opacity: 0.08 }}></div>
        <div style={{ position: 'relative' }}>
          <div style={{ fontSize: 11, color: '#d4a574', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 10 }}>Stok Uyarısı</div>
          <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, marginBottom: 14, fontWeight: 500 }}>3 ürün kritik stokta</h3>
          <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {products.filter(p => p.stock < 100).map(p => (
              <span key={p.id} style={{ background: 'rgba(247,241,227,0.1)', border: '1px solid rgba(247,241,227,0.2)', padding: '8px 14px', borderRadius: 100, fontSize: 12 }}>
                {p.name} <strong style={{ color: '#d4a574' }}>· {p.stock} adet</strong>
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );

  const ProductsView = () => (
    <>
      <SectionHeader title="Ürünler" subtitle={`Toplam ${products.length} ürün · ${products.filter(p => p.status === 'active').length} aktif yayında`}>
        <button style={btnStyles.primary} onClick={() => { setEditingProduct(null); setShowProductModal(true); }}>
          <Plus size={16} /> Yeni Ürün
        </button>
      </SectionHeader>

      <Toolbar />

      <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 800 }}>
            <thead>
              <tr style={{ background: '#f7f1e3', borderBottom: '1px solid #e8e0cf' }}>
                {['Ürün', 'Kategori', 'Üretici', 'Fiyat', 'Stok', 'Durum', ''].map((h, i) => (
                  <th key={i} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#1f3a2e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {products.map(p => (
                <tr key={p.id} style={{ borderBottom: '1px solid #e8e0cf' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <img src={p.img} alt="" style={{ width: 44, height: 44, borderRadius: 8, objectFit: 'cover', flexShrink: 0 }} />
                      <div style={{ fontFamily: 'Fraunces, serif', fontSize: 14, color: '#1f3a2e', fontWeight: 500 }}>{p.name}</div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, color: '#6b6660' }}>{p.category}</td>
                  <td style={{ padding: '14px 16px', fontSize: 12 }}>
                    <div style={{ color: '#1f3a2e', fontWeight: 500 }}>{p.producer}</div>
                    <div style={{ color: '#6b6660' }}>{p.village}</div>
                  </td>
                  <td style={{ padding: '14px 16px', fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 600, color: '#1f3a2e' }}>{p.price} ₺</td>
                  <td style={{ padding: '14px 16px', fontSize: 13 }}>
                    <span style={{ color: p.stock < 100 ? '#b04848' : p.stock < 200 ? '#b8843f' : '#2d7a4f', fontWeight: 600 }}>{p.stock} adet</span>
                  </td>
                  <td style={{ padding: '14px 16px' }}><StatusBadge status={p.status} /></td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <div style={{ display: 'flex', gap: 6, justifyContent: 'flex-end' }}>
                      <IconBtn icon={Edit2} onClick={() => { setEditingProduct(p); setShowProductModal(true); }} />
                      <IconBtn icon={Eye} />
                      <IconBtn icon={Trash2} danger />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const CategoriesView = () => {
    const [editing, setEditing] = useState(null);
    const [newCat, setNewCat] = useState({ name: '', icon: '', slug: '' });

    return (
      <>
        <SectionHeader title="Kategoriler" subtitle={`${categories.length} kategori · sürükleyerek sıralayabilirsiniz`} />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 20 }}>
          <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, overflow: 'hidden' }}>
            {categories.map((c, i) => (
              <div key={c.id} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '16px 20px', borderBottom: i < categories.length - 1 ? '1px solid #e8e0cf' : 'none' }}>
                <button style={{ background: 'transparent', border: 'none', color: '#6b6660', cursor: 'grab', display: 'grid', placeItems: 'center', padding: 4 }}>
                  <MenuIcon size={16} />
                </button>
                <div style={{ width: 44, height: 44, background: '#f7f1e3', borderRadius: 10, display: 'grid', placeItems: 'center', fontSize: 22, flexShrink: 0 }}>
                  {c.icon}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, color: '#1f3a2e', fontWeight: 500 }}>{c.name}</div>
                  <div style={{ fontSize: 12, color: '#6b6660' }}>/{c.slug}</div>
                </div>
                <div style={{ background: '#f7f1e3', padding: '4px 10px', borderRadius: 100, fontSize: 12, fontWeight: 600, color: '#1f3a2e' }}>{c.count} ürün</div>
                <div style={{ display: 'flex', gap: 4 }}>
                  <IconBtn icon={ArrowUp} small />
                  <IconBtn icon={ArrowDown} small />
                  <IconBtn icon={Edit2} small onClick={() => setEditing(c)} />
                  <IconBtn icon={Trash2} small danger />
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#1f3a2e', color: '#f7f1e3', borderRadius: 16, padding: 24, alignSelf: 'start', position: 'sticky', top: 20 }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, marginBottom: 18, fontWeight: 500 }}>Yeni Kategori Ekle</h3>

            <Field label="İkon (emoji)" dark>
              <input type="text" placeholder="🥛" value={newCat.icon}
                onChange={e => setNewCat({ ...newCat, icon: e.target.value })}
                style={inputStyles.dark} />
            </Field>

            <Field label="Kategori Adı" dark>
              <input type="text" placeholder="Örn: Günlük Süt" value={newCat.name}
                onChange={e => setNewCat({ ...newCat, name: e.target.value, slug: e.target.value.toLowerCase().replace(/\s+/g, '-').replace(/[^a-z0-9-]/g, '') })}
                style={inputStyles.dark} />
            </Field>

            <Field label="URL Slug" dark>
              <input type="text" placeholder="sut" value={newCat.slug}
                onChange={e => setNewCat({ ...newCat, slug: e.target.value })}
                style={inputStyles.dark} />
              <small style={{ fontSize: 11, opacity: 0.6 }}>malkarasut.com.tr/{newCat.slug || 'kategori'}</small>
            </Field>

            <button onClick={() => {
              if (newCat.name && newCat.slug) {
                setCategories([...categories, { id: Date.now(), ...newCat, count: 0, order: categories.length + 1 }]);
                setNewCat({ name: '', icon: '', slug: '' });
                showSaved();
              }
            }} style={{ ...btnStyles.wheat, width: '100%', marginTop: 8 }}>
              <Plus size={16} /> Kategori Ekle
            </button>
          </div>
        </div>
      </>
    );
  };

  const MediaView = () => {
    const [filter, setFilter] = useState('all');
    return (
      <>
        <SectionHeader title="Görsel Kütüphane" subtitle={`${media.length} medya dosyası · 18.9 MB toplam`}>
          <button style={btnStyles.primary}>
            <Upload size={16} /> Görsel Yükle
          </button>
        </SectionHeader>

        <div style={{ background: '#f7f1e3', borderRadius: 16, padding: 14, marginBottom: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {['Tümü', 'Ürün', 'Üretici', 'Lifestyle', 'Banner'].map((p, i) => (
              <button key={i}
                onClick={() => setFilter(p)}
                style={{
                  padding: '8px 14px', borderRadius: 100,
                  border: '1px solid #e8e0cf',
                  background: filter === p ? '#1f3a2e' : '#fdfbf5',
                  color: filter === p ? '#f7f1e3' : '#2a2826',
                  fontSize: 12, fontWeight: 500, cursor: 'pointer'
                }}>
                {p}
              </button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={14} style={{ position: 'absolute', left: 12, top: 9, color: '#6b6660' }} />
            <input type="text" placeholder="Ara..." style={{ padding: '8px 14px 8px 32px', border: '1px solid #e8e0cf', borderRadius: 100, background: '#fdfbf5', fontSize: 13, width: 180, outline: 'none', fontFamily: 'inherit' }} />
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(180px, 1fr))', gap: 14 }}>
          <div style={{ aspectRatio: 1, border: '2px dashed #e8e0cf', borderRadius: 12, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, background: '#fdfbf5', cursor: 'pointer', transition: 'all 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1f3a2e'; e.currentTarget.style.background = '#f7f1e3'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#e8e0cf'; e.currentTarget.style.background = '#fdfbf5'; }}>
            <div style={{ width: 48, height: 48, background: '#f7f1e3', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#1f3a2e' }}>
              <Upload size={20} />
            </div>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#1f3a2e' }}>Sürükle & Bırak</div>
            <div style={{ fontSize: 11, color: '#6b6660' }}>JPG, PNG, WebP</div>
          </div>
          {media.map(m => (
            <div key={m.id} style={{ position: 'relative', borderRadius: 12, overflow: 'hidden', border: '1px solid #e8e0cf', cursor: 'pointer' }}>
              <div style={{ aspectRatio: 1, overflow: 'hidden', background: '#f7f1e3' }}>
                <img src={m.url} alt={m.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ padding: '10px 12px', background: '#fdfbf5', fontSize: 11 }}>
                <div style={{ color: '#1f3a2e', fontWeight: 500, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{m.name}</div>
                <div style={{ color: '#6b6660', fontSize: 10, marginTop: 2 }}>{m.size} · {m.date}</div>
              </div>
            </div>
          ))}
        </div>
      </>
    );
  };

  const ProducersView = () => (
    <>
      <SectionHeader title="Üreticiler" subtitle={`${producers.length} aktif üretici · 1 öne çıkan`}>
        <button style={btnStyles.primary}>
          <Plus size={16} /> Yeni Üretici
        </button>
      </SectionHeader>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: 16 }}>
        {producers.map(p => (
          <div key={p.id} style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, overflow: 'hidden', position: 'relative' }}>
            {p.featured && (
              <div style={{ position: 'absolute', top: 12, right: 12, background: '#d4a574', color: '#1f3a2e', padding: '4px 10px', borderRadius: 100, fontSize: 10, fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', zIndex: 2 }}>★ Öne Çıkan</div>
            )}
            <div style={{ aspectRatio: '4/3', overflow: 'hidden', background: '#f7f1e3' }}>
              <img src={p.img} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
            </div>
            <div style={{ padding: 18 }}>
              <div style={{ fontSize: 11, color: '#b8843f', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 4 }}>{p.village}</div>
              <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: 18, color: '#1f3a2e', marginBottom: 4, fontWeight: 500 }}>{p.name}</h4>
              <div style={{ fontSize: 12, color: '#6b6660', marginBottom: 14 }}>{p.role}</div>
              <div style={{ display: 'flex', gap: 14, paddingTop: 12, borderTop: '1px solid #e8e0cf', marginBottom: 14 }}>
                <div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, color: '#1f3a2e', fontWeight: 600 }}>{p.years}y</div>
                  <div style={{ fontSize: 10, color: '#6b6660', textTransform: 'uppercase' }}>Deneyim</div>
                </div>
                {p.animals > 0 && (
                  <div>
                    <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, color: '#1f3a2e', fontWeight: 600 }}>{p.animals}</div>
                    <div style={{ fontSize: 10, color: '#6b6660', textTransform: 'uppercase' }}>Hayvan</div>
                  </div>
                )}
                <div>
                  <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, color: '#1f3a2e', fontWeight: 600 }}>{p.daily}</div>
                  <div style={{ fontSize: 10, color: '#6b6660', textTransform: 'uppercase' }}>Günlük</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 6 }}>
                <button style={{ flex: 1, padding: '8px', borderRadius: 100, background: 'transparent', border: '1px solid #1f3a2e', color: '#1f3a2e', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6, fontFamily: 'inherit' }}>
                  <Edit2 size={12} /> Düzenle
                </button>
                <IconBtn icon={Eye} small />
                <IconBtn icon={MoreVertical} small />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const PostsView = () => (
    <>
      <SectionHeader title="Blog & Tarifler" subtitle={`${posts.filter(p => p.status === 'published').length} yayında · ${posts.filter(p => p.status === 'draft').length} taslak`}>
        <button style={btnStyles.primary}>
          <Plus size={16} /> Yeni Yazı
        </button>
      </SectionHeader>

      <Toolbar searchPlaceholder="Yazı, yazar veya kategori ara..." />

      <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, overflow: 'hidden' }}>
        {posts.map((post, i) => (
          <div key={post.id} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 18, borderBottom: i < posts.length - 1 ? '1px solid #e8e0cf' : 'none', flexWrap: 'wrap' }}>
            {post.featured && <Star size={14} fill="#d4a574" stroke="#d4a574" />}
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: 15, color: '#1f3a2e', fontWeight: 500, marginBottom: 4 }}>{post.title}</h4>
              <div style={{ fontSize: 12, color: '#6b6660', display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <span>{post.category}</span>
                <span>·</span>
                <span>{post.author}</span>
                <span>·</span>
                <span>{post.date}</span>
              </div>
            </div>
            <div style={{ fontSize: 12, color: '#6b6660', display: 'flex', alignItems: 'center', gap: 4 }}>
              <Eye size={12} /> {post.views.toLocaleString('tr-TR')}
            </div>
            <StatusBadge status={post.status} />
            <div style={{ display: 'flex', gap: 4 }}>
              <IconBtn icon={Edit2} small />
              <IconBtn icon={Eye} small />
              <IconBtn icon={Trash2} small danger />
            </div>
          </div>
        ))}
      </div>
    </>
  );

  const OrdersView = () => (
    <>
      <SectionHeader title="Siparişler" subtitle="Tüm sipariş hareketleri" />

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 12, marginBottom: 24 }}>
        {[
          { label: 'Bekleyen', value: 7, color: '#1f3a2e' },
          { label: 'Hazırlanan', value: 12, color: '#b8843f' },
          { label: 'Yolda', value: 28, color: '#d4a574' },
          { label: 'Bugün teslim', value: 9, color: '#2d7a4f' }
        ].map((s, i) => (
          <div key={i} style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 12, padding: 16 }}>
            <div style={{ fontSize: 11, color: '#6b6660', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 600, marginBottom: 8 }}>{s.label}</div>
            <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: s.color, fontWeight: 600 }}>{s.value}</div>
          </div>
        ))}
      </div>

      <Toolbar />

      <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, overflow: 'hidden' }}>
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', minWidth: 720 }}>
            <thead>
              <tr style={{ background: '#f7f1e3', borderBottom: '1px solid #e8e0cf' }}>
                {['Sipariş', 'Müşteri', 'Tarih', 'Tutar', 'Durum', ''].map((h, i) => (
                  <th key={i} style={{ padding: '14px 16px', textAlign: 'left', fontSize: 11, fontWeight: 600, color: '#1f3a2e', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {orders.map(o => (
                <tr key={o.id} style={{ borderBottom: '1px solid #e8e0cf' }}>
                  <td style={{ padding: '14px 16px' }}>
                    <div style={{ fontFamily: 'monospace', fontSize: 12, color: '#1f3a2e', fontWeight: 600 }}>{o.id}</div>
                    <div style={{ fontSize: 11, color: '#6b6660' }}>{o.items} ürün</div>
                  </td>
                  <td style={{ padding: '14px 16px', fontSize: 13, color: '#1f3a2e' }}>{o.customer}</td>
                  <td style={{ padding: '14px 16px', fontSize: 13, color: '#6b6660' }}>{o.date}</td>
                  <td style={{ padding: '14px 16px', fontFamily: 'Fraunces, serif', fontSize: 15, fontWeight: 600, color: '#1f3a2e' }}>{o.amount} ₺</td>
                  <td style={{ padding: '14px 16px' }}><StatusBadge status={o.status} /></td>
                  <td style={{ padding: '14px 16px', textAlign: 'right' }}>
                    <IconBtn icon={Eye} small />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );

  const SubsView = () => (
    <>
      <SectionHeader title="Abonelikler" subtitle="186 aktif · 24 atlanan · 3 iptal beklemede" />

      <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, padding: 24 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18, color: '#6b6660' }}>
          <RefreshCw size={16} />
          <span style={{ fontSize: 13 }}>Önümüzdeki 7 gün için 86 sipariş otomatik hazırlanacak</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: 12 }}>
          {[
            { label: 'Aktif Abonelik', value: 186, sub: 'Toplam' },
            { label: 'Aile Kahvaltı', value: 78, sub: '%42' },
            { label: 'Sade Süt', value: 54, sub: '%29' },
            { label: 'Çocuk Kutusu', value: 32, sub: '%17' },
            { label: 'Diğer', value: 22, sub: '%12' }
          ].map((s, i) => (
            <div key={i} style={{ padding: 16, background: '#f7f1e3', borderRadius: 10 }}>
              <div style={{ fontSize: 11, color: '#6b6660', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600, marginBottom: 6 }}>{s.label}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 24, color: '#1f3a2e', fontWeight: 600, marginBottom: 4 }}>{s.value}</div>
              <div style={{ fontSize: 11, color: '#b8843f', fontWeight: 600 }}>{s.sub}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );

  const AnnounceView = () => {
    const [local, setLocal] = useState(siteSettings);
    return (
      <>
        <SectionHeader title="Duyuru Bandı" subtitle="Sitenin tepesinde gösterilen mesaj" />

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          <Card>
            <h3 style={cardHeaderStyle}>Mesaj Düzenle</h3>

            <Field label="Aktif">
              <Toggle checked={local.announceActive} onChange={(v) => setLocal({ ...local, announceActive: v })} />
            </Field>

            <Field label="Duyuru Metni">
              <textarea value={local.announceBar}
                onChange={e => setLocal({ ...local, announceBar: e.target.value })}
                style={{ ...inputStyles.normal, minHeight: 80, fontFamily: 'inherit', resize: 'vertical' }} />
              <small style={{ fontSize: 11, color: '#6b6660' }}>Emoji desteklenir · Max 120 karakter önerilir</small>
            </Field>

            <Field label="Bağlantı (opsiyonel)">
              <input type="text" placeholder="https://..." style={inputStyles.normal} />
            </Field>

            <Field label="Görüntüleme">
              <select style={inputStyles.normal}>
                <option>Tüm sayfalar</option>
                <option>Sadece anasayfa</option>
                <option>Ürün sayfaları hariç</option>
              </select>
            </Field>

            <button onClick={() => { setSiteSettings(local); showSaved(); }} style={{ ...btnStyles.primary, width: '100%', marginTop: 8 }}>
              <Save size={16} /> Değişiklikleri Kaydet
            </button>
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}>Önizleme</h3>
            <div style={{ background: '#f7f1e3', borderRadius: 12, padding: 24, marginBottom: 20 }}>
              <div style={{ background: local.announceActive ? '#1f3a2e' : '#6b6660', color: '#f7f1e3', textAlign: 'center', padding: '10px 20px', fontSize: 13, borderRadius: 6 }}>
                {local.announceBar || 'Duyuru metniniz burada görünecek'}
              </div>
              <div style={{ marginTop: 16, fontSize: 11, color: '#6b6660', textAlign: 'center' }}>
                {local.announceActive ? '✓ Şu an sitede yayında' : '○ Şu an gizli'}
              </div>
            </div>

            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: 11, color: '#1f3a2e', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 600, marginBottom: 12 }}>Önceki Duyurular</h4>
            <div style={{ fontSize: 12, color: '#6b6660', display: 'grid', gap: 8 }}>
              <div style={{ padding: 10, background: '#f7f1e3', borderRadius: 8 }}>🎁 Anneler Günü kampanyası %20 indirim · 4 May'da kullanıldı</div>
              <div style={{ padding: 10, background: '#f7f1e3', borderRadius: 8 }}>📦 Yeni Foodie Kutusu lansmanı · 28 Apr'da kullanıldı</div>
              <div style={{ padding: 10, background: '#f7f1e3', borderRadius: 8 }}>🚚 İzmir'e teslimat başladı · 14 Apr'da kullanıldı</div>
            </div>
          </Card>
        </div>
      </>
    );
  };

  const PagesView = () => (
    <>
      <SectionHeader title="Sayfa İçerikleri" subtitle="Statik sayfaların başlık, açıklama ve içerik düzenlemeleri" />

      <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, overflow: 'hidden' }}>
        {[
          { name: 'Anasayfa', slug: '/', sections: 'Hero, Kategoriler, Üreticiler, Harita, Blog' },
          { name: 'Hikâyemiz', slug: '/hikayemiz', sections: 'Timeline, Vizyon-Misyon, Ekip, Değerler' },
          { name: 'Üretici Profilleri', slug: '/ureticiler', sections: 'Liste, Filtre, Hero' },
          { name: 'Çiftlikten Sofraya', slug: '/harita', sections: 'Harita, İzlenebilirlik, QR' },
          { name: 'Toptan & Kurumsal', slug: '/kurumsal', sections: 'Hedef segmentler, Fiyatlandırma, Form' },
          { name: 'Yardım Merkezi', slug: '/yardim', sections: 'SSS, Kargo, KVKK' },
          { name: 'İletişim', slug: '/iletisim', sections: 'Form, Kanallar, Harita' }
        ].map((page, i, arr) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: 18, borderBottom: i < arr.length - 1 ? '1px solid #e8e0cf' : 'none', flexWrap: 'wrap' }}>
            <div style={{ width: 40, height: 40, background: '#f7f1e3', borderRadius: 10, display: 'grid', placeItems: 'center', color: '#1f3a2e', flexShrink: 0 }}>
              <FileText size={16} />
            </div>
            <div style={{ flex: 1, minWidth: 200 }}>
              <h4 style={{ fontFamily: 'Fraunces, serif', fontSize: 15, color: '#1f3a2e', fontWeight: 500, marginBottom: 2 }}>{page.name}</h4>
              <div style={{ fontSize: 12, color: '#6b6660', fontFamily: 'monospace' }}>{page.slug}</div>
            </div>
            <div style={{ fontSize: 11, color: '#6b6660', maxWidth: 280 }}>{page.sections}</div>
            <button style={{ padding: '8px 16px', borderRadius: 100, background: 'transparent', border: '1px solid #1f3a2e', color: '#1f3a2e', fontSize: 12, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' }}>
              <Edit2 size={12} /> Düzenle
            </button>
          </div>
        ))}
      </div>
    </>
  );

  const ContactView = () => {
    const [local, setLocal] = useState(contactInfo);
    return (
      <>
        <SectionHeader title="İletişim Bilgileri" subtitle="Sitedeki tüm sayfalarda kullanılan bilgiler" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20 }}>

          <Card>
            <h3 style={cardHeaderStyle}><MapPin size={14} /> Adres</h3>
            <Field label="Adres satırı 1">
              <input type="text" value={local.address} onChange={e => setLocal({ ...local, address: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Şehir / İlçe">
              <input type="text" value={local.city} onChange={e => setLocal({ ...local, city: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Posta Kodu">
              <input type="text" value={local.postal} onChange={e => setLocal({ ...local, postal: e.target.value })} style={inputStyles.normal} />
            </Field>
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}><Phone size={14} /> Telefon & WhatsApp</h3>
            <Field label="Ana hat">
              <input type="text" value={local.phone} onChange={e => setLocal({ ...local, phone: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="WhatsApp Business">
              <input type="text" value={local.whatsapp} onChange={e => setLocal({ ...local, whatsapp: e.target.value })} style={inputStyles.normal} />
              <small style={{ fontSize: 11, color: '#6b6660' }}>WhatsApp linklerinde kullanılır</small>
            </Field>
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}><Mail size={14} /> E-Postalar</h3>
            <Field label="Genel">
              <input type="email" value={local.email} onChange={e => setLocal({ ...local, email: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Müşteri Hizmetleri">
              <input type="email" value={local.emailSupport} onChange={e => setLocal({ ...local, emailSupport: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Kurumsal / B2B">
              <input type="email" value={local.emailB2B} onChange={e => setLocal({ ...local, emailB2B: e.target.value })} style={inputStyles.normal} />
            </Field>
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}><Clock size={14} /> Çalışma Saatleri</h3>
            <Field label="Hafta içi">
              <input type="text" value={local.hoursWeekday} onChange={e => setLocal({ ...local, hoursWeekday: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Cumartesi">
              <input type="text" value={local.hoursSaturday} onChange={e => setLocal({ ...local, hoursSaturday: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Pazar">
              <input type="text" value={local.hoursSunday} onChange={e => setLocal({ ...local, hoursSunday: e.target.value })} style={inputStyles.normal} />
            </Field>
          </Card>

          <Card style={{ gridColumn: '1 / -1' }}>
            <h3 style={cardHeaderStyle}><Globe size={14} /> Sosyal Medya</h3>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
              <Field label="Instagram"><input type="text" value={local.instagram} onChange={e => setLocal({ ...local, instagram: e.target.value })} style={inputStyles.normal} /></Field>
              <Field label="TikTok"><input type="text" value={local.tiktok} onChange={e => setLocal({ ...local, tiktok: e.target.value })} style={inputStyles.normal} /></Field>
              <Field label="YouTube"><input type="text" value={local.youtube} onChange={e => setLocal({ ...local, youtube: e.target.value })} style={inputStyles.normal} /></Field>
              <Field label="Facebook"><input type="text" value={local.facebook} onChange={e => setLocal({ ...local, facebook: e.target.value })} style={inputStyles.normal} /></Field>
            </div>
          </Card>

          <div style={{ gridColumn: '1 / -1', display: 'flex', gap: 12, padding: 20, background: '#1f3a2e', borderRadius: 16, alignItems: 'center', flexWrap: 'wrap' }}>
            <AlertCircle size={20} style={{ color: '#d4a574', flexShrink: 0 }} />
            <div style={{ flex: 1, color: '#f7f1e3', fontSize: 13 }}>Değişiklikler kaydedildikten sonra tüm sayfalarda anlık olarak güncellenir.</div>
            <button onClick={() => { setContactInfo(local); showSaved(); }} style={btnStyles.wheat}>
              <Save size={16} /> Tüm Değişiklikleri Kaydet
            </button>
          </div>
        </div>
      </>
    );
  };

  const SettingsView = () => {
    const [local, setLocal] = useState(siteSettings);
    return (
      <>
        <SectionHeader title="Genel Ayarlar" subtitle="Sitenin temel davranışları ve eşik değerleri" />

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: 20 }}>
          <Card>
            <h3 style={cardHeaderStyle}>Marka</h3>
            <Field label="Site Adı">
              <input type="text" value={local.siteName} onChange={e => setLocal({ ...local, siteName: e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Slogan / Tagline">
              <input type="text" value={local.tagline} onChange={e => setLocal({ ...local, tagline: e.target.value })} style={inputStyles.normal} />
            </Field>
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}>E-Ticaret Eşikleri</h3>
            <Field label="Minimum sipariş tutarı (₺)">
              <input type="number" value={local.minOrder} onChange={e => setLocal({ ...local, minOrder: +e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Ücretsiz kargo eşiği (₺)">
              <input type="number" value={local.freeShipThreshold} onChange={e => setLocal({ ...local, freeShipThreshold: +e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Abonelik indirim oranı (%)">
              <input type="number" value={local.subDiscount} onChange={e => setLocal({ ...local, subDiscount: +e.target.value })} style={inputStyles.normal} />
            </Field>
            <Field label="Hoş geldin indirim oranı (%)">
              <input type="number" value={local.welcomeDiscount} onChange={e => setLocal({ ...local, welcomeDiscount: +e.target.value })} style={inputStyles.normal} />
            </Field>
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}>Entegrasyonlar</h3>
            {[
              { name: 'Iyzico', desc: 'Ödeme altyapısı', active: true },
              { name: 'Paraşüt', desc: 'e-Fatura/e-Arşiv', active: true },
              { name: 'Aras Soğuk Kargo', desc: 'Lojistik', active: true },
              { name: 'Klaviyo', desc: 'E-posta otomasyonu', active: true },
              { name: 'WhatsApp Business', desc: 'Bildirim & destek', active: true },
              { name: 'GA4 + Meta Pixel', desc: 'Analytics', active: true }
            ].map((int, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '12px 0', borderBottom: i < 5 ? '1px solid #e8e0cf' : 'none' }}>
                <div>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#1f3a2e' }}>{int.name}</div>
                  <div style={{ fontSize: 11, color: '#6b6660' }}>{int.desc}</div>
                </div>
                <Toggle checked={int.active} onChange={() => {}} />
              </div>
            ))}
          </Card>

          <Card>
            <h3 style={cardHeaderStyle}>Yetkili Kullanıcılar</h3>
            {[
              { name: 'Hasan Şahin', role: 'Süper Admin', initials: 'HŞ' },
              { name: 'Dr. Özlem Yiğit', role: 'Editör', initials: 'ÖY' },
              { name: 'Mehmet Yıldırım', role: 'İçerik Yazarı', initials: 'MY' }
            ].map((u, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 0', borderBottom: i < 2 ? '1px solid #e8e0cf' : 'none' }}>
                <div style={{ width: 36, height: 36, background: '#1f3a2e', color: '#f7f1e3', borderRadius: '50%', display: 'grid', placeItems: 'center', fontFamily: 'Fraunces, serif', fontWeight: 600, fontSize: 13 }}>{u.initials}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 600, fontSize: 13, color: '#1f3a2e' }}>{u.name}</div>
                  <div style={{ fontSize: 11, color: '#b8843f', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 600 }}>{u.role}</div>
                </div>
                <IconBtn icon={MoreVertical} small />
              </div>
            ))}
            <button style={{ width: '100%', marginTop: 14, padding: 12, borderRadius: 100, background: '#f7f1e3', border: '1px dashed #e8e0cf', color: '#1f3a2e', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
              <Plus size={14} /> Yeni Kullanıcı Davet Et
            </button>
          </Card>
        </div>

        <div style={{ marginTop: 20, padding: 20, background: '#1f3a2e', borderRadius: 16, display: 'flex', justifyContent: 'flex-end', gap: 12, alignItems: 'center', flexWrap: 'wrap' }}>
          <button style={{ ...btnStyles.outline, color: '#f7f1e3', borderColor: 'rgba(247,241,227,0.3)' }}>İptal</button>
          <button onClick={() => { setSiteSettings(local); showSaved(); }} style={btnStyles.wheat}>
            <Save size={16} /> Tümünü Kaydet
          </button>
        </div>
      </>
    );
  };

  // === SHARED COMPONENTS ===

  const SectionHeader = ({ title, subtitle, children }) => (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28, flexWrap: 'wrap', gap: 16 }}>
      <div>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 30, color: '#1f3a2e', marginBottom: 4, fontWeight: 500 }}>{title}</h1>
        <p style={{ color: '#6b6660', fontSize: 13 }}>{subtitle}</p>
      </div>
      {children}
    </div>
  );

  const Toolbar = ({ searchPlaceholder = 'Ara...' }) => (
    <div style={{ display: 'flex', gap: 10, marginBottom: 20, flexWrap: 'wrap' }}>
      <div style={{ position: 'relative', flex: '1 1 220px', maxWidth: 320 }}>
        <Search size={14} style={{ position: 'absolute', left: 14, top: 13, color: '#6b6660' }} />
        <input type="text" placeholder={searchPlaceholder} style={{ width: '100%', padding: '11px 16px 11px 36px', border: '1px solid #e8e0cf', borderRadius: 100, background: '#fdfbf5', fontSize: 13, outline: 'none', fontFamily: 'inherit' }} />
      </div>
      <button style={{ padding: '10px 16px', border: '1px solid #e8e0cf', borderRadius: 100, background: '#fdfbf5', fontSize: 12, color: '#2a2826', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: 'inherit' }}>
        <Filter size={14} /> Filtrele
      </button>
      <select style={{ padding: '10px 36px 10px 16px', border: '1px solid #e8e0cf', borderRadius: 100, background: '#fdfbf5', fontSize: 12, color: '#2a2826', cursor: 'pointer', appearance: 'none', backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10' viewBox='0 0 24 24' fill='none' stroke='%231f3a2e' stroke-width='2'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 14px center', fontFamily: 'inherit' }}>
        <option>En yeniler</option>
        <option>İsim (A-Z)</option>
        <option>Fiyat (artan)</option>
      </select>
    </div>
  );

  const Card = ({ children, style }) => (
    <div style={{ background: '#fdfbf5', border: '1px solid #e8e0cf', borderRadius: 16, padding: 24, ...style }}>
      {children}
    </div>
  );

  const cardHeaderStyle = {
    fontFamily: 'Fraunces, serif',
    fontSize: 17,
    color: '#1f3a2e',
    fontWeight: 500,
    marginBottom: 18,
    paddingBottom: 14,
    borderBottom: '1px solid #e8e0cf',
    display: 'flex',
    alignItems: 'center',
    gap: 8
  };

  const Field = ({ label, children, dark }) => (
    <div style={{ marginBottom: 14 }}>
      <label style={{ display: 'block', fontSize: 11, fontWeight: 600, color: dark ? '#d4a574' : '#1f3a2e', marginBottom: 6, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{label}</label>
      {children}
    </div>
  );

  const inputStyles = {
    normal: {
      width: '100%',
      padding: '11px 14px',
      border: '1.5px solid #e8e0cf',
      borderRadius: 10,
      background: '#f7f1e3',
      fontSize: 14,
      color: '#2a2826',
      fontFamily: 'inherit',
      outline: 'none'
    },
    dark: {
      width: '100%',
      padding: '11px 14px',
      border: '1px solid rgba(247,241,227,0.2)',
      borderRadius: 10,
      background: 'rgba(247,241,227,0.06)',
      fontSize: 14,
      color: '#f7f1e3',
      fontFamily: 'inherit',
      outline: 'none'
    }
  };

  const btnStyles = {
    primary: {
      padding: '11px 20px',
      borderRadius: 100,
      fontSize: 13,
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      background: '#1f3a2e',
      color: '#f7f1e3',
      fontFamily: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    },
    outline: {
      padding: '11px 20px',
      borderRadius: 100,
      fontSize: 13,
      fontWeight: 600,
      cursor: 'pointer',
      background: 'transparent',
      color: '#1f3a2e',
      border: '1.5px solid #1f3a2e',
      fontFamily: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    },
    wheat: {
      padding: '11px 20px',
      borderRadius: 100,
      fontSize: 13,
      fontWeight: 600,
      border: 'none',
      cursor: 'pointer',
      background: '#d4a574',
      color: '#1f3a2e',
      fontFamily: 'inherit',
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8
    }
  };

  const IconBtn = ({ icon: Icon, danger, small, onClick }) => (
    <button onClick={onClick} style={{
      width: small ? 30 : 36,
      height: small ? 30 : 36,
      borderRadius: 8,
      border: '1px solid #e8e0cf',
      background: '#fdfbf5',
      color: danger ? '#b04848' : '#6b6660',
      cursor: 'pointer',
      display: 'grid',
      placeItems: 'center',
      transition: 'all 0.2s'
    }}
      onMouseEnter={e => {
        e.currentTarget.style.background = danger ? 'rgba(176,72,72,0.08)' : '#f7f1e3';
        e.currentTarget.style.borderColor = danger ? '#b04848' : '#1f3a2e';
        e.currentTarget.style.color = danger ? '#b04848' : '#1f3a2e';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.background = '#fdfbf5';
        e.currentTarget.style.borderColor = '#e8e0cf';
        e.currentTarget.style.color = danger ? '#b04848' : '#6b6660';
      }}>
      <Icon size={small ? 13 : 15} />
    </button>
  );

  const Toggle = ({ checked, onChange }) => (
    <button onClick={() => onChange(!checked)} style={{
      width: 44, height: 24,
      borderRadius: 100,
      background: checked ? '#1f3a2e' : '#e8e0cf',
      border: 'none',
      position: 'relative',
      cursor: 'pointer',
      transition: 'background 0.2s'
    }}>
      <span style={{
        position: 'absolute',
        top: 3, left: checked ? 23 : 3,
        width: 18, height: 18,
        background: '#fdfbf5',
        borderRadius: '50%',
        transition: 'left 0.2s',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
      }}></span>
    </button>
  );

  // === PRODUCT MODAL ===

  const ProductModal = () => {
    const [form, setForm] = useState(editingProduct || {
      name: '', category: 'Süt', price: 0, stock: 0, status: 'draft',
      producer: '', village: '', img: ''
    });
    return (
      <div onClick={() => setShowProductModal(false)} style={{ position: 'fixed', inset: 0, background: 'rgba(31,58,46,0.6)', backdropFilter: 'blur(4px)', display: 'grid', placeItems: 'center', zIndex: 200, padding: 20 }}>
        <div onClick={e => e.stopPropagation()} style={{ background: '#fdfbf5', borderRadius: 20, maxWidth: 600, width: '100%', maxHeight: '90vh', overflowY: 'auto' }}>
          <div style={{ padding: '24px 28px', borderBottom: '1px solid #e8e0cf', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: 22, color: '#1f3a2e', fontWeight: 500 }}>
              {editingProduct ? 'Ürünü Düzenle' : 'Yeni Ürün Ekle'}
            </h3>
            <button onClick={() => setShowProductModal(false)} style={{ width: 36, height: 36, border: 'none', background: '#f7f1e3', borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#1f3a2e' }}>
              <X size={16} />
            </button>
          </div>
          <div style={{ padding: 28 }}>
            <Field label="Ürün Görseli">
              <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                {form.img && <img src={form.img} alt="" style={{ width: 80, height: 80, borderRadius: 10, objectFit: 'cover' }} />}
                <button style={{ padding: '10px 16px', border: '1.5px dashed #e8e0cf', background: '#f7f1e3', borderRadius: 10, color: '#1f3a2e', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                  <Upload size={14} /> Görsel Seç
                </button>
              </div>
            </Field>
            <Field label="Ürün Adı">
              <input type="text" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} placeholder="Örn: A2 Tam Yağlı Süt 1L" style={inputStyles.normal} />
            </Field>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Field label="Kategori">
                <select value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} style={inputStyles.normal}>
                  {categories.map(c => <option key={c.id}>{c.name}</option>)}
                </select>
              </Field>
              <Field label="Durum">
                <select value={form.status} onChange={e => setForm({ ...form, status: e.target.value })} style={inputStyles.normal}>
                  <option value="active">Aktif (yayında)</option>
                  <option value="draft">Taslak</option>
                </select>
              </Field>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Field label="Fiyat (₺)">
                <input type="number" value={form.price} onChange={e => setForm({ ...form, price: +e.target.value })} style={inputStyles.normal} />
              </Field>
              <Field label="Stok adedi">
                <input type="number" value={form.stock} onChange={e => setForm({ ...form, stock: +e.target.value })} style={inputStyles.normal} />
              </Field>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
              <Field label="Üretici">
                <select value={form.producer} onChange={e => {
                  const prod = producers.find(p => p.name === e.target.value);
                  setForm({ ...form, producer: e.target.value, village: prod?.village || '' });
                }} style={inputStyles.normal}>
                  <option value="">Seçiniz...</option>
                  {producers.map(p => <option key={p.id}>{p.name}</option>)}
                </select>
              </Field>
              <Field label="Köy">
                <input type="text" value={form.village} onChange={e => setForm({ ...form, village: e.target.value })} style={inputStyles.normal} />
              </Field>
            </div>
          </div>
          <div style={{ padding: '20px 28px', borderTop: '1px solid #e8e0cf', display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
            <button onClick={() => setShowProductModal(false)} style={btnStyles.outline}>İptal</button>
            <button onClick={() => {
              if (editingProduct) {
                setProducts(products.map(p => p.id === editingProduct.id ? { ...p, ...form } : p));
              } else {
                setProducts([...products, { ...form, id: Date.now(), img: form.img || 'https://images.unsplash.com/photo-1550583724-b2692b85b150?w=200&q=80' }]);
              }
              setShowProductModal(false);
              showSaved();
            }} style={btnStyles.primary}>
              <Save size={14} /> {editingProduct ? 'Güncelle' : 'Kaydet'}
            </button>
          </div>
        </div>
      </div>
    );
  };

  // === RENDER ROUTER ===

  const renderSection = () => {
    switch (activeSection) {
      case 'products': return <ProductsView />;
      case 'categories': return <CategoriesView />;
      case 'media': return <MediaView />;
      case 'producers': return <ProducersView />;
      case 'posts': return <PostsView />;
      case 'orders': return <OrdersView />;
      case 'subscriptions': return <SubsView />;
      case 'announce': return <AnnounceView />;
      case 'pages': return <PagesView />;
      case 'contact': return <ContactView />;
      case 'settings': return <SettingsView />;
      default: return <Dashboard />;
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#f7f1e3', display: 'flex', fontFamily: 'Inter, sans-serif', color: '#2a2826' }}>

      {/* SIDEBAR */}
      <aside style={{
        width: 256,
        background: '#1f3a2e',
        color: '#f7f1e3',
        flexShrink: 0,
        position: 'sticky',
        top: 0,
        height: '100vh',
        overflowY: 'auto',
        display: sidebarOpen || window.innerWidth > 900 ? 'block' : 'none',
      }}>
        <div style={{ padding: 24, borderBottom: '1px solid rgba(247,241,227,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 38, height: 38, background: '#f7f1e3', borderRadius: '50%', display: 'grid', placeItems: 'center', color: '#1f3a2e', fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 700 }}>M</div>
            <div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: 16, fontWeight: 600, lineHeight: 1.1 }}>Malkara</div>
              <div style={{ fontSize: 9, letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.6, marginTop: 2 }}>Admin Panel</div>
            </div>
          </div>
        </div>

        <nav style={{ padding: '16px 12px' }}>
          {sidebarItems.map((item, i) => {
            if (item.type === 'header') {
              return (
                <div key={i} style={{ padding: '20px 12px 8px', fontSize: 10, color: 'rgba(247,241,227,0.5)', letterSpacing: '0.12em', textTransform: 'uppercase', fontWeight: 600 }}>
                  {item.label}
                </div>
              );
            }
            const Icon = item.icon;
            const active = activeSection === item.id;
            return (
              <button key={item.id} onClick={() => { setActiveSection(item.id); setSidebarOpen(false); }} style={{
                width: '100%',
                padding: '10px 12px',
                background: active ? 'rgba(247,241,227,0.1)' : 'transparent',
                border: 'none',
                borderRadius: 8,
                color: active ? '#d4a574' : '#f7f1e3',
                fontSize: 13,
                fontWeight: active ? 600 : 500,
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                marginBottom: 2,
                fontFamily: 'inherit',
                transition: 'background 0.15s',
                textAlign: 'left'
              }}
                onMouseEnter={e => { if (!active) e.currentTarget.style.background = 'rgba(247,241,227,0.05)'; }}
                onMouseLeave={e => { if (!active) e.currentTarget.style.background = 'transparent'; }}>
                <Icon size={15} style={{ flexShrink: 0 }} />
                <span style={{ flex: 1 }}>{item.label}</span>
                {item.dot && <span style={{ width: 6, height: 6, background: '#d4a574', borderRadius: '50%' }}></span>}
                {item.badge !== undefined && (
                  <span style={{
                    background: active ? '#d4a574' : 'rgba(247,241,227,0.1)',
                    color: active ? '#1f3a2e' : '#f7f1e3',
                    padding: '2px 8px',
                    borderRadius: 100,
                    fontSize: 10,
                    fontWeight: 700
                  }}>{item.badge}</span>
                )}
              </button>
            );
          })}
        </nav>

        <div style={{ padding: 16, borderTop: '1px solid rgba(247,241,227,0.1)', marginTop: 16 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: 10, borderRadius: 10, background: 'rgba(247,241,227,0.05)' }}>
            <div style={{ width: 32, height: 32, background: '#d4a574', color: '#1f3a2e', borderRadius: '50%', display: 'grid', placeItems: 'center', fontFamily: 'Fraunces, serif', fontWeight: 700, fontSize: 12 }}>HŞ</div>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 12, fontWeight: 600 }}>Hasan Şahin</div>
              <div style={{ fontSize: 10, opacity: 0.65 }}>Süper Admin</div>
            </div>
            <button style={{ background: 'transparent', border: 'none', color: 'rgba(247,241,227,0.6)', cursor: 'pointer', display: 'grid', placeItems: 'center', padding: 4 }}>
              <LogOut size={14} />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ flex: 1, minWidth: 0 }}>
        {/* TOP BAR */}
        <div style={{ background: '#fdfbf5', borderBottom: '1px solid #e8e0cf', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'sticky', top: 0, zIndex: 50 }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: 'transparent', border: 'none', color: '#1f3a2e', cursor: 'pointer', display: 'grid', placeItems: 'center', padding: 8 }}>
            <MenuIcon size={20} />
          </button>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <button style={{ width: 36, height: 36, border: '1px solid #e8e0cf', background: '#fdfbf5', borderRadius: '50%', cursor: 'pointer', display: 'grid', placeItems: 'center', color: '#2a2826', position: 'relative' }}>
              <Bell size={15} />
              <span style={{ position: 'absolute', top: 6, right: 6, width: 8, height: 8, background: '#b8843f', borderRadius: '50%' }}></span>
            </button>
            <button style={{ padding: '8px 16px', borderRadius: 100, background: '#f7f1e3', border: '1px solid #e8e0cf', fontSize: 12, color: '#1f3a2e', fontWeight: 600, cursor: 'pointer', fontFamily: 'inherit', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
              <Eye size={12} /> Siteyi Görüntüle
            </button>
          </div>
        </div>

        <div style={{ padding: '32px 28px', maxWidth: 1280, margin: '0 auto' }}>
          {renderSection()}
        </div>
      </main>

      {showProductModal && <ProductModal />}

      {/* TOAST */}
      {savedToast && (
        <div style={{
          position: 'fixed', bottom: 30, left: '50%', transform: 'translateX(-50%)',
          background: '#1f3a2e', color: '#f7f1e3',
          padding: '14px 24px', borderRadius: 100,
          fontSize: 13, fontWeight: 600,
          boxShadow: '0 20px 60px rgba(0,0,0,0.3)',
          display: 'inline-flex', alignItems: 'center', gap: 10,
          zIndex: 300,
          animation: 'slideUp 0.3s ease-out'
        }}>
          <div style={{ width: 22, height: 22, background: '#2d7a4f', borderRadius: '50%', display: 'grid', placeItems: 'center' }}>
            <Check size={12} color="white" strokeWidth={3} />
          </div>
          Değişiklikler kaydedildi
        </div>
      )}

      <style>{`
        @keyframes slideUp {
          from { transform: translateX(-50%) translateY(20px); opacity: 0; }
          to { transform: translateX(-50%) translateY(0); opacity: 1; }
        }
        body { margin: 0; }
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@400;500;600;700&display=swap');
      `}</style>
    </div>
  );
}
