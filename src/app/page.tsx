import { COURSES } from "@/lib/courses";
import CourseCard from "@/components/CourseCard";

export default function CatalogPage() {
  return (
    <main className="min-h-screen bg-industrial-50 flex flex-col">
      {/* Header */}
      <header className="bg-industrial-900 text-white px-6 py-5 shadow-md">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center gap-3 mb-1">
            <span className="text-2xl">&#9888;</span>
            <h1 className="font-bold text-xl">Safety Certifications</h1>
          </div>
          <p className="text-industrial-400 text-sm ml-10">
            Select a course below to begin your certification exam
          </p>
        </div>
      </header>

      {/* Course grid */}
      <div className="flex-1 px-4 py-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-industrial-800 font-semibold text-lg mb-6">
            Available Courses ({COURSES.length})
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {COURSES.map((course) => (
              <CourseCard key={course.slug} course={course} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-industrial-900 text-industrial-500 text-center text-xs py-3">
        MARCOM Safety Certifications — Industrial Safety Training
      </footer>
    </main>
  );
}
