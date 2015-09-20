Package.describe({
  name: 'nicolaslopezj:orion-admin-only-bootstrap',
  summary: 'Load boostrap and fontawesome only in the admin',
  version: '1.1.0',
  git: 'https://github.com/nicolaslopezj/orion-admin-only-bootstrap'
});

Package.onUse(function(api) {
  api.versionsFrom('1.0');
  api.use(['meteor-platform', 'orionjs:bootstrap@1.2.1']);
  api.addFiles(['init.js', 'templates.html', 'templates.js'], 'client');
});
