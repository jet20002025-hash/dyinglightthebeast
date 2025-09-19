// Lunr.js index generation
const lunr = require('lunr');

// Create search index
const idx = lunr(function () {
  this.ref('id');
  this.field('title', { boost: 10 });
  this.field('content');
  this.field('description', { boost: 5 });
  this.field('categories');
  this.field('tags');
  
  // Add documents
  {{ range .pages }}
  this.add({
    id: "{{ .id }}",
    title: "{{ .title }}",
    content: "{{ .content }}",
    description: "{{ .description }}",
    categories: "{{ .categories }}",
    tags: "{{ .tags }}"
  });
  {{ end }}
});

// Export index and data
window.searchIndex = idx;
window.searchData = {{ .pages | jsonify }};
