
export interface Step {
  id: number;
  title: string;
  description: string;
  tags?: string[];
}

export interface Advantage {
  id: number;
  title: string;
  description: string;
  badge?: string;
  highlightText?: string;
}

export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export interface StatData {
  name: string;
  value: number;
  color: string;
}
