const SEO_META = {
  baseUrl: 'https://commerce.kitbix.com',
  title: 'Kitbix Commerce Documentation',
  description:
    'Explore the official Kitbix Commerce documentation for the free plugin: setup, checkout, addons, analytics, and developer guides.',
  image: 'https://kitbix.com/wp-content/uploads/2026/01/logo-full.png',
  icons: {
    small: 'https://kitbix.com/wp-content/uploads/2026/01/cropped-logo-1-1-300x300.png',
    large: 'https://kitbix.com/wp-content/uploads/2026/01/cropped-logo-1-1-192x192.png'
  }
};

const NAV_STRUCTURE = [
  {
    title: 'Getting Started',
    slug: 'getting-started',
    links: [
      { label: 'Overview', slug: 'getting-started', url: '/docs/getting-started/' },
      { label: 'Installation', slug: 'installation', url: '/docs/getting-started/installation.html' },
      { label: 'Requirements', slug: 'requirements', url: '/docs/getting-started/requirements.html' }
    ]
  },
  {
    title: 'Store Setup',
    slug: 'store-setup',
    links: [
      { label: 'Overview', slug: 'store-setup', url: '/docs/store-setup/' },
      { label: 'Store Settings', slug: 'store-settings', url: '/docs/store-setup/store-settings.html' },
      { label: 'Layout', slug: 'layout', url: '/docs/store-setup/layout.html' },
      { label: 'Brand Colors', slug: 'brand-colors', url: '/docs/store-setup/brand-colors.html' },
      { label: 'Payments', slug: 'payments', url: '/docs/store-setup/payments.html' },
      { label: 'Email & SMTP', slug: 'email-smtp', url: '/docs/store-setup/email-smtp.html' }
    ]
  },
  {
    title: 'Products',
    slug: 'products',
    links: [
      { label: 'Overview', slug: 'products', url: '/docs/products/' },
      { label: 'Product Types', slug: 'product-overview', url: '/docs/products/product-overview.html' },
      { label: 'Simple Products', slug: 'simple-products', url: '/docs/products/simple-products.html' },
      { label: 'Categories', slug: 'categories', url: '/docs/products/categories.html' },
      { label: 'Pricing & Inventory', slug: 'pricing-inventory', url: '/docs/products/pricing-inventory.html' }
    ]
  },
  {
    title: 'Checkout',
    slug: 'checkout',
    links: [
      { label: 'Overview', slug: 'checkout', url: '/docs/checkout/' },
      { label: 'Cart', slug: 'cart', url: '/docs/checkout/cart.html' },
      { label: 'Checkout Flow', slug: 'checkout-flow', url: '/docs/checkout/checkout-flow.html' },
      { label: 'Payment Gateways', slug: 'payment-gateways', url: '/docs/checkout/payment-gateways.html' },
      { label: 'Order Management', slug: 'order-management', url: '/docs/checkout/order-management.html' }
    ]
  },
  {
    title: 'Analytics',
    slug: 'analytics',
    links: [
      { label: 'Overview', slug: 'analytics', url: '/docs/analytics/' }
    ]
  },
  {
    title: 'Addons',
    slug: 'addons',
    links: [
      { label: 'Overview', slug: 'addons', url: '/docs/addons/' },
      { label: 'Live Purchase Toast', slug: 'addon-live-purchase-toast', url: '/docs/addons/live-purchase-toast.html' },
      { label: 'Live View Counter', slug: 'addon-live-view-counter', url: '/docs/addons/live-view-counter.html' },
      { label: 'Payment Trust Badge', slug: 'addon-payment-trust-badge', url: '/docs/addons/payment-trust-badge.html' },
      { label: 'Product Q&A', slug: 'addon-product-qna', url: '/docs/addons/product-qna.html' },
      { label: 'Related Products', slug: 'addon-related-products', url: '/docs/addons/related-products.html' },
      { label: 'Shipping Cutoff Clock', slug: 'addon-shipping-cutoff-clock', url: '/docs/addons/shipping-cutoff-clock.html' },
      { label: 'WhatsApp Contact Button', slug: 'addon-whatsapp-contact', url: '/docs/addons/whatsapp-contact.html' },
      { label: 'Addon Development', slug: 'addon-development', url: '/docs/addons/addon-development.html' }
    ]
  },
  {
    title: 'Developers',
    slug: 'developers',
    links: [
      { label: 'Overview', slug: 'developers', url: '/docs/developers/' },
      { label: 'Hooks & Filters', slug: 'hooks-filters', url: '/docs/developers/hooks-filters.html' },
      { label: 'Database Schema', slug: 'database-schema', url: '/docs/developers/database-schema.html' },
      { label: 'REST API', slug: 'rest-api', url: '/docs/developers/rest-api.html' },
      { label: 'Extending Kitbix', slug: 'extending-kitbix', url: '/docs/developers/extending-kitbix.html' }
    ]
  },
  {
    title: 'FAQ',
    slug: 'faq',
    links: [{ label: 'Common Issues', slug: 'common-issues', url: '/docs/faq/common-issues.html' }]
  }
];

const NAV_ROOTS = {
  'getting-started': 'Getting Started',
  'installation': 'Getting Started',
  'requirements': 'Getting Started',
  'store-setup': 'Store Setup',
  'store-settings': 'Store Setup',
  'layout': 'Store Setup',
  'brand-colors': 'Store Setup',
  'payments': 'Store Setup',
  'email-smtp': 'Store Setup',
  'products': 'Products',
  'product-overview': 'Products',
  'simple-products': 'Products',
  'categories': 'Products',
  'pricing-inventory': 'Products',
  'checkout': 'Checkout',
  'cart': 'Checkout',
  'checkout-flow': 'Checkout',
  'payment-gateways': 'Checkout',
  'order-management': 'Checkout',
  'analytics': 'Analytics',
  'addons': 'Addons',
  'addon-live-purchase-toast': 'Addons',
  'addon-live-view-counter': 'Addons',
  'addon-payment-trust-badge': 'Addons',
  'addon-product-qna': 'Addons',
  'addon-related-products': 'Addons',
  'addon-shipping-cutoff-clock': 'Addons',
  'addon-whatsapp-contact': 'Addons',
  'addon-development': 'Addons',
  'developers': 'Developers',
  'hooks-filters': 'Developers',
  'database-schema': 'Developers',
  'rest-api': 'Developers',
  'extending-kitbix': 'Developers',
  'common-issues': 'FAQ'
};

const ensureMetaTag = (selector, attributes, tagName = 'meta') => {
  let node = document.head.querySelector(selector);
  if (!node) {
    node = document.createElement(tagName);
    document.head.appendChild(node);
  }
  Object.entries(attributes).forEach(([key, value]) => {
    if (value) {
      node.setAttribute(key, value);
    }
  });
  return node;
};

const injectSeoMeta = () => {
  if (!document.head) {
    return;
  }

  const baseUrl = SEO_META.baseUrl.replace(/\/$/, '');
  const path = window.location.pathname.replace(/\/+$/, '');
  const canonicalUrl = `${baseUrl}${path || '/'}`;

  ensureMetaTag('meta[name="description"]', { name: 'description', content: SEO_META.description });
  ensureMetaTag('link[rel="canonical"]', { rel: 'canonical', href: canonicalUrl }, 'link');
  ensureMetaTag('meta[property="og:type"]', { property: 'og:type', content: 'website' });
  ensureMetaTag('meta[property="og:title"]', { property: 'og:title', content: SEO_META.title });
  ensureMetaTag('meta[property="og:description"]', {
    property: 'og:description',
    content: SEO_META.description
  });
  ensureMetaTag('meta[property="og:url"]', { property: 'og:url', content: canonicalUrl });
  ensureMetaTag('meta[property="og:image"]', { property: 'og:image', content: SEO_META.image });
  ensureMetaTag('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
  ensureMetaTag('meta[name="twitter:title"]', { name: 'twitter:title', content: SEO_META.title });
  ensureMetaTag('meta[name="twitter:description"]', {
    name: 'twitter:description',
    content: SEO_META.description
  });
  ensureMetaTag('meta[name="twitter:image"]', { name: 'twitter:image', content: SEO_META.image });
  ensureMetaTag('link[rel="icon"][sizes="32x32"]', {
    rel: 'icon',
    type: 'image/png',
    sizes: '32x32',
    href: SEO_META.icons.small
  }, 'link');
  ensureMetaTag('link[rel="icon"][sizes="192x192"]', {
    rel: 'icon',
    type: 'image/png',
    sizes: '192x192',
    href: SEO_META.icons.large
  }, 'link');
  ensureMetaTag('link[rel="apple-touch-icon"]', {
    rel: 'apple-touch-icon',
    href: SEO_META.icons.large
  }, 'link');
};

const renderHeader = () => {
  const header = document.getElementById('docsHeader');
  if (!header) {
    return;
  }

  header.innerHTML = `
    <a href="/docs/" class="brand" rel="home" aria-current="page"><img width="auto" height="24" src="https://kitbix.com/wp-content/uploads/2026/01/logo-full.png" class="custom-logo" alt="KitBix" decoding="async" fetchpriority="high" srcset="https://kitbix.com/wp-content/uploads/2026/01/logo-full.png 1200w, https://kitbix.com/wp-content/uploads/2026/01/logo-full-300x100.png 300w, https://kitbix.com/wp-content/uploads/2026/01/logo-full-1024x341.png 1024w, https://kitbix.com/wp-content/uploads/2026/01/logo-full-768x256.png 768w" sizes="(max-width: 1200px) 100vw, 1200px"> - Docs</a>
    <div class="header-actions">
      <a class="header-home" href="/" aria-label="Back to site home">← Return to Site</a>
      <button id="mobileNavToggle" class="mobile-nav-toggle" aria-expanded="false" aria-label="Toggle navigation">Menu</button>
    </div>
  `;
};

const renderSidebar = (activeSlug) => {
  const sidebar = document.getElementById('docsSidebar');
  if (!sidebar) {
    return;
  }

  const navHtml = NAV_STRUCTURE.map((section) => {
    const links = section.links
      .map(
        (link) => `
          <li>
            <a href="${link.url}" data-slug="${link.slug}">${link.label}</a>
          </li>
        `
      )
      .join('');

    const expanded = section.slug === NAV_ROOTS[activeSlug];

    return `
      <section class="nav-section ${expanded ? '' : 'collapsed'}">
        <button class="nav-section__toggle" aria-expanded="${expanded}">${section.title}</button>
        <ul ${expanded ? '' : 'hidden'}>
          ${links}
        </ul>
      </section>
    `;
  }).join('');

  sidebar.innerHTML = `
    <div class="sidebar-inner">
      <a class="logo" href="/docs/">Kitbix Commerce</a>
      <nav class="docs-nav">
        ${navHtml}
      </nav>
    </div>
  `;
};

document.addEventListener('DOMContentLoaded', () => {
  const body = document.body;
  const activeSlug = body.dataset.page || '';

  injectSeoMeta();
  renderHeader();
  renderSidebar(activeSlug);

  const sidebar = document.getElementById('docsSidebar');
  const mobileToggle = document.getElementById('mobileNavToggle');

  if (mobileToggle && sidebar) {
    mobileToggle.addEventListener('click', (event) => {
      event.stopPropagation();
      const isOpen = body.classList.toggle('nav-open');
      mobileToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    document.addEventListener('click', (event) => {
      if (!sidebar.contains(event.target) && event.target !== mobileToggle) {
        body.classList.remove('nav-open');
        mobileToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  document.querySelectorAll('.nav-section').forEach((section) => {
    const toggle = section.querySelector('.nav-section__toggle');
    const list = section.querySelector('ul');
    if (!toggle || !list) {
      return;
    }

    toggle.addEventListener('click', () => {
      section.classList.toggle('collapsed');
      const collapsed = section.classList.contains('collapsed');
      list.hidden = collapsed;
      toggle.setAttribute('aria-expanded', collapsed ? 'false' : 'true');
    });
  });

  const navLinks = document.querySelectorAll('.docs-nav a');
  const currentPath = window.location.pathname.replace(/\/$/, '');
  navLinks.forEach((link) => {
    const href = link.getAttribute('href');
    if (!href) {
      return;
    }
    const normalized = href.replace(/\/$/, '');
    if (normalized === currentPath || link.dataset.slug === activeSlug) {
      link.classList.add('active');
      const section = link.closest('.nav-section');
      if (section) {
        section.classList.remove('collapsed');
        const list = section.querySelector('ul');
        if (list) {
          list.hidden = false;
        }
        const toggle = section.querySelector('.nav-section__toggle');
        if (toggle) {
          toggle.setAttribute('aria-expanded', 'true');
        }
      }
    }
  });

  const searchInput = document.getElementById('docsSearch');
  const searchResults = document.getElementById('searchResults');
  const searchIndex = window.KB_DOCS_INDEX || [];

  const renderResults = (items) => {
    if (!searchResults) {
      return;
    }

    if (!items.length) {
      searchResults.classList.remove('active');
      searchResults.innerHTML = '';
      return;
    }

    searchResults.classList.add('active');
    searchResults.innerHTML = items
      .map(
        (item) => `
          <li>
            <a href="${item.url}">
              <strong>${item.title}</strong>
              <p>${item.description}</p>
            </a>
          </li>
        `
      )
      .join('');
  };

  if (searchInput) {
    searchInput.addEventListener('input', (event) => {
      const query = event.target.value.trim().toLowerCase();
      if (!query) {
        renderResults([]);
        return;
      }

      const matches = searchIndex.filter(
        (item) =>
          item.title.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
      );

      renderResults(matches.slice(0, 8));
    });
  }
});

window.KB_DOCS_INDEX = [
  { title: 'Getting Started Overview', url: '/docs/getting-started/', description: 'Understand how Kitbix Commerce is structured before installing it.' },
  { title: 'Installation', url: '/docs/getting-started/installation.html', description: 'Step-by-step instructions for installing the plugin safely.' },
  { title: 'Requirements', url: '/docs/getting-started/requirements.html', description: 'PHP, WordPress, and hosting requirements for Kitbix Commerce.' },
  { title: 'Store Setup Overview', url: '/docs/store-setup/', description: 'Configure company profile, addresses, and default behavior.' },
  { title: 'Store Settings', url: '/docs/store-setup/store-settings.html', description: 'Set currency, pagination, and checkout defaults that power every shortcode.' },
  { title: 'Layout', url: '/docs/store-setup/layout.html', description: 'Choose storefront templates for grids, detail pages, cart, and checkout.' },
  { title: 'Brand Colors', url: '/docs/store-setup/brand-colors.html', description: 'Map your palette to Kitbix CSS variables for automatic theming.' },
  { title: 'Payments', url: '/docs/store-setup/payments.html', description: 'Enable Stripe, PayPal, or COD and store their credentials securely.' },
  { title: 'Email & SMTP', url: '/docs/store-setup/email-smtp.html', description: 'Define sender name, notification toggles, and SMTP credentials for Kitbix emails.' },
  { title: 'Product Overview', url: '/docs/products/product-overview.html', description: 'Understand the Kitbix product schema, statuses, and REST endpoints.' },
  { title: 'Simple Products', url: '/docs/products/simple-products.html', description: 'Use the standard product editor fields to manage pricing, media, and stock.' },
  { title: 'Product Categories', url: '/docs/products/categories.html', description: 'Organize, edit, and sync category hierarchies with your products.' },
  { title: 'Pricing & Inventory', url: '/docs/products/pricing-inventory.html', description: 'Track stock, lead times, and backorders.' },
  { title: 'Cart UX', url: '/docs/checkout/cart.html', description: 'Configure cart layout, shipping calculators, and mini-cart behavior.' },
  { title: 'Checkout Flow', url: '/docs/checkout/checkout-flow.html', description: 'Order of checkout steps, field visibility, and validation.' },
  { title: 'Payment Gateways', url: '/docs/checkout/payment-gateways.html', description: 'Configure Stripe, PayPal, COD, and custom gateways.' },
  { title: 'Order Management', url: '/docs/checkout/order-management.html', description: 'Review, update, and fulfill orders from wp-admin.' },
  { title: 'Analytics Overview', url: '/docs/analytics/', description: 'Use the built-in dashboard to track orders, revenue, and customer growth.' },
  { title: 'Live Purchase Toast Addon', url: '/docs/addons/live-purchase-toast.html', description: 'Show social-proof toasts sourced from recent orders.' },
  { title: 'Live View Counter Addon', url: '/docs/addons/live-view-counter.html', description: 'Display an urgency line with a rotating viewer count.' },
  { title: 'Payment Trust Badge Addon', url: '/docs/addons/payment-trust-badge.html', description: 'Add a trusted-payment logo block beneath checkout methods.' },
  { title: 'Product Q&A Addon', url: '/docs/addons/product-qna.html', description: 'Collect, moderate, and publish shopper questions on product pages.' },
  { title: 'Related Products Addon', url: '/docs/addons/related-products.html', description: 'Surface category-based recommendations under the product detail.' },
  { title: 'Shipping Cutoff Clock Addon', url: '/docs/addons/shipping-cutoff-clock.html', description: 'Warn shoppers how long remains for same-day dispatch.' },
  { title: 'WhatsApp Contact Button Addon', url: '/docs/addons/whatsapp-contact.html', description: 'Add a floating WhatsApp CTA with custom colors and templates.' },
  { title: 'Addon Development', url: '/docs/addons/addon-development.html', description: 'Build your own addon within the Kitbix registry.' },
  { title: 'Hooks & Filters', url: '/docs/developers/hooks-filters.html', description: 'Customize store behavior with WordPress hooks.' },
  { title: 'Database Schema', url: '/docs/developers/database-schema.html', description: 'Reference tables created by Kitbix Commerce.' },
  { title: 'REST API', url: '/docs/developers/rest-api.html', description: 'Endpoints, authentication, and payload structure.' },
  { title: 'Extending Kitbix', url: '/docs/developers/extending-kitbix.html', description: 'Best practices for integrating plugins and themes.' },
  { title: 'Common Issues', url: '/docs/faq/common-issues.html', description: 'Troubleshooting checklist for deployments.' }
];
