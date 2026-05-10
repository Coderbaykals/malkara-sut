// WhatsApp order formatter — turns a cart summary + customer info into
// a wa.me URL with a human-readable message body.
//
// Public API: window.MSUB.whatsapp
//   formatOrderMessage(orderData) → string
//   generateOrderURL(orderData)   → "https://wa.me/<num>?text=..."
//
// Message format is tuned for the Birlik staff reading orders:
//   - Order number for tracking
//   - Bold section headings via *...* (WhatsApp markup)
//   - Item list with line-by-line breakdown
//   - Customer block with copyable address + phone

(function () {
  window.MSUB = window.MSUB || {};

  function generateOrderCode() {
    // ML-26-XXXXX: short, easy to read aloud
    const year = String(new Date().getFullYear()).slice(-2);
    const seq = Math.floor(Math.random() * 90000) + 10000;
    return `ML-${year}-${seq}`;
  }

  function formatOrderMessage(order) {
    const { items, subtotal, shipping, total, customer } = order;
    const code = generateOrderCode();
    const lines = [];

    lines.push('🛒 *Yeni Sipariş — Malkara Süt*');
    lines.push(`Sipariş Kodu: *${code}*`);
    lines.push('');
    lines.push('*ÜRÜNLER*');
    items.forEach((item) => {
      const lineTotal = item.qty * item.price;
      const detail = [item.unit, item.producerVillage ? `${item.producerVillage} köyü` : '']
        .filter(Boolean)
        .join(' · ');
      lines.push(`• ${item.name}${detail ? ` _(${detail})_` : ''}`);
      lines.push(`  ${item.qty} × ${item.price} ₺ = *${lineTotal} ₺*`);
    });
    lines.push('');
    lines.push(`Ara Toplam: ${subtotal} ₺`);
    lines.push(`Kargo: ${shipping === 0 ? 'Ücretsiz' : shipping + ' ₺'}`);
    lines.push(`*Toplam: ${total} ₺*`);

    lines.push('');
    lines.push('*TESLİMAT BİLGİLERİ*');
    lines.push(`👤 ${customer.name}`);
    lines.push(`📞 ${customer.phone}`);
    lines.push(`📍 ${customer.address}`);
    lines.push(`🏙️ ${customer.city}`);
    if (customer.deliveryDay) {
      lines.push(`🚚 Tercih: ${customer.deliveryDay} günü`);
    }
    if (customer.note && customer.note.trim()) {
      lines.push('');
      lines.push(`📝 *Not:* ${customer.note.trim()}`);
    }

    lines.push('');
    lines.push('---');
    lines.push(`Sipariş Zamanı: ${new Date().toLocaleString('tr-TR')}`);

    return lines.join('\n');
  }

  function generateOrderURL(order) {
    const cfg = (window.MSUB.config && window.MSUB.config.whatsapp) || {
      number: '905XXXXXXXXX',
    };
    // Strip non-digits from number to be safe
    const number = String(cfg.number).replace(/\D/g, '');
    const message = formatOrderMessage(order);
    return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
  }

  window.MSUB.whatsapp = { formatOrderMessage, generateOrderURL };
})();
