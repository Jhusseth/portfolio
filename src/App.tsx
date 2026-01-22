import React, { Suspense } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Navigation } from '@/presentation/components/organisms/Navigation/Navigation';
import { Footer } from '@/presentation/components/organisms/Footer/Footer';
import { HomePage } from '@/presentation/pages/HomePage';
import { ErrorBoundary } from '@/presentation/components/organisms/ErrorBoundary/ErrorBoundary';
import { LoadingSpinner } from '@/presentation/components/atoms/LoadingSpinner/LoadingSpinner';
import '@/shared/i18n';

/**
 * Main App component with routing and providers
 */
function App(): JSX.Element {
  return (
    <HelmetProvider>
      <Router basename="/portfolio">
        <ErrorBoundary>
          <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
            <Navigation />
            <Suspense fallback={<LoadingSpinner />}>
              <HomePage />
            </Suspense>
            <Footer />
          </div>
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;