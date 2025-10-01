interface Elements {
  locator: (page: Page) => Locator;
  name: string;
  text?: string;
  attribute?: {
    type: string;
    value: string;
  };
}

const elements: Elements[] = [
  {
    locator: (page: Page): Locator =>
      page.getByRole('link', { name: 'Playwright logo Playwright' }),
    name: 'Playwright logo link',
    text: 'Playwright',
    attribute: {
      type: 'href',
      value: '/',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Docs' }),
    name: 'Docs link',
    text: 'Docs',
    attribute: {
      type: 'href',
      value: '/docs/intro',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'API' }),
    name: 'API link',
    text: 'API',
    attribute: {
      type: 'href',
      value: '/docs/api/class-playwright',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('button', { name: 'Node.js' }),
    name: 'Node.js button',
    text: 'Node.js',
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Community' }),
    name: 'Community link',
    text: 'Community',
    attribute: {
      type: 'href',
      value: '/community/welcome',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'GitHub repository' }),
    name: 'GitHub icon',
    attribute: {
      type: 'href',
      value: 'https://github.com/microsoft/playwright',
    },
  },
  {
    locator: (page: Page): Locator => page.getByRole('link', { name: 'Discord server' }),
    name: 'Discord icon',
    attribute: {
      type: 'href',
      value: 'https://aka.ms/playwright/discord',
    },
  },
  {
    locator: (page: Page): Locator =>
      page.getByRole('button', { name: 'Switch between dark and light' }),
    name: 'Lightmode icon',
  },
  {
    locator: (page: Page): Locator => page.getByRole('button', { name: 'Search (Command+K)' }),
    name: 'Search input',
  },
];

import { test, expect } from '@playwright/test';

test.describe('Main page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://playwright.dev/');
  });
  //test.skip - тест скипается
  //test.fixme - тест скипается, но еще его нужно поправить
  //test.fail - тест должен упасть (для негативных сценариев)
  //test.only - из группы тестов выполняются только с аннотацией "only"

  test('Check the display of header navigation elements', async ({ page }) => {
    elements.forEach(({ locator, name }) => {
      test.step(`Check the ${name} element description`, async () => {
        await expect.soft(locator(page)).toBeVisible();
      });
    });

    // await expect.soft(page.getByRole('link', { name: 'Docs' })).toBeVisible();
    // await expect.soft(page.getByRole('link', { name: 'API' })).toBeVisible();
    // await expect.soft(page.getByRole('button', { name: 'Node.js' })).toBeVisible();
    // await expect.soft(page.getByRole('link', { name: 'Community' })).toBeVisible();
    // await expect.soft(page.getByRole('link', { name: 'GitHub repository' })).toBeVisible();
    // await expect.soft(page.getByRole('link', { name: 'Discord server' })).toBeVisible();
    // await expect
    //   .soft(page.getByRole('button', { name: 'Switch between dark and light' }))
    //   .toBeVisible();
    // await expect.soft(page.getByRole('button', { name: 'Search (Command+K)' })).toBeVisible();
  });

  test('Check the correct naming of header navigation elements', async ({ page }) => {
    elements.forEach(({ locator, name, text }) => {
      if (text) {
        test.step(`Check the correct naming of element ${name}`, async () => {
          await expect(locator(page)).toContainText(text);
        });
      }
    });
    // await expect.soft(page.getByRole('link', { name: 'Docs' })).toContainText('Docs');
    // await expect.soft(page.getByRole('link', { name: 'API' })).toContainText('API');
    // await expect.soft(page.getByRole('button', { name: 'Node.js' })).toContainText('Node.js');
    // await expect.soft(page.getByRole('link', { name: 'Community' })).toContainText('Community');
  });
  test('Check the "href" attribute', async ({ page }) => {
    elements.forEach(({ locator, name, attribute }) => {
      if (attribute) {
        test.step(`Check the "href" attribute for ${name} element`, async () => {
          await expect(locator(page)).toHaveAttribute(attribute?.type, attribute?.value);
        });
      }
    });
  });

  test('Check the Theme mode change', async ({ page }) => {
    await page.getByLabel('Switch between dark and light mode').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'light');
    await page.getByLabel('Switch between dark and light mode').click();
    await expect.soft(page.locator('html')).toHaveAttribute('data-theme', 'dark');
  });
  test('Check the page title', async ({ page }) => {
    await expect
      .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
      .toBeVisible();
    await expect
      .soft(page.getByRole('heading', { name: 'Playwright enables reliable' }))
      .toContainText('Playwright enables reliable end-to-end testing for modern web apps.');
  });
  test('Check the button "Get started"', async ({ page }) => {
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toBeVisible();
    await expect.soft(page.getByRole('link', { name: 'Get started' })).toContainText('Get started');
    await expect
      .soft(page.getByRole('link', { name: 'Get started' }))
      .toHaveAttribute('href', '/docs/intro');
  });
});
