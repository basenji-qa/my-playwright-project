
import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './tests',           // папка с тестами
  reporter: [['list'], ['html']], // вывод в консоль + html-репорт
  use: {
    headless: false,             // чтобы видеть браузер при тестах
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },
});
