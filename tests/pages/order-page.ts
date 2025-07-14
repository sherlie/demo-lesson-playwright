import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly statusButton: Locator
  readonly clientName: Locator
  readonly clientPhone: Locator
  readonly clientOrderButton: Locator
  readonly OkButton: Locator

  constructor(page: Page) {
    this.page = page
    this.statusButton = page.getByTestId('openStatusPopup-button')
    this.clientName = page.getByTestId('username-input')
    this.clientPhone = page.getByTestId('phone-input')
    this.clientOrderButton = page.getByTestId('createOrder-button')
    this.OkButton = page.getByTestId('orderSuccessfullyCreated-popup-ok-button')
  }

  async createOrder() {
    await this.clientName.fill('random-client-name')
    await this.clientPhone.fill('random-client-phone')
    await this.clientOrderButton.click()
  }
}
