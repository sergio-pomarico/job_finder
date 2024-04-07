interface Job {
  job_id: string;
  employer_name: string;
  employer_logo: string;
  employer_company_type: string;
  employer_website: string;
  job_country: string;
  job_title: string;
  job_google_link: string;
  job_employment_type: string;
  job_description: string;
  job_highlights: JobHighlights;
}

export interface JobHighlights {
  Qualifications: string[];
  Responsibilities: string[];
  Benefits: string[];
}

export default Job;
