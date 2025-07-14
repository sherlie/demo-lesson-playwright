import { expect, test } from '@playwright/test'
import { SERVICE_URL } from '../../../config/env-data'
import { LoginPage } from '../../pages/login-page'

test('Sign in button with correct credentials', async ({ page }) => {
  /*
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  await usernameField.fill('-')
  const signInButton = page.getByTestId('signIn-button')
  const usernameError = page.getByTestId('username-input-error').nth(0)
  await expect(signInButton).toBeDisabled()
  await expect(usernameError).toBeVisible()
  */
  const authPage = new LoginPage(page)
  await authPage.open()
  const orderPage = await authPage.signIn()
  await expect(orderPage.statusButton).toBeVisible()
  /*
 await authPage.usernameField.fill('hello')
 await authPage.passwordField.fill('12345678')
 await expect(authPage.signInButton).toBeDisabled()
 */
})

test('when username and/or password is incorrect', async ({ page }) => {
  await page.goto(SERVICE_URL)
  const usernameField = page.getByTestId('username-input')
  const passwordField = page.getByTestId('password-input')
  await usernameField.fill('random-username')
  await passwordField.fill('12345678')
  const signInButton = page.getByTestId('signIn-button')
  await signInButton.click()
  const errorMessage = page.getByTestId('authorizationError-popup')
  await expect(errorMessage).toBeVisible()
})
