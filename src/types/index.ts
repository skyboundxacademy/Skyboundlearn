// User Types
export type UserRole = 'learner' | 'teacher' | 'parent' | 'admin';

export interface User {
  id: string;
  name: string;
  email: string;
  username: string;
  avatar?: string;
  role: UserRole;
  createdAt: Date;
  streak?: number;
  xp?: number;
  level?: number;
}

// Course Types
export type CourseLevel = 'beginner' | 'intermediate' | 'advanced';
export type CoursePrice = 'free' | 'paid';
export type CourseDuration = '<1 hour' | '1-4 weeks' | '1-3 months';

export interface Course {
  id: string;
  title: string;
  slug: string;
  description: string;
  shortDescription: string;
  thumbnail: string;
  instructor: Instructor;
  category: string;
  subcategory?: string;
  level: CourseLevel;
  price: CoursePrice;
  priceAmount?: number;
  duration: CourseDuration;
  language: string;
  rating: number;
  reviewCount: number;
  studentsEnrolled: number;
  lastUpdated: Date;
  whatYouWillLearn: string[];
  requirements: string[];
  targetAudience: string[];
  sections: CourseSection[];
  badges: CourseBadge[];
  isPro?: boolean;
  isNew?: boolean;
  isBestseller?: boolean;
  isTrending?: boolean;
}

export interface CourseSection {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Lesson {
  id: string;
  title: string;
  type: 'video' | 'article' | 'exercise';
  duration?: string;
  isPreview: boolean;
  isCompleted?: boolean;
  videoUrl?: string;
  content?: string;
}

export interface Instructor {
  id: string;
  name: string;
  avatar: string;
  bio: string;
  credentials: string[];
  coursesCount: number;
  studentsCount: number;
  rating: number;
  socialLinks?: {
    twitter?: string;
    linkedin?: string;
    website?: string;
  };
}

export type CourseBadge = 'free' | 'pro' | 'new' | 'bestseller' | 'trending' | 'beginner' | 'intermediate' | 'advanced';

// Enrollment & Progress Types
export interface Enrollment {
  id: string;
  userId: string;
  courseId: string;
  progress: number;
  currentLessonId?: string;
  completedLessons: string[];
  startedAt: Date;
  lastAccessedAt: Date;
  completedAt?: Date;
}

export interface CourseProgress {
  courseId: string;
  progress: number;
  completedLessons: number;
  totalLessons: number;
  currentSection: string;
  currentLesson: string;
}

// Assignment Types
export interface Assignment {
  id: string;
  title: string;
  description: string;
  courseId: string;
  classId?: string;
  dueDate: Date;
  points: number;
  type: 'video' | 'exercise' | 'quiz' | 'project';
  status: 'pending' | 'submitted' | 'graded';
  submittedAt?: Date;
  grade?: number;
  feedback?: string;
}

// Class Types (Teacher)
export interface Class {
  id: string;
  name: string;
  teacherId: string;
  subject: string;
  description?: string;
  students: Student[];
  assignments: Assignment[];
  createdAt: Date;
  isArchived: boolean;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  joinDate: Date;
  lastActive: Date;
  assignmentsCompleted: number;
  masteryProgress: number;
  classId?: string;
}

// Parent-Child Types
export interface Child {
  id: string;
  name: string;
  username: string;
  avatar?: string;
  dateOfBirth: Date;
  gradeLevel?: string;
  parentId: string;
  linkedAt: Date;
  lastActive?: Date;
  currentCourse?: string;
  overallProgress: number;
  dailyTimeLimit?: number;
  contentRestrictions?: string[];
}

export interface ChildLinkCode {
  code: string;
  childId: string;
  expiresAt: Date;
  createdAt: Date;
}

// Achievement Types
export interface Badge {
  id: string;
  name: string;
  description: string;
  icon: string;
  earnedAt?: Date;
  category: 'streak' | 'progress' | 'completion' | 'special';
}

export interface Certificate {
  id: string;
  courseId: string;
  userId: string;
  issuedAt: Date;
  certificateUrl?: string;
}

// AI Assistant Types
export interface AIContext {
  currentPage: string;
  currentCourse?: Course;
  currentLesson?: Lesson;
  userProgress?: CourseProgress;
}

export interface AIChatMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
  context?: AIContext;
}

// Notification Types
export interface Notification {
  id: string;
  userId: string;
  type: 'assignment' | 'achievement' | 'message' | 'reminder' | 'system';
  title: string;
  message: string;
  isRead: boolean;
  createdAt: Date;
  link?: string;
}

// Report Types
export interface StudentReport {
  studentId: string;
  studentName: string;
  classId: string;
  className: string;
  assignments: AssignmentReport[];
  masteryProgress: MasteryProgress[];
  videoCompletion: VideoCompletion[];
  exercisePerformance: ExercisePerformance[];
  overallProgress: number;
}

export interface AssignmentReport {
  assignmentId: string;
  title: string;
  dueDate: Date;
  submittedAt?: Date;
  status: 'pending' | 'submitted' | 'graded' | 'late';
  score?: number;
  maxScore: number;
}

export interface MasteryProgress {
  skillId: string;
  skillName: string;
  level: 'not_started' | 'familiar' | 'proficient' | 'mastered';
  progress: number;
}

export interface VideoCompletion {
  lessonId: string;
  lessonTitle: string;
  watchedDuration: number;
  totalDuration: number;
  isCompleted: boolean;
  completedAt?: Date;
}

export interface ExercisePerformance {
  exerciseId: string;
  attempts: number;
  bestScore: number;
  lastAttempt: Date;
  correctAnswers: number;
  totalQuestions: number;
}

// Filter Types
export interface CourseFilters {
  category?: string;
  level?: CourseLevel;
  price?: CoursePrice;
  duration?: CourseDuration;
  language?: string;
  rating?: number;
}
