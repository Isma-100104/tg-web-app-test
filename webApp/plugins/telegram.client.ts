import type { TelegramWebApps } from "telegram-webapps-types-new";

export default defineNuxtPlugin(() => {
  const tgwa = window.Telegram;
  
  return {
    provide: {
      telegram: {
        WebApp: tgwa.WebApp,
        // Utils: tgwa.Utils,
        // WebView: tgwa.WebView
      }
    }
  }
});

declare module "#app" {
  interface NuxtApp {
    $telegram: {
      WebApp: TelegramWebApps.WebApp;
      // Utils: TelegramWebApps.Utils;
      // WebView: TelegramWebApps.WebView;
    }
  }
}