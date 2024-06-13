import { chromium } from "playwright";
import Greeting from "./Greeting";

describe("Greeting component", () => {
  it("initially hides the text", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:3000"); // assume your app is running on localhost:3000
    await page.waitForSelector("#root div"); // wait for the Greeting component to render

    const textVisible = await page.$eval(
      "div p",
      (el) => el.textContent === "Hi Mom"
    );
    expect(textVisible).toBe(false);

    await browser.close();
  });

  it("toggles visibility of text when button is clicked", async () => {
    const browser = await chromium.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto("http://localhost:3000"); // assume your app is running on localhost:3000
    await page.waitForSelector("#root div"); // wait for the Greeting component to render

    await page.click("button"); // click the toggle button
    await page.waitForTimeout(500); // give the component time to re-render

    const textVisible = await page.$eval(
      "div p",
      (el) => el.textContent === "Hi Mom"
    );
    expect(textVisible).toBe(true);

    await page.click("button"); // click the toggle button again
    await page.waitForTimeout(500); // give the component time to re-render

    const textStillVisible = await page.$eval(
      "div p",
      (el) => el.textContent === "Hi Mom"
    );
    expect(textStillVisible).toBe(false);

    await browser.close();
  });
});
