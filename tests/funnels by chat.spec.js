const { test, expect } = require('@playwright/test');

// Хелпер: обработка шагов воронки
async function processFunnelStep(page) {
  // Закрыть попап, если он появился
  const popup = page.locator('div[type="ConfirmPopup_popupBox"], .popup, .modal');
  if (await popup.isVisible().catch(() => false)) {
    const popupButton = popup.locator('button');
    if (await popupButton.first().isVisible()) {
      await popupButton.first().click();
      await page.waitForTimeout(500);
      return true;
    }
  }

  // Заполнение имени
  if (
    await page
      .locator('input[type*="t"], input[name="name"]')
      .first()
      .isVisible()
      .catch(() => false)
  ) {
    await page.getByRole('textbox', { name: 'Enter your name' }).click();
    await page.fill('input[placeholder*="Enter your name"], input[name="name"]', 'Aliaksandr');
  }

  // Заполнение почты
  if (
    await page
      .locator('input[type="email"], input[name="email"]')
      .first()
      .isVisible()
      .catch(() => false)
  ) {
    await page.fill('input[type="email"], input[name="email"]', 'a.anikhouski+02102@bsnj.co');
  }

  // Если есть варианты ответов с чекбоксами
  if (
    await page
      .locator('button:has(input[type="checkbox"])')
      .first()
      .isVisible()
      .catch(() => false)
  ) {
    await page.locator('button:has(input[type="checkbox"])').first().click();
    if (
      await page
        .locator('button:has-text("Next")')
        .isVisible()
        .catch(() => false)
    ) {
      await page.locator('button:has-text("Next")').click();
    }
    await page.waitForTimeout(800);
    return true;
  }

  // Если есть варианты ответов (одиночный выбор)
  if (
    await page
      .locator('button')
      .filter({ hasNot: page.locator('input[type="checkbox"]') })
      .first()
      .isVisible()
      .catch(() => false)
  ) {
    await page
      .locator('button')
      .filter({ hasNot: page.locator('input[type="checkbox"]') })
      .first()
      .click();
    await page.waitForTimeout(800);
    return true;
  }

  // Если просто экран с кнопкой Next
  if (
    await page
      .locator('button:has-text("Next")')
      .isVisible()
      .catch(() => false)
  ) {
    await page.locator('button:has-text("Next")').click();
    await page.waitForTimeout(800);
    return true;
  }

  return false;
}
test.beforeEach(async ({ page }) => {
  await page.goto('https://qa.basenjiapps.net/childhood/');
});
test('Прохождение воронки до экрана оплаты', async ({ page }) => {
  await page.getByRole('button', { name: 'Allow All cookies' }).click();
  await page.getByRole('button', { name: 'Take test' }).click();
  // Двигаемся по шагам, пока не дойдём до формы оплаты
  let stepCount = 0;
  while (stepCount < 30) {
    // ограничим количество шагов, чтобы не зациклиться
    stepCount++;

    // Проверяем, не дошли ли мы до экрана оплаты
    if (
      (await page
        .locator('text=PayPal')
        .isVisible()
        .catch(() => false)) &&
      (await page
        .locator('text=Apple Pay')
        .isVisible()
        .catch(() => false))
    ) {
      break;
    }

    await processFunnelStep(page);
  }

  // Проверяем, что дошли до формы оплаты
  await expect(page.locator('form')).toBeVisible();
  await expect(page.locator('text=PayPal')).toBeVisible();
  await expect(page.locator('text=Apple Pay')).toBeVisible();
});
