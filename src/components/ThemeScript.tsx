export default function ThemeScript() {
  return (
    <script
      dangerouslySetInnerHTML={{
        __html: `
          (function() {
            // Prevent transitions on initial load
            document.documentElement.classList.add('no-transitions');
            
            try {
              // Check localStorage first
              const savedTheme = localStorage.getItem('theme');
              
              if (savedTheme === 'dark' || savedTheme === 'light') {
                document.documentElement.setAttribute('data-theme', savedTheme);
              } else {
                // Fallback to system preference
                const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                const systemTheme = prefersDark ? 'dark' : 'light';
                document.documentElement.setAttribute('data-theme', systemTheme);
              }
            } catch (e) {
              // Fail silently - will use default light theme
            }
            
            // Re-enable transitions after initial render
            window.addEventListener('DOMContentLoaded', function() {
              // Small delay to ensure all elements are rendered
              setTimeout(function() {
                document.documentElement.classList.remove('no-transitions');
              }, 10);
            });
          })();
        `,
      }}
    />
  );
}

