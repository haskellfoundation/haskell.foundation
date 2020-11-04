---
about_title: en (English) Haskell Foundation Technical Agenda
about_content:
  about_page_title: Haskell Foundation Technical Agenda
  about_page_content: |

    The Haskell Foundation (HF) grants a new opportunity to invest in Haskell and increase its productivity. This technical agenda includes a list of projects that we expect the HF to cultivate and support, depending on resources. This list is meant to be suggestive, not definitive: as the HF continues to mature, we may find that other technical projects become more important than what is listed below. In particular, we expect the HF to support a function where we can collect feedback (encompassing instruments like surveys, interviews, and user studies), and then we hope to use that feedback to inform our technical priorities.

    The key goal of this agenda is corporate adoption. That is, the HF wants to facilitate the uptake of Haskell by businesses deciding among competing technologies. We identify two different ways corporate adoption can happen in practice:
    * Adoption can happen top-down: a product manager or other decision maker can decide they want to build a new feature with (or migrate an existing one to) Haskell.
    * Adoption can also happen bottom-up: empowered engineers might prefer Haskell and want to use it for a project, convincing their management to support the decision.
    Supporting each of these modes sometimes requires different approaches, but both require a reasonably quick, positive assessment of Haskell and its ecosystem by a decision-maker who may have an unpredictable level of technical expertise.


    The goal of corporate adoption in this agenda does not suggest that the HF is solely focused on this goal -- only this technical agenda is. We have made this design choice based on the fact that other aspects of Haskell (for example, suitability for research; new, state-of-the-art language design; community inclusiveness) are best handled elsewhere -- in some cases, because individuals or groups will contribute without needing direct support from the HF.

    Supporting corporate adoption can itself be broken down into a few sub-goals
    * Accessibility: Haskell must be accessible, facilitating easy onboarding, a quick assessment, and a learning arc useful to anyone who wants to join our community. This means that software and documentation should be easy to find, libraries and tools should be easy to choose, and core concepts and advantages should be explained in a way that people with diverse sets of experience can understand.
    * Stability: Businesses make long-lasting decisions. Before adopting Haskell, they must feel confident that their software will be maintainable on a long planning horizon. Stability means that upgrades to the language should be a smooth experience for users, not requiring e.g. separate updates to a long list of tools along with many code changes.
    * Cohesion: The Haskell ecosystem should present a unified front. This increases our professionalism and will inspire confidence in potential adoptees. Supporting cohesion suggests a coordinated interface among tools, a single point of download, and a centralized place to support community interaction and package hosting.

    In pursuing these goals, the HF seeks to identify, support, and direct energy toward existing (or new) community efforts. In other words, we aim to provide technical coordination to support others. The HF will act as a force multiplier where possible, supporting existing efforts, providing knowledge, triage, CI resources, as well as labor where necessary. Only when the community-sourced model fails will we try to make an independent technical push (to develop new software, for example). Furthermore, it is essential to the HF that it continues to credit contributors correctly; the HF will not claim credit for others’ work.

    With these goals in mind, we set out the following concrete agenda

    * Smooth out the upgrade experience. GHC continues to experience a ferment of activity with every major release. This is unequivocally good. However, every release cycle imposes a burden on users; this burden is time consuming and hinders adoption. We identify three different ways to help in this regard
        * The HF will identify a set of key libraries and tools that are considered to be part of a minimum viable wide release of GHC. We will work with the maintainers of these tools to ensure that they are updated quickly with a new release of GHC -- say, within 3 weeks. The HF will then announce when all the libraries in this set are ready for use; users can then upgrade to the new GHC with confidence that their needed tooling is ready for this upgrade.
        * For users unwilling or unable to upgrade, the HF will provide support to enable minimal long-term support for older GHCs. In particular, we wish to ensure that older GHCs still function on new releases of important platforms and receive critical security fixes as necessary.
    * Provide an easy on-ramp. Non-Haskellers looking for Haskell are often met with confusion, with several different Haskell websites and installation procedures. Links are out-of-date and too frequently point to unmaintained, community-sourced wiki pages. This first impression does not convey the professionalism we need to enable corporate adoption. With the haskell.org committee, the HF will coordinate the creation of a website, to be hosted at haskell.org, that supports a smooth experience for newcomers, including access to core tools but also quality-of-life features, such as an IDE. The design of this website will be based on website-design best practices and will prioritize well-grounded UX principles over internal Haskell community preference.

    This point, in particular, has engendered significant community discord in the past. The current situation -- an uneasy truce born of the lack of a central authority to make difficult decisions -- is untenable and a disservice to our (potential) users. One of the roles of the HF is to be able to make difficult decisions, even if those decisions disappoint segments of our community. The HF will not shy away from this need.

    * Provide a best-in-class standard library. A key challenge in working in Haskell is the fact that it is hard for users to figure out which library to use. Furthermore, some defaults in Haskell (e.g. String, linked lists) are inappropriate for most use cases. The HF will organize and support a process by which we can assemble a best-in-class standard library for wide distribution.
    * Windows support. Currently Windows commands a plurality of potential users, yet GHC’s support suffers from instability and poor user experience. The HF will address this by fostering the coordination of fixes for the known Windows-specific issues and the promotion of a proper installer.
    * Streamline the profiling experience. Building high quality haskell applications requires the ability to have a good understanding of runtime characteristics. While we have a plethora of tools ranging from the slightly antiquated hp2ps, to newer eventlog-based tools like ThreadScope, to live monitoring in the form of EKG, we do not have a unified profiling framework nor the supporting documentation for such. The HF will foster unifying existing tooling and assist with existing or new work on documentation and best practices around profiling Haskell applications, while having an open ear for the needs of industrial applications of Haskell.

    Among these initiatives, we identify the following as our initial projects, to be developed over different time horizons. These would be the projects we would look at on day one

    * Short-term - Windows support
    * Medium-term - Streamlining the Profiling experience. GHC IDE support was our initial proposal, but the project is going well without our help.
    * Long-term - Upgrade experience

    Beyond these main agenda items, the HF recognizes several other efforts in the Haskell community; these efforts are generally going well, and the HF’s role would be to highlight them, offer support where that is welcome, and stay out of their way. As examples

    * The ongoing development of better IDE support
    * Liquid Haskell
    * The Haskell Language Server

    It is our hope that these technical goals form only the beginning, with further projects determined through corporate, donor, and community feedback. Yet we believe these ideas are representative of the kinds of projects the HF can reasonably accomplish and set the stage well for future additions.
---
