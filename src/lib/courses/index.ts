import { Course } from "../types";
import { forkliftCourse } from "./forklift";
import { electrocutionHazardsPart1Course } from "./con_368_int_en";

export const COURSES: Course[] = [
  forkliftCourse,
  electrocutionHazardsPart1Course,
];

export function getCourseBySlug(slug: string): Course | undefined {
  return COURSES.find((c) => c.slug === slug);
}
