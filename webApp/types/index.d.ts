import type { TelegramWebApps } from "telegram-webapps-types-new";

export global {
  interface Window {
    Telegram: {
      WebApp: TelegramWebApps.WebApp;
      // Utils: TelegramWebApps.Utils;
      // WebView: TelegramWebApps.WebView;
    };
  }
}