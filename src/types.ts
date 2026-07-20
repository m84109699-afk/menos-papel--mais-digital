export interface WhyReduceItem {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface DigitalToolItem {
  id: string;
  name: string;
  description: string;
  mainFeature: string;
  category: 'storage' | 'document' | 'scanner';
  iconName: string;
  badge: string;
}

export interface StepItem {
  stepNumber: number;
  title: string;
  description: string;
  iconName: string;
}

export interface SustainableTip {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface BenefitItem {
  id: string;
  value: string;
  label: string;
  title: string;
  description: string;
  iconName: string;
}
