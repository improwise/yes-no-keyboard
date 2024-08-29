interface ResponsiveVoice {
  speak(
    text: string,
    voice: string,
    options?: {
      pitch?: number;
      rate?: number;
      volume?: number;
    }
  ): void;
}

declare let responsiveVoice: ResponsiveVoice;
