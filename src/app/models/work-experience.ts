export interface WorkExperience {
  id?: number;
  companyName: string;
  name: string;
  techStack: string[];
  startDate: string;
  endDate?: string;
  isCurrentCompany?: boolean;
  isPrivate?: boolean;
  responsibilities: string[];
  techStackString?: string;
  responsibilitiesString?: string;
}
