// Search functionality using Lunr.js for Dying Light Theme

let searchIndex = null;
let searchData = [];

// Initialize search when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeSearch();
});

async function initializeSearch() {
    try {
        // Load search index and data
        const response = await fetch('/search-index.json');
        const data = await response.json();
        
        searchIndex = lunr.Index.load(data.index);
        searchData = data.docs;
        
        console.log('Search index loaded successfully');
    } catch (error) {
        console.error('Failed to load search index:', error);
        // Fallback to basic search
        setupFallbackSearch();
    }
}

function setupFallbackSearch() {
    console.log('Setting up fallback search');
    // Basic fallback search implementation
    searchIndex = {
        search: function(query) {
            return searchData.filter(doc => 
                doc.title.toLowerCase().includes(query.toLowerCase()) ||
                doc.content.toLowerCase().includes(query.toLowerCase())
            ).map((doc, index) => ({ ref: index, score: 1 }));
        }
    };
}

// Search function
function performSearch(query) {
    if (!searchIndex || !query.trim()) {
        return [];
    }
    
    try {
        const results = searchIndex.search(query);
        return results.map(result => {
            const doc = searchData.find(d => d.id === result.ref);
            return {
                ...doc,
                score: result.score
            };
        });
    } catch (error) {
        console.error('Search error:', error);
        return [];
    }
}

// Display search results
function displaySearchResults(results, container) {
    container.innerHTML = '';
    
    if (results.length === 0) {
        container.innerHTML = '<p class="text-gray-400 text-center py-4">No results found</p>';
        return;
    }
    
    results.forEach(result => {
        const resultElement = document.createElement('div');
        resultElement.className = 'search-result';
        
        const title = result.title || 'Untitled';
        const content = result.content ? result.content.substring(0, 150) + '...' : '';
        const url = result.url || '#';
        const type = result.type || 'page';
        
        resultElement.innerHTML = `
            <h4><a href="${url}" class="hover:text-dying-orange">${title}</a></h4>
            <p>${content}</p>
            <div class="search-meta">
                <span class="px-2 py-1 bg-dying-orange text-white text-xs rounded">${type}</span>
                <span class="ml-2">${url}</span>
            </div>
        `;
        
        container.appendChild(resultElement);
    });
}

// Search input handler
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('search-input');
    const searchResults = document.getElementById('search-results');
    
    if (searchInput && searchResults) {
        let searchTimeout;
        
        searchInput.addEventListener('input', function() {
            clearTimeout(searchTimeout);
            const query = this.value.trim();
            
            if (query.length < 2) {
                searchResults.innerHTML = '<p class="text-gray-400 text-center py-4">Type at least 2 characters to search</p>';
                return;
            }
            
            searchTimeout = setTimeout(() => {
                const results = performSearch(query);
                displaySearchResults(results, searchResults);
            }, 300);
        });
        
        // Handle Enter key
        searchInput.addEventListener('keydown', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                const query = this.value.trim();
                if (query) {
                    const results = performSearch(query);
                    displaySearchResults(results, searchResults);
                }
            }
        });
    }
});

// Advanced search filters
function createSearchFilters() {
    const filters = {
        type: 'all',
        category: 'all',
        difficulty: 'all'
    };
    
    return {
        apply: function(query) {
            let results = performSearch(query);
            
            if (this.type !== 'all') {
                results = results.filter(result => result.type === this.type);
            }
            
            if (this.category !== 'all') {
                results = results.filter(result => 
                    result.categories && result.categories.includes(this.category)
                );
            }
            
            if (this.difficulty !== 'all') {
                results = results.filter(result => 
                    result.difficulty === this.difficulty
                );
            }
            
            return results;
        },
        setType: function(type) {
            this.type = type;
        },
        setCategory: function(category) {
            this.category = category;
        },
        setDifficulty: function(difficulty) {
            this.difficulty = difficulty;
        }
    };
}

// Search suggestions
function getSearchSuggestions(query) {
    if (!query || query.length < 2) return [];
    
    const suggestions = [];
    const queryLower = query.toLowerCase();
    
    // Common search terms
    const commonTerms = [
        'quest', 'mission', 'weapon', 'blueprint', 'character', 'skill',
        'map', 'location', 'item', 'equipment', 'survivor', 'zombie',
        'night', 'day', 'safe house', 'merchant', 'collectible'
    ];
    
    commonTerms.forEach(term => {
        if (term.includes(queryLower)) {
            suggestions.push(term);
        }
    });
    
    // Search in existing content
    searchData.forEach(doc => {
        if (doc.title.toLowerCase().includes(queryLower)) {
            suggestions.push(doc.title);
        }
    });
    
    return [...new Set(suggestions)].slice(0, 5);
}

// Display search suggestions
function displaySearchSuggestions(suggestions, container) {
    container.innerHTML = '';
    
    suggestions.forEach(suggestion => {
        const suggestionElement = document.createElement('div');
        suggestionElement.className = 'search-suggestion px-4 py-2 hover:bg-dying-light-gray cursor-pointer';
        suggestionElement.textContent = suggestion;
        
        suggestionElement.addEventListener('click', function() {
            const searchInput = document.getElementById('search-input');
            searchInput.value = suggestion;
            searchInput.dispatchEvent(new Event('input'));
        });
        
        container.appendChild(suggestionElement);
    });
}

// Keyboard navigation for search results
document.addEventListener('keydown', function(e) {
    const searchOverlay = document.getElementById('search-overlay');
    if (!searchOverlay || searchOverlay.classList.contains('hidden')) return;
    
    const searchResults = document.getElementById('search-results');
    const results = searchResults.querySelectorAll('.search-result');
    
    if (results.length === 0) return;
    
    let currentIndex = -1;
    results.forEach((result, index) => {
        if (result.classList.contains('selected')) {
            currentIndex = index;
        }
    });
    
    switch(e.key) {
        case 'ArrowDown':
            e.preventDefault();
            if (currentIndex < results.length - 1) {
                if (currentIndex >= 0) {
                    results[currentIndex].classList.remove('selected');
                }
                results[currentIndex + 1].classList.add('selected');
            }
            break;
        case 'ArrowUp':
            e.preventDefault();
            if (currentIndex > 0) {
                results[currentIndex].classList.remove('selected');
                results[currentIndex - 1].classList.add('selected');
            }
            break;
        case 'Enter':
            e.preventDefault();
            const selectedResult = searchResults.querySelector('.search-result.selected');
            if (selectedResult) {
                const link = selectedResult.querySelector('a');
                if (link) {
                    window.location.href = link.href;
                }
            }
            break;
    }
});

// Search analytics (optional)
function trackSearch(query, resultsCount) {
    if (typeof gtag !== 'undefined') {
        gtag('event', 'search', {
            search_term: query,
            results_count: resultsCount
        });
    }
}

// Export functions for global access
window.DyingLightSearch = {
    performSearch,
    displaySearchResults,
    createSearchFilters,
    getSearchSuggestions,
    displaySearchSuggestions,
    trackSearch
};
