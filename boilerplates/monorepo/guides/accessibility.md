# Accessibility Approach

## Purpose

Most of the applications Raft develops must be compliant with 508 Accessibility standards. For all projects, we shall make applications that are inclusive for all users of the system. This accessibility approach is meant as a best practices that should be followed. 

1. Get familiar with Accessibility Guides from [18F](https://accessibility.18f.gov/), [DHS Trusted Tester](https://www.dhs.gov/trusted-tester), and [WCAG](https://www.w3.org/WAI/WCAG21/Understanding/) 
2. Ensure [Pa11y](https://github.com/pa11y/pa11y-ci) is configured and running correctly in CircleCI for all accessible pages ([example configuration](../.pa11yci.json)). Also view the [various options](https://engineering.18f.gov/accessibility-scanning/) to integrate Pa11y into the CI/CD
3. Include [tota11y](https://khan.github.io/tota11y/) into the Development instance of the project.
4. For UX components, review design accessibility using [Stark](https://www.figma.com/community/plugin/732603254453395948/Stark) (Figma contrast ratio plugin)
5. Test using screen reader [VoiceOver](https://webaim.org/articles/voiceover/) for Mac as appropriate
6. Install and run the [WAVE](https://wave.webaim.org/) Web Accessibility Evaluation tool and address issues as appropriate
7. Review [Accessibility Insight](https://accessibilityinsights.io/en/) tools and download/install components as appropriate
8. Run the Accessibility Insight for Web "[Fast Pass](https://accessibilityinsights.io/docs/en/web/getstarted/fastpass)" tool prior to each front end check-in and ensure there are no issues
9. Run the Accessibility Insight for Web "**Manual test for tab stops**" prior to each front end check-in and ensure there are no issues
10. For each deployment, the team must run the automation-assisted [Assessment in Accessibility Insights for Web](https://accessibilityinsights.io/docs/en/web/getstarted/assessment) before signing-off on front end feature work

# Raft’s Accessibility "Do" and "Don’t"  

## Do  

- Use simple colors, good contrast, and readable font size  
- Make sure the contrast between the text and background is greater than or equal to 4.5:1 for small text and 3:1 for large text.  
- Write in plain English  
- Use simple sentences and bullets  
- Make buttons descriptive - for example, Attach files  
- Build simple and consistent layouts  
- Create a clear hierarchy of importance by placing items on the screen according to their relative level of importance. For example, place important actions at the top or bottom of the screen (reachable with shortcuts).  
- Follow a linear, logical layout -and ensure text flows and is visible when text is magnified to 200%   
- Align text to the left   
- Write descriptive links and headings - for example, Contact us  
- Avoid underline words, use italics or write capitals unless necessary  

 

## Don't  

- Use bright contrasting colors, low color contrasts, and small font size  
- Only use color to convey meaning  
- Give form fields space  
- Design with mobile and touch screen in mind  
- Use figures of speech and idioms  
- Create a wall of text  
- Make buttons vague and unpredictable - for example, Click here  
- Build complex and cluttered layouts  
- Only show information in an image or video  
- Spread content all over a page  
- Rely on text size and placement for structure  
- Force mouse or screen use  
- Write uninformative links and heading - for example, Click here  
- Bury information in downloads  
- Spread content all over a page -and force user to scroll horizontally when text is magnified to 200%  
- Separate actions from their context  
- Demand precision  
- Bunch interactions together  
- Make dynamic content that requires a lot of mouse movement  
- Have short time out windows  
- Tire users with lots of typing and scrolling  
- Use subtitles or provide transcripts for video  
- Use a linear, logical layout  
- Break up content with sub-headings, images and videos  
- Let users ask for their preferred communication support when booking appointments  
- Force users to remember things from previous pages - give reminders and prompts  
- Rely on accurate spelling - use autocorrect or provide suggestions  
- Put too much information in one place  

## Other Resources  
- [Designing for inclusion](https://inclusivedesignprinciples.org/)  


