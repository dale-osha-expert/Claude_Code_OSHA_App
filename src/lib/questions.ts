import courseContent from "../data/course-content.json";
import type { Question } from "./types";

export const BASE_QUESTIONS: Question[] = courseContent.questions as Question[];
