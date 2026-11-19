        // Apply the visitor's explicit choice before styles load. New visits start light.
        try {
            const prefersDark = localStorage.getItem('portfolioTheme') === 'dark';
            document.documentElement.classList.toggle('dark-mode', prefersDark);
            document.querySelector('meta[name="theme-color"]').content = prefersDark ? '#1c1e22' : '#f2f1ed';
        } catch { /* Keep the default light theme when storage is unavailable. */ }
