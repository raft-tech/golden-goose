## Purpose
This guide is meant to serve as an ideal way Raft would test each development issue completed in a Sprint. If a client/project has their own way of verifying code changes, then we should use their approach or modify this approach to meet their needs. 

## Goal
The intent of the checklist is to do enough due diligence on each issue before check-in that during PR reviews there is no feedback (or very minimal) related to any individual issue. This checklist is a precursor to verifications performed for each Pull Request. 

## Testing Checklist
1. \>= 90% automated code coverage
2. 0 linting errors and warnings
3. 0 accessibility errors as verified by the [Accessibility checklist](../guides/accessibility.md) 
4. 0 security vulnerabilities (medium and above) as verified by Snyk
5. Deploy to dev environment
6. All Acceptance Criteria have been verified as met
