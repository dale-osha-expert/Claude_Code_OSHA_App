"use client";

import Link from "next/link";
import { Course } from "@/lib/types";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-industrial-100 overflow-hidden flex flex-col hover:shadow-lg transition-shadow">
      {/* Card header */}
      <div className="bg-industrial-900 px-6 py-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-xs font-semibold bg-safety-orange text-white px-2 py-0.5 rounded-full uppercase tracking-wide">
            {course.topic}
          </span>
          <span className="text-xs text-industrial-400">
            {course.durationMinutes} min
          </span>
        </div>
        <h2 className="text-white font-bold text-base leading-snug">
          {course.title}
        </h2>
        <p className="text-industrial-400 text-xs mt-1">{course.productLine}</p>
      </div>

      {/* Card body */}
      <div className="p-6 flex-1 flex flex-col">
        <p className="text-industrial-600 text-sm leading-relaxed flex-1">
          {course.shortDescription}
        </p>

        <div className="mt-4 pt-4 border-t border-industrial-100 flex items-center justify-between">
          <div className="text-xs text-industrial-400">
            <span className="font-semibold text-industrial-600">{course.questions.length}</span> questions
            &nbsp;·&nbsp;
            <span className="font-semibold text-industrial-600">{course.passingScore}%</span> to pass
          </div>
          <Link
            href={`/course/${course.slug}`}
            className="bg-safety-orange hover:bg-safety-orange/90 text-white font-bold text-sm py-2 px-5 rounded-xl transition-colors"
          >
            Start Course
          </Link>
        </div>
      </div>
    </div>
  );
}
