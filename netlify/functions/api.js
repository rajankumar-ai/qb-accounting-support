const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

// Helper template wrapper to keep layout clean and consistent
const layout = (title, description, content) => `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title}</title>
    <meta name="description" content="${description}">
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background: #f4f6f8; }
        header { background: #1a202c; color: #fff; padding: 2rem 1rem; text-align: center; }
        header h1 { margin: 0; font-size: 1.8rem; }
        header p { color: #a0aec0; margin-top: 0.5rem; }
        nav { background: #2d3748; padding: 0.75rem; text-align: center; }
        nav a { color: #fff; margin: 0 15px; text-decoration: none; font-weight: 500; }
        nav a:hover { text-decoration: underline; }
        .container { max-width: 900px; margin: 2rem auto; background: #fff; padding: 2.5rem; border-radius: 8px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); }
        h2 { color: #2d3748; border-bottom: 2px solid #e2e8f0; padding-bottom: 0.5rem; }
        .cta-box { background: #ebf8ff; border-left: 4px solid #3182ce; padding: 1.5rem; margin: 2rem 0; border-radius: 4px; }
        .cta-btn { display: inline-block; background: #3182ce; color: #fff; padding: 0.75rem 1.5rem; border-radius: 4px; text-decoration: none; font-weight: bold; margin-top: 10px; }
        .cta-btn:hover { background: #2b6cb0; }
        footer { text-align: center; padding: 2rem; font-size: 0.8rem; color: #718096; background: #edf2f7; margin-top: 3rem; }
        ul { padding-left: 20px; }
        li { margin-bottom: 10px; }
    </style>
</head>
<body>
    <header>
        <h1>US Private Accounting Support & QuickBooks® Troubleshooting</h1>
        <p>Fast, Independent Remote Assistance for American Small Businesses</p>
    </header>
    <nav>
        <a href="/">Home</a>
        <a href="/errors">Error Hub</a>
        <a href="/errors/company-file-errors">File Errors</a>
        <a href="/errors/multi-user-errors">Network Errors</a>
        <a href="/errors/installation-errors">Installation</a>
        <a href="/errors/bank-feed-payroll-errors">Bank/Payroll</a>
    </nav>
    <div class="container">
        ${content}
    </div>
    <footer>
        <p><strong>Disclaimer:</strong> This website provides independent accounting and software support services for US clients. We are not affiliated with, endorsed by, or sponsored by Intuit Inc. QuickBooks® is a registered trademark of Intuit Inc.</p>
    </footer>
</body>
</html>
`;

// 1. Homepage
router.get('/', (req, res) => {
  const content = `
    <h2>Expert Private QuickBooks® Support for US Businesses</h2>
    <p>Are you stuck with broken reconciliations, missing bank feeds, or frustrating software error codes? We provide private, one-on-one remote troubleshooting and bookkeeping clean-up services tailored for US small business owners and accountants.</p>
    
    <h3>Why Choose Our Private Support?</h3>
    <ul>
      <li><strong>Immediate Response:</strong> Skip the long corporate queues and get direct help.</li>
      <li><div><strong>US-Tailored Solutions:</strong> Expertise matching American accounting workflows and tax schedules.</div></li>
      <li><strong>No Robot Loops:</strong> Talk directly to an expert who resolves your issue fast via secure chat or screen share.</li>
    </ul>

    <div class="cta-box">
      <h3>Need an Error Fixed Right Now?</h3>
      <p>Browse our error code database or reach out for immediate private chat assistance.</p>
      <a href="/errors" class="cta-btn">View Error Troubleshooting Hub</a>
    </div>
  `;
  res.send(layout("Independent QuickBooks® Support & US Accounting Help", "Get expert private QuickBooks troubleshooting, clean-up, and error resolution for US small businesses.", content));
});

// 2. Errors Hub Page
router.get('/errors', (req, res) => {
  const content = `
    <h2>QuickBooks® Error Troubleshooting Hub</h2>
    <p>Select your error category below to find step-by-step resolution guides or request private expert help:</p>
    <ul>
      <li><a href="/errors/company-file-errors"><strong>Company File & Corruption Errors (6000 Series, 6123, 6147)</strong></a> - Fix opening and data damage issues.</li>
      <li><a href="/errors/multi-user-errors"><strong>Network & Multi-User Errors (H202, H505)</strong></a> - Resolve server connection blocks.</li>
      <li><a href="/errors/installation-errors"><strong>Installation & Licensing Errors (3371, 1603, 1904)</strong></a> - Overcome system activation blocks.</li>
      <li><a href="/errors/bank-feed-payroll-errors"><strong>Bank Feed & Payroll Sync Errors (Error 324, PS038)</strong></a> - Fix broken feeds and payroll updates.</li>
    </ul>
  `;
  res.send(layout("QuickBooks® Error Troubleshooting Hub | Private Support", "Browse common QuickBooks error codes and get fast remote troubleshooting help for US businesses.", content));
});

// 3. SEO Page 1: Company File Errors
router.get('/errors/company-file-errors', (req, res) => {
  const content = `
    <h2>Fixing QuickBooks® Company File Errors (6000 Series, 6123, 6147)</h2>
    <p>Company file errors occur when your software is blocked from opening your database file due to permissions, network storage issues, or data damage. US businesses frequently encounter these when launching shared files.</p>
    
    <h3>Quick Troubleshooting Steps:</h3>
    <ol>
      <li>Verify your file extension is <strong>.qbw</strong>.</li>
      <li>Run the QuickBooks File Doctor tool from the official tool hub.</li>
      <li>Check folder permissions to ensure full read/write access to your hosting folder.</li>
    </ol>

    <div class="cta-box">
      <h3>File Still Corrupted or Refusing to Open?</h3>
      <p>Let our private experts safely repair and restore your company file without data loss.</p>
      <a href="mailto:support@copixelservices.space" class="cta-btn">Request Private File Repair</a>
    </div>
  `;
  res.send(layout("Fix QuickBooks Company File Errors (6000 Series) | Support", "Step-by-step guide to resolving QuickBooks company file corruption, error 6123, and 6147 for US businesses.", content));
});

// 4. SEO Page 2: Multi-User / Network Errors
router.get('/errors/multi-user-errors', (req, res) => {
  const content = `
    <h2>Resolving QuickBooks® Network & Multi-User Errors (H202, H505)</h2>
    <p>When multiple computers on your office network try to access your company file simultaneously, Error H201, H202, or H505 may lock you out because the workstation cannot reach the server database manager.</p>

    <h3>Common Fixes:</h3>
    <ol>
      <li>Ensure the <strong>QuickBooksDBXX</strong> and <strong>QBCFMonitorService</strong> are running on your server computer.</li>
      <li>Configure your Windows Firewall to allow incoming and outgoing ports for your version year.</li>
      <li>Run the QuickBooks Database Server Manager on your host computer.</li>
    </ol>

    <div class="cta-box">
      <h3>Locked Out of Multi-User Mode?</h3>
      <p>We can remotely configure your network settings and get your team back online instantly.</p>
      <a href="mailto:support@copixelservices.space" class="cta-btn">Get Remote Network Help</a>
    </div>
  `;
  res.send(layout("Fix QuickBooks Multi-User Error H202 & H505 | Support", "Learn how to fix QuickBooks network errors and multi-user connectivity problems for US small businesses.", content));
});

// 5. SEO Page 3: Installation & Licensing Errors
router.get('/errors/installation-errors', (req, res) => {
  const content = `
    <h2>Fixing QuickBooks® Installation & License Errors (3371, 1603, 1904)</h2>
    <p>Installation blocks and Error 3371 (status code: initialization failed) usually happen when essential license files are damaged or missing after a Windows update or a fresh computer setup.</p>

    <h3>How to Fix It:</h3>
    <ol>
      <li>Delete or rename the EntitlementDataStore.ec file in your program data folder.</li>
      <li>Ensure Microsoft .NET Framework and MSXML components are fully updated.</li>
      <li>Run a clean install using selective startup mode.</li>
    </ol>

    <div class="cta-box">
      <h3>Stuck on Setup or License Activation?</h3>
      <p>Avoid hours of frustration—let our US support specialists handle your installation cleanly.</p>
      <a href="mailto:support@copixelservices.space" class="cta-btn">Request Setup Support</a>
    </div>
  `;
  res.send(layout("Fix QuickBooks Error 3371 & Installation Issues | Support", "Quick guide on how to resolve QuickBooks installation blocks, license errors, and startup failures.", content));
});

// 6. SEO Page 4: Bank Feed & Payroll Sync Errors
router.get('/errors/bank-feed-payroll-errors', (req, res) => {
  const content = `
    <h2>Troubleshooting QuickBooks® Bank Feed & Payroll Errors (324, PS038)</h2>
    <p>US business owners rely heavily on automated bank feeds and smooth payroll runs. When Bank Feed Error 324 or Payroll Update Error PS038 hits, your financial tracking halts.</p>

    <h3>How to Resolve:</h3>
    <ol>
      <li><strong>For Bank Feed 324:</strong> Log into your bank's website directly to ensure no multi-factor authentication or security prompts are blocking connection, then update your login credentials inside your software dashboard.</li>
      <li><strong>For Payroll PS038:</strong> Verify your direct deposit stubs and fix stuck paychecks using a verified zero-balance adjustment workflow.</li>
    </ol>

    <div class="cta-box">
      <h3>Payroll or Bank Feeds Still Broken?</h3>
      <p>Get private, secure chat support to clean up your accounts and fix synchronization errors immediately.</p>
      <a href="mailto:support@copixelservices.space" class="cta-btn">Get Expert Bank & Payroll Help</a>
    </div>
  `;
  res.send(layout("Fix QuickBooks Bank Feed Error 324 & Payroll PS038", "Expert troubleshooting for QuickBooks bank feed synchronization and payroll update errors for US companies.", content));
});

app.use('/.netlify/functions/api', router);
app.use('/api', router);

module.exports.handler = serverless(app);