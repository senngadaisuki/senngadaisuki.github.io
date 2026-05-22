'use client';

import { motion } from 'framer-motion';

export interface EducationItem {
  period: string;
  school: string;
  degree: string;
  details?: string[];
}

interface EducationProps {
  title?: string;
  items: EducationItem[];
}

export default function Education({ title = 'Education', items }: EducationProps) {
  if (items.length === 0) {
    return null;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.25 }}
    >
      <h2 className="text-2xl font-serif font-bold text-primary mb-4">{title}</h2>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={`${item.period}-${item.school}`}
            className="grid gap-1 rounded-md border-l-2 border-accent/30 bg-neutral-50/70 px-3 py-2 text-sm dark:bg-neutral-800/45 sm:grid-cols-[11rem_1fr] sm:gap-4"
          >
            <div className="whitespace-nowrap font-medium tabular-nums text-accent">{item.period}</div>
            <div>
              <div>
                <span className="font-semibold text-primary">{item.school}</span>
                <span className="text-neutral-700 dark:text-neutral-500">, {item.degree}</span>
              </div>
              {item.details && item.details.length > 0 && (
                <div className="mt-1 space-y-0.5 text-neutral-600 dark:text-neutral-500">
                  {item.details.map((detail) => (
                    <div key={detail}>{detail}</div>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </motion.section>
  );
}
