# Whispr

One repository containing all parts of this project.

| Directory | Original repository |
| --- | --- |
| [frontend/](./frontend/) | `newwohh/whispr-chat-frontend` |
| [backend/](./backend/) | `newwohh/whispr-chat-backend` |

## Development

Each component retains its original files and dependencies. Run its existing setup and development commands from that component directory. See its README and package files. Services remain independently configured. Deployment root directories must point to the relevant component.

## Preserved history

Imported on 2026-11-19. Components were imported from the original default branches and then sanitized for public release. The consolidation commit retains both original default-branch heads as parents, preserving authors and ancestry before the security cleanup. Historical commits use their original paths. All original branches and tags are retained under `imports/<original-repository>/...`; pull request refs are retained there under `pull/`.

Repository settings, deployment connections, and secrets are not copied automatically.

## Public-source security cleanup

Credentials, saved account data, local environment files, and database files were removed from all published branches and their history. Commit IDs changed during this cleanup; re-clone this repository rather than pushing an old clone. Original commit IDs in historical notes are for provenance only.

Use the checked-in example configuration files to create ignored local settings. Supply fresh credentials locally. Rotate previously committed credentials at their providers. Historical API integrations with redacted placeholders need local configuration or a server-side credential proxy; never put private API keys into browser bundles. Database schemas and migrations remain, but no database records are included.
