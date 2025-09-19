// Main JavaScript functionality for Dying Light Theme

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuToggle && mobileMenu) {
        mobileMenuToggle.addEventListener('click', function() {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Search functionality
    const searchToggle = document.getElementById('search-toggle');
    const searchOverlay = document.getElementById('search-overlay');
    const searchClose = document.getElementById('search-close');
    const searchInput = document.getElementById('search-input');
    
    if (searchToggle && searchOverlay) {
        searchToggle.addEventListener('click', function() {
            searchOverlay.classList.remove('hidden');
            searchInput.focus();
        });
    }
    
    if (searchClose && searchOverlay) {
        searchClose.addEventListener('click', function() {
            searchOverlay.classList.add('hidden');
        });
    }
    
    // Close search overlay when clicking outside
    if (searchOverlay) {
        searchOverlay.addEventListener('click', function(e) {
            if (e.target === searchOverlay) {
                searchOverlay.classList.add('hidden');
            }
        });
    }
    
    // Close search overlay with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && searchOverlay && !searchOverlay.classList.contains('hidden')) {
            searchOverlay.classList.add('hidden');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
    
    // Add fade-in animation to cards
    const cards = document.querySelectorAll('.quest-card, .item-card, .character-card');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    cards.forEach(card => {
        observer.observe(card);
    });
    
    // Add loading states to buttons
    const buttons = document.querySelectorAll('button, .btn');
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            if (!this.classList.contains('loading')) {
                this.classList.add('loading');
                setTimeout(() => {
                    this.classList.remove('loading');
                }, 1000);
            }
        });
    });
    
    // Copy code blocks functionality
    const codeBlocks = document.querySelectorAll('pre code');
    codeBlocks.forEach(block => {
        const button = document.createElement('button');
        button.className = 'copy-code-btn absolute top-2 right-2 bg-dying-gray text-dying-orange px-2 py-1 rounded text-xs hover:bg-dying-light-gray';
        button.textContent = 'Copy';
        button.addEventListener('click', function() {
            navigator.clipboard.writeText(block.textContent).then(() => {
                button.textContent = 'Copied!';
                setTimeout(() => {
                    button.textContent = 'Copy';
                }, 2000);
            });
        });
        
        const pre = block.parentElement;
        pre.style.position = 'relative';
        pre.appendChild(button);
    });
    
    // Table of contents generation for long pages
    const headings = document.querySelectorAll('.prose h2, .prose h3');
    if (headings.length > 3) {
        const toc = document.createElement('div');
        toc.className = 'toc bg-dying-gray rounded-lg p-6 mb-8';
        toc.innerHTML = '<h3 class="text-dying-orange font-game font-bold mb-4">Table of Contents</h3><ul class="space-y-2"></ul>';
        
        const tocList = toc.querySelector('ul');
        
        headings.forEach((heading, index) => {
            const id = `heading-${index}`;
            heading.id = id;
            
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = `#${id}`;
            a.textContent = heading.textContent;
            a.className = 'text-gray-300 hover:text-dying-orange text-sm';
            
            if (heading.tagName === 'H3') {
                li.style.marginLeft = '1rem';
            }
            
            li.appendChild(a);
            tocList.appendChild(li);
        });
        
        const content = document.querySelector('.prose');
        if (content) {
            content.parentNode.insertBefore(toc, content);
        }
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
    
    // Keyboard navigation for cards
    const interactiveCards = document.querySelectorAll('.quest-card, .item-card, .character-card');
    interactiveCards.forEach(card => {
        card.setAttribute('tabindex', '0');
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                const link = this.querySelector('a');
                if (link) {
                    link.click();
                }
            }
        });
    });
    
    // Progress bar for reading progress
    const progressBar = document.createElement('div');
    progressBar.className = 'fixed top-0 left-0 w-full h-1 bg-dying-gray z-50';
    progressBar.innerHTML = '<div class="h-full bg-dying-orange transition-all duration-300" style="width: 0%"></div>';
    document.body.appendChild(progressBar);
    
    const progressFill = progressBar.querySelector('div');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset;
        const docHeight = document.body.scrollHeight - window.innerHeight;
        const scrollPercent = (scrollTop / docHeight) * 100;
        progressFill.style.width = scrollPercent + '%';
    });
    
    // Dark mode toggle (if needed in future)
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', function() {
            document.body.classList.toggle('light-mode');
            localStorage.setItem('darkMode', document.body.classList.contains('light-mode') ? 'false' : 'true');
        });
        
        // Load saved preference
        const savedDarkMode = localStorage.getItem('darkMode');
        if (savedDarkMode === 'false') {
            document.body.classList.add('light-mode');
        }
    }
    
    // Initialize tooltips for interactive elements
    const tooltipElements = document.querySelectorAll('[data-tooltip]');
    tooltipElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            const tooltip = document.createElement('div');
            tooltip.className = 'tooltip absolute bg-dying-gray text-white px-2 py-1 rounded text-sm z-50';
            tooltip.textContent = this.dataset.tooltip;
            tooltip.style.top = (this.offsetTop - 30) + 'px';
            tooltip.style.left = this.offsetLeft + 'px';
            document.body.appendChild(tooltip);
            this.tooltipElement = tooltip;
        });
        
        element.addEventListener('mouseleave', function() {
            if (this.tooltipElement) {
                this.tooltipElement.remove();
                this.tooltipElement = null;
            }
        });
    });
    
    console.log('Dying Light Theme initialized successfully!');
});
