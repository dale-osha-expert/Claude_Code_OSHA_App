# Prompt: Export Course Content to JSON

Use the following prompt in the project that contains the quiz you want to export:

---

I need you to extract all course content from this project and output it as a single JSON file.
Read through all the source files and find every question, answer option, correct answer, OSHA or
regulatory clause reference, remedial lesson, and rephrased/alternate question.

Output the result as a **single valid JSON file** matching this exact schema:

```json
{
  "meta": {
    "courseId": "your-course-id",
    "title": "Full course title",
    "oshaStandard": "relevant standard (e.g. 1910.178)",
    "passingGrade": 0.70,
    "totalQuestions": 43
  },
  "questions": [
    {
      "id": 1,
      "topic": "topic-slug",
      "difficulty": "easy",
      "questionText": "The full question text?",
      "options": [
        { "id": "a", "text": "First option" },
        { "id": "b", "text": "Second option" },
        { "id": "c", "text": "Third option" },
        { "id": "d", "text": "Fourth option" }
      ],
      "correctOptionId": "b",
      "oshaClause": "1910.178(l)(1)"
    }
  ],
  "lessons": {
    "topic-slug": "Full lesson text for this topic. Use \\n for line breaks and \\n\\n for paragraph breaks. Escape any double quotes as \\\"."
  },
  "rephrasedQuestions": {
    "1": {
      "id": 101,
      "topic": "topic-slug",
      "difficulty": "easy",
      "questionText": "Rephrased version of question 1?",
      "options": [
        { "id": "a", "text": "First option" },
        { "id": "b", "text": "Second option" }
      ],
      "correctOptionId": "b",
      "oshaClause": "1910.178(l)(1)"
    }
  }
}
```

### Rules to follow:

1. **`questions`** — flat array, one entry per question, in the original order.
   - `id`: integer starting at 1
   - `topic`: lowercase kebab-case slug (e.g. `"stability-triangle"`)
   - `difficulty`: one of `"easy"`, `"medium"`, `"hard"`
   - `options`: array of `{ "id", "text" }` where `id` is `"a"`, `"b"`, `"c"`, etc.
   - `correctOptionId`: the `id` of the correct option
   - `oshaClause`: the regulatory reference string (or `""` if none)

2. **`lessons`** — one key per topic slug, value is the full lesson/remediation text as a single
   JSON string. Replace newlines with `\n`, paragraph breaks with `\n\n`, and escape `"` as `\"`.

3. **`rephrasedQuestions`** — keys are the **original question id as a string** (e.g. `"1"`, `"2"`).
   - Rephrased question `id` = original `id` + 100 (so question 1 → id 101, question 2 → id 102, etc.)
   - Use the same topic, difficulty, and oshaClause as the original unless the rephrased version
     intentionally tests a different angle (e.g. a true/false flipped to a direct question).
   - `correctOptionId` must reflect the correct answer for the rephrased wording — do not blindly
     copy the original's correctOptionId if the phrasing changed the polarity.

4. **JSON validity** — the output must be parseable by `python3 -m json.tool`. No trailing commas,
   no comments, no backticks, no markdown fences around the final output.

5. **Completeness** — include every question in the source. Do not summarise or skip any.
   If the source has no rephrased questions for a given id, create a reasonable alternative
   that tests the same concept with different wording.

6. **`meta.courseId`** — use a short kebab-case identifier that describes the course
   (e.g. `"forklift-osha-1910"`, `"fire-safety-101"`).

Write the JSON to a file called `course-content.json` inside a `src/data/` directory.
After writing, validate it with: `python3 -m json.tool src/data/course-content.json > /dev/null && echo "Valid JSON"`
```
