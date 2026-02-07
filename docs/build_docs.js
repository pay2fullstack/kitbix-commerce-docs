const fs = require('fs');
const path = require('path');

const DOC_ROOT = path.join(__dirname);

const renderParagraphSection = (title, paragraphs = []) => {
  if (!paragraphs.length) return '';
  const body = paragraphs.map((p) => `          <p>${p}</p>`).join('\n');
  return `\n        <section>\n          <h2 class="section-title">${title}</h2>\n${body}\n        </section>\n`;
};

const renderSteps = (steps = []) => {
  if (!steps.length) return '';
  const items = steps.map((step) => `            <li>${step}</li>`).join('\n');
  return `\n        <section>\n          <h2 class="section-title">Step-by-step</h2>\n          <ol>\n${items}\n          </ol>\n        </section>\n`;
};

const renderTable = (table) => {
  if (!table) return '';
  const headers = table.headers.map((h) => `                  <th>${h}</th>`).join('\n');
  const rows = table.rows
    .map((row) => {
      const cells = row.map((cell) => `                  <td>${cell}</td>`).join('\n');
      return `                <tr>\n${cells}\n                </tr>`;
    })
    .join('\n');
  return `\n        <section>\n          <h2 class="section-title">${table.title}</h2>\n          <div class="table-wrapper">\n            <table class="docs-table">\n              <thead>\n                <tr>\n${headers}\n                </tr>\n              </thead>\n              <tbody>\n${rows}\n              </tbody>\n            </table>\n          </div>\n        </section>\n`;
};

const renderScreenshot = (copy) => {
  if (!copy) return '';
  return `\n        <section class="screenshot">\n          <div class="screenshot__frame">${copy}</div>\n          <p class="caption">Replace with a real capture when the UI is finalized.</p>\n        </section>\n`;
};

const renderTips = (tips = []) => {
  if (!tips.length) return '';
  const body = tips
    .map((tip) => `          <div class="callout tip"><strong>Tip:</strong> ${tip}</div>`)
    .join('\n');
  return `\n        <section>\n          <h2 class="section-title">Tips & best practices</h2>\n${body}\n        </section>\n`;
};

const renderMistakes = (mistakes = [], warning) => {
  if (!mistakes.length && !warning) return '';
  const list = mistakes.length
    ? `\n          <ul>\n${mistakes.map((m) => `            <li>${m}</li>`).join('\n')}\n          </ul>`
    : '';
  const warn = warning
    ? `\n          <div class="callout warning"><strong>Reminder:</strong> ${warning}</div>`
    : '';
  return `\n        <section>\n          <h2 class="section-title">Common mistakes</h2>${list}${warn}\n        </section>\n`;
};

const template = (page, content) => `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>${page.title} · Kitbix Commerce Docs</title>
    <link rel="stylesheet" href="/docs/assets/css/docs.css" />
  </head>
  <body data-page="${page.slug}">
    <header id="docsHeader" class="docs-header"></header>

    <div class="docs-layout">
      <aside id="docsSidebar" class="docs-sidebar"></aside>

      <main class="docs-content">
        <nav class="breadcrumbs">${page.breadcrumbs}</nav>
        <div class="page-eyebrow">${page.eyebrow}</div>
        <h1 class="page-title">${page.title}</h1>
        <p class="page-intro">${page.intro}</p>
${content}      </main>
    </div>

    <script src="/docs/assets/js/docs.js" defer></script>
  </body>
</html>
`;

      'Test each addon’s frontend output (cart banner, product widget, etc.).',
      'Document which addons are mandatory for your go-live checklist.',
      'Review addon availability after each release in case new modules ship.'
    ],
    tips: [
      'Group addons by business owner (marketing, fulfillment, customer success) so accountability is clear.',
      'Use staging to experiment with new addons before enabling them on production.'
    ],
    mistakes: [
      'Enabling addons without finishing their settings, leading to blank sections on the frontend.',
      'Disabling addons that still store per-product metadata without cleaning that data.'
    ],
    warning: 'Some addons run database installers. Disabling them does not drop tables—uninstall only when you no longer need the data.'
  },
  {
    path: 'addons/digital-downloads.html',
    slug: 'addon-digital-downloads',
    eyebrow: 'Addons',
    title: 'Digital Downloads Addon',
    intro: 'Sell files securely with per-file limits and expirations.',
    breadcrumbs: 'Addons / Digital Downloads',
    context: [
      'The addon manages file metadata, download permissions, and customer account listings. Limits live on each file, not global defaults.'
    ],
    steps: [
      'Enable the addon inside Kitbix Commerce → Addons.',
      'Attach files to products under the “Digital product” section (name, path/URL, download_limit, expiry_days).',
      'Place a test order and confirm permissions are issued when statuses change to completed.',
      'Verify customer emails and account downloads honor limits.',
      'Monitor the permissions table for unusual activity (abuse, shared links).'
    ],
    tips: [
      'Host large files on S3/CDN and reference signed URLs.',
      'Use descriptive file names so customers can identify assets easily.'
    ],
    mistakes: [
      'Leaving limit/expiry blank unintentionally, granting perpetual downloads.',
      'Changing file paths without updating existing products.'
    ],
    warning: 'Revoking permissions requires editing the DownloadPermission entry—define SOPs so support can handle it quickly.'
  },
  {
    path: 'addons/subscriptions.html',
    slug: 'subscriptions',
    eyebrow: 'Addons',
    title: 'Subscriptions Addon',
    intro: 'Offer recurring billing, renewal reminders, and churn management.',
    breadcrumbs: 'Addons / Subscriptions',
    context: [
      'The subscriptions addon handles billing schedules, renewal notices, and cancellation flows on top of Kitbix orders.'
    ],
    steps: [
      'Enable the addon and configure frequency options (weekly, monthly, yearly).',
      'Choose which products can be sold as subscriptions or one-time purchases.',
      'Set renewal reminder emails and grace periods.',
      'Test purchase, renewal, and cancellation journeys on staging.',
      'Sync statuses with payment gateways via webhooks to keep data consistent.'
    ],
    tips: [
      'Offer prorated upgrades or downgrades to reduce cancellations.',
      'Schedule automated dunning emails when payments fail.'
    ],
    mistakes: [
      'Selling subscriptions without verifying webhook events—renewals never capture.',
      'Failing to communicate cancellation policies during checkout.'
    ],
    warning: 'Subscription data lives in dedicated tables—back up before running manual SQL.'
  },
  {
    path: 'addons/addon-development.html',
    slug: 'addon-development',
    eyebrow: 'Addons',
    title: 'Addon Development',
    intro: 'Build first-class Kitbix addons using the registry, hooks, and REST APIs.',
    breadcrumbs: 'Addons / Addon Development',
    context: [
      'Addons are PHP classes implementing KitbixCommerce\Addons\AddonContract. They register metadata, settings, and bootstrap logic.'
    ],
    steps: [
      'Create a namespaced class that defines id, definition(), settings fields, and bootstrap hooks.',
      'Register the addon via the kitbix_commerce_register_addons filter.',
      'Use AddonRegistry::getSettings() or REST endpoints to read stored options.',
      'Enqueue assets only when the addon is active.',
      'Write tests or manual smoke steps so upgrades do not break your addon.'
    ],
    tips: [
      'Use the Digital Download addon as a reference structure (models, services, controllers).',
  },
  {
    id: 'live_purchase_toast',
    title: 'Live Purchase Toast',
    file: 'app/Addons/live_purchase_toast/LivePurchaseToastAddon.php',
    summary: 'Shows social-proof toasts built from recent order data; configurable message template.',
  },
  {
    id: 'payment_trust_badge',
    title: 'Payment Trust Badge',
    file: 'app/Addons/payment_trust_badge/PaymentTrustBadgeAddon.php',
    summary: 'Outputs a custom trust badge with logos beneath the checkout payment methods.',
  },
  {
    id: 'whatsapp_integration',
    title: 'WhatsApp Contact Button',
    file: 'app/Addons/whatsapp_integration/WhatsAppIntegrationAddon.php',
    summary: 'Adds a floating WhatsApp chat button with configurable phone, message, and visibility rules.',
  },
  {
    id: 'shipping_cutoff_clock',
    title: 'Shipping Cutoff Clock',
    file: 'app/Addons/shipping_cutoff_clock/ShippingCutoffClockAddon.php',
    summary: 'Shows a countdown for next shipping cutoff based on store timezone and configured cutoff hour.',
  },
];

const pages = [
  {
    path: 'getting-started/index.html',
    slug: 'getting-started',
    eyebrow: 'Getting Started',
    title: 'Installation & Bootstrap Checklist',
    intro: 'Follow this sequence whenever you install Kitbix Commerce so the React admin, shortcodes, and REST endpoints initialize cleanly.',
    breadcrumbs: 'Getting Started / Overview',
    context: [
      'Kitbix Commerce registers its own tables and relies on WordPress REST routes. Visiting the dashboard once after activation ensures migrations run and the SPA receives its config.',
      'The free plugin auto-creates Products, Product, Cart, and Checkout pages with the correct shortcodes—double-check they exist in wp-admin → Pages after activation.',
    ],
    steps: [
      'Upload or clone the kitbix-commerce folder into wp-content/plugins/ (or install the ZIP).',
      'Activate the plugin via Plugins → Installed Plugins; activation calls Plugin::activate(), runs database migrations, and seeds required pages.',
      'Visit Kitbix Commerce → Dashboard to allow the React admin (admin/react-app/build) to fetch KitbixCommerceAdmin bootstrap data.',
      'Verify wp-content/plugins and wp-content/uploads remain writable—SettingsController and the addons store configuration in WordPress options.',
      'Flush permalinks (Settings → Permalinks → Save) so the custom product rewrite (kitbix_commerce_product) resolves properly.',
    ],
    screenshot: 'WordPress admin menu showing Kitbix Commerce dashboard and subpages.',
    tips: [
      'Pin the Kitbix Commerce menu using the WordPress favorites feature so merchants can reach the SPA quickly.',
      'Track activation time in your ops log. Plugin::activate() writes to custom tables (products, orders, customers), so you know exactly when the schema changed.',
    ],
    mistakes: [
      'Skipping the dashboard visit after activation—AddonRegistry never boots and addons appear empty.',
      'Forgetting to flush permalinks, resulting in product detail pages returning 404s.',
    ],
    warning: 'Uninstalling the plugin removes its tables. Export wp_kitbix_commerce_* data before uninstalling in production.',
  },
  {
    path: 'getting-started/installation.html',
    slug: 'installation',
    eyebrow: 'Getting Started',
    title: 'Install Kitbix Commerce on New Environments',
    intro: 'Use the same steps on staging and production so wp-content/plugins/kitbix-commerce matches the repo and compiled admin assets.',
    breadcrumbs: 'Getting Started / Installation',
    context: [
      'The plugin ships a Vite-built React admin under admin/react-app/build. Production servers should not have to run npm install; commit the build artifacts or copy from releases.',
      'KitbixCommerce\Core\Plugin registers shortcodes and REST routes on init, so the plugin must be active before importing demo data.',
    ],
    steps: [
      'Download the release ZIP or pull the git repository. If building locally, run npm run buildall before packaging.',
      'Upload the folder to wp-content/plugins/ (or use wp plugin install kitbix-commerce.zip --activate).',
      'Activate the plugin. Watch wp-content/debug.log for fatal errors referencing missing PHP extensions (curl, intl, mbstring, zip).',
      'Open Kitbix Commerce → Dashboard to confirm admin/react-app/build/assets/index.js loads and REST root/nonce are localized.',
      'Create a sample product via the SPA to confirm products, category_product pivot rows, and meta entries persist.',
    ],
    tips: [
      'On multisite installs, network activate Kitbix Commerce so shared tables are created once.',
      'If you deploy via CI, include php artisan kitbix:build-equivalent (npm run buildall + composer install --no-dev) before zipping.',
    ],
    mistakes: [
      'Copying the repo without admin/react-app/build/ assets—the SPA fails to load and the admin page is blank.',
      'Leaving file permissions read-only; SettingsController cannot write kitbix_commerce_settings.',
    ],
    warning: 'If activation fails, WordPress disables the plugin automatically. Fix the stack trace (usually missing PHP extensions) and try again.',
  },
  {
    path: 'developers/hooks-filters.html',
    slug: 'hooks-filters',
    eyebrow: 'Developers',
    title: 'Hooks & Filters',
    intro: 'Modify Kitbix behavior using the WordPress hook system.',
    breadcrumbs: 'Developers / Hooks & Filters',
    table: {
      title: 'Common hooks',
      headers: ['Hook', 'Context', 'Example use'],
      rows: [
        ['kitbix_commerce_register_addons', 'Runs during addon bootstrap.', 'Register custom addon classes.'],
        ['kitbix_commerce_payment_gateways', 'Filters the gateway list.', 'Add or remove payment providers.'],
        ['kitbix_commerce_cart_totals', 'Before cart totals render.', 'Inject loyalty discounts or badges.']
      ]
    },
    steps: [
      'Locate the hook inside the source or documentation.',
      'Write a callback and hook via add_action/add_filter in your plugin or theme.',
      'Return modified data (filters) or output markup (actions) as required.',
      'Test on staging; hooks often impact caching and UX.',
      'Document the change for future maintainers.'
    ],
    tips: [
      'Prefix callbacks to avoid naming collisions.',
      'Use priority arguments when you must run before/after default handlers.'
    ],
    mistakes: [
      'Echoing output in filters that expect a return value.',
      'Leaving debug hooks enabled in production.'
    ],
    warning: 'Hook callbacks fire on every request—keep them fast and bail early when conditions are not met.'
  },
  {
    path: 'developers/database-schema.html',
    slug: 'database-schema',
    eyebrow: 'Developers',
    title: 'Database Schema',
    intro: 'Reference Kitbix Commerce tables before writing custom queries.',
    breadcrumbs: 'Developers / Database Schema',
    table: {
      title: 'Core tables',
      headers: ['Table', 'Purpose', 'Key columns'],
      rows: [
        ['kitbix_commerce_products', 'Stores product data.', 'id, name, sku, price, stock_quantity'],
        ['kitbix_commerce_orders', 'Stores orders.', 'id, status, totals, customer_id'],
        ['kitbix_commerce_downloadable_files', 'Per-file metadata.', 'id, product_id, file_path, download_limit'],
        ['kitbix_commerce_download_permissions', 'Issued download rights.', 'id, order_id, file_id, download_limit, expires_at']
      ]
    },
    context: [
      'All tables use utf8mb4 and are created via dbDelta during addon bootstrap. Use $wpdb with prepared statements when querying directly.'
    ],
    tips: [
      'Create read replicas or views in analytics databases instead of querying production tables heavily.',
      'Reference installer classes to understand schema changes between releases.'
    ],
    mistakes: [
      'Running destructive queries without filtering by blog/site IDs in multisite installs.',
      'Altering columns manually instead of using migrations.'
    ],
    warning: 'Back up the database before applying custom ALTER statements—future updates assume the expected schema.'
  },
  {
    path: 'developers/rest-api.html',
    slug: 'rest-api',
    eyebrow: 'Developers',
    title: 'REST API',
    intro: 'Integrate external systems using Kitbix Commerce REST endpoints.',
    breadcrumbs: 'Developers / REST API',
    context: [
      'The API follows the /wp-json/kitbix-commerce/v1 namespace. Admin routes require nonces and capabilities; public routes power carts and downloads.'
    ],
    steps: [
      'Obtain a nonce via wp_create_nonce("wp_rest") or the Kitbix admin boot data.',
      'Send requests to endpoints such as /admin/products, /admin/orders, or /downloads.',
      'Handle pagination with page + per_page parameters when syncing data.',
      'Respect rate limits—batch updates in manageable chunks.',
      'Log responses for auditing when automating imports/exports.'
    ],
    tips: [
      'Use the docs/assets/postman collection as a starting point for testing.',
      'Normalize payloads before storing them in external CRMs to avoid schema drift.'
    ],
    mistakes: [
      'Forgetting to include the X-WP-Nonce header on admin requests.',
      'Hardcoding site URLs—always read site_url for multisite compatibility.'
    ],
    warning: 'Never expose REST credentials or nonces in frontend bundles; proxy through WordPress when necessary.'
  },
  {
    path: 'developers/extending-kitbix.html',
    slug: 'extending-kitbix',
    eyebrow: 'Developers',
    title: 'Extending Kitbix',
    intro: 'Best practices for customizing Kitbix without forking core files.',
    breadcrumbs: 'Developers / Extending Kitbix',
    context: [
      'Stick to hooks, filters, addons, and REST APIs. Direct edits increase upgrade risk.'
    ],
    steps: [
      'Identify whether a hook, shortcode override, or addon fits the requirement.',
      'Prototype changes on staging and add automated smoke tests where possible.',
      'Document custom code (location, purpose, rollback plan).',
      'Keep addons in version control and release them alongside the main plugin.',
      'Contribute patches upstream when your change benefits the broader community.'
    ],
    tips: [
      'Wrap addon logic in service classes so you can unit test outside WordPress.',
      'Use feature flags when rolling out risky customizations.'
    ],
    mistakes: [
      'Forking core and forgetting to merge security releases.',
      'Overloading shortcodes with heavy PHP logic instead of using REST + JS.'
    ],
    warning: 'Custom code should bail gracefully when Kitbix is deactivated to avoid fatal errors.'
  },

  // FAQ
  {
    path: 'faq/common-issues.html',
    slug: 'common-issues',
    eyebrow: 'FAQ',
    title: 'Common Issues',
    intro: 'Troubleshoot the questions merchants ask most often.',
    breadcrumbs: 'FAQ / Common Issues',
    extraSections: [
      {
        title: 'Downloads not sending',
        paragraphs: [
          'Confirm the Digital Download addon is enabled and orders reach the “completed” status.',
          'Check wp-content/debug.log for permission errors when writing to the downloads table.'
        ]
      },
      {
        title: 'Checkout stuck on loading spinner',
        paragraphs: [
          'Open the browser console—missing gateway keys or blocked REST calls usually throw visible errors.',
          'Ensure caching/performance plugins exclude the checkout page and REST endpoints.'
        ]
      },
      {
        title: 'Orders not emailing customers',
        paragraphs: [
          'Verify the From Email passes SPF/DKIM. Many hosts block PHP mail without authenticated SMTP.',
          'Resend emails from the order timeline after fixing deliverability to confirm the pipeline works.'
        ]
      }
    ],
    tips: [
      'Create a shared troubleshooting doc for your support team so they can follow consistent steps.',
      'Keep staging credentials handy to reproduce issues quickly.'
    ],
    mistakes: [
      'Debugging live payment problems without enabling sandbox/test modes first.',
      'Clearing customer data before verifying backups exist.'
    ],
    warning: 'When in doubt, clone the site to staging and reproduce issues there instead of experimenting on production.'
  }
];

for (const page of pages) {
  let content = '';
  content += renderParagraphSection('What you will cover', page.context || []);
  if (page.extraSections) {
    for (const block of page.extraSections) {
      content += renderParagraphSection(block.title, block.paragraphs || []);
    }
  }
  content += renderSteps(page.steps || []);
  content += renderTable(page.table);
  content += renderScreenshot(page.screenshot);
  content += renderTips(page.tips || []);
  content += renderMistakes(page.mistakes || [], page.warning);

  const html = template(page, content);
  const outputPath = path.join(DOC_ROOT, page.path);
  fs.mkdirSync(path.dirname(outputPath), { recursive: true });
  fs.writeFileSync(outputPath, html, 'utf8');
  console.log('Wrote', outputPath);
}
