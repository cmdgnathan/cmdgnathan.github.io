# cmdgnathan.github.io

Personal site, served at <https://cmdgnathan.github.io>.

## Structure

```
.
├── index.html        # landing / about
├── research.html     # research interests, publications, talks
├── projects.html     # side projects and experiments
├── cv.html           # CV (link to PDF in assets/)
├── assets/
│   └── style.css
└── README.md
```

Plain HTML + CSS, no build step. To preview locally:

```sh
python3 -m http.server 8000
# open http://localhost:8000
```

## Publishing

GitHub Pages serves the `main` branch automatically for
`<username>.github.io` repos. Push to `main` and the site updates.

```sh
git add .
git commit -m "update"
git push
```
