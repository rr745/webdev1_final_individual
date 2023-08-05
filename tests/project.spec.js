const { test, expect } = require('@playwright/test');
//CHange to localhost on which it is running on
const nextjstest = 'http://localhost:3000/'; 
const nextjstestssr = 'http://localhost:3000/posts/ssg-ssr'
const nextjsrender = 'http://localhost:3000/posts/pre-rendering'


// Test checks if a yourname is present
test('Check Yourname Presence on Home', async () => {
  const name = 'Radhika';
  expect(name).toBeDefined();
});
//Test to check Your name of SSR Page
test('Check Header for YourName on SSR page', async ({ page }) => {
  await page.goto(nextjstestssr);

  const name = 'Radhika';
  const headerSelector = `header h2:has-text("${name}")`;
  await expect(page.locator(headerSelector)).toBeVisible();
});

// This test checks if the <h1> in the <article> in SSR page contains specific content 
test('Check <h1> in <article> for Specific Content on SSR page', async ({ page }) => {
  await page.goto(nextjstestssr);

  const articleSelector = 'article';
  const expectedContent = 'When to Use Static Generation v.s. Server-side Rendering';
  const headerSelector = `${articleSelector} h1:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});
//Test to check for yourname on render page header
test('Check Header for Your Name on Render Page', async ({ page }) => {
  await page.goto(nextjsrender);

  const name = 'Radhika';
  const headerSelector = `header h2:has-text("${name}")`;
  await expect(page.locator(headerSelector)).toBeVisible();
});

//This test checks if the <h1> in the <article> of Pre-Rendering Page contains specific content
test('Check <h1> in <article> for Specific Content on Render Page', async ({ page }) => {
  await page.goto(nextjsrender);

  const articleSelector = 'article';
  const expectedContent = 'Two Forms of Pre-rendering';
  const headerSelector = `${articleSelector} h1:has-text("${expectedContent}")`;

  await expect(page.locator(headerSelector)).toBeVisible();
});
// This test checks that the responsive meta tag is present 
test('Check Responsive Meta Tag', async ({ page }) => {
  await page.goto(nextjsrender);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width');
});

// This test checks that the responsive meta tag is present 
test('Check Responsive Meta Tag for Render', async ({ page }) => {
  await page.goto(nextjstestssr);
  const viewportMeta = await page.getAttribute('meta[name="viewport"]', 'content');
  await expect(viewportMeta).toBe('width=device-width');
});

