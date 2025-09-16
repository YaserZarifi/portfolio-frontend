import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingOverlay = ({ status, onRetry }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-900 bg-opacity-80 backdrop-blur-sm text-white text-center p-4"
    >
      <AnimatePresence mode="wait">
        {/* Loading State */}
        {status === 'loading' && (
          <motion.div key="loading" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <svg className="animate-spin h-12 w-12 text-accent mb-4 mx-auto" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
            </svg>
            <h2 className="text-xl font-semibold">Waking up the server...</h2>
            <p className="text-gray-300 mt-1">This can take a moment, thanks for your patience!</p>
          </motion.div>
        )}

        {/*  Success State */}
        {status === 'success' && (
          <motion.div key="success" initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.5 }}>
            <svg className="h-16 w-16 text-green-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-2xl font-bold">Connection Established!</h2>
            <p className="text-gray-200">Loading your experience...</p>
          </motion.div>
        )}

        {/* Error State */}
        {status === 'error' && (
          <motion.div key="error" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}>
            <svg className="h-16 w-16 text-red-500 mb-4 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
               <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <h2 className="text-xl font-semibold">Connection Failed</h2>
            <p className="text-gray-300 mt-1">Could not connect to the server. Please try again.</p>
            <button
              onClick={onRetry}
              className="mt-6 px-6 py-2 bg-accent text-white font-semibold rounded-lg hover:bg-accent-dark transition-colors"
            >
              Retry
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default LoadingOverlay;
