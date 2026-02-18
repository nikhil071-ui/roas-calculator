# GA4 Conversion Mapping (ROAS Tools)

## Purpose
Standardize event tracking for calculator engagement, template downloads, and high-intent CTA interactions.

## Event Taxonomy

### `calculator_start`
- Trigger: First user interaction with calculator inputs.
- Params:
  - `page_type` (`home`, `roas_slug`, `calculator_page`)
  - `calculator_type` (`roas`, `cac`, `ltv`, `mer`, `payback`)
  - `slug` (dynamic route slug where applicable)

### `calculator_submit`
- Trigger: User clicks primary calculate action.
- Params:
  - `calculator_type`
  - `has_optional_costs` (`true`/`false`)
  - `result_state` (`profitable`, `break_even`, `unprofitable`, `na`)

### `template_download`
- Trigger: User downloads a resource template.
- Params:
  - `template_name`
  - `file_type` (`csv`, `txt`)
  - `source_page`

### `cta_click_ppc_toolkit`
- Trigger: Click from content modules to `/ppc-toolkit`.
- Params:
  - `source_page`
  - `cta_module`
  - `position` (`above_fold`, `mid_content`, `footer`)

## Conversion Flags in GA4
- Mark as conversions:
  - `calculator_submit`
  - `template_download`
- Keep as micro-conversions:
  - `calculator_start`
  - `cta_click_ppc_toolkit`

## QA Checklist
- Verify each event in GA4 DebugView.
- Validate no duplicate events on single click.
- Confirm `slug` is present on `/roas/*` pages.
- Confirm no PII in params.
