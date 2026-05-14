from playwright.sync_api import sync_playwright
import os
import glob

def run_cuj(page):
    page.goto("http://localhost:5173")
    page.wait_for_timeout(1000)

    # Screenshot of Hero section
    page.screenshot(path="verification/screenshots/hero_section.png")
    page.wait_for_timeout(500)

    # Scroll to and click the tracking button
    button = page.get_by_role("button", name="Simular Tracking Exótico")
    button.scroll_into_view_if_needed()
    page.wait_for_timeout(500)
    button.click()

    # Wait for the tracking animation to play out
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/tracking_1.png")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/tracking_2.png")
    page.wait_for_timeout(2000)
    page.screenshot(path="verification/screenshots/tracking_3.png")

    page.wait_for_timeout(1000)

if __name__ == "__main__":
    # Clean previous videos
    for f in glob.glob("verification/videos/*.webm"):
        os.remove(f)

    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        context = browser.new_context(
            record_video_dir="verification/videos",
            viewport={'width': 414, 'height': 896} # Mobile viewport
        )
        page = context.new_page()
        try:
            run_cuj(page)
        finally:
            context.close()
            browser.close()