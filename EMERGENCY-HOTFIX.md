# Static GitHub Pages emergency path — build blocked

Existing Pages configuration is legacy publication from `main`, path `/`, at `https://irackson.github.io/`. The trivia application lives in tracked `dist/` files and is linked at `/dist/index.html`. There is no separate existing test workflow. The existing `npm run build` uses webpack4.

Local locked installation without lifecycle scripts succeeds. The unchanged production build on Node24 fails with `ERR_OSSL_EVP_UNSUPPORTED` (legacy webpack hashing). No crypto flags, dependencies, Pages settings, branches, generated dist files or browser API behavior were changed to force a passing result. An immediately buildable modern-runtime emergency entry is therefore **blocked**, not implemented by this guide.

Before a real patch: establish a supported working toolchain or reviewed minimal build modernization, then preserve source commit plus exact generated `dist` hashes. Run the real build without the full suite; inspect generated changes, commit the intended artifact and source together, and retain its full commit. A push/merge to main invokes existing Pages publication. Confirm the Pages build's commit and compare published static asset bytes against the reviewed dist artifact; a successful source push alone is not live-source proof. Read the static page only—do not issue trivia-provider/model requests merely for deployment acceptance.

Rollback is a reviewed revert restoring only the last verified compatible static source/dist artifact through the same publication branch. Do not change Pages settings or delete history. Verify its publication commit and public asset hashes afterwards. Complete deferred lint/type checks and planned browser checks after any urgent deployment. Do not disable branch protections or weaken crypto policy globally to use this path.

No deployment was requested to demonstrate this failure. The source/build repair dependency remains explicit in the shared `irackson/ianrackson-ops/CROSS-PROJECT-HOTFIX-COVERAGE.md` inventory.
