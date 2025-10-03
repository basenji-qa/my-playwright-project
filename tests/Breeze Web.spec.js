import { test, expect } from '@playwright/test';
test.describe('Main page tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://staging.app.breeze-wellbeing.com/sign-in/');
  });
  test.skip('Check the correct naming of elements on main page', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Log In to Breeze Premium' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Log In to Breeze Premium' })).toContainText(
      'Log In to Breeze Premium Account',
    );
    await expect(page.getByRole('link', { name: 'Forgot Password?' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Forgot Password?' })).toContainText(
      'Forgot Password?',
    );
    await expect(page.getByRole('link', { name: 'Sign up' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Sign up' })).toContainText('Sign up');
  });
  test.skip('Check the correct redirect to Reset Password page', async ({ page }) => {
    await page.getByRole('link', { name: 'Forgot Password?' }).click();
    await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Reset Password' })).toContainText(
      'Reset Password',
    );
  });
  test.skip('Check the correct return from Reset Password page', async ({ page }) => {
    await page.getByRole('link', { name: 'Forgot Password?' }).click();
    await expect(page.getByRole('heading', { name: 'Reset Password' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Reset Password' })).toContainText(
      'Reset Password',
    );
    await expect(page.getByRole('link', { name: 'Back to Login' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Back to Login' })).toContainText('Back to Login');
    await page.getByRole('link', { name: 'Back to Login' }).click();
    await expect(page.getByRole('heading', { name: 'Log In to Breeze Premium' })).toBeVisible();
  });
  test('Check the correct redirect to Sign up page', async ({ page }) => {
    await page.getByRole('link', { name: 'Sign up' }).click();
    await expect(page).toHaveURL(/.*qa.sso.basenjiapps.net\/?new_sign_up_enabled=true/);
    await expect(page.getByRole('heading', { name: 'Sign up' })).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Sign up' })).toContainText('Sign up');
  });
});
