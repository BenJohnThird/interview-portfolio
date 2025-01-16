export interface WorkExperience {
  companyName: string;
  companyRole: string;
  technologyUsed: string[];
  startDate: string;
  endDate?: string;
  isCurrentCompany?: boolean;
  responsibilities: string[];
}
