module.exports = {
  ci: {
    collect: {
      startServerCommand: 'npm run preview',
      url: [
        'http://localhost:4321',
        'http://localhost:4321/about',
        'http://localhost:4321/contact',
        'http://localhost:4321/products',
        'http://localhost:4321/products/kayu-jati',
      ],
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.9 }],
        'categories:accessibility': ['error', { minScore: 0.9 }],
        'categories:best-practices': ['warn', { minScore: 0.9 }],
        'categories:seo': ['error', { minScore: 0.9 }],
      },
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
