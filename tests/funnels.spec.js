import { test, expect } from '@playwright/test';

test.describe('Main flow pass', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://qa.basenjiapps.net/childhood/');
  });
  test('Check the elements on the main page', async ({ page }) => {
    await expect(page.getByText('Break free from childhood')).toBeVisible();
    await expect(page.getByText('Break free from childhood')).toContainText(
      'Break free from childhood trauma',
    );
    await expect(page.getByRole('button', { name: 'Take test' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Take test' })).toContainText('Take test');
    await expect(page.getByRole('button', { name: 'Allow All cookies' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Allow All cookies' })).toContainText(
      'Allow All cookies',
    );
    await expect(page.getByRole('img', { name: 'trauma test' })).toBeVisible();
  });
  test('Check the male 18 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-21' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Liam' })).toBeVisible();
  });
  test('Check the male 25 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-25' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Liam' })).toBeVisible();
  });
  test('Check the male 26-35 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-35' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Oliver' })).toBeVisible();
  });
  test('Check the male flow 36-45', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-45' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Noah' })).toBeVisible();
  });
  test('Check the male flow 46-55', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-55' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Ethan' })).toBeVisible();
  });
  test('Check the male flow 56-71', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-65' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Benjamin' })).toBeVisible();
  });
  test('Check the female 18-25 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Female Female' }).click();
    await page.getByRole('button', { name: '-25' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Gloria' })).toBeVisible();
  });
  test('Check the female 26-35 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Female Female' }).click();
    await page.getByRole('button', { name: '-35' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Emma' })).toBeVisible();
  });
  test('Check the female 36-45 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Female Female' }).click();
    await page.getByRole('button', { name: '-40' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Ava' })).toBeVisible();
  });
  test('Check the female 46-55 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Female Female' }).click();
    await page.getByRole('button', { name: '-55' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Sophia' })).toBeVisible();
  });
  test('Check the female 56-71 flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Female Female' }).click();
    await page.getByRole('button', { name: '+' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await expect(page.getByRole('img', { name: 'Olivia' })).toBeVisible();
  });
  test('Check pass flow', async ({ page }) => {
    await page.getByRole('button', { name: 'Allow All cookies' }).click();
    await page.getByRole('button', { name: 'Take test' }).click();
    await page.getByRole('button', { name: 'Male Male' }).click();
    await page.getByRole('button', { name: '-40' }).click();
    await page.getByRole('button', { name: 'Unhappily married' }).click();
    await page.getByRole('button', { name: 'Unstable and unsafe' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: "I don't remember my childhood" }).click();
    await page.getByRole('button', { name: 'Other' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Often' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'ace score Strongly relate' }).click();
    await page.getByRole('button', { name: 'Shyness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.waitForTimeout(2000);
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'No', exact: true }).click();
    await page.getByRole('button', { name: 'Open up easily' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Hardly relate' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Happiness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'ace score Somewhat relate' }).click();
    await page.getByRole('button', { name: 'Not sure' }).click();
    await page.getByRole('button', { name: 'Enhance overall happiness' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: '-3 months' }).click();
    await page.getByRole('textbox', { name: 'Enter your name' }).click();
    await page.getByRole('textbox', { name: 'Enter your name' }).fill('Aliaksandr');
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Next' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.getByRole('button', { name: 'No' }).click();
    await page.getByRole('button', { name: 'Yes' }).click();
    await page.goto('https://qa.basenjiapps.net/childhood/email/');
    await expect(page.getByText('Enter your email for detailed')).toBeVisible();
    await expect(page.getByText('Enter your email for detailed')).toContainText(
      'Enter your email for detailed test results and a healing plan',
    );
    await page.getByRole('textbox', { name: 'Enter your email' }).click();
    await page
      .getByRole('textbox', { name: 'Enter your email' })
      .fill('a.anikhouski+01101@bsnj.co');
    await page.getByRole('button', { name: 'Explore results' }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await expect(page.getByText('Contribute what feels right')).toBeVisible();
    await page.getByRole('button', { name: '€1', exact: true }).click();
    await page.getByRole('button', { name: 'Continue' }).click();
    await page.getByRole('button', { name: 'Get my result and plan' }).click();
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^PayPal$/ })
        .first(),
    ).toBeVisible();
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Google Pay$/ })
        .nth(1),
    ).toBeVisible();
    await expect(
      page
        .locator('div')
        .filter({ hasText: /^Credit Card$/ })
        .nth(1),
    ).toBeVisible();
  });
});
