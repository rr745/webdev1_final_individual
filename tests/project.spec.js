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

