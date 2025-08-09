Stylized PBR Barrel — SCORM 1.2 Package
Files included:
 - imsmanifest.xml  (SCORM 1.2 manifest)
 - index.html       (Lesson content, high-level questions, rubric, quiz)
 - styles.css       (styling)
 - scormwrapper.js  (minimal SCORM 1.2 JS wrapper)

How to use:
 1. Import into any SCORM 1.2-compliant LMS (e.g., Moodle, Blackboard, TalentLMS).
 2. Upload the entire ZIP (package). On import the LMS will register the SCO.
 3. Launch the SCO; student completes quiz. The SCORM wrapper will attempt to set score and lesson_status.

E-learning programmer suite notes:
 - To convert to SCORM 2004 or xAPI (TinCan), replace the wrapper and manifest accordingly and include xAPI endpoint code.
 - To localize: split text into JSON files (lang/en.json) and load via JS to support i18n.
 - For accessibility: ensure focus management, semantic elements, and add ARIA labels on form controls.
 - To support retries and bookmarking: implement cmi.core.lesson_location, cmi.suspend_data and restore UI state on init.
 - Packaging tips: ensure index.html is referenced in imsmanifest resource href and resource file elements.

Next steps I can perform on request:
 - Create SCORM 2004 or xAPI (Tin Can) versions.
 - Generate a downloadable PDF rubric and printable lesson sheet.
 - Add SCORM debug logging and a more complete API wrapper (APIWrapper.js).
