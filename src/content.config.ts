import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    venue: z.string(),          // journal / conference
    year: z.number(),
    authors: z.string(),        // author list, "Schäfer, J." bolded client-side
    status: z.enum(['published', 'in review', 'preprint', 'working paper']).default('published'),
    links: z
      .array(z.object({ label: z.string(), href: z.string().url() }))
      .default([]),
    order: z.number().default(0),
  }),
});

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    role: z.string().optional(),
    period: z.string().optional(),      // e.g. "2024 — present"
    tags: z.array(z.string()).default([]),
    metric: z.object({ value: z.string(), label: z.string() }).optional(),
    href: z.string().url().optional(),
    // compsci → computational science (violet); energy → energy research (orange);
    // climate → sustainability/advocacy (green)
    track: z.enum(['compsci', 'energy', 'climate']).default('compsci'),
    featured: z.boolean().default(false), // show on the homepage (as a wide card)
    // Sort key: the project's date as "YYYY-MM" (use the end month for a range).
    // Projects are shown newest-first within each track; the most recent ones
    // surface in the homepage previews. Sorts lexicographically = chronologically.
    date: z.string().regex(/^\d{4}-\d{2}$/, 'Use "YYYY-MM"'),
    order: z.number().default(0), // tiebreaker within the same month
  }),
});

const experience = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/experience' }),
  schema: z.object({
    role: z.string(),                       // job title
    organization: z.string(),               // employer / institution
    location: z.string().optional(),
    period: z.string(),                     // display, e.g. "2026 — now"
    year: z.number(),                       // sort key (end year; use a future year for ongoing)
    kind: z.enum(['research', 'engineering', 'internship', 'nonprofit', 'freelance'])
      .default('research'),
    summary: z.string().optional(),         // one-line description
    points: z.array(z.string()).default([]),// optional bullet highlights
    href: z.string().url().optional(),
    order: z.number().default(0),           // tiebreaker within the same year
  }),
});

const education = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/education' }),
  schema: z.object({
    credential: z.string(),                 // "MSc Computer Science", "Certificate: …"
    institution: z.string(),
    field: z.string().optional(),           // subject / specialisation
    period: z.string(),                     // "2021 — 2023" or "2020"
    year: z.number(),                       // sort key (end/award year)
    location: z.string().optional(),
    kind: z.enum(['degree', 'certificate', 'course']).default('degree'),
    note: z.string().optional(),            // grade, thesis, honours, one line
    // external URL or a site-relative path (e.g. an uploaded certificate PDF in /public)
    href: z
      .string()
      .refine((v) => v.startsWith('/') || /^https?:\/\//.test(v), 'Use a URL or a "/..." path')
      .optional(),
    order: z.number().default(0),
  }),
});

export const collections = { research, projects, experience, education };
