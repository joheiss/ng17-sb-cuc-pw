import { test, expect } from "@playwright/test";

test.describe("Home page ...", () => {

    test.beforeEach(async ({ page }) => {
        await page.goto("/");
    })
    test("... should display courses, in 10 separate course cards", async ({ page }) => {
        await expect(page.getByTestId("courses")).toBeVisible();
        await expect(page.getByTestId("course-cards")).toBeVisible();
        expect(await page.getByTestId("course-card").count()).toBe(10);
    });
});