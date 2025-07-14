import { Locator, Page } from '@playwright/test'

export class OrderPage {
  readonly page: Page
  readonly orderItem: Locator

  constructor(page: Page) {
    this.page = page
    this.orderItem = page.getByTestId('order-item-0')
  }
}
