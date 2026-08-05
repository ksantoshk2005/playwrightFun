import { test, expect } from '@playwright/test';

test.only('Playwright Special locators', async ({ page }) => {

    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.waitForLoadState('networkidle');
    await page.getByLabel("Check me out if you Love IceCreams!").check();
    await page.getByLabel("Check me out if you Love IceCreams!").setChecked(true);
    await page.getByLabel('Employed').check();
    await page.getByPlaceholder("Password").fill("Abc");
    await page.getByRole("button", { name: 'Submit' }).click();
    // const Success = page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    // expect(Success).toBeTruthy();
    await expect(page.getByText("Success! The Form has been submitted successfully!.")).toBeVisible({ timeout: 10_000});

    

});

