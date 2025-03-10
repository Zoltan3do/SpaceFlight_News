/* eslint-disable @typescript-eslint/no-unsafe-function-type */
/// <reference types="vite/client" />

// globals.d.ts
declare global {
  interface Window {
    registerPaint: (name: string, paint: Function) => void;
  }
  interface CSS {
    paintWorklet: {
      addModule: (url: string) => Promise<void>;
    };
  }
}

export {};
