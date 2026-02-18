# Thin and Duplicate Content Audit (February 2026)

## Audit Scope
- `/blog/*`
- `/comparisons/*`
- `/roas/*` dynamic slug pages
- Canonical and redirect behavior

## Findings

### 1. Legacy benchmark overlap
- URL: `/blog/roas-benchmarks`
- Overlap with: `/blog/roas-benchmarks-2026`
- Status: mitigated
  - Permanent redirect configured in `next.config.ts`
  - Legacy page metadata already noindex + canonical to 2026 page

### 2. Dynamic ROAS template uniqueness risk
- URL pattern: `/roas/*`
- Risk: template similarity across slugs
- Mitigation implemented:
  - slug-specific metadata and keyword sets
  - channel/objective interlink module
  - FAQ block + `FAQPage` schema
  - decision-support tables and next-step CTA modules

### 3. Comparison content overlap risk
- URLs:
  - `/comparisons/roas-vs-roi-vs-mer-vs-acos`
  - `/comparisons/mer-vs-roas`
  - `/comparisons/cac-vs-cpa-vs-roas`
- Status: acceptable
  - distinct search intent and decision context
  - cross-linking retained for topical graph strength

## Actions Completed
- Keep legacy benchmark route out of sitemap.
- Maintain 301 redirect from old benchmark slug to primary benchmark page.
- Continue consolidating future benchmark updates into one canonical yearly URL.

## Follow-Up (Next Sprint)
- Add periodic query-level cannibalization check using GSC `query x page` export.
- Merge or retarget any page with:
  - low unique impressions
  - near-duplicate query clusters
  - weak standalone intent.
