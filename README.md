# web-dev-student-files
# Educational Web Project Template

This workspace has been pre-configured by your instructor to provide a standard file structure, a live hosting environment via GitHub Pages, and critical administrative safeguards.

Before you begin coding your homepage, please review the built-in features below. **Do not modify or delete these files**, as they are required for this course assignment.

---

## 1. The Educational Notice Banner (`index.html` & CSS)

Because this website is hosted live on the public web, it includes a persistent, high-visibility **Educational Notice Banner** pinned to the top of the viewport. 

* **The HTML:** Located immediately following the opening `<body>` tag in `index.html`. It utilizes the accessibility attribute `role="status"` to inform assistive technologies that this is an observational sandbox site.
* **The CSS:** Styled using `position: fixed` to ensure it stays locked at the top of the screen during scrolling. A `padding-top` value is applied to the `<body>` tag to prevent the banner from overlapping your team's website content.

> **Rule:** This banner must remain visible on all pages of your deployed site so that public visitors do not mistake your fictional project for an operational business or active chamber of commerce.

---

## 2. Search Engine Privacy Protection (`robots.txt`)

To ensure your development environment remains private and does not conflict with real-world organizations on Google Search, a `robots.txt` file is placed in the root directory.

It contains the following directive:
```text
User-agent: *
Disallow: /
