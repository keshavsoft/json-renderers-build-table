# V23 samples

These table samples consume `docs/dist/v23/min.js`.
Each sample passes `showLog` and `returnLog` from outside into the V23 builder.

Available sample builders:
- `simpleTable`: Basic table with columns, header, and body
- `headerOnly`: Table with header only
- `bodyOnly`: Table with body rows only
- `withFooter`: Table with footer input row
- `footerOnly`: Table with footer only
- `withSerial`: Table with automated prepended serial number (`#`) column
- `withOptions`: Table with automated appended options/actions button column

Run `npm run build` from the project root to build the latest source version (V23), then open the sample HTML files through the project's local server.
