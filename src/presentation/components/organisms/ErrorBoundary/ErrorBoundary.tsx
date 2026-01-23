import React, { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle, RefreshCw } from 'lucide-react';
import { Button } from '@/presentation/components/atoms/Button/Button';
import { Card } from '@/presentation/components/atoms/Card/Card';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

/**
 * Error boundary component for handling React errors gracefully
 */
export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  handleRetry = (): void => {
    this.setState({ hasError: false, error: undefined });
  };

  render(): ReactNode {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900 px-4">
          <Card className="max-w-md w-full p-8 text-center">
            <AlertTriangle className="w-16 h-16 text-red-500 mx-auto mb-4" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              ¡Ups! Algo salió mal
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Encontramos un error inesperado. Por favor intenta actualizar la página o contacta
              soporte si el problema persiste.
            </p>
            {process.env.NODE_ENV === 'development' && this.state.error && (
              <details className="text-left mb-6 p-4 bg-gray-100 dark:bg-gray-800 rounded-lg">
                <summary className="cursor-pointer font-medium text-gray-900 dark:text-white mb-2">
                  Detalles del Error
                </summary>
                <pre className="text-sm text-red-600 dark:text-red-400 overflow-auto">
                  {this.state.error.message}
                  {'\n'}
                  {this.state.error.stack}
                </pre>
              </details>
            )}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button onClick={this.handleRetry}>
                <RefreshCw className="w-4 h-4 mr-2" />
                Intentar de Nuevo
              </Button>
              <Button variant="outline" onClick={() => window.location.reload()}>
                Actualizar Página
              </Button>
            </div>
          </Card>
        </div>
      );
    }

    return this.props.children;
  }
}
