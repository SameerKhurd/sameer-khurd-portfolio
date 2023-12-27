export interface Experience {
  company: string;
  companyWebsite: string;
  location: string;
  roles: {
    designation: string;
    startMonth: string;
    endMonth: string;
    duration: string;
    details: string[];
  }[];
}
