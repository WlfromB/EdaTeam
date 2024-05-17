import React, { Component, ReactNode } from 'react';

import { DivError, HeaderError, ParagraphError } from './error-boundary.styled';


interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true 
    };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Caught an error:', error, errorInfo);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return <DivError className="back">
        {/* <img src={backgroundErrorBoundary}/> */}
      <DivError>
        <HeaderError> 
          Упсс.. Что-то пошло не так :( 
        </HeaderError>
        <ParagraphError > 
          Пожалуйста, подождите немного, мы всё починим!
        </ParagraphError>
      </DivError>
      </DivError>
      
    }
    return this.props.children;
  }
}

export default ErrorBoundary;